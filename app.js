// A $( document ).ready() block.
$( document ).ready(function() {
	$('#navigation a').on('click', function() {
		var sectionId = $(this).attr('href');
		$(sectionId).show();
		$('.projects').hide();
	});
	console.log("ready!");
});