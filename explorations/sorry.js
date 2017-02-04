var addSorryListeners = function() {
	$('.apology-category div').click(function(event) {
		event.stopPropagation();
		var title = $(this).attr("title")
		if (title !== undefined) {
			$(this).children().last().html(title)
		    $(this).children().last().toggle();
		}
	});

	$(function(){
	  $('.apology-category div').bind( "tap", tapHandler );
	 
	  function tapHandler( event ){
	    event.stopPropagation();
		var title = $(this).attr("title")
		if (title !== undefined) {
			$(this).children().last().html(title)
		    $(this).children().last().toggle();
		}
	  }
	});
	$('.apology-category div div').click(function(event) {
		event.stopPropagation();
	    $(this).toggle();
	});
}

