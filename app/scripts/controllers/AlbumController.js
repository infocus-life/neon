(function() {
  function AlbumController(DataService, SongService) {
    this.albumData = DataService.getAlbum();
    this.albumSong = SongService;
  }

  angular
    .module('neon')
    .controller('AlbumController', ['DataService', "SongService", AlbumController]);
})();
