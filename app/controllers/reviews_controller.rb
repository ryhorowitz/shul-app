class ReviewsController < ApplicationController
  def create
    user = User.find(params[:user_id])
    review = user.reviews.create!(review_params)
    # also need to add to the shuls model
    # byebug
    render json: review, status: :created
  end

  def update
    review = Review.find(params[:id])
    # byebug
    review.update(
      title: params[:title],
      body: params[:body]
    )

    render json: review, status: :ok
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    head :no_content
  end

  private

  def review_params
    params.permit(:id, :body, :title, :user_id, :shul_id)
  end
end
