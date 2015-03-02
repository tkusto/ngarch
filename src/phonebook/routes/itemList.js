module.exports = Routes;

Routes.$inject = ['$stateProvider'];
function Routes($stateProvider) {
    $stateProvider.state('main.itemList', {
        url: '/ItemList',
        views: {
            'main@': {
                controller: 'ItemListCtrl',
                controllerAs: 'itemList',
                templateUrl: 'itemList/partials/itemList.html'
            }
        }
    });
}
