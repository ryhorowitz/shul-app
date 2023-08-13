class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :reviews
  has_many :shuls, through: :reviews

  # my_shuls_with_reviews
  #   shuls = object.shuls
  #   shuls.map do |shul|
  #     {
  #       id: shul[:id],
  #       name: shul[:name],
  #       movement: shul[:movement]
  # reviews
  #     }
  #   end
  #

  # custom method that does not repeat shuls.

  # end
end
