var angular = require('angular');
var ngRoute = require('angular-route');
var itemListRoutes = require('./itemListRoutes');
var editItemRoutes = require('./editItemRoutes');

module.exports = angular.module('phonebook.routes', [
    ngRoute.name,
    itemListRoutes.name,
    editItemRoutes.name
]).
config(Routes);

Routes.$inject = ['$routeProvider'];
function Routes($routeProvider) {
    $routeProvider.when('/', { redirectTo: '/ItemList' }).otherwise({ redirectTo: '/' });
}
