var angular = require('angular');
var services = require('./services');
module.exports = angular.module('phonebook.storage', [
    services.name
]);
