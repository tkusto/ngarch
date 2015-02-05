var angular = require('angular');
var fs = require('fs');
var storage = require('../storage');
var controllers = require('./controllers');
var directives = require('./directives');

module.exports = angular.module('phonebook.editItem', [
    storage.name,
    controllers.name,
    directives.name
]).
run(Templates);

var tmpls = module.exports.tmpls = {
    editItem: 'editItem' + Date.now().toString(36),
    addItem: 'addItem' + Date.now().toString(36)
};

Templates.$inject = ['$templateCache'];
function Templates($templateCache) {
    $templateCache.put(
        tmpls.editItem,
        fs.readFileSync(__dirname + '/partials/editItem.html', 'utf-8')
    );
    $templateCache.put(
        tmpls.addItem,
        fs.readFileSync(__dirname + '/partials/addItem.html', 'utf-8')
    );
}
