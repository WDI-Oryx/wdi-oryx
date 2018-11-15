class User < ApplicationRecord
  mount_uploader :image, ImageUploader

  has_many :posts
  # For every User, this means we can call .posts

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
