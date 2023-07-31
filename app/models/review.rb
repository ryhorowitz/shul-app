class Review < ApplicationRecord
  belongs_to :user
  belongs_to :shul

  validates :title, presence: true
  validates :body, presence: true
end
