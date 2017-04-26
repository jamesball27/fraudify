json.artists do
  json.partial! "artists", artists: @artists
end

json.albums do
  json.partial! "albums", albums: @albums
end

json.songs do
  json.partial! "songs", songs: @songs
end

json.playlists do
  json.partial! "playlists", playlists: @playlists
end
