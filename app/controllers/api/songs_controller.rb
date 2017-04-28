class Api::SongsController < ApplicationController
  before_action :redirect_unless_logged_in
  
  def index
    if params[:artist_id]
      @songs = Song.artist_songs(params[:artist_id])
    elsif params[:album_id]
      @songs = Song.album_songs(params[:album_id])
    elsif params[:playlist_id]
      @songs = Song.playlist_songs(params[:playlist_id])
    else
      @songs = Song.user_songs(current_user)
    end

    render :index
  end
end
