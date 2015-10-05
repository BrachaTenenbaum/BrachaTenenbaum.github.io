$( document ).ready(function() {
	$('#navigation a').on('click', function() {
		var sectionId = $(this).attr('href');
		$('section').prop('hidden', true);
		$(sectionId).prop('hidden',false);
		$('#navigation .active').removeClass('active');
		$(this).addClass('active');
	});
	console.log("ready!"); 
});