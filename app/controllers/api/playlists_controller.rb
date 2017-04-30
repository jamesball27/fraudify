class Api::PlaylistsController < ApplicationController
  before_action :redirect_unless_logged_in

  def index
    @playlists = current_user.created_playlists + current_user.followed_playlists
    render :index
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.creator = current_user

    if @playlist.save
      render :show
    else
      render json: ["Oops, something went wrong! Try again."], status: 422
    end
  end

  def update
    @playlist = Playlist.find(params[:id])

    if @playlist.update(playlist_params)
      render :show
    else
      render json: ["Oops, something went wrong! Try again."], status: 422
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
    render :show
  end

  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  private

  def playlist_params
    params.require(:playlist).permit(:name)
  end
end
