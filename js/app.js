var app = angular.module('App', [
    'ngRoute',
]);

app.config(function ($routeProvider, $httpProvider) {
    

    $httpProvider.defaults.withCredentials = true;

    $routeProvider
    .when('/users', {
        controller: 'MainCtrl',
        templateUrl: 'views/main.html'
    })
    .when('/users/:userId', {
        controller: 'UserCtrl',
        templateUrl: 'views/user.html'
    })
    .otherwise({redirectTo: '/users'});
});

app.run(function () {    
    
});