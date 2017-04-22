# == Schema Information
#
# Table name: artists
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Artist < ActiveRecord::Base
  validates :name, presence: true

  has_attached_file :image, default_url: "music.png"
  validates_attachment_content_type :image, content_type: ["image/jpeg", "image/png"]

  has_many :songs
  has_many :playlists, through: :songs, source: :playlists
end
