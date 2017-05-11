class Api::SearchController < ApplicationController
  before_action :redirect_unless_logged_in

  def index
    @playlists =
      Playlist
        .where("name ILIKE ?", "%#{search_params[:search_term]}%")
        .includes(:songs)
        .includes(:creator)

    @songs =
      Song
        .where("title ILIKE ?", "%#{search_params[:search_term]}%")
        .includes(:album)
        .includes(:artist)

    @albums =
      Album
        .where("title ILIKE ?", "%#{search_params[:search_term]}%")
        .includes(:songs)

    @artists =
      Artist
        .where("name ILIKE ?", "%#{search_params[:search_term]}%")

    render :index
  end

  private

  def search_params
    params.require(:search).permit(:search_term)
  end
end
