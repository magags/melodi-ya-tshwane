$(document).ready(function() {	
	var lastScrollPos = 0;					// default scroll position 	
	
	// function to hide/display scroll icon at bottom of page when scroll up/down
	var showNavArrow = function(){
		if ($(this).scrollTop() > 100) {	// scrolled up
			$('.scrollIcon').fadeIn();		// hide icon
		} else {
			$('.scrollIcon').fadeOut();		// show icon
		}
	};
	showNavArrow();		//run function on page load - default: dont show icon
	
	// function to hide/display/animate navbar on scroll up/down
	var navBarScroll = function(){
		var currentScrollPos = $(this).scrollTop();
		var isNavBarHasCollapsedIn = $('#myt-navbar-collapse').hasClass('in');
		
		// current scroll position must be greater than last scroll position
		// navbar must not be 'collapsed in'
		if ( (currentScrollPos > lastScrollPos) 
				&& !isNavBarHasCollapsedIn ){	
			$('nav').addClass('fall-out')		// hide navbar with animation
				.removeClass('fall-in');	
		}else{
			$('nav').addClass('fall-in')		// display navbar with animation
				.removeClass('fall-out');	
		}
		
		lastScrollPos = currentScrollPos;		// reset the last scroll position to current
	};
	
	// fire events for scroll
	$(window).scroll(function(){
		showNavArrow();		// run function to hide/display scroll icon
		navBarScroll();		// run function to hide/display navbar
	});
	
	// smooth scroll to top of page when scroll icon link clicked
	$('.scrollIcon').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000); 	  //perform the smooth scroll animation
		$('nav').addClass('fall-in').removeClass('fall-out'); // display navbar with animation
		lastScrollPos = 0;		// reset to prevent navBarScroll function from firing
		
		return false;
	});
	
	// change search button to search box on click
	$('.toggle-search').click(function(){
		if( $('#search-box').hasClass('search-box-hide') ){
			$('#search-box').addClass('search-box-display')	// add display class
				.removeClass('search-box-hide'); 			// remove hide class
		}else{
			$('#search-box').addClass('search-box-hide')	// add hide class
			.removeClass('search-box-display'); 			// remove display class
		}
			
		return false;
	});
	
});
	

