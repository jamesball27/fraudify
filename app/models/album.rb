# == Schema Information
#
# Table name: albums
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  artist_id          :integer          not null
#  image_url          :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Album < ActiveRecord::Base
  validates :title, :artist_id, :image_url, presence: true

  has_attached_file :image
  validates_attachment_content_type :image, content_type: ["image/jpeg", "image/png"]

  belongs_to :artist
  has_many :songs
end
