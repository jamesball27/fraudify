class Disabletrigram < ActiveRecord::Migration
  def change
    disable_extension :pg_trgm
  end
end
