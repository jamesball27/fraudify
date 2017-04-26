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

  # include PgSearch
  # multisearchable against: :title,
  # using: [
  #   :tsearch,
  #   :trigram
  # ]

  def songs_in_order
    self.songs.order(:album_ord).pluck("songs.id")
  end
end
