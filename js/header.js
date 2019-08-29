window.addEventListener('scroll', () => {
	const logoImage = document.querySelector('.logo img');
	const mainNav = document.getElementById('#mainNav');
	console.log();
	if (window.pageYOffset > 0.15 * screen.height) {
		logoImage.style.height = '7vh';
	} else {
		logoImage.style.height = '10vh';
	}
});
