angular.module('starter.services', [])   

.factory('MainService', function() {
	var movies = [
		{ id: 0, name: 'Domésticas - O Filme (2001)', imdb_id: 'tt0279783', resenha: 'Five maids in São Paulo are observed in this episodic, impressionistic film. The women interact with each other, ride busses, work, and have longings: Rai for a husband, Créo for her lost ...', face: 'img/domesticas.png'}, 
		{ id: 1, name: 'Cidade de Deus (2002)', imdb_id: 'tt0317248', resenha: 'Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.', face: 'img/cidade.png' }, 
		{ id: 2, name: 'Batman (1989)', imdb_id: 'tt0096895', resenha: 'The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.', face: 'img/batman.jpg'}, 
		{ id: 3, name: 'El Affaire dominici (1973)', imdb_id: 'tt0068176', resenha: 'Albert is an inn owner who vowed never to drink again if he and his wife survived the war. They did, and the reformed alcoholic keeps his vow. But times have changed and soon after the war,...', face: 'img/affaire.png' }, 
		{ id: 4, name: 'Interestellar (2014)', imdb_id: 'tt0816692', resenha: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.', face: 'img/interestellar.png'}];
	
	//var myWatchListt = {};
	
	var myWatchListt = 
		{ "name": "MyWatchListt", "movies": [ 
		{ id: 0, name: 'Domésticas - O Filme (2001)', imdb_id: 'tt0279783', resenha: 'Five maids in São Paulo are observed in this episodic, impressionistic film. The women interact with each other, ride busses, work, and have longings: Rai for a husband, Créo for her lost ...', face: 'img/domesticas.png'}, 
		{ id: 1, name: 'Cidade de Deus (2002)', imdb_id: 'tt0317248', resenha: 'Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.', face: 'img/cidade.png' }, 
		]};

	return {
		getAllMovies: 
			function() {
				return myWatchListt != null ? myWatchListt.movies : null;
			},
		removeMovieFromWatchListt: 
			function(movie) {
				if (myWatchListt != null) {
					myWatchListt.movies.splice(myWatchListt.movies.indexOf(movie), 1);
				}
			},
		getMovie: 
			function(movieId) {
				if (movies != null) {
					for (var i = 0; i < movies.length; i++) {
						if (movies[i].id === parseInt(movieId)) {
							return movies[i];
						}
					}
					return null;
				} 
			},
		searchMovies:
			function(term) {
				var searchResult = [];
				for(var i = 0; i < movies.length; i++) {
					if (movies[i].name.toLowerCase().indexOf(term.toLowerCase()) > -1) {
						searchResult.push(movies[i]);
					}
				}
				return searchResult;
			}
	};
})

.service('UserService', function() {
  // For the purpose of this example I will store user data on ionic local storage but you should save it on a database
  var setUser = function(user_data) {
    window.localStorage.starter_facebook_user = JSON.stringify(user_data);
  };

  var getUser = function(){
    return JSON.parse(window.localStorage.starter_facebook_user || '{}');
  };

  return {
    getUser: getUser,
    setUser: setUser
  };
});
