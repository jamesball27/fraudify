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

  belongs_to :song
  belongs_to :playlist
end
