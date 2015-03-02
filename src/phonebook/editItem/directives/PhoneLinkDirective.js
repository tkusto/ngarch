module.exports = PhoneLinkDirective;

function PhoneLinkDirective() {
    return {
        restrict: 'A',
        link: function link(scope, element, attrs) {
            function updateLink(phoneNumber) {
                attrs.$set('href', 'tel:' + phoneNumber);
                element.text(phoneNumber);
            }
            element.addClass('phone-link');
            attrs.$observe('phoneLink', updateLink);
        }
    };
}
