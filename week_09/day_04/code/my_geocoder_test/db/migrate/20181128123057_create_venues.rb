class CreateVenues < ActiveRecord::Migration[5.2]
  def change
    create_table :venues do |t|
      t.text :name
      t.text :address
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
