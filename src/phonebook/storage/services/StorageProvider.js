module.exports = StorageProvider;

var lsItemName = null;

function StorageProvider() {

    function setKeyName(keyName) {
        lsItemName = keyName;
    }
    this.setKeyName = setKeyName;

    this.$get = Storage;

}

Storage.$inject = ['$q'];
function Storage($q) {

    function getList() {
        var list = JSON.parse(localStorage.getItem(lsItemName));
        var result = $q.defer();
        if (list) {
            result.resolve(list);
        } else {
            result.reject();
        }
        return result.promise;
    }

    function saveList(list) {
        var result = $q.defer();
        localStorage.setItem(lsItemName, JSON.stringify(list));
        result.resolve();
        return result.promise;
    }

    function getItem(name) {
        var result = $q.defer();
        getList().then(function extractItemFromList(list) {
            if (list[name]) {
                result.resolve(list[name]);
            } else {
                result.reject();
            }
        }, result.reject);
        return result.promise;
    }

    function setItem(name, phones) {
        var result = $q.defer();
        getList().then(
            function updateList(list) {
                list[name] = phones;
                saveList(list).then(result.resolve, result.reject);
            },
            function createList() {
                var list = {};
                list[name] = phones;
                saveList(list).then(result.resolve, result.reject);
            }
        );
        return result.promise;
    }

    function copyItem(source, target, key) {
        target[key] = source[key];
    }

    function isNotContain(array, item) {
        return array.indexOf(item) < 0;
    }

    function delItem(name) {
        return delItems([name]);
    }

    function delItems(namesToDel) {
        var result = $q.defer();
        getList().then(function deletion(list) {
            var names = Object.keys(list).filter(isNotContain.bind(null, namesToDel));
            var newList = {};
            names.forEach(copyItem.bind(null, list, newList));
            saveList(newList).then(result.resolve, result.reject);
        }, result.reject);
        return result.promise;
    }

    return {
        getList: getList,
        saveList: saveList,
        getItem: getItem,
        setItem: setItem,
        delItem: delItem,
        delItems: delItems
    };

}
