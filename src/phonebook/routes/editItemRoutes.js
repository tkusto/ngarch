var angular = require('angular');
var ngRoute = require('angular-route');
var editItem = require('../editItem');

module.exports = angular.module('phonebook.routes.editItemRoutes', [
    ngRoute.name,
    editItem.name
]).
config(Routes);

Routes.$inject = ['$routeProvider'];
function Routes($routeProvider) {
    $routeProvider.when('/AddItem', {
        controller: 'EditItemCtrl',
        controllerAs: 'editItem',
        templateUrl: 'editItem/partials/addItem.html'
    });
    $routeProvider.when('/EditItem/:itemName', {
        controller: 'EditItemCtrl',
        controllerAs: 'editItem',
        templateUrl: 'editItem/partials/editItem.html'
    });
}
