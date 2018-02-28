# angular-refresher

1. ng-if removes the element from the DOM when the condition is false and only add it when the condition is true while ng-hide toggles the appearance by adding the CSS property of 'display: none' to an element.
2. Everything a component can do, a directive can also do but not everything a directive can do is doable with a component. A directive is mostly used for binding custom behavior to existing and should only be used when you need to conduct DOM manipulation outside the Anguar event loop. More on: 
https://gist.github.com/toddmotto/5b4de6c777d3e446e6410fdadb824522
