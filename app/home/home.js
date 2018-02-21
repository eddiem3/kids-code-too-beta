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
	    title: "Lesson 1: Change Board Size",
	    image: "img/psd-4.jpg",
	    summary: "This is the sum of the matter",
	    link:"https://s3.amazonaws.com/mg-curriculum-beta/1-1-board-size.mp4"
	},
	{
	    title: "Lesson 2: Drawing Ellipses, Ovals, and Circles",
	    image: "img/psd-4.jpg",
	    summary: "This is the sum of the matter",
	    link: "https://s3.amazonaws.com/mg-curriculum-beta/1-2-circles.mp4"
	},
	{
	    title: "Lesson 3: Snowman Solution",
	    image: "img/psd-4.jpg",
	    summary: "This is the sum of the matter",
	    link:"https://s3.amazonaws.com/mg-curriculum-beta/1-3-challenge-solution-snowman-Challenge-Intro.mp4"
	},

	{
	    title: "Lesson 4: Snowman Solution",
	    image: "img/psd-4.jpg",
	    summary: "This is the sum of the matter",
	    link:"https://s3.amazonaws.com/mg-curriculum-beta/1.4-Circle-Challenge-Solution.mp4"
	},
	{
	    title: "Lesson 5: Drawing Rectangles",
	    image: "img/psd-4.jpg",
	    summary: "This is the sum of the matter",
	    link:"https://s3.amazonaws.com/mg-curriculum-beta/1-5-rectangles.mp4"
	},
		{
	    title: "Lesson 6: Movie Scene Project",
	    image: "img/psd-4.jpg",
	    summary: "This is the sum of the matter",
	    link:"https://s3.amazonaws.com/mg-curriculum-beta/1.6-Documentation-and-Project-Challenge.mp4"
	}

	

    ];

}]);
