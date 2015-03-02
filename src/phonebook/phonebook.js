var angular = require('angular');
var R = require('ramda');
var dependencies = require('./dependencies');

module.exports = angular.module('phonebook', R.pluck('name', dependencies)).
config(['StorageProvider', function (StorageProvider) {
    StorageProvider.setKeyName('phonebook');
}]);
