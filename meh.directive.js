(function () {
	angular.module('myApp')
	    .directive('meh', meh);

	meh.$inject = [];

	function meh() {
		console.log('test');
		var directive = {
			restrict: 'A',
			scope: {
				meh: '=', //@ gets the vaue as string, '&' gets it as function  '=' is two-way binding
				id: '@',  // if same name just use '@'
				sample: '&'
			},
			link: linkFunc,
			controller: mehController
			// template: '',
		};

		return directive;

		function linkFunc(scope, elem, attr, ctrl) {
			elem.on('click', function(event){
				console.log('-----', scope.meh);
				scope.sample();

				console.log('clicked', ctrl.abel);
				ctrl.test();
				// console.log('test');
				// console.log(attr.meh);
 			    // console.log(attr.id);

			});
			console.log('scope', scope);
			console.log('elem', elem);
			console.log('attr', attr);
			console.log('ctrl', ctrl);
		}

		// console.log()
	}

	mehController.$inject = [];

	function mehController() {
		var vm = this;
		vm.abel = "Hello world";

		vm.test = test;

		function test(){
			console.log('------I\'m in meh controller');
			alert('Hi there! I\'m in meh controller inside directive ');
		}
	}

})();