PlaylistType = GraphQL::ObjectType.define do
  name "Playlist"
  description "A playlist of songs"

  field :id, !types.ID
  field :name, !types.String
  field :image_url, !types.String

  #TODO figure out eager loading of songs
  field :songs do
    type !types[SongType]
    description "Playlist's songs in order"
    resolve ->(playlist, args, ctx) { playlist.songs_in_order }
  end

  field :creator do
    type !UserType
    description "Playlist's creator"
    resolve ->(playlist, args, ctx) { playlist.creator }
  end
end
