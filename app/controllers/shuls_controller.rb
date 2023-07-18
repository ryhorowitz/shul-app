class ShulsController < ApplicationController
  def index
    shuls = Shul.all

    render json: shuls, status: :ok
  end
end
