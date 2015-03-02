module.exports = EditItemCtrl;

EditItemCtrl.$inject = ['$scope', '$stateParams', 'Storage'];
function EditItemCtrl($scope, $stateParams, Storage) {

    $scope.itemName = $stateParams.itemName || '';
    $scope.itemPhone = '';
    $scope.phones = [];

    Storage.getItem($stateParams.itemName).
        then(function updatePhones(phones) {
            $scope.phones = phones;
        });

    this.saveItem = saveItem;
    this.back = back;
    this.addPhone = addPhone;
    this.delPhone = delPhone;

    function addPhone(phone) {
        var phones = $scope.phones;
        if (phones.indexOf(phone) < 0) {
            $scope.phones.push(phone);
        }
    }

    function delPhone(phone) {
        var phones = $scope.phones;
        var phoneIndex = phones.indexOf(phone);
        if (phoneIndex >= 0) {
            $scope.phones = phones.slice(0, phoneIndex).concat(phones.slice(phoneIndex + 1));
        }
    }
    
    function saveItem() {
        Storage.setItem($scope.itemName, $scope.phones);
    }

    function back() {
        history.back();
    }

}
