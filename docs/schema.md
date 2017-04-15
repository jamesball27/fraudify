# Database Schema

## users
| Column name     | Data type | Details                   |
|-----------------|-----------|---------------------------|
| id              | integer   | not null, primary key     |
| username        | string    | not null, indexed, unique |
| email           | string    | not null, unique          |
| password_digest | string    | not null                  |
| session_token   | string    | not null, indexed, unique |

## playlists
| Column name | Data type | Details                                         |
|-------------|-----------|-------------------------------------------------|
| id          | integer   | not null, primary key                           |
| name        | string    | not null                                        |
| creator_id  | integer   | not null, foreign_key (references users), index |
| order       | array     | not null, list of song_ids                      |

## songs
| Column name | Data type | Details                                           |
|-------------|-----------|---------------------------------------------------|
| id          | integer   | not null, primary key                             |
| title       | string    | not null                                          |
| artist_id   | integer   | not null, foreign_key (references artists), index |
| album_id    | integer   | not null, foreign_key (references albums), index  |
| duration    | integer   | not null, length of song in seconds               |
| audio_url   | string    | not null, links to audio file in AWS S3           |

## playlist_songs
| Column name | Data type | Details                                             |
|-------------|-----------|-----------------------------------------------------|
| id          | integer   | not null, primary key                               |
| playlist_id | integer   | not null, foreign_key (references playlists), index |
| song_id     | integer   | not null, foreign_key (references songs), index     |

## albums
| Column name | Data type | Details                                           |
|-------------|-----------|---------------------------------------------------|
| id          | integer   | not null, primary key                             |
| title       | string    | not null                                          |
| artist_id   | integer   | not null, foreign_key (references artists), index |
| image_url   | string    | not null, links to image file in AWS S3           |
| order       | array     | not null, list of song_ids                        |

## artists
| Column name | Data type | Details                                 |
|-------------|-----------|-----------------------------------------|
| id          | integer   | not null, primary key                   |
| name        | string    | not null                                |
| image_url   | string    | not null, links to image file in AWS S3 |
