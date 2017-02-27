(function() {
  function songService(DataService) {
    var SongPlayer = {};
    var currentBuzzObject = null;
    var setSong = function(song) {
      if (currentBuzzObject) {
        currentBuzzObject.stop();
        SongPlayer.currentSong = null;
      }
      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });
      SongPlayer.currentSong = song;
    };

    SongPlayer.currentSong = null;

    SongPlayer.click = function(song) {
    if (SongPlayer.currentSong == song) {
      if (currentBuzzObject.isPaused()) {
       // currently pausing, play this song
        currentBuzzObject.play();
        song.playing = true;
        song.pausing = false;
      }
      else {
        // playing, pause this song
        currentBuzzObject.pause();
        song.playing = false;
        song.pausing = true;
      }
    }
    else {
      if (SongPlayer.currentSong != null) {
        // a song is regd, stop it and delete it
        if (currentBuzzObject) {
          currentBuzzObject.stop();
          SongPlayer.currentSong.playing = false;
          SongPlayer.currentSong.pausing = false;
        }
      }
      //no songs regd, reg it then play it
      setSong(song);
      currentBuzzObject.play();
      song.playing = true;
      song.pausing = false;
    }
  }
















    //  /**
    // * @desc Buzz object audio file
    // * @type {Object}
    // */
    // var currentBuzzObject = null;

    //    /**
    // * @desc Album information
    // * @type {Object}
    // */
    // var currentAlbum = Fixtures.getAlbum();

    // /**
    // * @function setSong
    // * @desc Stops currently playing song and loads new audio file as currentBuzzObject
    // * @param {Object} song
    // */
    // var setSong = function(song) {
    //   if (currentBuzzObject) {
    //     currentBuzzObject.stop();
    //     SongPlayer.currentSong.playing = null;
    //   }
    //   currentBuzzObject = new buzz.sound(song.audioUrl, {
    //     formats: ['mp3'],
    //     preload: true
    //   });
    //   SongPlayer.currentSong = song;
    // };

    // /**
    // * @function getSongIndex
    // * @desc Gets currently playing song index of current album
    // * @param {Object} song
    // */
    // var getSongIndex = function(song) {
    //   return currentAlbum.songs.indexOf(song);
    // };

    //  /**
    // * @function playSong
    // * @desc Plays selecting song and sets playing property of the song to true
    // * @param {Object} song
    // */
    // var playSong = function(song) {
    //   currentBuzzObject.play();
    //   song.playing = true;
    // };

    //  /**
    // * @function stopSong
    // * @desc Stops selecting song and sets playing property of the song to false
    // */
    // var stopSong = function() {
    //   currentBuzzObject.stop();
    //   SongPlayer.currentSong.playing = null;
    // };

    //  /**
    // * @desc Current selected song
    // * @type {Object}
    // */
    // SongPlayer.currentSong = null;

    //  *
    // * @function play
    // * @desc Plays selecting song and sets playing property of the song to true
    // * @param {Object} song

    // SongPlayer.play = function(song) {
    //   song = song || SongPlayer.currentSong;
    //   if (SongPlayer.currentSong !== song) {
    //     setSong(song);
    //     playSong(song);
    //   }
    //   else if (SongPlayer.currentSong === song) {
    //     if (currentBuzzObject.isPaused()) {
    //       playSong(song);
    //     }
    //   }
    // };

    // /**
    // * @function pause
    // * @desc Pauses playing song and sets playing property of the song to false
    // * @param {Object} song
    // */
    // SongPlayer.pause = function(song) {
    //   song = song || SongPlayer.currentSong;
    //   currentBuzzObject.pause();
    //   song.playing = false;
    // };

    // /**
    // * @function previous
    // * @desc Sets current song index to the previous song
    // */
    // SongPlayer.previous = function() {
    //   var currentSongIndex = getSongIndex(SongPlayer.currentSong);
    //   currentSongIndex--;
    //   if (currentSongIndex < 0) {
    //     stopSong();
    //   }
    //   else {
    //     var song = currentAlbum.songs[currentSongIndex];
    //     setSong(song);
    //     playSong(song);
    //   }
    // };

    // /**
    // * @function next
    // * @desc Sets current song index to the next song
    // */
    // SongPlayer.next = function() {
    //   var currentSongIndex = getSongIndex(SongPlayer.currentSong);
    //   currentSongIndex++;
    //   if (currentSongIndex > currentAlbum.songs.length-1) {
    //     stopSong();
    //   }
    //   else {
    //     var song = currentAlbum.songs[currentSongIndex];
    //     setSong(song);
    //     playSong(song);
    //   }
    // };




    return SongPlayer;
  }

  angular
    .module('neon')
    .factory('SongService', ['DataService', songService]);
})();