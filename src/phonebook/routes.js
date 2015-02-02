var angular = require('angular');
var ngRoute = require('angular-route');
var itemList = require('./itemList');
var editItem = require('./editItem');

module.exports = angular.module('phonebook.routes', [
    ngRoute.name,
    editItem.name,
    itemList.name
]).
config(Routes);

Routes.$inject = ['$routeProvider'];
function Routes($routeProvider) {

    var when = $routeProvider.when.bind($routeProvider);

    when('/', { redirectTo: '/ItemList' }).
    when('/ItemList', {
        controller: 'ItemListCtrl',
        controllerAs: 'itemList',
        templateUrl: 'itemList/partials/itemList.html'
    }).
    when('/EditItem/:itemName', {
        controller: 'EditItemCtrl',
        controllerAs: 'editItem',
        templateUrl: 'editItem/partials/editItem.html'
    }).
    when('/AddItem', {
        controller: 'EditItemCtrl',
        controllerAs: 'editItem',
        templateUrl: 'editItem/partials/addItem.html'
    }).
    otherwise({ redirectTo: '/' });

}
