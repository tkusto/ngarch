var angular = require('angular');

module.exports = angular.module('phonebook.editItem.PhoneLinkDirective', []).
directive('phoneLink', PhoneLinkDirective);

function PhoneLinkDirective() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            function updateLink(phoneNumber) {
                attrs.$set('href', 'tel:' + phoneNumber);
                element.text(phoneNumber);
            }
            element.addClass('phone-link');
            attrs.$observe('phoneLink', updateLink);
        }
    };
}
