class ShulsController < ApplicationController
  def show
    shuls = Shul.all

    render json: shuls, status: :ok
  end
end
