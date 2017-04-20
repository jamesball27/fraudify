# == Schema Information
#
# Table name: artists
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  image_url          :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Artist < ActiveRecord::Base
  validates :name, :image_url, presence: true

  has_attached_file :image
  validates_attachment_content_type :image, content_type: ["image/jpeg", "image/png"]

  has_many :songs
end
