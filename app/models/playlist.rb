# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  image_url  :string           default("music.png")
#

class Playlist < ActiveRecord::Base
  validates :name, :creator_id, presence: true

  belongs_to :creator, foreign_key: :creator_id, class_name: "User"
  has_many :playlist_songs, dependent: :destroy
  has_many :songs, through: :playlist_songs, source: :song
  has_many :follows, as: :followable

  def songs_in_order
    songs.includes(:playlist_songs).order('playlist_songs.ord')
  end
end
