class CreateFavourites < ActiveRecord::Migration[6.0]
  def change
    create_table :favourites do |t|
      t.string :created_by
      t.string :favourites

      t.timestamps
    end
  end
end
