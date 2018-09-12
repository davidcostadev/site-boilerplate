import 'bootstrap'

import './assets/style'

// Immediately-Invoked Function Expression (IIFE)
(function iife() {

  console.log('Hello World');

  // Bootstrap 4 Popover Example
  $(function () {
    $('[data-toggle="popover"]').popover();
  });

})(); // /iife
