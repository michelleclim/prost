(function(angular){

	'use strict';

	var app = angular.module('prost-app', ['ui.router']);

	app.config(function($stateProvider){
		var resultsState = {
			name: 'results',
			url: '/results',
			template: '<search-results></search-results>'
		}
		var detailState = {
			name: 'detail',
			url: '/detail',
			template: '<result-detail></result-detail>'
		}
		$stateProvider.state(resultsState);
		$stateProvider.state(detailState);
	});

	app.service('resultService', function(){
		var results = {
			list: [{
				"id": "jMGNSh",
				"name": "stella",
				"nameDisplay": "stella",
				"description": "Stella is the most famous brand of beer in Egypt. It has been manufactured in Egypt since the 19th century and so many Egyptian, and actually many experienced travelers, prefer it to any other kind of beer. One will not find a single bar in Egypt that doesn\u00c3\u00a2\u00e2?\u00ac\u00e2?\u00a2t sell Stella or even have the Stella logo on the bar or shop. Stella can even be found in many bars in Europe",
				"abv": "4.5",
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:44:17",
				"updateDate": "2012-03-22 13:05:00",
				"type": "beer"
			}, {
				"id": "S65jgJ",
				"name": "Stella Blue",
				"nameDisplay": "Stella Blue",
				"styleId": 119,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2014-08-18 15:02:09",
				"updateDate": "2015-05-21 18:59:02",
				"style": {
					"id": 119,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid\/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Fruit Beer",
					"shortName": "Fruit Beer",
					"description": "Fruit beers are any beers using fruit or fruit extracts as an adjunct in either, the mash, kettle, primary or secondary fermentation providing obvious (ranging from subtle to intense), yet harmonious, fruit qualities. Fruit qualities should not be overpowered by hop character. If a fruit (such as juniper berry) has an herbal or spice quality, it is more appropriate to consider it in the herb and spice beers category. Acidic bacterial (not wild yeast) fermentation characters may be evident (but not necessary) they would contribute to acidity and enhance fruity balance. Clear or hazy beer is acceptable in appearance. A statement by the brewer explaining what fruits are used is essential in order for fair assessment in competitions. If this beer is a classic style with fruit, the brewer should also specify the classic style.",
					"ibuMin": "5",
					"ibuMax": "70",
					"abvMin": "2.5",
					"abvMax": "12",
					"srmMin": "5",
					"srmMax": "50",
					"ogMin": "1.03",
					"fgMin": "1.006",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:44:21"
				},
				"type": "beer"
			}, {
				"id": "Jc7iGI",
				"name": "Stella Artois",
				"nameDisplay": "Stella Artois",
				"description": "Stella Artois was first brewed as a Christmas beer in leuven. It was named Stella from the star of Christmas, and Artois after Sebastian Artois, founder of the brewery. It's brewed to perfection using the original Stella Artois yeast and the celebrated Saaz hops. It's the optimum premium lager, with it's full flavour and clean crisp taste.",
				"abv": "5.2",
				"ibu": "25",
				"glasswareId": 8,
				"availableId": 1,
				"styleId": 106,
				"isOrganic": "N",
				"labels": {
					"icon": "https:\/\/s3.amazonaws.com\/brewerydbapi\/beer\/Jc7iGI\/upload_NmrNPh-icon.png",
					"medium": "https:\/\/s3.amazonaws.com\/brewerydbapi\/beer\/Jc7iGI\/upload_NmrNPh-medium.png",
					"large": "https:\/\/s3.amazonaws.com\/brewerydbapi\/beer\/Jc7iGI\/upload_NmrNPh-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"servingTemperature": "cold",
				"servingTemperatureDisplay": "Cold - (4-7C\/39-45F)",
				"createDate": "2012-01-03 02:44:17",
				"updateDate": "2016-08-16 20:10:59",
				"glass": {
					"id": 8,
					"name": "Tulip",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 106,
					"categoryId": 10,
					"category": {
						"id": 10,
						"name": "International Styles",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "International-Style Pilsener",
					"shortName": "International Pilsener",
					"description": "International Pilseners are straw\/golden in color and are well attenuated. This medium-bodied beer is often brewed with rice, corn, wheat, or other grain or sugar adjuncts making up part of the mash. Hop bitterness is low to medium. Hop flavor and aroma are low. Residual malt sweetness is low--it does not predominate but may be perceived. Fruity esters and diacetyl should not be perceived. Very low levels of sweet corn-like dimethylsulfide (DMS) character, if perceived, are acceptable. There should be no chill haze.",
					"ibuMin": "17",
					"ibuMax": "30",
					"abvMin": "4.5",
					"abvMax": "5.3",
					"srmMin": "3",
					"srmMax": "4",
					"ogMin": "1.044",
					"fgMin": "1.008",
					"fgMax": "1.01",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:42:11"
				},
				"type": "beer"
			}, {
				"id": "cxzpeu",
				"name": "Stella Careless Whisper",
				"nameDisplay": "Stella Careless Whisper",
				"abv": "7",
				"styleId": 30,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2014-08-11 22:50:06",
				"updateDate": "2014-08-12 12:07:09",
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and\/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				},
				"type": "beer"
			}, {
				"id": "TCnPMP",
				"name": "Stella Artois Cidre",
				"nameDisplay": "Stella Artois Cidre",
				"description": "A refreshing cidre made with hand picked apples.",
				"abv": "4.5",
				"glasswareId": 8,
				"availableId": 1,
				"styleId": 149,
				"isOrganic": "N",
				"labels": {
					"icon": "https:\/\/s3.amazonaws.com\/brewerydbapi\/beer\/TCnPMP\/upload_4h6VmU-icon.png",
					"medium": "https:\/\/s3.amazonaws.com\/brewerydbapi\/beer\/TCnPMP\/upload_4h6VmU-medium.png",
					"large": "https:\/\/s3.amazonaws.com\/brewerydbapi\/beer\/TCnPMP\/upload_4h6VmU-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2014-06-23 16:01:20",
				"updateDate": "2015-12-17 14:50:43",
				"glass": {
					"id": 8,
					"name": "Tulip",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 149,
					"categoryId": 12,
					"category": {
						"id": 12,
						"name": "Mead, Cider, & Perry",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Common Cider",
					"shortName": "Common Cider",
					"description": "Variable, but should be a medium, refreshing drink. Sweet ciders must not be cloying. Dry ciders must not be too austere. An ideal cider serves well as a \u201csession\u201d drink, and suitably accompanies a wide variety of food.",
					"abvMin": "5",
					"abvMax": "8",
					"ogMin": "1.045",
					"ogMax": "1.065",
					"fgMin": "1",
					"fgMax": "1.02",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:48:44"
				},
				"type": "beer"
			}, {
				"id": "3KWwjA",
				"name": "Tryst Stella Hop Trial",
				"nameDisplay": "Tryst Stella Hop Trial",
				"description": "cask & bottled, occasional\r\n Light coloured, fruity, full-bodied citrus flavoured and refreshing ale.",
				"abv": "3.9",
				"availableId": 2,
				"styleId": 36,
				"isOrganic": "N",
				"labels": {
					"icon": "https:\/\/s3.amazonaws.com\/brewerydbapi\/beer\/3KWwjA\/upload_WvLnJ7-icon.png",
					"medium": "https:\/\/s3.amazonaws.com\/brewerydbapi\/beer\/3KWwjA\/upload_WvLnJ7-medium.png",
					"large": "https:\/\/s3.amazonaws.com\/brewerydbapi\/beer\/3KWwjA\/upload_WvLnJ7-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-02-26 17:38:05",
				"updateDate": "2015-12-17 22:57:00",
				"available": {
					"id": 2,
					"name": "Limited",
					"description": "Limited availability."
				},
				"style": {
					"id": 36,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Golden or Blonde Ale",
					"shortName": "Blonde",
					"description": "Golden or Blonde ales are straw to golden blonde in color. They have a crisp, dry palate, light to medium body, and light malt sweetness. Low to medium hop aroma may be present but does not dominate. Bitterness is low to medium. Fruity esters may be perceived but do not predominate. Diacetyl should not be perceived. Chill haze should be absent.",
					"ibuMin": "15",
					"ibuMax": "25",
					"abvMin": "4",
					"abvMax": "5",
					"srmMin": "3",
					"srmMax": "7",
					"ogMin": "1.045",
					"fgMin": "1.008",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:27:26"
				},
				"type": "beer"
			}],
			detail: ''
		}

		return results;
	});

	app.component('search', {
		templateUrl: 'components/search.html',
		controller: ['$http', '$state', 'resultService', function($http, $state, resultService){
			var self = this;
			self.results = resultService;
			self.submit = submit;
			self.query = '';

			function submit(query) {
				console.log(query);
				$http.get('/search?q=' + query)
					.then(function(response){
						self.results.list = response.data;
						$state.go('results');
						console.log(response.data);
					}, function(){
						// this will change to error log
						$state.go('results');
					});
			}
		}]
	});

	app.component('searchResults', {
		templateUrl: 'components/search-results.html',
		controller: ['resultService', '$state', function(resultService, $state){
			var self = this;
			self.results = resultService;

			self.viewDetail = viewDetail;

			function viewDetail(index) {
				self.results.detail = self.results.list[index];
				console.log(self.results.detail);
				$state.go('detail');
			}
		}]
	});

	app.component('resultDetail', {
		templateUrl: 'components/result-detail.html',
		controller: ['resultService', function(resultService){
			var self = this;
			self.result = resultService.detail;
		}]
	});
})(angular);