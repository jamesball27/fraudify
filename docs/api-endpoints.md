# API Endpoints

## HTML API
#### Root
  - `GET /` (loads React app)

## JSON API
#### Users
  - `POST /api/users`

#### Session
  - `POST /api/session`
  - `DELETE /api/session`

#### Playlists
  - `GET /api/playlists`
  - `POST /api/playlists`
  - `PATCH /api/playlists/:id`
  - `DELETE /api/playlists/:id`

#### Songs/Artists/Albums
  - `GET /api/songs`
  - `GET /api/albums`
  - `GET /api/artists`

#### PlaylistFollows
  - `POST /api/playlistfollows`
  - `DELETE /api/playlistfollows/:id`

#### ArtistFollows
  - `POST /api/artistfollows`
  - `DELETE /api/artistfollows/:id`

#### Search
  - `POST /api/search`
