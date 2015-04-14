var app = angular.module('AngularFriends');

app.controller('FriendCtrl', function($scope, $http){

    $http.get("./friend-data.json").then(function(res){
        $scope.friends = res.data;
        for(var i = 0; i < $scope.friends.length; i++){
            $scope.friends[i].friend_count = parseInt($scope.friends[i].friend_count) || 0;
        }
        console.log($scope.friends)
    });
//    $scope.searchTerm = {};

    $scope.desc = "false";

    $scope.filterOpts = {
        'Name': 'name',
        '# Friends': 'friend_count',
        'City': 'current_location.city',
        'State': 'current_location.state',
        'Country': 'current_location.country'
    };

});






