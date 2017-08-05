$(document).ready(function(){

	$('#view-more').click(function() {
	    $('.mas-cajas').toggleClass( "aparecer");
	    $('#view-more').hide();
	    $('#view-less').show();
	});

	$('#view-less').click(function() {
		$('.mas-cajas').toggleClass( "desaparecer");
		$('#view-more').show();
		$(this).hide();
	});

	//This initializes the animation effect on scroll down or up
	
	/*
	$('#view-more').click(function() {
		$('.mas-cajas').show();
		$('#view-more').html("Show less").click(function(event) {
			$('.mas-cajas').hide();
		});;
	}); */

	// Static variables - That do not change while scrolling
	var header = $(".nav-wrapper"),
	    headerHeight = header.height(), // Get height of header
	 	 	logo = $(".logo-bere"), // Get the logo
	 	 	logoHeight = logo.height(), // Get logo height
	 	 	scrollTo = 120; // Animation until scrolled to this point

	// Scroll function
	$(window).on("scroll", function() {
	  // Dynamic variables - That do change while scrolling
	  var yPos = $(this).scrollTop(), // Get the scroll Y-position
	  	  yPer = (yPos / scrollTo); // Calculate percenage of scroll

	  // If percentage is over 100, set to 100
	  if (yPer > 1) {
	    yPer = 1;
	  }
	  // Dynamic variables for the elements
	  var logoPos = ( -1*(yPer*25)+25), // Calculate position of logo (starting from 50%)
	    	logoSize = ((headerHeight*yPer)-(logoHeight*yPer)+logoHeight), // Calculate new size height for logo
	    	headerPos = ((yPer * headerHeight) - headerHeight); // Calculate position of header (starting from minus the height of itself)

	  // Change the top, left, transform and height of the logo
	  logo.css({
	    top: logoPos + "%",
	    left: logoPos + "%",
	    transform: "translate3d(-" + logoPos + "%,-" + logoPos + "%,0)",
	    height: logoSize
	  });
	  // Change the transform and opacity of the header
	  $('.nav-wrapper').css({
	    //transform: "translate3d(0," + headerPos + "px,0)",
			top: headerPos,
	    	opacity: yPer
	  });
	});
}); 

//SVG path animation for portfolio
(function() {
	function init() {
		var speed = 250,
			easing = mina.easeinout;

		[].slice.call ( document.querySelectorAll( '#grid > a' ) ).forEach( function( el ) {
			var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
				pathConfig = {
					from : path.attr( 'd' ),
					to : el.getAttribute( 'data-path-hover' )
				};

			el.addEventListener( 'mouseenter', function() {
				path.animate( { 'path' : pathConfig.to }, speed, easing );
			} );

			el.addEventListener( 'mouseleave', function() {
				path.animate( { 'path' : pathConfig.from }, speed, easing );
			} );
		} );
	}
	init();
})();