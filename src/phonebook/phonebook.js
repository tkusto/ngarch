var angular = require('angular');
var routes = require('./routes');
var storage = require('./storage');
var itemList = require('./itemList');
var editItem = require('./editItem');

module.exports = angular.module('phonebook', [
    routes.name,
    storage.name,
    itemList.name,
    editItem.name
]).
config(['StorageProvider', function (StorageProvider) {
    StorageProvider.setKeyName('phonebook');
}]);
