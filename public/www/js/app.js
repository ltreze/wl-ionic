// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
	  //console.warn('xxxxxxxxxxxxxxxxxxxxxxxx');
	  //console.warn(cordova.plugins);
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
	
	//var appID = 633462590141225;
	//$cordovaFacebookProvider.browserInit(appID, version);
	
	
	$stateProvider
	//setup an abstract state for the tabs directive
    .state('tab', {
		url: '/tab',
		abstract: true,
		templateUrl: 'templates/tabs.html'
	})
	
	// Each tab has its own nav history stack:
	
	.state('tab.search', {
		url: '/search',
		views: {
			'tab-search': {
				templateUrl: 'templates/tab-search.html',
				controller: 'MainController'
			}
		}
	})
    .state('tab.search-movie-detail', {
		url: '/search/movie/:movieId',
		views: {
			'tab-search': {
				templateUrl: 'templates/movie-detail.html',
				controller: 'MainController'
			}
		}
	})

	.state('tab.mywl', {
		url: '/mywl',
		views: {
			'tab-mywl': {
				templateUrl: 'templates/tab-mywl.html',
				controller: 'MainController'
			}
		}
    })
    .state('tab.watchlistt-movie-detail', {
		url: '/watchlistt-movie-detail/:movieId',
		views: {
			'tab-mywl': {
				templateUrl: 'templates/movie-detail.html',
				controller: 'MainController'
			}
		}
    })

	.state('tab.account', {
		url: '/account',
		views: {
			'tab-account': {
				templateUrl: 'templates/tab-account.html',
				controller: 'MainController'
			}
		}
	});

	$urlRouterProvider.otherwise('/tab/search');
});