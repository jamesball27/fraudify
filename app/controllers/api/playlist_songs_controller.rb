class Api::PlaylistSongsController < ApplicationController

  def create
    @playlist_song = PlaylistSong.new(playlist_song_params)
    @playlist_song.ord = @playlist_song.playlist.songs.length + 1

    if @playlist_song.save
      render :show
    else
      render json: ["Oops something went wrong!"], status: 422
    end
  end

  private

  def playlist_song_params
    params.require(:playlist_song).permit(:playlist_id, :song_id)
  end
end
