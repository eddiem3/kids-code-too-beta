'use strict';

angular.module('myApp.addPost', ['ngRoute', 'firebase'])

    .config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/addPost', {
	    templateUrl:'addPost/addPost.html',
	    controller:'AddPostCtrl'
	});

    }])

.controller('AddPostCtrl', ['$scope', '$firebase', function($scope, $location, $firebase) {

    $scope.AddPost = function() {
	
	var title = $scope.post.title;
	var image = $scope.post.image;
	var summary = $scope.post.summary;
	var content = $scope.post.content;

	var postData = {
	    title: title,
	    image: "not/yet.jpg",
	    summary: summary,
	    content: content	    
	}
	
	// Get a key for a new Post.
	var newPostKey = firebase.database().ref().child('posts').push().key;

	// Write the new post's data simultaneously in the posts list and the user's post list.
	var updates = {};
	updates['/posts/' + newPostKey] = postData;


	firebase.database().ref().update(updates)
	
	    .then(function(){
		console.log("Post updated")
	    })
	
	    .catch(function(error) {
		console.log("Error in update", error.message);
	    });
    	
    }

}]);
