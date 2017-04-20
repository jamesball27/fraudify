class AddPlaylistImages < ActiveRecord::Migration
  def change
    add_column :playlists, :image_url, :string, default: "music.png"
  end
end
