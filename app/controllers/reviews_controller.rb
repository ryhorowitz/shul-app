class ReviewsController < ApplicationController
  def create
    user = User.find(params[:user_id])
    review = user.reviews.create!(review_params)
    # also need to add to the shuls model
    # byebug
    render json: review, status: :created
  end

  private

  def review_params
    params.permit(:body, :title, :user_id, :shul_id)
  end
end
