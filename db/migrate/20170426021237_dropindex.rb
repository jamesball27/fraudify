class Dropindex < ActiveRecord::Migration
  def change
    execute "DROP INDEX title_similarity_idx;"
  end
end
