class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body
  belongs_to :users
  belongs_to :shuls
end
