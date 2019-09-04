// 7 Sections
sectionHeights = [ 0, 0, 0, 0, 0, 0, 0 ];
sumFirstTwo = 0;
changeHeight = 0;
secTwoTrigger = true;
halfScreen = 0;
secThreeTreshold = 0;
secOneTextVisible = true;
SetVariables = () => {
	sections = document.getElementsByClassName('section');
	sectionHeights = Array.prototype.map.call(sections, (x) => x.offsetHeight);
	sumFirstTwo = sectionHeights[0] + sectionHeights[1];
	halfScreen = window.innerHeight / 2;
	secThreeTreshold = window.innerHeight * 0.27;
	changeHeight = sectionHeights.slice(0, 4).reduce((sum, current) => sum + current);
	// document.getElementById('height').innerText = `h:${window.innerHeight}px`;
	// document.getElementById('width').innerText = `w:${window.innerWidth}px`;
};
SetVariables();

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
		// secTwoTrigger=false;
		document.getElementsByClassName('s2-body__text-title')[0].classList.add('s2anim-body__text-title');
		document.getElementsByClassName('s2-body__text-body')[0].classList.add('s2anim-body__text-body');
	}

	if (window.scrollY > this.sumFirstTwo && this.secOneTextVisible) {
		this.secOneTextVisible = false;
		document.getElementsByClassName('sec-1-text')[0].style.visibility = 'hidden';
	} else if (window.scrollY <= this.sumFirstTwo && !secOneTextVisible) {
		this.secOneTextVisible = true;
		document.getElementsByClassName('sec-1-text')[0].style.visibility = 'visible';
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
	if (window.scrollY + this.halfScreen > this.sumFirstTwo + secThreeTreshold) {
		document.getElementsByClassName('s3-title')[0].style.top = `${secThreeTreshold}px`;
	} else if (window.scrollY + this.halfScreen < this.sumFirstTwo) {
		document.getElementsByClassName('s3-title')[0].style.visibility = 'hidden';
		document.getElementsByClassName('s3-title')[0].style.top = `0`;
	} else {
		document.getElementsByClassName('s3-title')[0].style.visibility = 'visible';
		document.getElementsByClassName('s3-title')[0].style.top = `${this.halfScreen +
			window.scrollY -
			this.sumFirstTwo}px`;
	}
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
