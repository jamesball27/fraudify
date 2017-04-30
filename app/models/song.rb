# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  artist_id  :integer          not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  album_ord  :integer          not null
#  audio_url  :string
#

class Song < ActiveRecord::Base
  validates :title, :artist, :album, :audio_url, presence: true

  belongs_to :artist
  belongs_to :album
  has_many :playlist_songs
  has_many :playlists, through: :playlist_songs

  def self.user_songs(user)
    Song
      .joins(:playlists)
      .joins("LEFT OUTER JOIN follows ON follows.followable_id = playlists.id")
      .where("playlists.creator_id = ? OR follows.user_id = ?", user.id, user.id)
      .includes(:artist)
      .includes(:album)
      .distinct
  end

  def self.artist_songs(artist_id)
    Song.where(artist_id: artist_id)
  end

  def self.album_songs(album_id)
    Song.where(album_id: album_id)
  end

  def self.playlist_songs(playlist_id)
    Song.joins(:playlists).where("playlists.id = ?", playlist_id)
  end
end
