class AddAlbumOrdToSongs < ActiveRecord::Migration
  def change
    add_column :songs, :album_ord, :integer, null: false
  end
end
