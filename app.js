$(window).scroll(() => {
	var header = $(document).scrollTop();
	var headerHeight = $('.header').outerHeight();
	//header > headerHeight i.e. when the scroll value is higher than the height of the header, it will add .fixed class to it.
	if (header > headerHeight) {
		$('.header').addClass('fixed');
	} else {
		$('.header').removeClass('fixed');
	}
	//
	var firstSection = $('.sec-1').outerHeight();
	console.log(`${firstSection}`);
	if (header > firstSection) {
		$('.header').addClass('in-view');
	} else {
		$('.header').removeClass('in-view');
	}
});
