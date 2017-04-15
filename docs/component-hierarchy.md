# React Component Hierarchy

##### AuthFormContainer
  * AuthForm

##### App
  * Sidebar
  * NowPlayingContainer
  * MainContentContainer

##### NowPlayingContainer
  * CurrentSongDetails
  * AudioPlayer

##### AudioPlayer
  * PlayPause
  * Scrollbar
  * Volume
  * PrevSong
  * NextSong

#### MyMusicContainer
  * PlaylistsIndex
  * SongsIndex
  * AlbumsIndex
  * ArtistsIndex

#### PlaylistsIndex
  * PlaylistsIndexItem

#### SongsIndex
  * SongsIndexItem

#### AlbumsIndex
  * AlbumsIndexItem

#### ArtistsIndex
  * ArtistsIndexItem

#### CollectionContainer
  * CollectionDetail
  * CollectionSongs

#### Artist
  * ArtistDetail
  * ArtistAlbums
  * ArtistSongs

#### UserContainer
  * UserDetail
  * PlaylistsIndex

#### SearchContainer
  * SearchBar
  * PlaylistsIndex
  * SongsIndex
  * AlbumsIndex
  * ArtistsIndex

# Routes
| Path                     | Component           |
|--------------------------|---------------------|
| "/"                      | App                 |
| "/signup"                | AuthFormContainer   |
| "/login"                 | AuthFormContainer   |
| "/mymusic"               | MyMusicContainer    |
| "/mymusic/playlists"     | PlaylistsIndex      |
| "/mymusic/songs"         | SongsIndex          |
| "/mymusic/albums"        | AlbumsIndex         |
| "/mymusic/artists"       | ArtistsIndex        |
| "/mymusic/playlists/:id" | CollectionContainer |
| "/albums/:id"            | CollectionContainer |
| "/artists/:id"           | Artist              |
| "/search"                | SearchContainer     |
| "/search/playlists"      | PlaylistsIndex      |
| "/search/songs"          | SongsIndex          |
| "/search/albums"         | AlbumIndex          |
| "/search/artists"        | ArtistsIndex        |
| "/users/:id"             | UserContainer       |
| "/account"               | AccountContainer    |
