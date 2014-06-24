app.controller('UserCtrl', [
    '$scope',
    '$routeParams',
    '$http',
   
    function($scope, $routeParams ,$http) {
        $scope.userId = $routeParams.userId;
        $http.get('users/users.json')
             .success(function(data) {
                    var users = data;
                    var i; 
                    for(i in users){                         
                        if(users[i].id == $scope.userId){
                            $scope.user = users[i];
                        };
                    };
              });
    }
]);