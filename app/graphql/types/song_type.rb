SongType = GraphQL::ObjectType.define do
  name "Song"
  description "A song"

  field :id, !types.ID
  field :title, !types.String
  # field :artist
  # field :album
  field :audio_url, !types.String
end
