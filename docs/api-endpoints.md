# API Endpoints

## HTML API
#### Root
  - `GET /` (loads React app)

## JSON API
#### Users
  - `POST /api/users`
  - `PATCH /api/users`

#### Session
  - `POST /api/session`
  - `DELETE /api/session`

#### Playlists
  - `GET /api/playlists`
  - `POST /api/playlists`
  - `PATCH /api/playlists`
  - `DELETE /api/playlists`

#### Songs/Artists/Albums
  _These routes will fetch all songs/albums represented on a user's playlists and the artists that the user follows_
  - `GET /api/songs`
  - `GET /api/albums`
  - `GET /api/artists`

#### Search
  - `POST /api/search`
