var angular = require('angular');
var fs = require('fs');
var storage = require('../storage');
var controllers = require('./controllers');

module.exports = angular.module('phonebook.itemList', [
    storage.name,
    controllers.name
]).
run(Templates);

var tmpls = module.exports.tmpls = {
    itemList: 'itemList' + Date.now().toString(36)
};

Templates.$inject = ['$templateCache'];
function Templates($templateCache) {
    $templateCache.put(
        tmpls.itemList,
        fs.readFileSync(__dirname + '/partials/itemList.html', 'utf-8')
    );
}
