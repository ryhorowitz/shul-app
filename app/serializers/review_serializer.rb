class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :user, :shul
  belongs_to :user
  belongs_to :shul
end
