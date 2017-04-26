artists.each do |artist|
  json.set! artist.id do
    json.id artist.id
    json.name artist.name
    json.imageUrl artist.image_url
  end
end
