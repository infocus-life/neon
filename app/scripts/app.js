(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/templates/home.html'
      })
      .state('album', {
        url: '/album',
        controller: "AlbumController as album",
        templateUrl: '/templates/album.html'
      })
      .state('colortest', {
        url: '/colortest',
        templateUrl: '/templates/colortest.html'
      });
  }
  angular
    .module('neon', ['ui.router'])
    .config(config);
})();
