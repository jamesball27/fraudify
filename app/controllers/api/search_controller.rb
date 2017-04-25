class Api::SearchController < ApplicationController
  include PgSearch

  def index
    search_results = PgSearch.multisearch(search_params[:search_term])
    debugger

    @playlists = search_results.where(searchable_type: "Playlist")
    @songs = search_results.where(searchable_type: "Song")
    @albums = search_results.where(searchable_type: "Album")
    @artists = search_results.where(searchable_type: "Artist")

    render :index
  end

  private

  def search_params
    params.require(:search).permit(:search_term)
  end
end
