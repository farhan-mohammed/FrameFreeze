// 7 Sections
sectionHeights = [ 0, 0, 0, 0, 0, 0, 0 ];
sumFirstTwo = 0;
changeHeight = 0;
secTwoTrigger = true;
secThreeTrigger = true;
halfScreen = 0;
secThreeTreshold = 0;
secOneTextVisible = true;
SetVariables = () => {
	sections = document.getElementsByClassName('section');
	sectionHeights = Array.prototype.map.call(sections, (x) => x.offsetHeight);
	sumFirstTwo = sectionHeights[0] + sectionHeights[1];
	halfScreen = window.innerHeight / 2;
	secThreeTreshold = window.innerHeight * 0.27;
	y = document.getElementsByClassName('footer-trans-img')[0].clientHeight * (65 / 319);
	document.getElementsByClassName('footer-trans-table')[0].style.height = `${y}px`;
	changeHeight = sectionHeights.slice(0, 4).reduce((sum, current) => sum + current);
	// document.getElementById('height').innerText = `h:${window.innerHeight}px`;
	// document.getElementById('width').innerText = `w:${window.innerWidth}px`;
};
SetVariables();
// Setup

window.addEventListener('scroll', () => {
	// if (window.scrollY >= this.changeHeight && light == false) {
	// 	console.clear();
	// 	console.log('WE ARE PAST');
	// 	setColor(5);
	// 	setColor(6);
	// 	setColor(4);
	// 	light = true;
	// } else if (window.scrollY + window.innerHeight < this.changeHeight && light != false) {
	// 	console.clear();
	// 	console.log('NOT YET');
	// 	removeColor(5);
	// 	removeColor(6);
	// 	removeColor(4);
	// 	light = false;
	// }
	// Make this more effienct
	if (secTwoTrigger && window.scrollY > this.sectionHeights[0] * 0.75) {
		// document.getElementsByClassName("s2-body")[0].style.backgroundColor="orange";
		secTwoTrigger = false;
		document.getElementsByClassName('s2-body__text-title')[0].classList.add('s2anim-body__text-title');
		document.getElementsByClassName('s2-body__text-body')[0].classList.add('s2anim-body__text-body');
	}
	if (window.scrollY < this.sectionHeights[0]) {
		document.getElementsByClassName('s3-title')[0].style.visibility = 'hidden';
	} else {
		document.getElementsByClassName('s3-title')[0].style.visibility = 'visible';
	}
	if (window.scrollY > this.sumFirstTwo && this.secOneTextVisible) {
		this.secOneTextVisible = false;
		document.getElementsByClassName('sec-1-text')[0].style.visibility = 'hidden';
		document.getElementsByClassName('sec-1-text')[0].style.visibility = 'hidden';
	} else if (window.scrollY <= this.sumFirstTwo && !secOneTextVisible) {
		this.secOneTextVisible = true;
		document.getElementsByClassName('sec-1-text')[0].style.visibility = 'visible';
	}
	if (window.scrollY > this.sumFirstTwo - window.innerHeight * 0.1) {
		document.getElementsByClassName('s3-l')[0].classList.add('s3-fix');
		document.getElementsByClassName('s3-top')[0].style.visibility = 'visible';
	} else if (window.scrollY < this.sumFirstTwo) {
		document.getElementsByClassName('s3-top')[0].style.visibility = 'hidden';
		document.getElementsByClassName('s3-l')[0].classList.remove('s3-fix');
	}

	if (
		window.scrollY > this.sumFirstTwo - window.scrollY * 0.1 &&
		window.scrollY < this.sumFirstTwo + window.innerHeight * 0.27
	) {
		document.getElementsByClassName('s3-title')[0].style.top = `${window.scrollY - this.sumFirstTwo}px`;
	} else if (window.scrollY < this.sumFirstTwo) {
		document.getElementsByClassName('s3-title')[0].style.top = `-${window.scrollY * 0.1}px`;
	}
	if (secThreeTrigger && window.scrollY > this.sumFirstTwo + window.innerHeight * 0.25) {
		document.getElementsByClassName('s3-body-')[0].classList.add('s3-body-anim');
		secThreeTreshold = false;
	}
	if (window.scrollY >= this.sumFirstTwo + window.innerHeight * 0.2) {
		// document.getElementsByClassName('s3-body')[0].classList.add('s3-body-anim');
	}
	if (window.scrollY < this.changeHeight) {
		document.getElementsByClassName(`sec-5-background`)[0].style.backgroundColor = '';
		document.getElementsByClassName(`sec-6-background`)[0].style.backgroundColor = '';
		document.getElementsByClassName(`sec-5`)[0].style.color = '#fff';
		document.getElementById(`mainNav`).style.color = '#fff';
		document.getElementById('head-contact').style.borderColor = '#fff';
	} else {
		document.getElementsByClassName(`sec-5`)[0].style.color = '#000';
		document.getElementById('head-contact').style.borderColor = '#000';
		document.getElementById(`mainNav`).style.color = '#000';
		document.getElementsByClassName(`sec-5-background`)[0].style.backgroundColor = '#fff';
		document.getElementsByClassName(`sec-6-background`)[0].style.backgroundColor = '#fff';
	}
	// if (window.scrollY + this.halfScreen > this.sumFirstTwo + secThreeTreshold) {
	// 	document.getElementsByClassName('s3-title')[0].style.top = `${secThreeTreshold}px`;
	// } else if (window.scrollY + this.halfScreen < this.sumFirstTwo) {
	// 	document.getElementsByClassName('s3-title')[0].style.visibility = 'hidden';
	// 	document.getElementsByClassName('s3-title')[0].style.top = `0`;
	// } else {
	// 	document.getElementsByClassName('s3-title')[0].style.visibility = 'visible';
	// 	document.getElementsByClassName('s3-title')[0].style.top = `${this.halfScreen +
	// 		window.scrollY -
	// 		this.sumFirstTwo}px`;
	// }
});
// function setColor(x) {
// 	document.getElementsByClassName(`sec-${x}`)[0].style.color = '#fff';
// 	document.getElementsByClassName(`sec-${x}`)[0].style.backgroundColor = '#072654';
// }
// function removeColor(x) {
// 	document.getElementsByClassName(`sec-${x}`)[0].style.color = '';
// 	document.getElementsByClassName(`sec-${x}`)[0].style.backgroundColor = '';
// }
window.addEventListener('resize', SetVariables);

// setInterval(() => {
// 	t = document.getElementsByClassName('fc-li');
// 	x = Array.prototype.map.call(t, (p) => p.style);
// 	console.log(x);
// 	for (i = 0; i < x.length; i++) {
// 		document.getElementsByClassName('fc-li')[i].style.right = `${x[i] + 1}`;
// 	}
// 	console.log('hi');
// }, 500);
