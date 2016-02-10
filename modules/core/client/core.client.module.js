(function() {
  'use strict';

  ApplicationConfiguration.registerModule('core');
  ApplicationConfiguration.registerModule('core.admin', ['core']);
  ApplicationConfiguration.registerModule('core.admin.routes', ['ui.router']);
})();
