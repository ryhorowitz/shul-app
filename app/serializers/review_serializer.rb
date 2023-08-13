class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body
  # belongs_to :user
  # belongs_to :shul
end
