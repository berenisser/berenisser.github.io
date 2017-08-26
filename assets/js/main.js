$(document).ready(function(){

	//Menu aparecer y desaparecer
	$('#menu-icono').click(function(event) {
		event.preventDefault();
		$('.entering-nav').slideDown("slow");
	});
	$('.equis').click(function() {
		$('.entering-nav').slideUp("slow");
	});
	$('.hacer-slide').click(function() {
		$('.entering-nav').slideUp("slow");
	});

	//View more
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

	//Hover on portfolio
	$(".portfolio-item-hover").hover(
	  function() {
	    $( this ).addClass( "animated fadeIn" ).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
	    	$(this).removeClass('animated fadeIn');
	    });
	    $('.titulo_hover').addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
	    	$(this).removeClass('animated fadeInDown');
	    });
	    $('.botones_section').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
	    	$(this).removeClass('animated fadeInUp');
	    });
	  }, function() {
	    $( this ).addClass( "animated fadeOut" ).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
	    	$(this).removeClass('animated fadeOut');
	    });
	    $('.titulo_hover').addClass( "animated fadeOutUp" ).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
	    	$('.titulo_hover').removeClass('animated fadeOutUp');
	    });
	    $('.botones_section').addClass('animated fadeOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
	    	$(this).removeClass('animated fadeOutDown');
	    });
	  }
	);




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