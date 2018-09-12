import 'bootstrap';
import $ from 'jquery';

import './assets/style';

// Immediately-Invoked Function Expression (IIFE)
(function iife() {
  window.console.log('Hello World');

  // Bootstrap 4 Popover Example
  $(() => {
    $('[data-toggle="popover"]').popover();
  });
}()); // /iife
