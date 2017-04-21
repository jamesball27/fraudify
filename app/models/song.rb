# == Schema Information
#
# Table name: songs
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  artist_id          :integer          not null
#  album_id           :integer          not null
#  duration           :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  album_ord          :integer          not null
#  audio_file_name    :string
#  audio_content_type :string
#  audio_file_size    :integer
#  audio_updated_at   :datetime
#

class Song < ActiveRecord::Base
  validates :title, :artist, :album, :duration, presence: true

  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: ["audio/mp3", "audio/ogg", "audio/wav"]

  belongs_to :artist
  belongs_to :album
  has_many :playlist_songs
  has_many :playlists, through: :playlist_songs
end
