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
  has_many :playlist_songs
  has_many :songs, through: :playlist_songs, source: :song
end
