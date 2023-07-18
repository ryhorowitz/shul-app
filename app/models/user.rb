class User < ApplicationRecord
  has_secure_password

  validates :username, uniqueness: true
  validates :username, length: { in: 4..20}

end
