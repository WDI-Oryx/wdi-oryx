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
  has_many :comments, through: :books
  # This defines a method called books on every instance of Author
  # When you call this method, it will get all associated books (based on author_id)
end
