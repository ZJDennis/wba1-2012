$(document).ready(function() {
	
	$('.dropdown select').change(function() {
		window.location = $(this).find('option:selected').val();
	});
	
});