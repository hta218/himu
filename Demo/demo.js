$(window).load(function(){
	var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
	$('.container button').click(function(){
		console.log("ok");
	    $('.container .current').removeClass('current');
	    $(this).addClass('current');

	    var selector = $(this).attr('data-filter');
	    $container.isotope({
	        filter: selector,
	        animationOptions: {
	            duration: 750,
	            easing: 'linear',
	            queue: false
	        }
	    });
	    return false;
	}); 
});
