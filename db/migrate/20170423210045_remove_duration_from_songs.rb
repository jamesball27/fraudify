class RemoveDurationFromSongs < ActiveRecord::Migration
  def change
    remove_column :songs, :duration
  end
end
