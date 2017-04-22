# == Schema Information
#
# Table name: albums
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  artist_id          :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Album < ActiveRecord::Base
  validates :title, :artist_id, presence: true

  has_attached_file :image, default_url: "music.png"
  validates_attachment_content_type :image, content_type: ["image/jpeg", "image/png"]

  belongs_to :artist
  has_many :songs
  has_many :playlists, through: :songs, source: :playlists

  def songs_in_order
    self.songs.order(:album_ord).pluck("songs.id")
  end
end
