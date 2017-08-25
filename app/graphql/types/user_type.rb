UserType = GraphQL::ObjectType.define do
  name "User"
  description "A user"

  field :id, !types.ID
  field :username, !types.String
  field :playlists do
    type !types[PlaylistType]
    description "User's created and followed playlists"
    resolve -> (user, args, ctx) do
      user.created_playlists + user.followed_playlists
    end
  end

end
