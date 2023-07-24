class UsersController < ApplicationController
  skip_before_action :authorized, only: :create
  def create
    user = User.create(user_params)
    if user.valid?
      # log user in after successful creation
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    current_user = User.find(session[:user_id])
    render json: current_user
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
end
