angular.module('blog').config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeController',
    })
    .when('/login', {
      templateUrl: 'login.html',
    })
    .when('/post/:id', {
      templateUrl: 'post.html',
      controller: 'PostController',
    });
});
