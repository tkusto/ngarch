var angular = require('angular');
var fs = require('fs');
var storage = require('../storage');
var controllers = require('./controllers');

module.exports = angular.module('phonebook.itemList', [
    storage.name,
    controllers.name
]).
run(Templates);

Templates.$inject = ['$templateCache'];
function Templates($templateCache) {
    $templateCache.put(
        'itemList/partials/itemList.html',
        fs.readFileSync(__dirname + '/partials/itemList.html', 'utf-8')
    );
}
