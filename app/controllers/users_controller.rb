class UsersController < ApplicationController
  skip_before_action :authorized, only: :create
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def create
    user = User.create!(user_params)
    # log user in after successful creation
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    current_user = User.find(session[:user_id])
    render json: current_user
  end

  def update
    user = User.find_by(id: params[:id])
    # byebug
    user.update!(username: params[:_json])
    render json: user, status: :ok
  end

  def destroy
    user = User.find_by(id: params[:id])
    if user
      user.destroy
      head :no_content
    else
      render json: { error: 'User not found' }, status: :not_found
    end
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
