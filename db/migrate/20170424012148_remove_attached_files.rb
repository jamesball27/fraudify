class RemoveAttachedFiles < ActiveRecord::Migration
  def change
    remove_attachment :artists, :image
    remove_attachment :albums, :image
    remove_attachment :songs, :audio
  end
end
