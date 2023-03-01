$(function() {

	let sections = $('.section'),
	nav = $('nav'),
	nav_height = nav.outerHeight();

	if ($(window).width() >= '1200'){
		$(window).on('scroll', function () {
			let cur_pos = $(this).scrollTop();
			
			sections.each(function() {
				let top = $(this).offset().top - nav_height - 150,
						bottom = top + $(this).outerHeight();
				
				if (cur_pos >= top && cur_pos <= bottom) {
					nav.find('a').removeClass('active');
					sections.removeClass('active');
					
					$(this).addClass('active');
					nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
				}
			});
		});
	}
	$("#menu a").on("click", function () {
    let href = $(this).attr("href");
		if ($(window).width() > '1200'){
			$("html, body").animate({
					scrollTop: $(href).offset().top - 100
			}, {
					duration: 800,
					easing: "linear"
			});
		}
		if ($(window).width() <= '1200'){
			$(".right").slideToggle('medium').removeClass('open');
			$("body").css("overflow", "");
			$('.burger').removeClass('open');
			$("html, body").animate({
        scrollTop: $(href).offset().top - 50
    }, {
        duration: 800,
        easing: "linear"
    });
		}
    return false;
});

	$('.lazyYT').lazyYT();

	$('.carousel').owlCarousel({
		navContainer: $('.services--arrows'),
		dots: false,
		loop: false,
		items: 3,
		smartSpeed: 700,
		margin: 24,
		navText: [
			'<div class="arrows--prev"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.1199 1.1199L3.03119 7.2086L15.2082 7.20823L16 8L15.2083 8.79166L3.03165 8.79168L9.11998 14.88L8 16L1.11989 9.11989L0.791769 8.79177L-8.01043e-07 8L1.11999 6.88001L8 9.48178e-07L9.1199 1.1199Z"/></svg></div>',
			'<div class="arrows--next"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.8801 1.1199L12.9688 7.2086L0.791771 7.20823L0 8L0.791659 8.79166L12.9683 8.79168L6.88002 14.88L8 16L14.8801 9.11989L15.2082 8.79177L16 8L14.88 6.88001L8 9.48178e-07L6.8801 1.1199Z"/></svg></div>'
		],
		responsive: {
			0: {
				margin: 15,
				autoWidth: true
			},
			500: {
				margin: 15,
				autoWidth: true
			},
			800: {
				autoWidth: true
			},
			993: {
				margin: 24
			}
		}
	});

	$('.reviews--carousel').owlCarousel({
		navContainer: $('.reviews--arrows'),
		dots: true,
		nav: true,
		items: 1,
		loop: false,
		smartSpeed: 350,
		margin: 24,
		mouseDrag: false,
		touchDrag: false,
		animateOut: 'fadeOut',
		navText: [
			'<div class="arrows--prev"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.1199 1.1199L3.03119 7.2086L15.2082 7.20823L16 8L15.2083 8.79166L3.03165 8.79168L9.11998 14.88L8 16L1.11989 9.11989L0.791769 8.79177L-8.01043e-07 8L1.11999 6.88001L8 9.48178e-07L9.1199 1.1199Z"/></svg></div>',
			'<div class="arrows--next"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.8801 1.1199L12.9688 7.2086L0.791771 7.20823L0 8L0.791659 8.79166L12.9683 8.79168L6.88002 14.88L8 16L14.8801 9.11989L15.2082 8.79177L16 8L14.88 6.88001L8 9.48178e-07L6.8801 1.1199Z"/></svg></div>'
		],
		responsive: {
			0: {
				autoHeight: true,
			},
			768: {
				autoHeight: false
			}
		}
	});

	$('.partners--carousel').owlCarousel({
		navContainer: $('.partners--arrows'),
		dots: false,
		items: 2,
		loop: false,
		smartSpeed: 700,
		margin: 24,
		navText: [
			'<div class="arrows--prev"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.1199 1.1199L3.03119 7.2086L15.2082 7.20823L16 8L15.2083 8.79166L3.03165 8.79168L9.11998 14.88L8 16L1.11989 9.11989L0.791769 8.79177L-8.01043e-07 8L1.11999 6.88001L8 9.48178e-07L9.1199 1.1199Z"/></svg></div>',
			'<div class="arrows--next"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.8801 1.1199L12.9688 7.2086L0.791771 7.20823L0 8L0.791659 8.79166L12.9683 8.79168L6.88002 14.88L8 16L14.8801 9.11989L15.2082 8.79177L16 8L14.88 6.88001L8 9.48178e-07L6.8801 1.1199Z"/></svg></div>'
		],
		responsive: {
			0: {
				margin: 15,
				items: 1
			},
			600: {
				margin: 15,
				autoWidth: false,
				items: 1
			},
			800: {
				autoWidth: false,
				items: 2
			},
			993: {
				margin: 24,
				autoWidth: false
			}
		}
	});

	$('.service--carousel').owlCarousel({
		navContainer: $('.partners--arrows'),
		dots: false,
		items: 3,
		loop: false,
		smartSpeed: 700,
		margin: 24,
		navText: [
			'<div class="arrows--prev"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.1199 1.1199L3.03119 7.2086L15.2082 7.20823L16 8L15.2083 8.79166L3.03165 8.79168L9.11998 14.88L8 16L1.11989 9.11989L0.791769 8.79177L-8.01043e-07 8L1.11999 6.88001L8 9.48178e-07L9.1199 1.1199Z"/></svg></div>',
			'<div class="arrows--next"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.8801 1.1199L12.9688 7.2086L0.791771 7.20823L0 8L0.791659 8.79166L12.9683 8.79168L6.88002 14.88L8 16L14.8801 9.11989L15.2082 8.79177L16 8L14.88 6.88001L8 9.48178e-07L6.8801 1.1199Z"/></svg></div>'
		],
		responsive: {
			0: {
				margin: 15,
				items: 1,
				autoWidth: true
			},
			600: {
				margin: 15,
				autoWidth: true,
				items: 1
			},
			800: {
				autoWidth: true,
				items: 2
			},
			993: {
				margin: 24,
				autoWidth: true,
				items: 2
			},
			1200: {
				items: 3,
				autoWidth: true
			}
		}
	});

	$('.works--carousel').owlCarousel({
		navContainer: $('.works--arrows'),
		dots: false,
		loop: false,
		items: 3,
		smartSpeed: 700,
		margin: 24,
		navText: [
			'<div class="arrows--prev"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.1199 1.1199L3.03119 7.2086L15.2082 7.20823L16 8L15.2083 8.79166L3.03165 8.79168L9.11998 14.88L8 16L1.11989 9.11989L0.791769 8.79177L-8.01043e-07 8L1.11999 6.88001L8 9.48178e-07L9.1199 1.1199Z"/></svg></div>',
			'<div class="arrows--next"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.8801 1.1199L12.9688 7.2086L0.791771 7.20823L0 8L0.791659 8.79166L12.9683 8.79168L6.88002 14.88L8 16L14.8801 9.11989L15.2082 8.79177L16 8L14.88 6.88001L8 9.48178e-07L6.8801 1.1199Z"/></svg></div>'
		],
		responsive: {
			0: {
				margin: 15,
				autoWidth: true
			},
			500: {
				margin: 15,
				autoWidth: true
			},
			800: {
				autoWidth: true
			},
			993: {
				margin: 24
			}
		}
	});

	$('.faq--item').click(function(){
		let $a = $(this).find(".faq--item__text");
		$(".faq--item__text").not($a).slideUp();
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.faq--item').not($a).removeClass('active');
		} else {
			$('.faq--item').removeClass('active');
			$(this).addClass('active');
		}
		$a.slideToggle();
	});

	$('input').val('');

	$('.input').click(function(){
		$(this).find('label').toggleClass('active');
	});
	
	$(document).on('mouseup', function(e){
		let s = $('.input label.active');
		if(!s.is(e.target) && s.has(e.target).length === 0) {
			s.removeClass('active');
		}
	});

	$('.modal .icon.close').click(function(){
		$('.modal').fadeOut();
		$('body').removeClass('overflow');
	});

	$('.service-1-open').click(function(){
		$('.service--1').css("display", "flex").hide().fadeIn();
		$('body').toggleClass('overflow');
	});

	$('.service-2-open').click(function(){
		$('.service--2').css("display", "flex").hide().fadeIn();
		$('body').toggleClass('overflow');
	});

	$('.service-3-open').click(function(){
		$('.service--3').css("display", "flex").hide().fadeIn();
		$('body').toggleClass('overflow');
	});

	$('.service-4-open').click(function(){
		$('.service--4').css("display", "flex").hide().fadeIn();
		$('body').toggleClass('overflow');
	});

	function mobileMenu() {
		if (!($('.right').hasClass("open"))) {
			$(".right").addClass('open');
			$("body").css("overflow", "hidden");
		} else {
			$(".right").removeClass('open');
			$("body").css("overflow", "");
		}
	}

	$(".burger").click(function () {
		mobileMenu();
		$(this).toggleClass('open');
	});

	$(".background-menu").on("click", function() {
		mobileMenu();
		$('.burger').removeClass('open');
	});

	$('.arrow--bottom').click(function(){
		let href = $(this).attr('href');
		if ($(window).width() > '992'){
			$('html, body').animate({
					scrollTop: $(href).offset().top - 100
			}, {
					duration: 800,
					easing: "linear"
			});
		}
		if ($(window).width() <= '992'){
			$('html, body').animate({
					scrollTop: $(href).offset().top - 20
			}, {
					duration: 800,
					easing: "linear"
			});
		}
		return false;
	});

	$('.promotion--wrapper .info .buttons .button').click(function(){
		let href = $(this).attr('href');
			$('html, body').animate({
					scrollTop: $(href).offset().top - 100
			}, {
					duration: 800,
					easing: "linear"
			});
		return false;
	});

	//E-mail Ajax Send
	$("form.form--send").submit(function() { //Change
		let th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success--message').addClass('active').css('display', 'flex').hide().fadeIn();
			$(th).find('label').removeClass('success');
			setTimeout(function() {
				$(th).find('.success--message').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	$('input').change(function() {
		let el = $(this).parent().find('label');
		if ($(this).val()) {
			el.addClass('success');
			el.removeClass('error');
		} else {
			el.addClass('error');
			el.removeClass('success');
		}
	});
		
	$('.image--carousel-1').owlCarousel({
		items: 1,
		dots: true,
		nav: false,
		loop: true,
		smartSpeed: 750,
		mouseDrag: false,
		touchDrag: false,
		autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: false,
		responsive: {
			0: {
				autoWidth: true
			},
			680: {
				autoWidth: false
			}
		}
	});

	$('.image--carousel-2').owlCarousel({
		items: 1,
		dots: true,
		nav: false,
		loop: true,
		smartSpeed: 750,
		mouseDrag: false,
		touchDrag: false,
		autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: false,
		responsive: {
			0: {
				autoWidth: true
			},
			680: {
				autoWidth: false
			}
		}
	});

	$('.image--carousel-3').owlCarousel({
		items: 1,
		dots: true,
		nav: false,
		loop: true,
		smartSpeed: 750,
		mouseDrag: false,
		touchDrag: false,
		autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: false,
		responsive: {
			0: {
				autoWidth: true
			},
			680: {
				autoWidth: false
			}
		}
	});

});
