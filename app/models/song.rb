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

  include PgSearch
  multisearchable against: :title, using: :trigram
                  # using: {
                  #   tsearch: { prefix: true }
                  # }
end
