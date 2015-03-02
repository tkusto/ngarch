var angular = require('angular');
var fs = require('fs');
var storage = require('../storage');

module.exports = angular.module('phonebook.itemList', [storage.name]).
run(require('./templates')).
controller('ItemListCtrl', require('./controllers/ItemListCtrl'));
