class ShulsController < ApplicationController
  def index
    shuls = Shul.all

    render json: shuls, status: :ok
  end

  def create
    shul = Shul.create(shul_params)
    if shul.valid?
      render json: shul, status: :created
    else
      render json: { errors: shul.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def shul_params
    params.permit(:name, :movement)
  end
end
