class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false
      t.string :image_url, null: false

      t.timestamps null: false
    end

    add_index :albums, :artist_id
  end
end
