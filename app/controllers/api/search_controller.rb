class Api::SearchController < ApplicationController

  def index
    # search_results = PgSearch.multisearch(search_params[:search_term])
    #
    # @playlists = search_results.where(searchable_type: "Playlist").includes(:searchable)
    # @songs = search_results.where(searchable_type: "Song").includes(:searchable)
    # @albums = search_results.where(searchable_type: "Album").includes(:searchable)
    # @artists = search_results.where(searchable_type: "Artist").includes(:searchable)

    @playlists = Playlist.where("name ILIKE ?", "%#{search_params[:search_term]}%").includes(:songs).includes(:creator)
    @songs = Song.where("title ILIKE ?", "%#{search_params[:search_term]}%").includes(:album).includes(:artist)
    @albums = Album.where("title ILIKE ?", "%#{search_params[:search_term]}%").includes(:songs)
    @artists = Artist.where("name ILIKE ?", "%#{search_params[:search_term]}%")

    render :index
  end

  private

  def search_params
    params.require(:search).permit(:search_term)
  end
end
