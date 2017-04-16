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
    * #### CollectionContainer (playlist/album)
      * ##### CollectionDetail
      * ##### CollectionSongs
    * #### ArtistContainer
      * ##### ArtistDetail
      * ##### CollectionsIndex (albums)
      * ##### SongsIndex
    * #### SearchContainer
      * ##### SearchBar
      * ##### CollectionsIndex (playlists/albums)
        * ###### CollectionsIndexItem
      * ##### SongsIndex
        * ###### SongsIndexItem
      * ##### ArtistsIndex
        * ###### ArtistsIndexItem

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
| "/playlists/:id"         | CollectionContainer |
| "/albums/:id"            | CollectionContainer |
| "/artists/:id"           | ArtistContainer     |
| "/search"                | SearchContainer     |
| "/search/playlists"      | CollectionsIndex    |
| "/search/albums"         | CollectionsIndex    |
| "/search/songs"          | SongsIndex          |
| "/search/artists"        | ArtistsIndex        |
