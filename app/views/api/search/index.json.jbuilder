if @artists.empty?
  json.artists Hash.new
else
  json.artists do
    json.partial! "artists", artists: @artists
  end
end

if @albums.empty?
  json.albums Hash.new
else
  json.albums do
    json.partial! "albums", albums: @albums
  end
end

if @songs.empty?
  json.songs Hash.new
else
  json.songs do
    json.partial! "songs", songs: @songs
  end
end

if @playlists.empty?
  json.playlists Hash.new
else
  json.playlists do
    json.partial! "playlists", playlists: @playlists
  end
end
