var angular = require('angular');
var fs = require('fs');
var storage = require('../storage');
var controllers = require('./controllers');

module.exports = angular.module('phonebook.itemList', [
    'ngRoute',
    storage.name,
    controllers.name
]).
run(['$templateCache', function itemListRun($templateCache) {

    $templateCache.put(
        'itemList/partials/itemList.html',
        fs.readFileSync(__dirname + '/partials/itemList.html', 'utf-8')
    );

}]).
config(['$routeProvider', function itemListConfig($routeProvider) {

    $routeProvider.when('/ItemList', {
        controller: 'ItemListCtrl',
        controllerAs: 'itemList',
        templateUrl: 'itemList/partials/itemList.html'
    });

}]);
