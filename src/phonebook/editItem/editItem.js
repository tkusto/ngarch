var angular = require('angular');
var fs = require('fs');
var storage = require('../storage');
var controllers = require('./controllers');

module.exports = angular.module('phonebook.editItem', [
    'ngRoute',
    storage.name,
    controllers.name
]).
run(['$templateCache', function runEditItem($templateCache) {
    
    $templateCache.put(
        'editItem/partials/editItem.html',
        fs.readFileSync(__dirname + '/partials/editItem.html', 'utf-8')
    );
    
    $templateCache.put(
        'editItem/partials/addItem.html',
        fs.readFileSync(__dirname + '/partials/addItem.html', 'utf-8')
    );

}]).
config(['$routeProvider', function configEditItem($routeProvider) {

    $routeProvider.when('/EditItem/:itemName', {
        controller: 'EditItemCtrl',
        controllerAs: 'editItem',
        templateUrl: 'editItem/partials/editItem.html'
    });

    $routeProvider.when('/AddItem', {
        controller: 'EditItemCtrl',
        controllerAs: 'editItem',
        templateUrl: 'editItem/partials/addItem.html'
    });

}]);
