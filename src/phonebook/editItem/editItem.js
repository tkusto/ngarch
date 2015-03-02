var angular = require('angular');
var uiRouter = requrie('angular-ui-router');
var fs = require('fs');
var storage = require('../storage');

module.exports = angular.module('phonebook.editItem', [uiRouter.name, storage.name]).
run(require('./templates')).
controller('EditItemCtrl', require('./controllers/EditItemCtrl')).
directive('phoneLink', require('./directives/PhoneLinkDirective'));
