angular.module('blog').factory('postsApi', function ($http, config) {
  var _getPosts = function () {
    return $http.get(config.baseUrl + '/posts');
  };
  var _getSinglePost = function (id) {
    return $http.get(config.baseUrl + '/posts/' + id);
  };
  var _getCommentsPost = function (id) {
    return $http.get(config.baseUrl + '/comments?postId=' + id);
  };
  return {
    getPosts: _getPosts,
    getSinglePost: _getSinglePost,
    getCommentsPost: _getCommentsPost,
  };
});
