playlists.each do |playlist|
  json.set! playlist.id do
    json.id playlist.id
    json.name playlist.name
    json.imageUrl asset_path(playlist.image_url)
    json.creator playlist.creator.username
    json.songs playlist.songs_in_order
  end
end
