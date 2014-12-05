@import "vendor/fastclick/fastclick.min.js";

// script for showing cafe rating
jQuery(document).ready(function($) {

	$('.details-link').on('click', function(e) {
		$('body').addClass('fixed-page').append('<div id="overlay" class="overlay"></div>');
		$(this).next('.cafe__details').addClass('show');
		e.stopPropagation();
		e.preventDefault();
	});
	
	$('body').on('click', '#overlay', function(e)  {
		$('body').removeClass('fixed-page');
		$('.cafe__details').removeClass('show');
		$('#overlay').remove('#overlay');
		e.stopPropagation();
	})
		
	$('.close-button').on('click', function(e)  {
		$('body').removeClass('fixed-page');
		$('.cafe__details').removeClass('show');
		$('#overlay').remove('#overlay');
		e.stopPropagation();
	})	
	
})