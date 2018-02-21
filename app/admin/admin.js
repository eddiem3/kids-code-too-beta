'use strict';

angular.module('myApp.admin', ['ngRoute', 'firebase'])

    .config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/admin', {
	    templateUrl: 'admin/admin.html',
	    controller: 'AddPostCtrl'
	});
    }])

    .controller('AdminCtrl', ['$scope', '$location','$firebaseAuth', function($scope,$location,$firebaseAuth) {

	$scope.SignIn = function(e) {
	    e.preventDefault();
	    console.log("In sign in");
	    var email = $scope.user.email;
	    var password = $scope.user.password;


	    firebase.auth().signInWithEmailAndPassword(email,password)
	    
		.then(function(user) {
		    console.log("Authentication successful");
		    $location.path('/addPost');
		}, function(error) {

		    var errorCode = error.code;
		    var errorMessage = error.message;
		    console.log(errorMessage, errorCode);
		});
	}
    }]);

	    



