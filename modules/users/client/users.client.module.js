(function() {
  'use strict';

  ApplicationConfiguration.registerModule('users', ['core']);
  ApplicationConfiguration.registerModule('users.admin', ['core.admin']);
  ApplicationConfiguration.registerModule('users.admin.routes', ['core.admin.routes']);
})();
