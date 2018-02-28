(function () {
	angular.module('myApp')
	    .component('sample', sample());

	sample.$inject = [];

	function sample(){
		
		var component = {
			// restrict: '' automatic Element in AES
			bindings: {

			},
			template: (
			    '<ng-transclude ng-transclude-slot="left"></ng-transclude>' + 
				'<center><input type="text" ng-keyup="$ctrl.sampleFunc()" value="This is a component"></center>' +
				'<span>' +
					'<ng-transclude ng-transclude-slot="king"><ng-transclude>' +
				'</span>'
				), //transclude is for positioning/inserting of content; if added before, content will be placed before the actual element
			transclude: {
				left: 'left',
				king: 'right'
			},
			controller: SampleController,
			controllerAs: 'sc'
		};

		return component;

		SampleController.$inject = ['$element','$attrs'];

		function SampleController($element,$attrs){

			var vm = this;

			console.log('element', $element);
			console.log('attrs', $attrs);

			vm.$onInit = onInit;

			vm.sampleFunc = sampleFunc;

			function onInit(){

				
			}

			function sampleFunc(){

				console.log('Run from sample func');
			}

		}
	}
})();