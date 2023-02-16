$(function() {

	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		let href1 = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(href1).offset().top - 100
		}, {
				duration: 800,
				easing: "linear"
		});
		$(".right").slideToggle('medium').removeClass('open');
		$("body").css("overflow", "");
		// $('.right').slideToggle('medium').removeClass('open');
		$('.burger').removeClass('open');
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
		dots: false,
		items: 1,
		loop: false,
		smartSpeed: 700,
		margin: 24,
		navText: [
			'<div class="arrows--prev"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.1199 1.1199L3.03119 7.2086L15.2082 7.20823L16 8L15.2083 8.79166L3.03165 8.79168L9.11998 14.88L8 16L1.11989 9.11989L0.791769 8.79177L-8.01043e-07 8L1.11999 6.88001L8 9.48178e-07L9.1199 1.1199Z"/></svg></div>',
			'<div class="arrows--next"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.8801 1.1199L12.9688 7.2086L0.791771 7.20823L0 8L0.791659 8.79166L12.9683 8.79168L6.88002 14.88L8 16L14.8801 9.11989L15.2082 8.79177L16 8L14.88 6.88001L8 9.48178e-07L6.8801 1.1199Z"/></svg></div>'
		],
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

		$('html, body').animate({
				scrollTop: $(href).offset().top - 100
		}, {
				duration: 800,
				easing: "linear"
		});

		return false;
	});

});
