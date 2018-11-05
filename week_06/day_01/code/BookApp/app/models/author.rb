# == Schema Information
#
# Table name: authors
#
#  id          :integer          not null, primary key
#  name        :string
#  dob         :date
#  location    :string
#  image       :string
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Author < ApplicationRecord
  has_many :books
  # This defines a method called books on every instance of Author
  # When you call this method, it will get all associated books (based on author_id)

  has_many :genres, through: :books
  # ActiveRecord knows that we can call .books
  #   It also knows that every book in that collection, has genres
  #   For every book, call .genres and then give back to me (as an array)
end
