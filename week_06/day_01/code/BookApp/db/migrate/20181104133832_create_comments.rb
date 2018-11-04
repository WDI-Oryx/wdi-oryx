class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :name, default: "Anonymous User"
      t.string :body
      t.integer :book_id

      t.timestamps
    end
  end
end
