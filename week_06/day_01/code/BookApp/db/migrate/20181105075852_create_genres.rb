# 1. rails g model Genre name:string
# 2. Remove t.timestamps in the migration file
# 3. rails db:migrate
# 4. annotate

class CreateGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :genres do |t|
      t.string :name
    end
  end
end
