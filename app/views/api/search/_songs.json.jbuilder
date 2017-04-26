songs.each do |song|
  json.set! song.id do
    json.id song.id
    json.title song.title
    json.artist song.artist.name
    json.album song.album.title
    json.audioUrl song.audio_url
  end
end
