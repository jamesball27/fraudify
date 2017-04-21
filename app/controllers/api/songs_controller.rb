class Api::SongsController < ApplicationController
  def index
    @songs =
      Song
        .joins(:playlists)
        .where("playlists.creator_id = ?", current_user.id)
        .distinct
        .includes(:artist)
        .includes(:album)
    render :index
  end


end

# <<-SQL
#   SELECT DISTINCT
#     songs
#   FROM
#     songs
#     JOIN playlist_songs ON songs.id = playlist_songs.song_id
#     JOIN playlists ON playlist_songs.playlist_id = playlists.id
#   WHERE
#     playlist.creator_id = current_user.id
# SQL
