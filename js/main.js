$(function () {
	$('.account').on('click', function () {
		$('.header__links').toggleClass('header__links--active');
		$(this).toggleClass("open");
	});
});
