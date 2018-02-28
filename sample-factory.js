(function() {
    'use strict';
    
    angular
        .module('myApp')
        .factory('MainFactory', MainFactory);

    MainFactory.$inject = [];

    function MainFactory() {
        var snacks = [
            {name: 'chicharon', flavor: 'salty'},
            {name: 'chocolate bar', flavor: 'sweet'},
            {name: 'tamarind candy', flavor: 'sour'},
            {name: 'chili mango', flavor: 'spicy'},
            {name: 'mango bravo', flavor: 'sweet'},
        ];

        var factory = {
            getSnacks: getSnacks
        }

        function getSnacks() {
            return snacks;
        }

        return factory;

        console.log('MainFactory loaded: ', MainFactory);
    }
})();