$(document).ready(function() {
	$('.secondary-nav .nav-link').click(function() {
		$('.secondary-nav .nav-link').removeClass('active');
	})
	$('.show-next').click(function() {
		$(this).closest('.inner-tab').hide();
		$('.inner-tab-2').removeClass('d-none');
	});
	$('.play-button').click(function() {
		$(this).closest('.fake-poster').hide();
		$('#video').removeClass('d-lg-none d-md-none').show().trigger('play');
	});
	$('#language-selector').click(function(e) {
		e.stopPropagation();
		$('.language-con').toggle();
	});
	$(document).click(function(e) {
		$('.language-con').hide();
	});
});
var navbar = document.getElementById("navbar");
var navBrand = document.getElementById("nav-brand");
var sticky = navbar.offsetTop;
window.onscroll = function() { 
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
		navBrand.classList.add("navbar-brand-small");
	}
	else {
		navbar.classList.remove("sticky");
		navBrand.classList.remove("navbar-brand-small");
	}
};