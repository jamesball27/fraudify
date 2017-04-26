class AddIndexForSearchTerms < ActiveRecord::Migration
  def change
    execute "CREATE INDEX title_similarity_idx ON songs USING gist (title gist_trgm_ops);"
  end
end
