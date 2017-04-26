#### USERS ####
User.destroy_all
guest = User.create(username: "guest", password: "password")

10.times do
  username = Faker::HarryPotter.unique.character
  password = Faker::Internet.password

  User.create(username: username, password: password)
end

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
haydn_mass = Album.create!(title: "Mass in C Major: Missa in tempore belli ", artist_id: haydn.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/haydn-mass.jpg")
holst_1 = Album.create!(title: "First Suite in E-flat for Military Band", artist_id: holst.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/holst-1.jpg")
holst_2 = Album.create!(title: "Second Suite in F for Military Band", artist_id: holst.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/holst-2.jpg")
mahler_1 = Album.create!(title: "Symphony No. 1 in D major", artist_id: mahler.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/mahler.jpg")
mozart_prague = Album.create!(title: "Symphony No. 38: Prague", artist_id: mozart.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/mozart-prague.jpg")
ravel_piano = Album.create!(title: "Selected Piano Works", artist_id: ravel.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/ravel-piano.jpg")
ravel_quartet = Album.create!(title: "String Quartet in F major", artist_id: ravel.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/ravel-quartet.jpg")
tchaikovsky_nutcracker = Album.create!(title: "The Nutcracker Suite", artist_id: tchaikovsky.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/tchaikovksy-nutcracker.jpg")
tchaikovsky_swan_lake = Album.create!(title: "Swan Lake", artist_id: tchaikovsky.id, image_url: "https://s3.amazonaws.com/fraudify-dev/album-art/tchaikovsky-swan-lake.jpg")
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

bach_goldberg_1 = Song.create!(title: "Aria", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 1, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_01_-_Aria.mp3")
bach_goldberg_2 = Song.create!(title: "Variatio 1. a 1 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 2, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_02_-_Variatio_1_a_1_Clav.mp3")
bach_goldberg_3 = Song.create!(title: "Variatio 2. a 1 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 3, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_03_-_Variatio_2_a_1_Clav.mp3")
bach_goldberg_4 = Song.create!(title: "Variatio 3. Canone all’Unisono. a 1 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 4, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_04_-_Variatio_3_a_1_Clav_Canone_allUnisuono.mp3")
bach_goldberg_5 = Song.create!(title: "Variatio 4. a 1 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 5, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_05_-_Variatio_4_a_1_Clav.mp3")
bach_goldberg_6 = Song.create!(title: "Variatio 5. a 1 ô vero 2 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 6, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_06_-_Variatio_5_a_1_ovvero_2_Clav.mp3")
bach_goldberg_7 = Song.create!(title: "Variatio 6. Canone alla Seconda. a 1 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 7, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_07_-_Variatio_6_a_1_Clav_Canone_alla_Seconda.mp3")
bach_goldberg_8 = Song.create!(title: "Variatio 7. a 1 ô vero 2 Clav. al tempo di Giga", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 8, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_08_-_Variatio_7_a_1_ovvero_2_Clav.mp3")
bach_goldberg_9 = Song.create!(title: "Variatio 8. a 2 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 9, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_09_-_Variatio_8_a_2_Clav.mp3")
bach_goldberg_10 = Song.create!(title: "Variatio 9. Canone alla Terza. a 1 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 10, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_10_-_Variatio_9_a_1_Clav_Canone_alla_Terza.mp3")
bach_goldberg_11 = Song.create!(title: "Variatio 10. Fughetta. a 1 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 11, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_11_-_Variatio_10_a_1_Clav_Fughetta.mp3")
bach_goldberg_12 = Song.create!(title: "Variatio 11. a 2 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 12, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_12_-_Variatio_11_a_2_Clav.mp3")
bach_goldberg_13 = Song.create!(title: "Variatio 12. a 1 Clav. Canone alla Quarta in moto contrario", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 13, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_13_-_Variatio_12_Canone_alla_Quarta.mp3")
bach_goldberg_14 = Song.create!(title: "Variatio 13. a 2 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 14, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_14_-_Variatio_13_a_2_Clav.mp3")
bach_goldberg_15 = Song.create!(title: "Variatio 14. a 2 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 15, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_15_-_Variatio_14_a_2_Clav.mp3")
bach_goldberg_16 = Song.create!(title: "Variatio 15. Canone alla Quinta. a 1 Clav.: Andante", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 16, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_16_-_Variatio_15_a_1_Clav_Canone_alla_Quinta.mp3")
bach_goldberg_17 = Song.create!(title: "Variatio 16. Ouverture. a 1 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 17, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_17_-_Variatio_16_a_1_Clav_Ouverture.mp3")
bach_goldberg_18 = Song.create!(title: "Variatio 17. a 2 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 18, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_18_-_Variatio_17_a_2_Clav.mp3")
bach_goldberg_19 = Song.create!(title: "Variatio 18. Canone alla Sesta. a 1 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 19, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_19_-_Variatio_18_a_1_Clav_Canone_alla_Sexta.mp3")
bach_goldberg_20 = Song.create!(title: "Variatio 19. a 1 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 20, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_20_-_Variatio_19_a_1_Clav.mp3")
bach_goldberg_21 = Song.create!(title: "Variatio 20. a 2 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 21, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_21_-_Variatio_20_a_2_Clav.mp3")
bach_goldberg_22 = Song.create!(title: "Variatio 21. Canone alla Settima", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 22, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_22_-_Variatio_21_Canone_alla_Settima.mp3")
bach_goldberg_23 = Song.create!(title: "Variatio 22. a 1 Clav. alla breve", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 23, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_23_-_Variatio_22_a_1_Clav.mp3")
bach_goldberg_24 = Song.create!(title: "Variatio 23. a 2 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 24, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_24_-_Variatio_23_a_2_Clav.mp3")
bach_goldberg_25 = Song.create!(title: "Variatio 24. Canone all'Ottava. a 1 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 25, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_25_-_Variatio_24_a_1_Clav_Canone_allOttava.mp3")
bach_goldberg_26 = Song.create!(title: "Variatio 25. a 2 Clav.: Adagio", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 26, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_26_-_Variatio_25_a_2_Clav.mp3")
bach_goldberg_27 = Song.create!(title: "Variatio 26. a 2 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 27, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_27_-_Variatio_26_a_2_Clav.mp3")
bach_goldberg_28 = Song.create!(title: "Variatio 27. Canone alla Nona. a 2 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 28, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_28_-_Variatio_27_a_2_Clav_Canone_alla_Nona.mp3")
bach_goldberg_29 = Song.create!(title: "Variatio 28. a 2 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 29, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_29_-_Variatio_28_a_2_Clav.mp3")
bach_goldberg_30 = Song.create!(title: "Variatio 29. a 1 ô vero 2 Clav.", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 30, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_30_-_Variatio_29_a_1_ovvero_2_Clav.mp3")
bach_goldberg_31 = Song.create!(title: "Variatio 30. a 1 Clav. Quodlibet", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 31, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_31_-_Variatio_30_a_1_Clav_Quodlibet.mp3")
bach_goldberg_32 = Song.create!(title: "Aria da Capo", artist_id: bach.id, album_id: bach_goldberg.id, album_ord: 32, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-goldberg/Kimiko_Ishizaka_-_32_-_Aria_da_Capo__Fine.mp3")

bach_wtc_1 = Song.create!(title: "No. 1: Prelude and Fugue in C major, BWV 846", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 1, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_01_-_Bach_Prelude___Fugue_1.mp3")
bach_wtc_2 = Song.create!(title: "No. 2: Prelude and Fugue in C minor, BWV 847", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 2, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_02_-_Bach_Prelude___Fugue_2.mp3")
bach_wtc_3 = Song.create!(title: "No. 3: Prelude and Fugue in C♯ major, BWV 848", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 3, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_03_-_Bach_Prelude___Fugue_3.mp3")
bach_wtc_4 = Song.create!(title: "No. 4: Prelude and Fugue in C♯ minor, BWV 849", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 4, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_04_-_Bach_Prelude___Fugue_4.mp3")
bach_wtc_5 = Song.create!(title: "No. 5: Prelude and Fugue in D major, BWV 850", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 5, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_05_-_Bach_Prelude___Fugue_5.mp3")
bach_wtc_6 = Song.create!(title: "No. 6: Prelude and Fugue in D minor, BWV 851", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 6, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_06_-_Bach_Prelude___Fugue_6.mp3")
bach_wtc_7 = Song.create!(title: "No. 7: Prelude and Fugue in E♭ major, BWV 852", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 7, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_07_-_Bach_Prelude___Fugue_7.mp3")
bach_wtc_8 = Song.create!(title: "No. 8: Prelude in E♭ minor and Fugue in D♯ minor, BWV 853", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 8, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_08_-_Bach_Prelude___Fugue_8.mp3")
bach_wtc_9 = Song.create!(title: "No. 9: Prelude and Fugue in E major, BWV 854", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 9, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_09_-_Bach_Prelude___Fugue_9.mp3")
bach_wtc_10 = Song.create!(title: "No. 10: Prelude and Fugue in E minor, BWV 855", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 10, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_10_-_Bach_Prelude___Fugue_10.mp3")
bach_wtc_11 = Song.create!(title: "No. 11: Prelude and Fugue in F major, BWV 856", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 11, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_11_-_Bach_Prelude___Fugue_11.mp3")
bach_wtc_12 = Song.create!(title: "No. 12: Prelude and Fugue in F minor, BWV 857", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 12, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_12_-_Bach_Prelude___Fugue_12.mp3")
bach_wtc_13 = Song.create!(title: "No. 13: Prelude and Fugue in F♯ major, BWV 858", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 13, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_13_-_Bach_Prelude___Fugue_13.mp3")
bach_wtc_14 = Song.create!(title: "No. 14: Prelude and Fugue in F♯ minor, BWV 859", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 14, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_14_-_Bach_Prelude___Fugue_14.mp3")
bach_wtc_15 = Song.create!(title: "No. 15: Prelude and Fugue in G major, BWV 860", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 15, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_15_-_Bach_Prelude___Fugue_15.mp3")
bach_wtc_16 = Song.create!(title: "No. 16: Prelude and Fugue in G minor, BWV 861", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 16, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_16_-_Bach_Prelude___Fugue_16.mp3")
bach_wtc_17 = Song.create!(title: "No. 17: Prelude and Fugue in A♭ major, BWV 862", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 17, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_17_-_Bach_Prelude___Fugue_17.mp3")
bach_wtc_18 = Song.create!(title: "No. 18: Prelude and Fugue in G♯ minor, BWV 863", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 18, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_18_-_Bach_Prelude___Fugue_18.mp3")
bach_wtc_19 = Song.create!(title: "No. 19: Prelude and Fugue in A major, BWV 864", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 19, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_19_-_Bach_Prelude___Fugue_19.mp3")
bach_wtc_20 = Song.create!(title: "No. 20: Prelude and Fugue in A minor, BWV 865", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 20, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_20_-_Bach_Prelude___Fugue_20.mp3")
bach_wtc_21 = Song.create!(title: "No. 21: Prelude and Fugue in B♭ major, BWV 866", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 21, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_21_-_Bach_Prelude___Fugue_21.mp3")
bach_wtc_22 = Song.create!(title: "No. 22: Prelude and Fugue in B♭ minor, BWV 867", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 22, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_22_-_Bach_Prelude___Fugue_22.mp3")
bach_wtc_23 = Song.create!(title: "No. 23: Prelude and Fugue in B major, BWV 868", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 23, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_23_-_Bach_Prelude___Fugue_23.mp3")
bach_wtc_24 = Song.create!(title: "No. 24: Prelude and Fugue in B minor, BWV 869", artist_id: bach.id, album_id: bach_wtc.id, album_ord: 24, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Bach-wtc/John_Lewis_Grant_-_24_-_Bach_Prelude___Fugue_24.mp3")

beethoven_8_1 = Song.create!(title: "I. Grave – Allegro di molto e con brio", artist_id: beethoven.id, album_id: beethoven_8.id, album_ord: 1, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Beethoven-pathetique/Daniel_Veesey_-_01_-_Sonata_8_Pathetique_-_I_Grave_-_Allegro_di_molto_e_con_brio.mp3")
beethoven_8_2 = Song.create!(title: "II. Adagio cantabile", artist_id: beethoven.id, album_id: beethoven_8.id, album_ord: 2, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Beethoven-pathetique/Daniel_Veesey_-_02_-_Sonata_8_Pathetique_-_II_Adagio_cantabile.mp3")
beethoven_8_3 = Song.create!(title: "III. Rondo: Allegro", artist_id: beethoven.id, album_id: beethoven_8.id, album_ord: 3, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Beethoven-pathetique/Daniel_Veesey_-_03_-_Sonata_8_Pathetique_-_III_Rondo_Allegro.mp3")

beethoven_15_1 = Song.create!(title: "I. Allegro", artist_id: beethoven.id, album_id: beethoven_15.id, album_ord: 1, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Beethoven-15/Karine_Gilanyan_-_Beethoven_-_Piano_Sonata_nr15_in_D_major_op28_Pastoral_-_I_Allegro.mp3")
beethoven_15_2 = Song.create!(title: "II. Andante", artist_id: beethoven.id, album_id: beethoven_15.id, album_ord: 2, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Beethoven-15/Karine_Gilanyan_-_Beethoven_-_Piano_Sonata_nr15_in_D_major_op28_Pastoral_-_II_Andante.mp3")
beethoven_15_3 = Song.create!(title: "III. Scherzo: Allegro vivace", artist_id: beethoven.id, album_id: beethoven_15.id, album_ord: 3, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Beethoven-15/Karine_Gilanyan_-_Beethoven_-_Piano_Sonata_nr15_in_D_major_op28_Pastoral_-_III_Scherzo_Allegro_Vivace.mp3")
beethoven_15_4 = Song.create!(title: "IV. Rondo: Allegro ma non troppo", artist_id: beethoven.id, album_id: beethoven_15.id, album_ord: 4, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Beethoven-15/Karine_Gilanyan_-_Beethoven_-_Piano_Sonata_nr15_in_D_major_op28_Pastoral_-_IV_Rondo_Allegro_ma_non_troppo.mp3")

beethoven_quartet_1 = Song.create!(title: "I. Allegro con brio", artist_id: beethoven.id, album_id: beethoven_quartet.id, album_ord: 1, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Beethoven-quartet/String+Quartet+No.+6+in+B+Flat+Major%2C+Op.+18%2C+No.+6+-+I.+Allegro+con+brio.mp3")
beethoven_quartet_2 = Song.create!(title: "II. Adagio, ma non troppo", artist_id: beethoven.id, album_id: beethoven_quartet.id, album_ord: 2, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Beethoven-quartet/String+Quartet+No.+6+in+B+Flat+Major%2C+Op.+18%2C+No.+6+-+II.+Adagio+ma+non+troppo.mp3")
beethoven_quartet_3 = Song.create!(title: "III. Scherzo: Allegro", artist_id: beethoven.id, album_id: beethoven_quartet.id, album_ord: 3, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Beethoven-quartet/String+Quartet+No.+6+in+B+Flat+Major%2C+Op.+18%2C+No.+6+-+III.+Scherzo+Allegro.mp3")
beethoven_quartet_4 = Song.create!(title: "IV. La Malinconia: Adagio", artist_id: beethoven.id, album_id: beethoven_quartet.id, album_ord: 4, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Beethoven-quartet/String+Quartet+No.+6+in+B+Flat+Major%2C+Op.+18%2C+No.+6+-+IV.+(Adagio)+La+Malinconia.mp3")

brahms_1_1 = Song.create!(title: "I. Un poco sostenuto – Allegro – Meno allegro", artist_id: brahms.id, album_id: brahms_1.id, album_ord: 1, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Brahms-1/Symphony+No.+1+in+C+Minor%2C+Op.+68+-+I.+Un+poco+sostenuto+-+Allegro.mp3")
brahms_1_2 = Song.create!(title: "II. Andante sostenuto", artist_id: brahms.id, album_id: brahms_1.id, album_ord: 2, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Brahms-1/Symphony+No.+1+in+C+Minor%2C+Op.+68+-+II.+Andante+sostenuto.mp3")
brahms_1_3 = Song.create!(title: "III. Un poco allegretto e grazioso", artist_id: brahms.id, album_id: brahms_1.id, album_ord: 3, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Brahms-1/Symphony+No.+1+in+C+Minor%2C+Op.+68+-+III.+Un+poco+allegretto+e+grazioso.mp3")
brahms_1_4 = Song.create!(title: "IV. Adagio – Più andante – Allegro non troppo, ma con brio – Più allegro", artist_id: brahms.id, album_id: brahms_1.id, album_ord: 4, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Brahms-1/Symphony+No.+1+in+C+Minor%2C+Op.+68+-+IV.+Adagio+-+Piu%CC%80+andante+-+Allegro+non+troppo%2C+ma+con+brio.mp3")

brahms_104_1 = Song.create!(title: "Nachtwache I", artist_id: brahms.id, album_id: brahms_104.id, album_ord: 1, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Brahms-104/2981_kaiser_brahms-op104-01-dfff070f-05b4-42f0-8546-96596df80ea8.mp3")
brahms_104_2 = Song.create!(title: "Nachtwache II", artist_id: brahms.id, album_id: brahms_104.id, album_ord: 2, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Brahms-104/2981_kaiser_brahms-op104-02-fd46dc94-3342-40a6-a648-4f4d42efa5e4.mp3")
brahms_104_3 = Song.create!(title: "Letztes Glück", artist_id: brahms.id, album_id: brahms_104.id, album_ord: 3, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Brahms-104/2981_kaiser_brahms-op104-03-9d503282-357b-4f47-93b8-7b9a287718c8.mp3")
brahms_104_4 = Song.create!(title: "Verlorene Jugend", artist_id: brahms.id, album_id: brahms_104.id, album_ord: 4, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Brahms-104/2981_kaiser_brahms-op104-04-d06181f5-09fa-4336-b06d-557234c97e2e.mp3")
brahms_104_5 = Song.create!(title: "Im Herbst", artist_id: brahms.id, album_id: brahms_104.id, album_ord: 5, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Brahms-104/2981_kaiser_brahms-op104-05-e79dd4f7-2e1f-4650-8164-27a6521189f8.mp3")

brahms_93_1 = Song.create!(title: "Der bucklichte Fiedler", artist_id: brahms.id, album_id: brahms_93.id, album_ord: 1, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Brahms-93a/2956_imslp310011-pmlp52875-ev_kaiser_brahms-op93a-01-dd01a92a-eec8-4655-9c7c-51e7c46afc34.mp3")
brahms_93_2 = Song.create!(title: "Das Mädchen", artist_id: brahms.id, album_id: brahms_93.id, album_ord: 2, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Brahms-93a/2956_imslp310012-pmlp52875-ev_kaiser_brahms-op93a-02-5059b7a5-111e-4408-812c-d4a7c0561936.mp3")
brahms_93_3 = Song.create!(title: "O süßer Mai!", artist_id: brahms.id, album_id: brahms_93.id, album_ord: 3, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Brahms-93a/2956_imslp310013-pmlp52875-ev_kaiser_brahms-op93a-03-78e80f95-467b-4204-bc0e-5677c840a09c.mp3")
brahms_93_4 = Song.create!(title: "Fahr’ wohl!", artist_id: brahms.id, album_id: brahms_93.id, album_ord: 4, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Brahms-93a/2956_imslp310014-pmlp52875-ev_kaiser_brahms-op93a-04-93a77789-a707-4777-867f-e30faf6fba5c.mp3")
brahms_93_5 = Song.create!(title: "Der Falke", artist_id: brahms.id, album_id: brahms_93.id, album_ord: 5, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Brahms-93a/2956_imslp310015-pmlp52875-ev_kaiser_brahms-op93a-05-4d625509-55bc-47f6-8013-9933125e25d0.mp3")
brahms_93_6 = Song.create!(title: "Beherzigung", artist_id: brahms.id, album_id: brahms_93.id, album_ord: 6, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Brahms-93a/2956_imslp310016-pmlp52875-ev_kaiser_brahms-op93a-06-fe63eba1-d7c5-4da8-9789-6c5f8d8bd788.mp3")

haydn_mass_1 = Song.create!(title: "I. Kyrie", artist_id: haydn.id, album_id: haydn_mass.id, album_ord: 1, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Haydn-mass/PMLP153736-Haydn-missa_in_tempore_belli-1-kyrie.mp3")
haydn_mass_2 = Song.create!(title: "II. Gloria", artist_id: haydn.id, album_id: haydn_mass.id, album_ord: 2, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Haydn-mass/PMLP153736-Haydn-missa_in_tempore_belli-2-gloria.mp3")
haydn_mass_3 = Song.create!(title: "III. Credo", artist_id: haydn.id, album_id: haydn_mass.id, album_ord: 3, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Haydn-mass/PMLP153736-Haydn-missa_in_tempore_belli-3-credo.mp3")
haydn_mass_4 = Song.create!(title: "IV. Sanctus", artist_id: haydn.id, album_id: haydn_mass.id, album_ord: 4, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Haydn-mass/PMLP153736-Haydn-missa_in_tempore_belli-4-sanctus.mp3")
haydn_mass_5 = Song.create!(title: "V. Benedictus", artist_id: haydn.id, album_id: haydn_mass.id, album_ord: 5, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Haydn-mass/PMLP153736-Haydn-missa_in_tempore_belli-5-benedictus.mp3")
haydn_mass_6 = Song.create!(title: "VI. Agnus Dei", artist_id: haydn.id, album_id: haydn_mass.id, album_ord: 6, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Haydn-mass/PMLP153736-Haydn-missa_in_tempore_belli-6-agnusdei.mp3")

holst_1_1 = Song.create!(title: "I. Chaconne", artist_id: holst.id, album_id: holst_1.id, album_ord: 1, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Holst-1/Holst+-+Suite+No.+1+in+E-flat+Chaconne.mp3")
holst_1_2 = Song.create!(title: "II. Intermezzo", artist_id: holst.id, album_id: holst_1.id, album_ord: 2, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Holst-1/Holst+-+Suite+No.+1+in+E-flat+Intermezzo.mp3")
holst_1_3 = Song.create!(title: "III. March", artist_id: holst.id, album_id: holst_1.id, album_ord: 3, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Holst-1/Holst+-+Suite+No.+1+in+E-flat+March.mp3")

holst_2_1 = Song.create!(title: "I. March", artist_id: holst.id, album_id: holst_2.id, album_ord: 1, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Holst-2/3075_suite-for-military-band-op-28-no-2-1-d5a8ac97-9b90-4a8e-8631-18919186c782.mp3")
holst_2_2 = Song.create!(title: "II. Song without Words: \"I'll Love My Love\"", artist_id: holst.id, album_id: holst_2.id, album_ord: 2, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Holst-2/3075_suite-for-military-band-op-28-no-2-2-af44da32-ad75-4f43-940b-729f8c7341e0.mp3")
holst_2_3 = Song.create!(title: "III. Song of the Blacksmith", artist_id: holst.id, album_id: holst_2.id, album_ord: 3, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Holst-2/3075_suite-for-military-band-op-28-no-2-3-5803c2e2-370d-4590-b8f4-58a9d0b0ad71.mp3")
holst_2_4 = Song.create!(title: "IV. Fantasia on the \"Dargason\"", artist_id: holst.id, album_id: holst_2.id, album_ord: 4, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Holst-2/3075_suite-for-military-band-op-28-no-2-4-ba429ca3-f870-47f9-b3f6-d22b5e114d32.mp3")

mahler_1_1 = Song.create!(title: "I. Langsam, schleppend - Immer sehr gemächlich", artist_id: mahler.id, album_id: mahler_1.id, album_ord: 1, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Mahler-1/2993_imslp270843-pmlp15427-dso20120512-005-mahler-symphony-no1-mvti-langsam-schleppend-85a79a67-0ee7-4b8a-a163-f249b22171ac.mp3")
mahler_1_2 = Song.create!(title: "II. Kräftig bewegt, doch nicht zu schnell, Recht gemächlich", artist_id: mahler.id, album_id: mahler_1.id, album_ord: 2, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Mahler-1/2993_imslp270844-pmlp15427-dso20120512-006-mahler-symphony-no1-mvtii-kraftig-bewegt-0db8ce11-e47c-4c91-a04f-09e941d08e05.mp3")
mahler_1_3 = Song.create!(title: "III. Feierlich und gemessen, ohne zu schleppen", artist_id: mahler.id, album_id: mahler_1.id, album_ord: 3, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Mahler-1/2993_imslp270845-pmlp15427-dso20120512-007-mahler-symphony-no1-mvtiii-feierlich-und-gemessen-3654eaf4-79b8-475a-9a31-f7921e7ffc4a.mp3")
mahler_1_4 = Song.create!(title: "IV. Stürmisch bewegt – Energisch", artist_id: mahler.id, album_id: mahler_1.id, album_ord: 4, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Mahler-1/2993_imslp270846-pmlp15427-dso20120512-008-mahler-symphony-no1-mvtiv-sturmisch-bewegt-21fd8c2e-b758-4342-b1b9-3071549b50f2.mp3")

mozart_38_1 = Song.create!(title: "I. Adagio — Allegro", artist_id: mozart.id, album_id: mozart_38.id, album_ord: 1, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Mozart-38/2365_i-adagio-allegro-26b8c1bc-952d-484c-bd57-4e306b76a1f5.mp3")
mozart_38_2 = Song.create!(title: "II. Andante", artist_id: mozart.id, album_id: mozart_38.id, album_ord: 2, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Mozart-38/2365_ii-andante-f58b7b8d-7784-45f1-8fbd-c986ac7aa8ea.mp3")
mozart_38_3 = Song.create!(title: "III. Finale - Presto", artist_id: mozart.id, album_id: mozart_38.id, album_ord: 3, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Mozart-38/2365_iii-finale-presto-8d57f3e9-de4c-4e0d-8752-3ce969280c9f.mp3")

ravel_quartet_1 = Song.create!(title: "I. Allegro moderato – très doux", artist_id: ravel.id, album_id: ravel_quartet.id, album_ord: 1, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Ravel-quartet/3073_i-allegro-moderato-80bf3f3d-f4bb-408e-9844-5c7996a64711.mp3")
ravel_quartet_2 = Song.create!(title: "II. Assez vif – très rythmé", artist_id: ravel.id, album_id: ravel_quartet.id, album_ord: 2, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Ravel-quartet/3073_ii-assez-vif-tres-rythme-35959928-4efe-4ffa-a40e-c004ba8962a2.mp3")
ravel_quartet_3 = Song.create!(title: "III. Très lent", artist_id: ravel.id, album_id: ravel_quartet.id, album_ord: 3, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Ravel-quartet/3073_tres-lent-4d9190d5-5a4c-4613-94b8-7f89db0506f1.mp3")
ravel_quartet_4 = Song.create!(title: "IV. Vif et agité", artist_id: ravel.id, album_id: ravel_quartet.id, album_ord: 4, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Ravel-quartet/3073_vif-et-agite-709c8bdb-a865-4ce3-bc74-8efeb0c9afa4.mp3")

ravel_piano_1 = Song.create!(title: "Miroirs - I. \"Noctuelles\"", artist_id: ravel.id, album_id: ravel_piano.id, album_ord: 1, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Ravel-piano/Felipe_Sarro_-_01_-_Ravel_-_Miroirs_I__Noctuelles.mp3")
ravel_piano_2 = Song.create!(title: "Miroirs - II. \"Oiseaux tristes\"", artist_id: ravel.id, album_id: ravel_piano.id, album_ord: 2, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Ravel-piano/Felipe_Sarro_-_02_-_Ravel_-_Miroirs_II__Oiseaux_Tristes.mp3")
ravel_piano_3 = Song.create!(title: "Miroirs - III. \"Une barque sur l'océan\"", artist_id: ravel.id, album_id: ravel_piano.id, album_ord: 3, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Ravel-piano/Felipe_Sarro_-_03_-_Ravel_-_Miroirs_III__Une_Barque_Sur_LOcan.mp3")
ravel_piano_4 = Song.create!(title: "Miroirs - IV. \"Alborada del gracioso\"", artist_id: ravel.id, album_id: ravel_piano.id, album_ord: 4, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Ravel-piano/Felipe_Sarro_-_04_-_Ravel_-_Miroirs__IV__Alborad.mp3")
ravel_piano_5 = Song.create!(title: "Miroirs - V. \"La vallée des cloches\"", artist_id: ravel.id, album_id: ravel_piano.id, album_ord: 5, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Ravel-piano/Felipe_Sarro_-_05_-_Ravel_-_Miroirs__V__La_Valle_Des_Cloches.mp3")
ravel_piano_6 = Song.create!(title: "Ma mère l'Oye - I. Pavane de la Belle au bois dormant", artist_id: ravel.id, album_id: ravel_piano.id, album_ord: 6, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Ravel-piano/Felipe_Sarro_-_06_-_Ravel_-_Ma_Mere_LOye_-_1_Pavane_De_La_Belle_Au_Bois_Dormant.mp3")
ravel_piano_7 = Song.create!(title: "Ma mère l'Oye - II. Petit Poucet", artist_id: ravel.id, album_id: ravel_piano.id, album_ord: 7, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Ravel-piano/Felipe_Sarro_-_07_-_Ravel_-_Ma_Mere_LOye_-_2_Petit_Poucet.mp3")
ravel_piano_8 = Song.create!(title: "Ma mère l'Oye - III. Laideronnette, impératrice des pagodes", artist_id: ravel.id, album_id: ravel_piano.id, album_ord: 8, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Ravel-piano/Felipe_Sarro_-_08_-_Ravel_-_Ma_Mere_LOye_-_3_Laideronnette_Impratrice_des_Padoges.mp3")
ravel_piano_9 = Song.create!(title: "Ma mère l'Oye - IV. Les entretiens de la belle et de la bête", artist_id: ravel.id, album_id: ravel_piano.id, album_ord: 9, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Ravel-piano/Felipe_Sarro_-_09_-_Ravel_-_Ma_Mere_LOye_-_4_Les_Entretiens_De_La_Belle_Et_De_La_Bete.mp3")
ravel_piano_10 = Song.create!(title: "Ma mère l'Oye - V. Le jardin féerique", artist_id: ravel.id, album_id: ravel_piano.id, album_ord: 10, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Ravel-piano/Felipe_Sarro_-_10_-_Ravel_-_Ma_mere_loye_-_5_Le_Jardin_Feerique.mp3")
ravel_piano_11 = Song.create!(title: "Menuet Antique", artist_id: ravel.id, album_id: ravel_piano.id, album_ord: 11, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Ravel-piano/Felipe_Sarro_-_11_-_Ravel_-_Menuet_Antique.mp3")
ravel_piano_12 = Song.create!(title: "Menuet sur le nom d'Haydn", artist_id: ravel.id, album_id: ravel_piano.id, album_ord: 12, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Ravel-piano/Felipe_Sarro_-_12_-_Ravel_-_Menuet_Sur_Le_Nom_De_Haydn.mp3")
ravel_piano_13 = Song.create!(title: "Pavane pour une infante défunte", artist_id: ravel.id, album_id: ravel_piano.id, album_ord: 13, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Ravel-piano/Felipe_Sarro_-_13_-_Ravel_-_Pavane_Pour_Une_Infante_Dfunte.mp3")
ravel_piano_14 = Song.create!(title: "Kaddisch (transcribed for solo piano by A. Siloti)", artist_id: ravel.id, album_id: ravel_piano.id, album_ord: 14, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Ravel-piano/Felipe_Sarro_-_14_-_Ravel_-_Kaddisch_transcribed_by_Siloti.mp3")
ravel_piano_15 = Song.create!(title: "Bolero (transcribed for solo piano by R. Branga)", artist_id: ravel.id, album_id: ravel_piano.id, album_ord: 15, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Ravel-piano/Felipe_Sarro_-_15_-_Ravel_-_Bolro_transcribed_by_Branga.mp3")

tchaikovsky_nutcracker_1 = Song.create!(title: "Overture", artist_id: tchaikovsky.id, album_id: tchaikovsky_nutcracker.id, album_ord: 1, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Tchaikovsky-nutcracker/Tchaikovsky+-+The+Nutcracker+Suite+-+Act+I%2C+No.1.+Overture.mp3")
tchaikovsky_nutcracker_2 = Song.create!(title: "March", artist_id: tchaikovsky.id, album_id: tchaikovsky_nutcracker.id, album_ord: 2, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Tchaikovsky-nutcracker/Tchaikovsky+-+The+Nutcracker+Suite+-+Act+I%2C+No.2.+March.mp3")
tchaikovsky_nutcracker_3 = Song.create!(title: "Dance of the Sugar Plum Fairy", artist_id: tchaikovsky.id, album_id: tchaikovsky_nutcracker.id, album_ord: 3, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Tchaikovsky-nutcracker/Tchaikovsky+-+The+Nutcracker+Suite+-+Act+I%2C+No.3.+Dance+of+the+Sugar+Plum+Fairy.mp3")
tchaikovsky_nutcracker_4 = Song.create!(title: "Russian Dance", artist_id: tchaikovsky.id, album_id: tchaikovsky_nutcracker.id, album_ord: 4, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Tchaikovsky-nutcracker/Tchaikovsky+-+The+Nutcracker+Suite+-+Act+I%2C+No.4.+Russian+Dance.mp3")
tchaikovsky_nutcracker_5 = Song.create!(title: "Arabian Dance", artist_id: tchaikovsky.id, album_id: tchaikovsky_nutcracker.id, album_ord: 5, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Tchaikovsky-nutcracker/6043_Tchaikovsky+-+The+Nutcracker+Suite+-+Act+I%2C+No.5.+Arabian+Dance.mp3")
tchaikovsky_nutcracker_6 = Song.create!(title: "Chinese Dance", artist_id: tchaikovsky.id, album_id: tchaikovsky_nutcracker.id, album_ord: 6, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Tchaikovsky-nutcracker/Tchaikovsky+-+The+Nutcracker+Suite+-+Act+I%2C+No.6.+Chinese+Dance.mp3")
tchaikovsky_nutcracker_7 = Song.create!(title: "Dance of the Flutes", artist_id: tchaikovsky.id, album_id: tchaikovsky_nutcracker.id, album_ord: 7, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Tchaikovsky-nutcracker/Tchaikovsky+-+The+Nutcracker+Suite+-+Act+I%2C+No.7.+Dance+of+the+Flutes.mp3")
tchaikovsky_nutcracker_8 = Song.create!(title: "Waltz of the Flowers", artist_id: tchaikovsky.id, album_id: tchaikovsky_nutcracker.id, album_ord: 8, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Tchaikovsky-nutcracker/Tchaikovsky+-+The+Nutcracker+Suite+-+Act+I%2C+No.8.+Waltz+of+the+Flowers.mp3")

tchaikovsky_swan_lake_1 = Song.create!(title: "Act I Intro", artist_id: tchaikovsky.id, album_id: tchaikovsky_swan_lake.id, album_ord: 1, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Tchaikovksy-swan-lake/Tchaikovsky+-+Swan+Lake+Op.20+-+Act+I+Intro.mp3")
tchaikovsky_swan_lake_2 = Song.create!(title: "Act II Pt. 1", artist_id: tchaikovsky.id, album_id: tchaikovsky_swan_lake.id, album_ord: 2, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Tchaikovksy-swan-lake/Tchaikovsky+-+Swan+Lake+Op.20+-+Act+II+Pt.1.mp3")
tchaikovsky_swan_lake_3 = Song.create!(title: "Act II Pt. 2", artist_id: tchaikovsky.id, album_id: tchaikovsky_swan_lake.id, album_ord: 3, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Tchaikovksy-swan-lake/Tchaikovsky+-+Swan+Lake+Op.20+-+Act+II+Concl.mp3")
tchaikovsky_swan_lake_4 = Song.create!(title: "Act III Pt. 1", artist_id: tchaikovsky.id, album_id: tchaikovsky_swan_lake.id, album_ord: 4, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Tchaikovksy-swan-lake/Tchaikovsky+-+Swan+Lake+Op.20+-+Act+III+Pt.1.mp3")
tchaikovsky_swan_lake_5 = Song.create!(title: "Act III Pt. 2", artist_id: tchaikovsky.id, album_id: tchaikovsky_swan_lake.id, album_ord: 5, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Tchaikovksy-swan-lake/Tchaikovsky+-+Swan+Lake+Op.20+-+Act+III+Concl%2C+Allegro.mp3")
tchaikovsky_swan_lake_6 = Song.create!(title: "Act IV", artist_id: tchaikovsky.id, album_id: tchaikovsky_swan_lake.id, album_ord: 6, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Tchaikovksy-swan-lake/Tchaikovsky+-+Swan+Lake+Op.20+-+Act+IV+Intro.mp3")

vivaldi_four_seasons_1 = Song.create!(title: "Spring Mvt. 1", artist_id: vivaldi.id, album_id: vivaldi_four_seasons.id, album_ord: 1, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Vivaldi-four-seasons/John_Harrison_with_the_Wichita_State_University_Chamber_Players_-_01_-_Spring_Mvt_1_Allegro.mp3")
vivaldi_four_seasons_2 = Song.create!(title: "Spring Mvt. 2", artist_id: vivaldi.id, album_id: vivaldi_four_seasons.id, album_ord: 2, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Vivaldi-four-seasons/John_Harrison_with_the_Wichita_State_University_Chamber_Players_-_02_-_Spring_Mvt_2_Largo.mp3")
vivaldi_four_seasons_3 = Song.create!(title: "Spring Mvt. 3", artist_id: vivaldi.id, album_id: vivaldi_four_seasons.id, album_ord: 3, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Vivaldi-four-seasons/John_Harrison_with_the_Wichita_State_University_Chamber_Players_-_03_-_Spring_Mvt_3_Allegro_pastorale.mp3")
vivaldi_four_seasons_4 = Song.create!(title: "Summer Mvt. 1", artist_id: vivaldi.id, album_id: vivaldi_four_seasons.id, album_ord: 4, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Vivaldi-four-seasons/John_Harrison_with_the_Wichita_State_University_Chamber_Players_-_04_-_Summer_Mvt_1_Allegro_non_molto.mp3")
vivaldi_four_seasons_5 = Song.create!(title: "Summer Mvt. 2", artist_id: vivaldi.id, album_id: vivaldi_four_seasons.id, album_ord: 5, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Vivaldi-four-seasons/John_Harrison_with_the_Wichita_State_University_Chamber_Players_-_05_-_Summer_Mvt_2_Adagio.mp3")
vivaldi_four_seasons_6 = Song.create!(title: "Summer Mvt. 3", artist_id: vivaldi.id, album_id: vivaldi_four_seasons.id, album_ord: 6, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Vivaldi-four-seasons/John_Harrison_with_the_Wichita_State_University_Chamber_Players_-_06_-_Summer_Mvt_3_Presto.mp3")
vivaldi_four_seasons_7 = Song.create!(title: "Autumn Mvt. 1", artist_id: vivaldi.id, album_id: vivaldi_four_seasons.id, album_ord: 7, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Vivaldi-four-seasons/John_Harrison_with_the_Wichita_State_University_Chamber_Players_-_07_-_Autumn_Mvt_1_Allegro.mp3")
vivaldi_four_seasons_8 = Song.create!(title: "Autumn Mvt. 2", artist_id: vivaldi.id, album_id: vivaldi_four_seasons.id, album_ord: 8, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Vivaldi-four-seasons/John_Harrison_with_the_Wichita_State_University_Chamber_Players_-_08_-_Autumn_Mvt_2_Adagio_molto.mp3")
vivaldi_four_seasons_9 = Song.create!(title: "Autumn Mvt. 3", artist_id: vivaldi.id, album_id: vivaldi_four_seasons.id, album_ord: 9, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Vivaldi-four-seasons/John_Harrison_with_the_Wichita_State_University_Chamber_Players_-_09_-_Autumn_Mvt_3_Allegro.mp3")
vivaldi_four_seasons_10 = Song.create!(title: "Winter Mvt. 1", artist_id: vivaldi.id, album_id: vivaldi_four_seasons.id, album_ord: 10, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Vivaldi-four-seasons/John_Harrison_with_the_Wichita_State_University_Chamber_Players_-_10_-_Winter_Mvt_1_Allegro_non_molto.mp3")
vivaldi_four_seasons_11 = Song.create!(title: "Winter Mvt. 2", artist_id: vivaldi.id, album_id: vivaldi_four_seasons.id, album_ord: 11, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Vivaldi-four-seasons/John_Harrison_with_the_Wichita_State_University_Chamber_Players_-_11_-_Winter_Mvt_2_Largo.mp3")
vivaldi_four_seasons_12 = Song.create!(title: "Winter Mvt. 3", artist_id: vivaldi.id, album_id: vivaldi_four_seasons.id, album_ord: 12, audio_url: "https://s3.amazonaws.com/fraudify-dev/audio-files/Vivaldi-four-seasons/John_Harrison_with_the_Wichita_State_University_Chamber_Players_-_12_-_Winter_Mvt_3_Allegro.mp3")

songs = Song.all


#### PLAYLISTS ####
Playlist.destroy_all
users.each do |user|
  num = rand(1..5)
  num.times do
    Playlist.create!(name: Faker::Hipster.word, creator_id: user.id)
  end
end

playlists = Playlist.all


#### PLAYLIST_SONGS ####
PlaylistSong.destroy_all

playlists.each do |playlist|
  num = rand(3..8)
  num.times do |i|
    PlaylistSong.create!(playlist_id: playlist.id, song_id: songs.sample.id, ord: i)
  end
end
