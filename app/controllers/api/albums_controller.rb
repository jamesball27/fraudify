class Api::AlbumsController < ApplicationController
  def index
    @albums =
      Album
        .joins(:playlists)
        .where("playlists.creator_id = ?", current_user.id)
        .distinct
        .includes(:songs)
    render :index
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
