class RemoveExtraUrlColumns < ActiveRecord::Migration
  def change
    remove_column :songs, :audio_url
    remove_column :artists, :image_url
    remove_column :albums, :image_url
  end
end
