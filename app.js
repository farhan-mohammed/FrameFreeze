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
	if (header > firstSection) {
		$('.header').addClass('in-view');
	} else {
		$('.header').removeClass('in-view');
	}
});

window.onload = resizeRefresh;
window.onresize = resizeRefresh;
function resizeRefresh() {
	footerRefresh();
}
function footerRefresh() {
	//do a load of stuff

	let displayWidth = $('.footer').width();
	let footerHeight = $('.footer').outerHeight();

	let cuts = Math.floor(displayWidth / 50);
	let cut = displayWidth / cuts;

	$('.footer').css({ 'margin-top': '-' + cut + 'px' });
	$('.footer').css({ 'padding-top': cut + 'px' });

	const xPerc = cut * 100 / displayWidth;
	const yPerc = cut * 100 / $('.footer').outerHeight();

	let footercut = 'polygon(0 0';
	for (i = 1; i < cuts + 1; i++) {
		footercut += `, ${i * xPerc}% ${i % 2 == 0 ? 0 : yPerc}%`;
	}
	footercut += ', 100% 100%, 0 100%)';

	console.log('yayayay');
	$('.footer').css({ 'clip-path': footercut });
}
