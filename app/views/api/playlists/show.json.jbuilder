json.set! @playlist.id do
  json.partial! "playlist", playlist: @playlist
end
