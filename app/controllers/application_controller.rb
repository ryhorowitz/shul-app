class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized

  def authorized
    return render json: { error: 'Not authorized' }, status: :unauthorized unless session.include? :user_id
  end

  # make a current_user method here
  # user = User.find(session[:user_id])
end
