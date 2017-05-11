$(document).ready(function(){
	// pretty photo js
	$("a[rel^='prettyPhoto']").prettyPhoto();
	
	// smoothy body scroll
	$(this).scrollTop(0);
	$("body").scrollspy({target: ".navbar", offset: 100});
	$("#himu a").on("click", function(event){
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$("html, body").animate({
				scrollTop: $(hash).offset().top - 80
			}, 1000);
			return false;
			// function(){
			// 	window.location.hash = hash;
			// }
		}
	});
	// navbar btn js
	$("body > nav ul a").hover(function(){
		$(this).stop().animate({
			"background-color"	: "#fc7700"
		}, 500);
	}, function(){
		$(this).stop().animate({
			"background-color"	: "rgba(100, 255, 255, 0.89)"
		}, 500);
	});

	// #home -> get started btn & #contact btn js
	$("#home .item .btn, #contact .btn").hover(function(){
		$(this).stop().animate({
			"background-color"	: "#43484E"
		}, 300);
	}, function(){
		$(this).stop().animate({
			"background-color"	: "#fc7700"
		}, 300);
	});

	// about us -> progressbar animation
	var firstScroll = false;
	function progressbarTransition(){
		var $bar = $("#aboutUs #skills .progress .progress-bar");
		var maxWidth = [];
		var id = [];
		for (var i = 0; i < $bar.length; i++) {
		 	maxWidth[i] = $bar.eq(i).next().text().slice(0,2);
			id[i] = setInterval(move, 150);
		}

		var width = 30;
		// get the first percent-span (90%)
		var $span = $("body > #aboutUs #skills > div:first-of-type > span");

		function move(){
			for (var i = 0; i < $bar.length; i++) {
				if (width >= maxWidth[i]) {
					clearInterval(id[i]);
					if (i == 0 && $("body").width() < 768) {
						// re-set first span (90%) location
						$span.css("margin-top", "-27px");
					}
				} else {
					var styleWidth = width + 1 + "%";
					$bar.eq(i).css("width", styleWidth);
					$bar.eq(i).next().text(styleWidth)
				}
			}
			width++;
		}
		firstScroll = true;
	}

	$(window).scroll(function(){
		var hT = $('#aboutUs').offset().top,
		    hH = $('#aboutUs').outerHeight(),
	        wH = $(window).height(),
	        wS = $(this).scrollTop();
	   if (wS > (hT+hH-wH) && !firstScroll){
	       progressbarTransition();
	   }
	});
	

	// service-items event
	$("#services .col-md-3").hover(function(){
		$(this).stop().animate({
			"background-color"	: "#fc7700"
		}, 300);
		$(this).children().first().stop().css({
			transform	: "rotate(360deg)",
			transition 	: "transform 0.9s ease"
		});
	}, function(){
		$(this).stop().animate({
			"background-color"	: "rgba(0, 0, 0, 0.39)"
		}, 300);
		$(this).children().first().stop().css({
			transform	: "rotate(0deg)",
			transition 	: "transform 0.9s ease"
		});
	});

	// portfolio zoom-in img
	var $portfolioItem = $("body > #portfolio .portfolioContainer > div");
	$portfolioItem.hover(function(){
		$(this).children("img").stop().css({
			cursor		: "zoom-in",
			transform	: "scale(111, 111)",
  			transition  : "transform 2s linear"
		});
		$(this).children("div").stop().fadeIn(500);
		$(this).children().children("div h3,div p").stop().css({
			transform	: "scale(1, 1)",
  			transition  : "transform 0.7s linear"
		});
		$(this).children().children("div a").stop().fadeIn(500);

		$(this).children().children("div a").children().css({
			transform	: "rotate(360deg)",
  			transition  : "transform 1s linear"
		});
	}, function(){
		$(this).children().children("div h3,div p").stop().css({
			transform	: "scale(0.001, 0.001)",
  			transition  : "transform 0.5s linear"
		});
		$(this).children().children("div a").stop().fadeOut(500);
		$(this).children().children("div a").children().css({
			transform	: "rotate(0deg)",
  			transition  : "transform 1s linear"
		});;
		$(this).children("div").stop().fadeOut(500);
		$(this).children("img").stop().css({
			transform	: "scale(1, 1)",
  			transition  : "transform 0.5s linear"
		});

		$(this).children().children("div a").stop().animate({
			"background-color" 	: "#fff",
			"color"				: "#43484E"
		}, 500);
	});

	$portfolioItem.children().children("div a").hover(function(){
		console.log("buzz");
		$(this).stop().animate({
			"background-color" 	: "#fc7700",
			"color"				: "#fff"
		}, 500);
	}, function(){
		$(this).stop().animate({
			"background-color" 	: "#fff",
			"color"				: "#43484E"
		}, 500);
	});
	// end of animation
	

	// our team -> .fa (socials) color animation
	var $fa_fb = $("body > #ourTeam .teamMember .contacts .fa-facebook");
	var $fa_tw = $("body > #ourTeam .teamMember .contacts .fa-twitter");
	var $fa_gp = $("body > #ourTeam .teamMember .contacts .fa-google-plus");
	var $fa_dr = $("body > #ourTeam .teamMember .contacts .fa-dribbble");
	var $fa_li = $("body > #ourTeam .teamMember .contacts .fa-linkedin");

	$fa_fb.hover(function(){
		$(this).stop().animate({
			"background-color" 	: "#2a6496",
			"color"				: "#fff"
		}, 300);
	}, function(){
		$(this).stop().animate({
			"background-color" 	: "#ccc",
			"color"				: "#43484E"
		}, 300);
	});

	$fa_tw.hover(function(){
		$(this).stop().animate({
			"background-color" 	: "#428bca",
			"color"				: "#fff"
		}, 300);
	}, function(){
		$(this).stop().animate({
			"background-color" 	: "#ccc",
			"color"				: "#43484E"
		}, 300);
	});

	$fa_gp.hover(function(){
		$(this).stop().animate({
			"background-color" 	: "#F51F1F",
			"color"				: "#fff"
		}, 300);
	}, function(){
		$(this).stop().animate({
			"background-color" 	: "#ccc",
			"color"				: "#43484E"
		}, 300);
	});

	$fa_dr.hover(function(){
		$(this).stop().animate({
			"background-color" 	: "#4D33A0",
			"color"				: "#fff"
		}, 300);
	}, function(){
		$(this).stop().animate({
			"background-color" 	: "#ccc",
			"color"				: "#43484E"
		}, 300);
	});

	$fa_li.hover(function(){
		$(this).stop().animate({
			"background-color" 	: "#4E4AF5",
			"color"				: "#fff"
		}, 300);
	}, function(){
		$(this).stop().animate({
			"background-color" 	: "#ccc",
			"color"				: "#43484E"
		}, 300);
	});

	// end of animation


	// blog-items event
	$("#blog .col-md-4").hover(function(){
		$(this).stop().animate({
			"background-color"	: "#43484E"
		}, 500);
		$(this).children("button").stop().animate({
			"background-color"	: "#fc7700"
		});
		$(this).children("h3, button, p:last-of-type").css({
			"color"				: "#ECEFEF"
		});
		
	}, function(){
		$(this).stop().animate({
			"background-color"	: "#E9E9E9"
		}, 500);
		$(this).children("button").stop().animate({
			"background-color"	: "none"
		});
		$(this).children("h3, button, p:last-of-type").css({
			"color"				: "#43484E"
		});
	});

	// contact -> social icon animation
	$("body > #contact a").hover(function(){
		$(this).animate({
			"color"			: "#fc7700",
			"border-color"  : "#fc7700"
		});
	}, function(){
		$(this).animate({
			"color"			: "#43484E",
			"border-color"  : "#43484E"
		});
	});

	// contact -> validate form
	var $name = $("body > #contact #frm input").first();
	var $email = $("body > #contact #frm input").last();
	var $message = $("body > #contact #frm textarea");
	$name.val("");
	$email.val("");
	$message.val("");
	$("body > #contact button").on("click", function(){
		if ($name.val() == "") {
			$name.css({
					"box-shadow": "0 8px 16px 0 #F34E4E, 0 6px 20px 0 #F34E4E"
			});
			$name.animate({
				"border-color"	: "red"
			}, 100);
			$name.attr("placeholder", "Enter your name*");
			return;
		}
		else if ($email.val() == "") {
			$name.css({
				"box-shadow": "none"
			}).animate({
				"border-color"	: "none"
			}, 100);

			$email.animate({
				"border-color"	: "red"
			}, 100);
			$email.css({
				"box-shadow": "0 8px 16px 0 #F34E4E, 0 6px 20px 0 #F34E4E"
			});
			$email.attr("placeholder", "Enter your email*");
			return;
		} else if (/^\w+\d+@\w{3,5}\.\w{3,5}$/.test($email.val()) == false) {
			alert("Wrong Email Formatting!");
			return;
		}
		else if ($message.val() == "") {
			$email.css({
				"box-shadow": "none"
			}).animate({
				"border-color"	: "none"
			}, 100);

			$message.animate({
				"border-color"	: "red"
			}, 100);
			$message.css({
				"box-shadow": "0 8px 16px 0 #F34E4E, 0 6px 20px 0 #F34E4E"
			});
			$message.attr("placeholder", "Enter your message*");
			return;
		} 
		else {
			$message.css({
				"box-shadow": "none"
			}).animate({
				"border-color"	: "none"
			}, 100);
			alert("Thank you <3");	
			$name.val("");
			$name.attr("placeholder", "Your Name");	

			$email.val("");
			$email.attr("placeholder", "Your Email");	

			$message.val("");	
			$message.attr("placeholder", "Your message");	
		}
	});
});

// isotope system
$(window).load(function(){
	var $container = $('#portfolio .portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
	$('#portfolio .container button').click(function(){
	    $('#portfolio .container .current').removeClass('current');
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