(function() {
  function dataService() {
    var Data = {};
    var albumBoneym = {
      title: '20 Super Hits',
      artist: 'Boney M.',
      label: 'Hansa',
      year: '1979',
      albumArtUrl: '/assets/images/boneym.jpg',
      songs: [
        { title: 'Brown Girl in the Ring', duration: '4:26', audioUrl: "/assets/music/Brown Girl in the Ring" },
        { title: 'Daddy Cool', duration: '3:25', audioUrl: '/assets/music/Daddy Cool' },
        { title: 'Gotta Go Home', duration: '3:14', audioUrl: '/assets/music/Gotta Go Home' },
        { title: "Hooray! Hooray! It's a Holi-Holiday", duration: '5:01', audioUrl: "/assets/music/Hooray! Hooray! It's a Holi-Holiday" },
        { title: 'Rasputin', duration: '2:15', audioUrl: '/assets/music/Rasputin' },
        { title: 'Rivers of Babylon', duration: '4:14', audioUrl: '/assets/music/Rivers of Babylon' },
        { title: 'Sunny', duration: '3:55', audioUrl: '/assets/music/Sunny' }
      ]
    };

    Data.getAlbum = function() {
      return albumBoneym;
    };

    return Data;
  }

  angular
    .module('neon')
    .factory('DataService', dataService);
})();