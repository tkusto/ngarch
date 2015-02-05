var angular = require('angular');
var PhoneLinkDirective = require('./PhoneLinkDirective');

module.exports = angular.module('phonebook.editItem.directives', [
    PhoneLinkDirective.name
]);
