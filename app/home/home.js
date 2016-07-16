'use strict';

angular.module('myApp.home', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
	templateUrl: 'home/home.html',
	controller: 'HomeCtrl'
    });
}])

.controller('HomeCtrl', ['$scope',function($scope) {

    $scope.posts = [
	{
	    title: "God loves us",
	    image: "img/psd-4.jpg",
	    summary: "This is the sum of the matter",
	}
    ];

}]);
