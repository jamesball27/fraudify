# == Schema Information
#
# Table name: albums
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  image_url  :string           default("music.png")
#

class Album < ActiveRecord::Base
  validates :title, :artist_id, presence: true

  belongs_to :artist
  has_many :songs
  has_many :playlists, through: :songs, source: :playlists

  def self.user_albums(user)
    Album
      .joins(:playlists)
      .joins("JOIN follows ON follows.followable_id = playlists.id")
      .where("playlists.creator_id = ? OR follows.user_id = ?", user.id, user.id)
      .includes(:songs)
      .distinct
  end

  def self.artist_albums(artist_id)
    Album.where(artist_id: artist_id)
  end

  def songs_in_order
    self.songs.order(:album_ord).pluck("songs.id")
  end
end
