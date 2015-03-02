module.exports = ItemListCtrl;

ItemListCtrl.$inject = ['$scope', '$q', 'Storage'];
function ItemListCtrl($scope, $q, Storage) {

    $scope.phonebook = null;
    $scope.selectedItems = {};

    updatePhonebook();

    function updatePhonebook() {
        Storage.getList().then(function update(list) {
            $scope.phonebook = list;
        });
    }

    function getSelectedItemNames() {
        var selectedItems = $scope.selectedItems;
        return Object.keys(selectedItems).
            filter(function excludeDeselected(name) {
                return selectedItems[name];
            });
    }
    
    function delSelectedItems() {
        var selectedItemNames = getSelectedItemNames();
        $scope.selectedItems = {};
        $q.all(Storage.delItems(selectedItemNames))['finally'](updatePhonebook);
    }
    this.delSelectedItems = delSelectedItems;

}
