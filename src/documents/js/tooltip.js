/* Your scripts go here */
$(document).ready(function(){

	//bootstrap tooltip
	$('[data-toggle="tooltip"]').tooltip();

	//toggle-view blogroll
	$('[name="view-options"]').change( function() {
		$('.blogroll').toggleClass('detailed-view short-view');
	});
});
