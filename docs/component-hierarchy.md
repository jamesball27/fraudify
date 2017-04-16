# React Component Hierarchy
## App
  * ### AuthFormContainer
    * ### AuthForm (signup/login)
  * ### Sidebar
  * ### NowPlayingContainer
    * #### CurrentSongDetails
    * #### AudioPlayerContainer
      * ##### PlayPause
      * ##### Scrollbar
      * ##### Volume
      * ##### PrevSong
      * ##### NextSong
  * ### MainContentContainer
    * #### MyMusicContainer
      * ##### CollectionsIndex (playlists/albums)
        * ###### CollectionsIndexItem
      * ##### SongsIndex
        * ###### SongsIndexItem
      * ##### ArtistsIndex
        * ###### ArtistsIndexItem
      * ##### CollectionContainer (playlist/album)
        * ###### CollectionDetail
        * ###### CollectionSongs
    * #### SearchContainer
      * ##### SearchBar
      * ##### CollectionsIndex (playlists/albums)
        * ###### CollectionsIndexItem
      * ##### SongsIndex
        * ###### SongsIndexItem
      * ##### ArtistsIndex
        * ###### ArtistsIndexItem
    * #### UserContainer
      * ##### UserDetail
      * ##### CollectionsIndex (playlists)

# React Routes
| Path                     | Component           |
|--------------------------|---------------------|
| "/"                      | App                 |
| "/signup"                | AuthFormContainer   |
| "/login"                 | AuthFormContainer   |
| "/mymusic/playlists"     | CollectionsIndex    |
| "/mymusic/albums"        | CollectionsIndex    |
| "/mymusic/songs"         | SongsIndex          |
| "/mymusic/artists"       | ArtistsIndex        |
| "/mymusic/playlists/:id" | CollectionContainer |
| "/albums/:id"            | CollectionContainer |
| "/artists/:id"           | Artist              |
| "/search"                | SearchContainer     |
| "/search/playlists"      | CollectionsIndex    |
| "/search/albums"         | CollectionsIndex    |
| "/search/songs"          | SongsIndex          |
| "/search/artists"        | ArtistsIndex        |
| "/users/:id"             | UserContainer       |
