albums.each do |album|
  json.set! album.id do
    json.id album.id
    json.title album.title
    json.artist album.artist.name
    json.imageUrl asset_path(album.image_url)
    json.songs album.songs_in_order
  end
end
