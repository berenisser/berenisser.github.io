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
}); 

//SVG path animation
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