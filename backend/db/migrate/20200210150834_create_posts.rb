class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :video_url
      t.string :artist
      t.text :description

      t.timestamps
    end
  end
end
