'use strict';

angular.module('myApp.addPost', ['ngRoute', 'firebase'])

    .config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/addPost', {
	    templateUrl: 'addPost/addPost.html',
	    controller: 'AddPostCtrl'
	});
    }])

    .controller('AddPostCtrl', ['$scope', '$location','$firebaseAuth', function($scope,$location,$firebaseAuth) {

	$scope.SignIn = function(e) {
	    e.preventDefault();
	    console.log("In sign in");
	    var email = $scope.user.email;
	    var password = $scope.user.password;


	    firebase.auth().signInWithEmailAndPassword(email,password)
	    
		.then(function(user) {
		    console.log("Authentication successful");
		    $location.path('/home');
		}, function(error) {

		    var errorCode = error.code;
		    var errorMessage = error.message;
		    console.log(errorMessage, errorCode);
		});
	}
    }]);

	    



