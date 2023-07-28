class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :user, :shul
  belongs_to :users
  belongs_to :shuls
end
