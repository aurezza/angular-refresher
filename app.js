(function() {
    'use strict';

    angular.module('myApp', [])
        .controller('MainController', MainController);

    MainController.$inject = ['MainFactory'];
    
    function MainController(MainFactory) {
        var vm = this;
        console.log('main controller running');

        vm.favFruits = [
            {name: 'apple', color: 'red'},
            {name: 'orange', color: 'orange'},
            {name: 'mango', color: 'yellow'},
            {name: 'banana', color: 'yellow'}
        ];

        vm.favColors = ['Red', 'Yellow', 'Black', 'Orange', 'Blue', 'White', 'Green']

        vm.isVisible = false;
        vm.showHideDiv =  showDiv;
        vm.clickAlert = clickForAlert;

        // get from factory
        vm.snacks = MainFactory.getSnacks();

        function showDiv() {
            vm.isVisible = true;
        }

        function clickForAlert() {
            alert('Hey there!');
        }
    }
})();