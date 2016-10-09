(function(angular){

	'use strict';

	var app = angular.module('prost-app', []);
	var baseApi = 'http://api.brewerydb.com/v2/';

	app.component('search', {
		templateUrl: 'components/search.html',
		controller: ['$http', function($http){
			var self = this;
			self.submit = submit;
			self.query = '';

			function submit(query) {
				console.log(query);
				$http.get(baseApi + 'search?q=' + query + '&key=' + apiKey)
					.then(function(response){
						console.log(response.data);
					});
			}
		}]
	});
})(angular);