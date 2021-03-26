angular
  .module('blog')
  .controller('HomeController', function ($scope, postsApi) {
    $scope.app = 'Blog';
    $scope.contatos = [];
    var urlLink = function () {
      postsApi.getPosts().then(function funciona(data) {
        $scope.contatos = data.data;
      });
    };
    urlLink();
  });
angular
  .module('blog')
  .controller('PostController', function ($scope, $routeParams, postsApi) {
    postsApi.getSinglePost($routeParams.id).then(function (single) {
      $scope.post = single.data;
    });
    postsApi.getCommentsPost($routeParams.id).then(function (comments) {
      $scope.comments = comments.data;
    });
  });
