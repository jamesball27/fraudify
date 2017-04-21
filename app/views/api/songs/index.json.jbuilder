@songs.each do |song|
  json.set! song.id do
    json.partial! "song", song: song
  end
end
