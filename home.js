var buildLayout = function() {
	$('#logo-placeholder').hide();
	buildHeader();
	buildBottomNav();
	addIndexListeners();
}

var buildHeader = function() {
	var logoPath;

	$('body').prepend('<div id="header-container"></div>')
		$('#header-container').append('<img id="logo" src="http://www.robinwe.is/logo.png" />')
		$('#header-container').append('<div id="contact-container">robin@robinwe.is | <a style="text-decoration:none; color: #999999;" href="https://twitter.com/personifiedself">@personifiedself</a></div>')
		$('#header-container').append('<div id="nav-container"></div>')
			$('#nav-container').prepend('<nav class="header-link" id="visualizations-link">visualizations</nav>')
				$('#visualizations-link').append('<div class="nav-dropdown" id="visualizations-dropdown" style="display: none;"></div>')
					//$('#visualizations-dropdown').append('<a href="http://www.robinwe.is/visualizations/3yrsdatinginteractions.html">dating interactions</a><br />')
					$('#visualizations-dropdown').append('<a href="http://www.robinwe.is/visualizations/dating.html">8 years of dating data</a><br />')
					$('#visualizations-dropdown').append('<a href="http://www.robinwe.is/visualizations/fridaynights2014.html">friday nights 2014</a><br />')
					$('#visualizations-dropdown').append('<a href="http://www.robinwe.is/visualizations/aboutme.html">about me</a>')
			$('#nav-container').prepend('<nav class="header-link" id="explorations-link">explorations</nav>')
				$('#explorations-link').append('<div class="nav-dropdown" id="explorations-dropdown" style="display: none;"></div>')
					$('#explorations-dropdown').append('<a href="http://www.robinwe.is/explorations/lies.html">lies</a><br />')
					$('#explorations-dropdown').append('<a href="http://www.robinwe.is/explorations/cry.html">crying</a><br />')
					$('#explorations-dropdown').append('<a href="http://www.robinwe.is/explorations/fridays1314.html">friday nights: 2013 vs 2014</a><br />')
					$('#explorations-dropdown').append('<a href="http://www.robinwe.is/explorations/sorry.html">apologies</a>')
			//$('#nav-container').prepend('<nav class="header-link" id="memoir-link">memoir</nav>')
				//$('#memoir-link').append('<div class="nav-dropdown" id="memoir-dropdown" style="display: none;"></div>')
					//$('#memoir-dropdown').append('<a>Coming soon!</a>')
			//$('#nav-container').prepend('<nav class="header-link" id="about-link">about</nav>')
			$('#nav-container').prepend('<nav class="header-link" id="subscribe-link">subscribe</nav>')
}

var buildBottomNav = function() {

	var currentPage = window.location.href;

	//explorations first
	if (currentPage.indexOf("explorations/sorry") > -1) {
		$('body').append('<div id="previous"><a href="http://www.robinwe.is/explorations/lies.html">&laquo; previous</a></div>');
		$('body').append('<div id="next"><a href="http://www.robinwe.is/explorations/fridays1314.html">next &raquo;</a></div>');
		$('body').append('<br><br><br><br><br>');
	} else if (currentPage.indexOf("explorations/fridays1314") > -1) {
		$('body').append('<div id="previous"><a href="http://www.robinwe.is/explorations/sorry.html">&laquo; previous</a></div>');
		$('body').append('<div id="next"><a href="http://www.robinwe.is/explorations/cry.html">next &raquo;</a></div>');
		$('body').append('<br><br><br><br><br>');
	} else if (currentPage.indexOf("explorations/cry") > -1) {
		$('body').append('<div id="previous"><a href="http://www.robinwe.is/explorations/fridays1314.html">&laquo; previous</a></div>');
		$('body').append('<div id="next"><a href="http://www.robinwe.is/explorations/lies.html">next &raquo;</a></div>');
		$('body').append('<br><br><br><br><br>');
	} else if (currentPage.indexOf("explorations/lies") > -1) {
		$('body').append('<div id="previous"><a href="http://www.robinwe.is/explorations/cry.html">&laquo; previous</a></div>');
		$('body').append('<div id="next"><a href="http://www.robinwe.is/explorations/sorry.html">next &raquo;</a></div>');
		$('body').append('<br><br><br><br><br>');
	//then visualizations
	} /*else if (currentPage.indexOf("visualizations/fridaynights2014") > -1) {
		$('body').append('<div id="previous"><a href="http://www.robinwe.is/visualizations/aboutme.html">&laquo; previous</a></div>');
		$('body').append('<div id="next"><a href="http://www.robinwe.is/visualizations/aboutme.html">next &raquo;</a></div>');
		$('body').append('<br><br><br><br><br>');
	} else if (currentPage.indexOf("visualizations/aboutme") > -1 || currentPage === "www.robinwe.is") {
		$('body').append('<div id="previous"><a href="http://www.robinwe.is/visualizations/fridaynights2014.html">&laquo; previous</a></div>');
		$('body').append('<div id="next"><a href="http://www.robinwe.is/visualizations/fridaynights2014.html">next &raquo;</a></div>');
		$('body').append('<br><br><br><br><br>');
	}*/

}

var clearButton = false
var addIndexListeners = function() {
	$('#logo').on('click', function(){
        window.location = "http://www.robinwe.is";
    });
    $('#visualizations-link').mouseover(function() {
	  $("#visualizations-dropdown").show();
	});
	$('#visualizations-link').mouseout(function() {
	  $("#visualizations-dropdown").hide();
	});
	$('#explorations-link').mouseover(function() {
	  $("#explorations-dropdown").show();
	});
	$('#explorations-link').mouseout(function() {
	  $("#explorations-dropdown").hide();
	});
	$('#memoir-link').mouseover(function() {
	  $("#memoir-dropdown").show();
	});
	$('#memoir-link').mouseout(function() {
	  $("#memoir-dropdown").hide();
	});
	$(document).keyup(function(e) {
       if (e.keyCode == 27) {
           $('#mc_embed_signup:visible').fadeToggle(false);
       }   // escape key maps to keycode `27`
    });
    $('#subscribe-link').on('click', function(){
        $('#mc_embed_signup').fadeToggle();
        if (clearButton == false) {
        	$('.clear:eq(1)').append('<input type="button" value="Close" name="close" id="mc-embedded-close" class="button">');
    	    clearButton = true;
        }
    });
    $(document).bind({
        click: function(event) {
        	if (event.target.id == "mc-embedded-close") {
        		$('#mc_embed_signup:visible').fadeToggle(false);
        	}
/*	      switch(event.target.id) {
	          case "mc_embed_signup":
	          case "subscribeform":
	          case "mce-EMAIL":
	          case "mce-FNAME":
	          case "mce-LNAME":
	          case "mc-embedded-subscribe":
	          case "mc_embed_signup":
	          case "mce-email-label":
	          case "mce-fname-label":
	          case "mce-lname-label":
	          case "subscribe-link":
	          case "mc_embed_signup_scroll":
	              break;
	          default:
        	      if (event.target.className == "mce_inline_error") {
                    //don't do anything...      
                  } else {
                    $('#mc_embed_signup:visible').fadeToggle(false);
	                //$('#mc_embed_signup').css("display", "none");
                  }
	      }  */
	    }
    });
}
