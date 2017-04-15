# React Component Hierarchy

##### AuthFormContainer
  - AuthForm

##### App
  - Sidebar
  - NowPlayingContainer
  - MainContentContainer

##### NowPlayingContainer
  - CurrentSongDetails
  - AudioPlayer

##### AudioPlayer
  - PlayPause
  - Scrollbar
  - Volume
  - PrevSong
  - NextSong

# Routes
| Path       | Component              |
|------------|------------------------|
| "/"        | App                    |
| "/signup"  | AuthFormContainer      |
| "/login"   | AuthFormContainer      |
| "/mymusic" | MyMusicContainer       |
| "/search"  | SearchContainer        |
| "/account" | AccountContainer       |
