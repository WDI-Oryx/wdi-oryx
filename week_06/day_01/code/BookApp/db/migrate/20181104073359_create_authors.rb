class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
      t.string :name
      t.date :dob
      t.string :location
      t.string :image
      t.string :description

      t.timestamps
    end
  end
end
