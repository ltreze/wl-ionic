angular.module('starter.controllers', [])

.controller('MainController', function($scope, $stateParams, MainService) {
	
    $scope.moviesRepeat = MainService.getAllMovies();
	
    $scope.movie = MainService.getMovie($stateParams.movieId);
	
    $scope.remove = function(movie) {
        MainService.removeMovieFromWatchListt(movie);
    };
	
	//usado na aba SEARCH
    $scope.searchMovies = function(term){
        if(term != undefined) { 
            $scope.searchResults = MainService.searchMovies(term);
        }
    };	
	
});