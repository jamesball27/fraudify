class AddIndexToSearchables < ActiveRecord::Migration
  def change
    add_index :songs, :title
    add_index :albums, :title
    add_index :playlists, :name
    add_index :artists, :name
  end
end
