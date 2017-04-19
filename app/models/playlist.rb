# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ActiveRecord::Base
  validates :name, :creator, presence: true

  belongs_to :creator, foreign_key: :creator_id, class_name: "User"
  has_many :playlist_songs, dependent: :destroy
  has_many :songs, through: :playlist_songs, source: :song

  def songs_in_order
    playlist_songs = self.playlist_songs.includes(:song).order(:ord)
    song_order = []

    playlist_songs.each do |playlist_song|
      song_order << playlist_song.song.id
    end
    
    song_order
  end
end
