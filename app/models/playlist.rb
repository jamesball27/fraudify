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

  belongs_to :creator, class_name: "User"
  has_many :playlist_songs
  has_many :songs, through: :playlist_songs
end
