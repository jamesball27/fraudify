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
    * PlaylistsIndexItem
  * SongsIndex
    * SongsIndexItem
  * AlbumsIndex
    * AlbumsIndexItem
  * ArtistsIndex
    * ArtistsIndexItem

#### SearchContainer
  * SearchBar
  * PlaylistsIndex
    * PlaylistsIndexItem
  * SongsIndex
    * SongsIndexItem
  * AlbumsIndex
    * AlbumsIndexItem
  * ArtistsIndex
    * ArtistsIndexItem

# Routes
| Path                 | Component         |
|----------------------|-------------------|
| "/"                  | App               |
| "/signup"            | AuthFormContainer |
| "/login"             | AuthFormContainer |
| "/mymusic"           | MyMusicContainer  |
| "/mymusic/playlists" | PlaylistsIndex    |
| "/mymusic/songs"     | SongsIndex        |
| "/mymusic/albums"    | AlbumsIndex       |
| "/mymusic/artists"   | ArtistsIndex      |
| "/search"            | SearchContainer   |
| "/search/playlists"  | PlaylistsIndex    |
| "/search/songs"      | SongsIndex        |
| "/search/albums"     | AlbumIndex        |
| "/search/artists"    | ArtistsIndex      |
| "/account"           | AccountContainer  |
