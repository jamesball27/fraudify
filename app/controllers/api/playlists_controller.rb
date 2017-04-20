class Api::PlaylistsController < ApplicationController

  def index
    @playlists = Playlist.where(creator: current_user)
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

  private

  def playlist_params
    params.require(:playlist).permit(:name)
  end
end
