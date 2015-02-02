var angular = require('angular');
var ngRoute = require('angular-route');
var itemList = require('../itemList');

module.exports = angular.module('phonebook.routes.itemListRoutes', [
    ngRoute.name,
    itemList.name
]).
config(Routes);

Routes.$inject = ['$routeProvider'];
function Routes($routeProvider) {
    $routeProvider.when('/ItemList', {
        controller: 'ItemListCtrl',
        controllerAs: 'itemList',
        templateUrl: 'itemList/partials/itemList.html'
    });
}
