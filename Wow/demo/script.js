$(document).ready(function(){
	$("button").first().on("click", function(){
		new WOW().init();
		$("p").addClass("rotateIn");
		$("div").addClass("slideInRight").attr("data-wow-duration", "20s");
	});

	// $("div").scroll(function(){
	// 	new WOW().init();
	// 	$("p").addClass("rotateIn");
	// });

	$("button").last().on("click", function(){
		$("div").css({
			transition : 'margin 1s ease-in-out',
			margin : '100px'
		});
	});
});