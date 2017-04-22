class Api::ArtistsController < ApplicationController
  def index
    @artists =
      Artist
        .joins(:playlists)
        .where("playlists.creator_id = ?", current_user.id)
        .distinct

    render :index
  end
end
