
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
$('#featured-product-slider').owlCarousel({
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
	nav: true,
	items: 1,
	margin: 5,
	animateOut: 'fadeOut',
	center: true,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:false,
	navText:["<i class='fa fa-angle-left '></i>","<i class='fa fa-angle-right '></i>"],
})

////// product img slider /////////
$('#product-img-slider').owlCarousel({
	loop: true,
	margin: 0,
	dots: false,
	nav: false,
	autoHeight: true,
	items: 1,
    thumbs: true,
    thumbsPrerendered: true})

// Increase/Reduce product amount
$('.dec-btn').click(function () {
	var siblings = $(this).siblings('input.quantity-no');
	if (parseInt(siblings.val(), 10) >= 1) {
		siblings.val(parseInt(siblings.val(), 10) - 1);
	}
});
$('.inc-btn').click(function () {
	var siblings = $(this).siblings('input.quantity-no');
	siblings.val(parseInt(siblings.val(), 10) + 1);
});