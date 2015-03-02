var angular = require('angular');
var uiRouter = require('angular-ui-router');

module.exports = angular.module('phonebook.routes', [uiRouter.name]).
config(BaseRoutes).
config(require('./itemList')).
config(require('./editItem'));

BaseRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
function BaseRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/ItemList');
    $stateProvider.state('main', {
        abstract: true
    });
}
