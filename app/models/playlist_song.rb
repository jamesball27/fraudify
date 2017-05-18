# == Schema Information
#
# Table name: playlist_songs
#
#  id          :integer          not null, primary key
#  playlist_id :integer          not null
#  song_id     :integer          not null
#  ord         :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistSong < ActiveRecord::Base
  validates :playlist, :song, :ord, presence: true

  before_save :add_playlist_image
  after_destroy :remove_playlist_image

  belongs_to :song
  belongs_to :playlist

  def add_playlist_image
    if self.playlist.image_url == "music.png"
      self.playlist.image_url = self.song.album.image_url
      self.playlist.save!
    end
  end

  def remove_playlist_image
    if self.playlist.songs.empty?
      self.playlist.image_url = "music.png"
      self.playlist.save!
    end
  end

  def set_ord
    if self.playlist.playlist_songs.empty?
      self.ord = 1
    else
      self.ord = self.playlist.playlist_songs.order(:ord).last.ord + 1
    end
  end
end
