@artists.each do |artist|
  json.set! artist.id do
    json.partial! "artist", artist: artist
  end
end
