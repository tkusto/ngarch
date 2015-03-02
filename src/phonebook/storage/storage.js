var angular = require('angular');
module.exports = angular.module('phonebook.storage', []).
provider('Storage', require('./services/StorageProvider'));
