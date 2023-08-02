class ReviewsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def create
    user = find_user
    review = user.reviews.create!(review_params)
    render json: review, status: :created
  end

  def update
    review = find_review
    review.update!(
      title: params[:title],
      body: params[:body]
    )

    render json: review, status: :ok
  end

  def destroy
    review = find_review
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

  def find_review
    user = find_user
    user.reviews.find(params[:id])
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
