let angularList = angular.module('myList', []);

angularList.controller('myListController', ($scope) => {
	$scope.items = ['AngularJS', 'ReactJS', 'UnderscoreJS'];
	$scope.newItem = '';
});
