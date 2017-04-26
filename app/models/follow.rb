# == Schema Information
#
# Table name: follows
#
#  id              :integer          not null, primary key
#  user_id         :integer          not null
#  followable_id   :integer
#  followable_type :string
#  created_at      :datetime
#  updated_at      :datetime
#

class Follow < ActiveRecord::Base
  validates :user, presence: true
  validates :user_id, uniqueness: { scope: [:followable_id, :followable_type] }

  belongs_to :followable, polymorphic: true
  belongs_to :user, inverse_of: :follows
end
