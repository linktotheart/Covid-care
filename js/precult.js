
	////// sticky nav bar ////////
$(document).ready(function(){
	$(window).scroll(function () {
		var navbar = $('.main-header');
		var scroll = $(window).scrollTop();
		if (scroll >= 180) {
			navbar.addClass("sticky");
			$('body').addClass("header-stick")
		}
		else {
			navbar.removeClass("sticky");
			$('body').removeClass("header-stick")

		}
	});
})

//////////// mobile reponsive menu ///////
$(document).ready(function(){
	$('.navbar-toggle-icon, .blur-bg').click(function(){
		console.log('Mobile menu clicked')
		$(".navbar-toggle-icon").toggleClass('collapsed');
		$(".nav-submenu").toggleClass('active');
		$(".blur-bg").toggleClass('active');
		$("body").toggleClass('scroll-lock');
	});

///////////////// search toggler
	$('.search-toggle-icon').click(function(){
		$(".search-form-container").toggleClass("active");
		$(this).children().children(".fa").toggleClass("fa-search fa-remove ");
	})


	///////////////// filter toggle
	$('#filter-button, .f-close.btn').click(function(){
		$('#filter-wrap').toggleClass("active");
		$("body").toggleClass('scroll-lock');
	})

	
})

/* menu sliding */
function menuSliding() {
	$('.dropper').on('show.bs.dropdown', function (e) {
			if ($(window).width() > 320) {
				$(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
        
			} else {
				$(this).find('.dropdown-menu').first().stop(true, true).show();
			}
		}
	);
	$('.dropper').on('hide.bs.dropdown', function (e) {
		if ($(window).width() > 320) {
			$(this).find('.dropdown-menu').first().stop(true, true).slideUp(150);
		} else {
			$(this).find('.dropdown-menu').first().stop(true, true).hide();
    }
    $('.mega-dropdown .dropdown').removeClass('active');
	});
}

$(function() {
    menuSliding();
})

/////////// stop menu from closing //////////////////
$(document).on('click', '.dropdown-menu', function (e) {
  e.stopPropagation();
});

///// featured slider ///
$('#featured-product-slider, #related-products').owlCarousel({
    loop:false,
	margin:0,
	dots: false,
	nav:true,
	navText:["<i class='fa fa-angle-left '></i>","<i class='fa fa-angle-right '></i>"],
	items: 2,
	responsive:{
        576:{
            items:2
        },
        768:{
            items:3
        },
        990:{
            items:5
        },
        1140:{
            items:6
        }
    }
})

$('#hero-slider').owlCarousel({
	loop: true,
	dots: false,
	nav: false,
	items: 1,
	margin: 5,
	animateOut: 'fadeOut',
	center: true,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:false,
	navText:["<i class='fa fa-angle-left '></i>","<i class='fa fa-angle-right '></i>"],
	responsive:{
        576:{
			nav:false,
			dots: true
		},
		768:{
			nav: true,
			dots: false
		},
		1140:{
			dots: false,
			nav: true
        }
	}
});

////// product img slider /////////
$('#product-img-slider').owlCarousel({
	loop: true,
	margin: 10,
	dots: true,
	nav: false,
	autoHeight: true,
	items: 1,
	center: true,
    thumbs: true,
	thumbsPrerendered: true,
	responsive:{
        576:{
			nav:false,
			dots: true
		},
		768:{
			dots: false
		},
		1140:{
			dots: false,
        }
	}});

$(document).ready(function(){

	var current_fs, next_fs, previous_fs; //fieldsets
	var opacity;
	
	$(".next").click(function(){
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//Add Class Active
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show();
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
	step: function(now) {
	// for making fielset appear animation
	opacity = 1 - now;
	
	current_fs.css({
	'display': 'none',
	'position': 'relative'
	});
	next_fs.css({'opacity': opacity});
	},
	duration: 600
	});
	});
	
	$(".previous").click(function(){
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//Remove class active
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show();
	
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
	step: function(now) {
	// for making fielset appear animation
	opacity = 1 - now;
	
	current_fs.css({
	'display': 'none',
	'position': 'relative'
	});
	previous_fs.css({'opacity': opacity});
	},
	duration: 600
	});
	});
	
	$('.radio-group .radio').click(function(){
	$(this).parent().find('.radio').removeClass('selected');
	$(this).addClass('selected');
	});
	
	$(".submit").click(function(){
	return false;
	})
	
});
//////////// zoomer ////////// 
// $('.zoomer').imgZoom({
// 	boxWidth: 360,
// 	boxHeight: 360,
// 	marginLeft: 15,
// 	marginTop: 25,
// 	origin: 'src'
//   });

/////////// login page 
function toggleResetPswd(e){
	e.preventDefault();
	$('#logreg-forms .form-signin').toggle()
	$('#logreg-forms .form-reset').toggle() 
}
	function toggleSignUp(e){
		e.preventDefault();
		$('#logreg-forms .form-signin').toggle(); 
		$('#logreg-forms .form-signup').toggle(); 
	}

	$(()=>{
	// Login Register Form
	$('#logreg-forms #forgot_pswd').click(toggleResetPswd);
	$('#logreg-forms #cancel_reset').click(toggleResetPswd);
	$('#logreg-forms #btn-signup').click(toggleSignUp);
	$('#logreg-forms #cancel_signup').click(toggleSignUp);
})