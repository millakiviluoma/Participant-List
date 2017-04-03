var mainApp = angular.module("mainApp", []);

	mainApp.controller('participantController', function($scope) {
	
		/*
		Sorting table by id
		*/
		$scope.sortType = 'id';
		$scope.sortReverse = false;
		
		/*
		Participant array
		*/
		$scope.Participants = [
			{
				id: 1, name: "John Doe", email: "john.doe@gmail.com", phone: "0123456789"
			}, {
				id: 2, name: "George Clooney", email: "george.clooney@gmail.com", phone: "1234567890"
			}, {
				id: 3, name: "Simon Pegg", email: "simon.pegg@gmail.com", phone: "2345678901"
			}, {
				id: 4, name: "Mary Jones", email: "mary.jones@gmail.com", phone: "3456789012"
			}, {
				id: 5, name: "Jenny Clooney", email: "jenny.clooney@gmail.com", phone: "4567890123"
			}, {
				id: 6, name: "Rick Generous", email: "rick.generous@hotmail.com", phone: "5678901234"
			}, {
				id: 7, name: "Jane Doe", email: "jane.doe@hotmail.com", phone: "6789012345"
			}, {
				id: 8, name: "Joan Ark", email: "joan.ar@khotmail.com", phone: "7890123456"
			}, {
				id: 9, name: "John Ramsey",	email: "john.ramsey@hotmail.com", phone: "8901234567"
			}, {
				id: 10,	name: "Gavin Jones", email: "gavin.jones@hotmail", phone: "9012345678"
			}, {
				id: 11,	name: "John Doe", email: "john.doe@gmail.com", phone: "0123456789"
			}, {
				id: 12,	name: "George Clooney",	email: "george.clooney@gmail.com", phone: "1234567890"
			}, {
				id: 13,	name: "Simon Pegg",	email: "simon.pegg@gmail.com", phone: "2345678901"
			}, {
				id: 14,	name: "Mary Jones",	email: "mary.jones@gmail.com", phone: "3456789012"
			}, {
				id: 15,	name: "Jenny Clooney", email: "jenny.clooney@gmail.com", phone: "4567890123"
			}, {
				id: 16,	name: "Rick Generous", email: "rick.generous@hotmail.com", phone: "5678901234"
			}, {
				id: 17,	name: "Jane Doe", email: "jane.doe@hotmail.com", phone: "6789012345"
			}, {
				id: 18,	name: "Joan Ark", email: "joan.ar@khotmail.com", phone: "7890123456"
			}, {
				id: 19,	name: "John Ramsey", email: "john.ramsey@hotmail.com", phone: "8901234567"
			}, {
				id: 20, name: "Gavin Jones", email: "gavin.jones@hotmail", phone: "9012345678"
			}
		];
		$scope.selected = {};
		
		var length = $scope.Participants.length;
			
			/*
			This function adds a new participant row
			*/
			$scope.addRow = function(){	
					$scope.Participants.push({ 'id': $scope.length+1, 'name': $scope.name, 'email': $scope.email, 'phone': $scope.phone });
			
					$scope.name='';
					$scope.email='';
					$scope.phone='';
								
				console.log("Participant added");
				
			};
			
			/*
			This function removes a participant row
			*/
			$scope.removeRow = function(x) {
				// get the index of the row
			var index = $scope.Participants.indexOf(x);
			console.log("Removing participant");
				
				// delete the element from the array
			$scope.Participants.splice(index, 1);
			};
			
			/*
			This function get the template of either edit or display
			*/
			$scope.getTemplate = function(x) {
				if (x.id == $scope.selected.id) return 'edit';
				else return 'display';
			};
			
			$scope.editRow = function(x) {
				$scope.selected = angular.copy(x);
			}
			
			/*
			This function saves the edits
			*/
			$scope.saveRow = function(idx) {
			console.log("Saving participant");
				$scope.Participants[idx] = angular.copy($scope.selected);
				$scope.reset();
			};
			
			/*
			This function resets the display
			*/
			$scope.reset = function() {
				$scope.selected = {};
			};
	});
