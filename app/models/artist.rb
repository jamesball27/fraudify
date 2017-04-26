# == Schema Information
#
# Table name: artists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  image_url  :string           default("music.png")
#

class Artist < ActiveRecord::Base
  validates :name, presence: true

  has_many :songs
  has_many :playlists, through: :songs, source: :playlists

  # include PgSearch
  # multisearchable against: :name,
  # using: [
  #   :tsearch,
  #   :trigram
  # ]
end
