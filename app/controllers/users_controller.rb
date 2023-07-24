class UsersController < ApplicationController
  skip_before_action :authorized, only: :create
  def create
    user = User.create(user_params)
    if user.valid?
      byebug
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    current_user = User.find(session[:user_id])
    render json: current_user
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end
end
