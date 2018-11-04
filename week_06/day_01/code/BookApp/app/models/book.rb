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
  has_many :comments
end
