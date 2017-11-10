// Main JavaScript File

// import modules here

// import Bootstrap 4 JavaScript
import 'bootstrap'

// Immediately-Invoked Function Expression (IIFE)
(function iife() {

	console.log('Hello World');

	// Bootstrap 4 Popover Example
	$(function () {
	  $('[data-toggle="popover"]').popover();
	});

})(); // /iife