#### USERS ####
User.destroy_all
guest = User.create(username: "guest", password: "password")

# 10.times do
#   username = Faker::HarryPotter.unique.character
#   password = Faker::Internet.password
#
#   User.create(username: username, password: password)
# end

users = User.all


#### ARTISTS ####
Artist.destroy_all
bach = Artist.create!(name: "Johann Sebastian Bach", image_url: "https://s3.amazonaws.com/fraudify-dev/artist-images/bach.jpg")
beethoven = Artist.create!(name: "Ludwig van Beethoven", image_url: "https://s3.amazonaws.com/fraudify-dev/artist-images/beethoven.jpg")
brahms = Artist.create!(name: "Johannes Brahms", image_url: "https://s3.amazonaws.com/fraudify-dev/artist-images/brahms.jpg")
haydn = Artist.create!(name: "Franz Joseph Haydn", image_url: "https://s3.amazonaws.com/fraudify-dev/artist-images/haydn.jpg")
holst = Artist.create!(name: "Gustav Holst", image_url: "https://s3.amazonaws.com/fraudify-dev/artist-images/holst.jpg")
mahler = Artist.create!(name: "Gustav Mahler", image_url: "https://s3.amazonaws.com/fraudify-dev/artist-images/mahler.jpg")
mozart = Artist.create!(name: "Wolfgang Amadeus Mozart", image_url: "https://s3.amazonaws.com/fraudify-dev/artist-images/mozart.jpg")
ravel = Artist.create!(name: "Maurice Ravel", image_url: "https://s3.amazonaws.com/fraudify-dev/artist-images/ravel.jpg")
tchaikovsky = Artist.create!(name: "Pyotr Ilyich Tchaikovsky", image_url: "https://s3.amazonaws.com/fraudify-dev/artist-images/tchaikovsky.jpg")
vivaldi = Artist.create!(name: "Antonio Vivaldi", image_url: "https://s3.amazonaws.com/fraudify-dev/artist-images/vivaldi.jpg")


#### ALBUMS ####
Album.destroy_all
bach_organ = Album.create!(title: "Bach Organ Works: Chorale Variations", artist_id: bach.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/bach-organ.jpg")
bach_wtc = Album.create!(title: "The Well-Tempered Clavier", artist_id: bach.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/bach-wtc.jpg")
bach_goldberg = Album.create!(title: "Goldberg Variations", artist_id: bach.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/bach-goldberg.jpg")
beethoven_15 = Album.create!(title: "Piano Sonata No. 15 in D major, Op. 28", artist_id: beethoven.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/beethoven-sonata-15.jpg")
beethoven_8 = Album.create!(title: "Piano Sonata No. 8 in C minor, Op. 13: Sonata Pathetique", artist_id: beethoven.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/beethoven-pathetique.jpg")
beethoven_quartet = Album.create!(title: "String Quartet No. 6", artist_id: beethoven.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/beethoven-quartet.jpg")
brahms_1 = Album.create!(title: "Symphony No. 1 in C minor, Op. 68", artist_id: brahms.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/brahms-1.jpg")
brahms_93 = Album.create!(title: "6 Lieder and Romances, Op.93a", artist_id: brahms.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/brahms-93.jpg")
brahms_104 = Album.create!(title: "5 Songs, Op.104", artist_id: brahms.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/brahms-104.jpg")
haydn_mass = Album.create!(title: "Mass in C Major", artist_id: haydn.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/haydn-mass.jpg")
holst_1 = Album.create!(title: "First Suite in E-flat for Military Band", artist_id: holst.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/holst-1.jpg")
holst_2 = Album.create!(title: "Second Suite in F for Military Band", artist_id: holst.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/holst-2.jpg")
mahler_1 = Album.create!(title: "Symphony No. 1 in D major", artist_id: mahler.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/mahler.jpg")
mozart_prague = Album.create!(title: "Symphony No. 38: Prague", artist_id: mozart.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/mozart-prague.jpg")
ravel_piano = Album.create!(title: "Selected Piano Works", artist_id: ravel.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/ravel-piano.jpg")
ravel_quartet = Album.create!(title: "String Quartet in F major", artist_id: ravel.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/ravel-quartet.jpg")
tchaikovsky_nutcracker = Album.create!(title: "The Nutcracker Suite", artist_id: tchaikovsky.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/tchaikovksy-nutcracker.jpg")
tchaikovsky_swan_lake = Album.create!(title: "Selections from Swan Lake", artist_id: tchaikovsky.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/tchaikovsky-swan-lake.jpg")
vivaldi_four_seasons = Album.create!(title: "The Four Seasons", artist_id: vivaldi.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/vivaldi-four-seasons.jpg")


#### SONGS ####
Song.destroy_all
bach_organ_1 = Song.create!(title: "Wenn wir in höchsten Nöten sein, BWV Anh. 78", artist_id: bach.id, album_id: bach_organ.id, album_ord: 1, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-Organ/James_Kibbie_-_01_-_Anh_78_Partita_Wenn_wir_in_hchsten_Nten_sein.mp3")
bach_organ_2 = Song.create!(title: "O Vater, allmächtiger Gott, BWV 758", artist_id: bach.id, album_id: bach_organ.id, album_ord: 2, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-Organ/James_Kibbie_-_02_-_BWV_758_O_Vater_allmchtiger_Gott.mp3")
bach_organ_3 = Song.create!(title: "Christ, der du bist der helle Tag, BWV 766", artist_id: bach.id, album_id: bach_organ.id, album_ord: 3, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-Organ/James_Kibbie_-_03_-_BWV_766_Partite_diverse_sopra_il_Corale_Christ_der_du_bist_der_helle_Tag.mp3")
bach_organ_4 = Song.create!(title: "O Gott, du frommer Gott, BWV 767", artist_id: bach.id, album_id: bach_organ.id, album_ord: 4, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-Organ/James_Kibbie_-_04_-_BWV_767_Partite_diverse_sopra_il_Corale_O_Gott_du_frommer_Gott.mp3")
bach_organ_5 = Song.create!(title: "Sei gegrüßet, Jesu gütig, BWV 768", artist_id: bach.id, album_id: bach_organ.id, album_ord: 5, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-Organ/James_Kibbie_-_05_-_BWV_768_Partite_diverse_sopra_il_Corale_Sei_gegret_Jesu_gtig.mp3")
bach_organ_6 = Song.create!(title: "Canonic Variations on 'Vom Himmel hoch da komm ich her': I. Canone all' ottava, BWV 769a", artist_id: bach.id, album_id: bach_organ.id, album_ord: 6, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-Organ/James_Kibbie_-_06_-_BWV_769a_Canonic_Variations_-_1_Canone_all_ottava.mp3")
bach_organ_7 = Song.create!(title: "Canonic Variations on 'Vom Himmel hoch da komm ich her': II. Alio Modo in Canone alla Quinta, BWV 769a", artist_id: bach.id, album_id: bach_organ.id, album_ord: 7, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-Organ/James_Kibbie_-_07_-_BWV_769a_Canonic_Variations_-_2_Canone_alla_quinta.mp3")
bach_organ_8 = Song.create!(title: "Canonic Variations on 'Vom Himmel hoch da komm ich her': III. Canone alla Settima, cantabile, BWV 769a", artist_id: bach.id, album_id: bach_organ.id, album_ord: 8, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-Organ/James_Kibbie_-_08_-_BWV_769a_Canonic_Variations_-_3_Canone_alla_settima.mp3")
bach_organ_9 = Song.create!(title: "Canonic Variations on 'Vom Himmel hoch da komm ich her': IV. Canon per augmentationem, BWV 769a", artist_id: bach.id, album_id: bach_organ.id, album_ord: 9, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-Organ/James_Kibbie_-_09_-_BWV_769a_Canonic_Variations_-_4_Canon_per_augmentationem.mp3")
bach_organ_10 = Song.create!(title: "Canonic Variations on 'Vom Himmel hoch da komm ich her': V. Canto Fermo in Canone, BWV 769a", artist_id: bach.id, album_id: bach_organ.id, album_ord: 10, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-Organ/James_Kibbie_-_10_-_BWV_769a_Canonic_Variations_-_5_Canto_fermo_in_canone.mp3")
bach_organ_11 = Song.create!(title: "Ach, was soll ich Sünder machen, BWV 770", artist_id: bach.id, album_id: bach_organ.id, album_ord: 11, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-Organ/James_Kibbie_-_11_-_BWV_770_Partite_diverse_sopra_il_Corale_Ach_was_soll_ich_Snder_machen.mp3")

songs = Song.all

Playlist.destroy_all
playlist1 = Playlist.create!(name: "playlist1", creator_id: guest.id)
playlist2 = Playlist.create!(name: "playlist2", creator_id: guest.id)

PlaylistSong.destroy_all
PlaylistSong.create!(playlist_id: playlist1.id, song_id: songs.sample.id, ord: 1)
PlaylistSong.create!(playlist_id: playlist1.id, song_id: songs.sample.id, ord: 2)
PlaylistSong.create!(playlist_id: playlist1.id, song_id: songs.sample.id, ord: 3)
PlaylistSong.create!(playlist_id: playlist1.id, song_id: songs.sample.id, ord: 4)
PlaylistSong.create!(playlist_id: playlist1.id, song_id: songs.sample.id, ord: 5)

PlaylistSong.create!(playlist_id: playlist2.id, song_id: songs.sample.id, ord: 1)
PlaylistSong.create!(playlist_id: playlist2.id, song_id: songs.sample.id, ord: 2)
PlaylistSong.create!(playlist_id: playlist2.id, song_id: songs.sample.id, ord: 3)
PlaylistSong.create!(playlist_id: playlist2.id, song_id: songs.sample.id, ord: 4)
PlaylistSong.create!(playlist_id: playlist2.id, song_id: songs.sample.id, ord: 5)
