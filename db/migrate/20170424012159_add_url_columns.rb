class AddUrlColumns < ActiveRecord::Migration
  def change
    add_column :artists, :image_url, :string, default: "music.png"
    add_column :albums, :image_url, :string, default: "music.png"
    add_column :songs, :audio_url, :string
  end
end
