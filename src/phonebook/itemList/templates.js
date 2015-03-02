var fs = require('fs');

module.exports = Templates;

Templates.$inject = ['$templateCache'];
function Templates($templateCache) {
    $templateCache.put(
        'itemList/partials/itemList.html',
        fs.readFileSync(__dirname + '/partials/itemList.html', 'utf-8')
    );
}
