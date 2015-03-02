module.exports = Routes;

Routes.$inject = ['$stateProvider'];
function Routes($stateProvider) {
    $stateProvider.state('main.addItem', {
        url: '/AddItem',
        views: {
            'main@': {
                controller: 'EditItemCtrl',
                controllerAs: 'editItem',
                templateUrl: 'editItem/partials/addItem.html'
            }
        }
    });
    $stateProvider.state('main.editItem', {
        url: '/EditItem/:itemName',
        views: {
            'main@': {
                controller: 'EditItemCtrl',
                controllerAs: 'editItem',
                templateUrl: 'editItem/partials/editItem.html'
            }
        }
    });
}
