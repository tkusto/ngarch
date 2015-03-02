var fs = require('fs');

module.exports = Templates;

Templates.$inject = ['$templateCache'];
function Templates($templateCache) {
    $templateCache.put(
        'editItem/partials/editItem.html',
        fs.readFileSync(__dirname + '/partials/editItem.html', 'utf-8')
    );
    $templateCache.put(
        'editItem/partials/addItem.html',
        fs.readFileSync(__dirname + '/partials/addItem.html', 'utf-8')
    );
}
