var angular = require('angular');
var uiRouter = require('angular-ui-router');
var itemListRoutes = require('./itemListRoutes');
var editItemRoutes = require('./editItemRoutes');

module.exports = angular.module('phonebook.routes', [
    uiRouter.name,
    itemListRoutes.name,
    editItemRoutes.name
]).
config(Routes);

Routes.$inject = ['$stateProvider', '$urlRouterProvider'];
function Routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/ItemList');
    $stateProvider.state('main', {
        abstract: true
    });
}
