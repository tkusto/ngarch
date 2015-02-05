var angular = require('angular');
var uiRouter = require('angular-ui-router');
var itemList = require('../itemList');

module.exports = angular.module('phonebook.routes.itemListRoutes', [
    uiRouter.name,
    itemList.name
]).
config(Routes);

Routes.$inject = ['$stateProvider'];
function Routes($stateProvider) {
    $stateProvider.state('main.itemList', {
        url: '/ItemList',
        views: {
            'main@': {
                controller: 'ItemListCtrl',
                controllerAs: 'itemList',
                templateUrl: itemList.tmpls.itemList
            }
        }
    });
}
