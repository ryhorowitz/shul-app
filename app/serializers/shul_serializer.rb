class ShulSerializer < ActiveModel::Serializer
  attributes :id, :name, :movement
  has_many :reviews
  has_many :users
  # write a custom method to send back my reviews
  # def my_reviews
  # binding.pry
  # object
  # end
end
