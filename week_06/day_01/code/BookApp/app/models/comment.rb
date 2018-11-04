# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  name       :string           default("Anonymous User")
#  body       :string
#  book_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  belongs_to :book
end
