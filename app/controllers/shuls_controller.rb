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

  def destroy
    shul = Shul.find_by(id: params[:id])
    if shul
      byebug
      shul.destroy
      head :no_content
    else
      render json: { error: 'Shul not found' }, status: :not_found
    end
  end

  private

  def shul_params
    params.permit(:name, :movement)
  end
end
