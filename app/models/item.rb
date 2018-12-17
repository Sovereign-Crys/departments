class Item < ApplicationRecord
  # validations
  validates :name, presence: true
  # associations
  belongs_to :department
  has_many :reviews, dependent: :destroy
end
