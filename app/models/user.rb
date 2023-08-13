class User < ApplicationRecord
  has_secure_password

  has_many :reviews
  has_many :shuls, -> { distinct }, through: :reviews

  validates :username, uniqueness: true
  validates :username, length: { in: 4..20 }
end
