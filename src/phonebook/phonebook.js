var angular = require('angular');
var ngRoute = require('angular-route');
var storage = require('./storage');
var itemList = require('./itemList');
var editItem = require('./editItem');

module.exports = angular.module('phonebook', [
    ngRoute.name,
    storage.name,
    itemList.name,
    editItem.name
]).
config(['$routeProvider', 'StorageProvider', function ($routeProvider, StorageProvider) {
    StorageProvider.setKeyName('phonebook');
    $routeProvider.when('/', { redirectTo: '/ItemList' }).otherwise({ redirectTo: '/' });
}]);
