class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :unique_shuls
  has_many :reviews
  # has_many :shuls

  # custom method that does not repeat shuls.
  def pretend_custom
    object.shuls.uniq
  end
end
