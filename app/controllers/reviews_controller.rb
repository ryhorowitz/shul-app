class ReviewsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def create
    user = find_user
    review = user.reviews.create!(review_params)
    render json: review, status: :created
  end

  def update
    # i should be searching through the users reviews like in the create method
    user = find_user
    review = user.reviews.find(params[:id])
    # byebug
    review.update!(
      title: params[:title],
      body: params[:body]
    )

    render json: review, status: :ok
  end

  def destroy
    # i should be searching through the users reviews like in the create method
    # byebug
    user = find_user
    review = user.reviews.find(params[:id])
    review.destroy
    head :no_content
  end

  private

  def review_params
    params.permit(:id, :body, :title, :user_id, :shul_id)
  end

  def find_user
    User.find(params[:user_id])
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors }, status: :unprocessable_entity
  end
end
