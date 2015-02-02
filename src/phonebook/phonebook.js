var angular = require('angular');
var dependencies = require('./dependencies');
var ngDepNames = dependencies.map(function getDepName(dep) { return dep.name; });

module.exports = angular.module('phonebook', ngDepNames).
config(['StorageProvider', function (StorageProvider) {
    StorageProvider.setKeyName('phonebook');
}]);
