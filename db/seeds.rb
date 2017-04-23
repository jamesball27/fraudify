# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
guest = User.create(username: "guest", password: "password")

# 10.times do
#   username = Faker::HarryPotter.unique.character
#   password = Faker::Internet.password
#
#   User.create(username: username, password: password)
# end

users = User.all

Artist.destroy_all
bach = Artist.create(name: "Johann Sebastian Bach", image: "https://s3.amazonaws.com/fraudify-dev/artist-images/bach.jpg")
beethoven = Artist.create(name: "Ludwig van Beethoven", image: "https://s3.amazonaws.com/fraudify-dev/artist-images/beethoven.jpg")
brahms = Artist.create(name: "Johannes Brahms", image: "https://s3.amazonaws.com/fraudify-dev/artist-images/brahms.jpg")
haydn = Artist.create(name: "Franz Joseph Haydn", image: "https://s3.amazonaws.com/fraudify-dev/artist-images/haydn.jpg")
holst = Artist.create(name: "Gustav Holst", image: "https://s3.amazonaws.com/fraudify-dev/artist-images/holst.jpg")
mahler = Artist.create(name: "Gustav Mahler", image: "https://s3.amazonaws.com/fraudify-dev/artist-images/mahler.jpg")
mozart = Artist.create(name: "Wolfgang Amadeus Mozart", image: "https://s3.amazonaws.com/fraudify-dev/artist-images/mozart.jpg")
ravel = Artist.create(name: "Maurice Ravel", image: "https://s3.amazonaws.com/fraudify-dev/artist-images/ravel.jpg")
tchaikovksy = Artist.create(name: "Pyotr Ilyich Tchaikovsky", image: "https://s3.amazonaws.com/fraudify-dev/artist-images/tchaikovsky.jpg")
vivaldi = Artist.create(name: "Antonio Vivaldi", image: "https://s3.amazonaws.com/fraudify-dev/artist-images/vivaldi.jpg")

Album.destroy_all
test_album1 = Album.create(title: "Greatest Hits", artist_id: test_artist1.id)
test_album2 = Album.create(title: "Greatest Hits pt. 2", artist_id: test_artist2.id)

Song.destroy_all
song1 = Song.create(title: "song1", artist_id: bach.id, album_id: test_album1.id, duration: 300, album_ord: 1)
Song.create(title: "song2", artist_id: test_artist1.id, album_id: test_album1.id, duration: 300, album_ord: 2)
Song.create(title: "song3", artist_id: test_artist1.id, album_id: test_album1.id, duration: 300, album_ord: 3)
Song.create(title: "song4", artist_id: test_artist1.id, album_id: test_album1.id, duration: 300, album_ord: 4)
Song.create(title: "song5", artist_id: test_artist1.id, album_id: test_album1.id, duration: 300, album_ord: 5)
Song.create(title: "song6", artist_id: test_artist2.id, album_id: test_album2.id, duration: 300, album_ord: 2)
Song.create(title: "song7", artist_id: test_artist2.id, album_id: test_album2.id, duration: 300, album_ord: 1)
Song.create(title: "song8", artist_id: test_artist2.id, album_id: test_album2.id, duration: 300, album_ord: 3)
Song.create(title: "song9", artist_id: test_artist2.id, album_id: test_album2.id, duration: 300, album_ord: 4)
Song.create(title: "song10", artist_id: test_artist2.id, album_id: test_album2.id, duration: 300, album_ord: 5)
songs = Song.all

Playlist.destroy_all
playlist1 = Playlist.create(name: "playlist1", creator_id: guest.id)
playlist2 = Playlist.create(name: "playlist2", creator_id: guest.id)


PlaylistSong.destroy_all
PlaylistSong.create(playlist_id: playlist1.id, song_id: song1.id, ord: 1)
PlaylistSong.create(playlist_id: playlist1.id, song_id: songs.sample.id, ord: 2)
PlaylistSong.create(playlist_id: playlist1.id, song_id: songs.sample.id, ord: 3)
PlaylistSong.create(playlist_id: playlist1.id, song_id: songs.sample.id, ord: 4)
PlaylistSong.create(playlist_id: playlist1.id, song_id: songs.sample.id, ord: 5)

PlaylistSong.create(playlist_id: playlist2.id, song_id: songs.sample.id, ord: 1)
PlaylistSong.create(playlist_id: playlist2.id, song_id: songs.sample.id, ord: 2)
PlaylistSong.create(playlist_id: playlist2.id, song_id: songs.sample.id, ord: 3)
PlaylistSong.create(playlist_id: playlist2.id, song_id: songs.sample.id, ord: 4)
PlaylistSong.create(playlist_id: playlist2.id, song_id: songs.sample.id, ord: 5)
