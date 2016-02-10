(function() {
  'use strict';

  angular
    .module('users')
    .factory('Users', Users);

  Users.$inject = ['$resource'];

  function Users($resource) {
    return $resource('api/users', {}, {
      update: {
        method: 'PUT'
      }
    });
  }
})();
