jQuery(document).ready(function($) {

	$('.details-link').on('click', function(e) {
		$('body').addClass('fixed-page').append('<div id="overlay" class="overlay"></div>');
		$(this).next('.cafe__details').addClass('show');
		e.stopPropagation();
		e.preventDefault();
	});
	
	$('body').on('click', function(e)  {
		$(this).removeClass('fixed-page');
		$('.cafe__details').removeClass('show');
		$('#overlay').remove('#overlay');
		e.stopPropagation();
	})
	
	$('.cafe__details').on('click', function(e) {
		e.stopPropagation();
	})
	
	$('.close-button').on('click', function()  {
		$('body').removeClass('fixed-page');
		$('.cafe__details').removeClass('show');
		$('#overlay').remove('#overlay');
		e.stopPropagation();
	})	
	
})