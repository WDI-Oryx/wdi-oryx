# == Schema Information
#
# Table name: books
#
#  id         :integer          not null, primary key
#  title      :string
#  blurb      :string
#  image      :string
#  author_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Book < ApplicationRecord
  belongs_to :author
  # For every instance of Book, if you call .author - go and find the associated Author
  # BOOK MUST HAVE author_id

  has_and_belongs_to_many :genres
  # This relies on:
  #  A table called books_genres
  #  That table has book_id and genre_id
  # It allows us to call .genres on any book

  # When you call .genres on a particular book, go through the join table books_genres and find all related genres
end
