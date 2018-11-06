class Post < ApplicationRecord
  belongs_to :user
  # For every instance of Post, I can call .user (it will use the user_id to find the appropriate User)
end
