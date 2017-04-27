class Api::AlbumsController < ApplicationController
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

# <<-SQL
#   SELECT DISTINCT
#     *
#   FROM
#     albums
#     JOIN songs ON songs.album_id = albums.id
#     JOIN playlist_songs ON playlist_songs.song_id = songs.id
#     JOIN playlists ON playlist_songs.playlist_id = playlists.id
#   WHERE
#     playlists.creator_id = current_user.id
# SQL
