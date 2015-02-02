var angular = require('angular');
var phonebook = require('./phonebook');
module.exports = phonebook;
angular.bootstrap(document.body, [phonebook.name]);
