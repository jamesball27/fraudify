class Api::AlbumsController < ApplicationController
  before_action :redirect_unless_logged_in

  def index
    if params[:artist_id]
      @albums = Album.artist_albums(params[:artist_id])
    else
      @albums = Album.user_albums(current_user)
    end

    render :index
  end

  def show
    @album = Album.find(params[:id])
    render :show
  end
end
