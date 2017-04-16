```javascript
{
  session: {
    currentUser: {
      id: 1,
      username: mozart1756
    },
    errors: []
  },

  nowPlaying: {
    currentSong: 0, // references index in the queue
    current_time: 245,
    volume: .75,
    queue: [5, 10] // song_ids
  },

  songs: {
    10: {
      id: 10,
      title: 'Thriller',
      audio_url: 'http://www.audioexample.com/10',
      duration: 357,
      artist_id: 4,
      album_id: 12
    },

    5: {
        id: 5,
        title: 'Bohemian Rhapsody',
        audio_url: 'http://www.audioexample.com/5',
        duration: 357,
        artist_id: 3,
        album_id: 6
      }
    }  
  },

  // playlists that the currentUser has created or follows
  playlists: {
    0: {
      id: 1,
      name: 'Great Songs',
      creator: 'mary2',
      songs: [10, 5]
    },

    1: {
      id: 4,
      name: 'OK Songs',
      creator: 'mozart1756',
      songs: []
    }
  }

  // artists in the current user's playlists
  artists: {
    3: {
      id: 3,
      name: 'Queen',
      image_url: 'http://www.imageexample.com/3'
    },

    4: {
      id: 4,
      name: 'Michael Jackson',
      image_url: 'http://www.imageexample.com/4'
    }
  },

  // albums in the current user's playlists
  albums: {
    12: {
      id: 12
      name: 'Thriller',
      image_url: 'http://www.imageexample.com/12',
      songs: [10, 4, 5, 19]
    },

    6: {
      id: 6
      album: 'A Night at the Opera',
      image_url: 'http://www.imageexample.com/8',
      songs: [3, 13, 5, 6, 9]
    }
  }

  searchResults: {
    songs: {
      ...
    },
    playlists: {
      ...
    },
    albums: {
      ...
    },
    artists: {
      ...
    },
    users: {
      ...
    }
  }
}
```
