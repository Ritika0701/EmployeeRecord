var app = angular.module("myApp",[]);

app.controller("myCtrl",function($scope){

	$scope.newContacts = {};
	$scope.saved = localStorage.getItem('contacts');
	$scope.contacts = (localStorage.getItem('contacts') !== null) ? JSON.parse($scope.saved) : [
	{fname:"ritika", employeeId:"1001", telephone:"9532777575", email:"ridzisings@gmail.com"}
] 

	localStorage.setItem('contacts',JSON.stringify($scope.contacts));

	$scope.saveContact = function(){
		// console.log("saving..!!");
		$scope.contacts.push($scope.newContacts); 
		localStorage.setItem('contacts',JSON.stringify($scope.contacts));
		$scope.newContacts = {};
		// console.log($scope.newContacts);
	}

	$scope.editContact = function(index){
		console.log("edit index"+index);
		console.log($scope.contacts[index]);
		$scope.newContacts = {};
		$scope.newContacts = $scope.contacts[index];
		$scope.contacts.splice(index,1);
		localStorage.setItem('contacts',JSON.stringify($scope.contacts));

	}
	$scope.deleteContact = function(index) {
		  $scope.contacts.splice(index,1);
		  localStorage.setItem('contacts',JSON.stringify($scope.contacts));
	}

	// console.log($scope.contacts);
	// console.log("myfirstcontroller");
})
