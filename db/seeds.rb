# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
guest = User.create(username: "guest", password: "password")

10.times do
  username = Faker::HarryPotter.unique.character
  password = Faker::Internet.password

  User.create(username: username, password: password)
end

users = User.all

Artist.destroy_all
test_artist = Artist.create(name: "TestArtist", image: nil)

Album.destroy_all
test_album = Album.create(title: "Greatest Hits", artist_id: test_artist.id)

Song.destroy_all
Song.create(title: "song1", artist_id: test_artist.id, album_id: test_album.id, duration: 300, album_ord: 1)
Song.create(title: "song2", artist_id: test_artist.id, album_id: test_album.id, duration: 300, album_ord: 2)
Song.create(title: "song3", artist_id: test_artist.id, album_id: test_album.id, duration: 300, album_ord: 3)
Song.create(title: "song4", artist_id: test_artist.id, album_id: test_album.id, duration: 300, album_ord: 4)
Song.create(title: "song5", artist_id: test_artist.id, album_id: test_album.id, duration: 300, album_ord: 5)
Song.create(title: "song6", artist_id: test_artist.id, album_id: test_album.id, duration: 300, album_ord: 6)
Song.create(title: "song7", artist_id: test_artist.id, album_id: test_album.id, duration: 300, album_ord: 7)
Song.create(title: "song8", artist_id: test_artist.id, album_id: test_album.id, duration: 300, album_ord: 8)
Song.create(title: "song9", artist_id: test_artist.id, album_id: test_album.id, duration: 300, album_ord: 9)
Song.create(title: "song10", artist_id: test_artist.id, album_id: test_album.id, duration: 300, album_ord: 10)
songs = Song.all

Playlist.destroy_all
playlist1 = Playlist.create(name: "playlist1", creator_id: guest.id)
playlist2 = Playlist.create(name: "playlist2", creator_id: guest.id)


PlaylistSong.destroy_all
PlaylistSong.create(playlist_id: playlist1.id, song_id: songs.sample.id, ord: 1)
PlaylistSong.create(playlist_id: playlist1.id, song_id: songs.sample.id, ord: 2)
PlaylistSong.create(playlist_id: playlist1.id, song_id: songs.sample.id, ord: 3)
PlaylistSong.create(playlist_id: playlist1.id, song_id: songs.sample.id, ord: 4)
PlaylistSong.create(playlist_id: playlist1.id, song_id: songs.sample.id, ord: 5)

PlaylistSong.create(playlist_id: playlist2.id, song_id: songs.sample.id, ord: 1)
PlaylistSong.create(playlist_id: playlist2.id, song_id: songs.sample.id, ord: 2)
PlaylistSong.create(playlist_id: playlist2.id, song_id: songs.sample.id, ord: 3)
PlaylistSong.create(playlist_id: playlist2.id, song_id: songs.sample.id, ord: 4)
PlaylistSong.create(playlist_id: playlist2.id, song_id: songs.sample.id, ord: 5)
