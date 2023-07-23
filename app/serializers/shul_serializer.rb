class ShulSerializer < ActiveModel::Serializer
  attributes :id, :name, :movement
  has_many :reviews
end
