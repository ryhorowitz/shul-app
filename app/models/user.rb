class User < ApplicationRecord
  has_many :reviews
  has_many :shuls, through: :reviews
  has_secure_password

  validates :username, uniqueness: true
  validates :username, length: { in: 4..20 }
end
