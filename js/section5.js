// 7 Sections
sectionHeights = [ 0, 0, 0, 0, 0, 0, 0 ];
sumFirstTwo = 0;
changeHeight = 0;
secTwoTrigger = true;
secThreeTrigger = true;
halfScreen = 0;
secThreeTreshold = 0;
secOneTextVisible = true;
iconWidth = 80 + 40;
SetVariables = () => {
	sections = document.getElementsByClassName('section');
	sectionHeights = Array.prototype.map.call(sections, (x) => x.offsetHeight);
	sumFirstTwo = sectionHeights[0] + sectionHeights[1];
	halfScreen = window.innerHeight / 2;
	secThreeTreshold = window.innerHeight * 0.27;
	y = document.getElementsByClassName('footer-trans-img')[0].clientHeight * (65 / 319);
	document.getElementsByClassName('footer-trans-table')[0].style.height = `${y}px`;
	changeHeight = sectionHeights.slice(0, 4).reduce((sum, current) => sum + current);
	people = document.getElementsByClassName('fc-li');
	poeplepos = Array.prototype.map.call(people, (x) => x);
	for (i = 0; i < poeplepos.length; i++) {
		document.getElementsByClassName('fc-li')[i].style.left = `${this.iconWidth * i}px`;
	}
	document.getElementsByClassName('foot-credit')[0].style.width = '';

	if (document.getElementsByClassName('foot-credit')[0].clientWidth > poeplepos.length * this.iconWidth) {
		document.getElementsByClassName('foot-credit')[0].style.width = poeplepos.length * this.iconWidth + 'px';
		document.getElementsByClassName('foot-credit')[0].style.visibility = '';
	}
	dee = document.getElementsByClassName('foot-credit')[0].clientWidth;
	rng = parseInt(document.getElementsByClassName('foot-credit')[0].clientWidth) - this.iconWidth * 1.75;
	document.getElementsByClassName('fc-cover')[1].style.left = `${rng}px`;
	document.getElementsByClassName('fc-cover')[0].style.right = `${rng}px`;
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
	console.clear();
	scroll = window.scrollY;
	height = window.innerHeight;
	topthres = height * 0.1;

	//Update the margin of sec-3 if youre changing the %
	bottomthres = height * 0.27;
	console.log(`BOTTOMTHRES:${this.sumFirstTwo + bottomthres}`);
	console.log(`SCROLL:${scroll}`);
	console.log(``);

	if (
		window.scrollY > this.sumFirstTwo - topthres &&
		window.scrollY < this.sumFirstTwo + bottomthres + height * 0.15
	) {
		document.getElementsByClassName('s3-l')[0].classList.add('s3-fix');
		document.getElementsByClassName('s3-top')[0].style.visibility = 'visible';
		document.getElementsByClassName('s3-l')[0].style.top = '';
	} else if (window.scrollY >= this.sumFirstTwo + bottomthres + height * 0.15) {
		console.log('TRIGGERED');
		document.getElementsByClassName('s3-l')[0].style.top = `${bottomthres + height * 0.25}px`;
		document.getElementsByClassName('s3-l')[0].classList.remove('s3-fix');
	} else if (window.scrollY < this.sumFirstTwo + topthres * 3) {
		document.getElementsByClassName('s3-top')[0].style.visibility = 'hidden';
		document.getElementsByClassName('s3-l')[0].classList.remove('s3-fix');
		document.getElementsByClassName('s3-l')[0].style.top = '';
	}
	if (scroll >= this.sumFirstTwo - topthres && scroll <= this.sumFirstTwo + bottomthres) {
		document.getElementsByClassName('s3-title')[0].style.top = `${scroll - this.sumFirstTwo}px`;
	} else if (window.scrollY < this.sumFirstTwo - topthres) {
		document.getElementsByClassName('s3-title')[0].style.top = `-${topthres}px`;
	} else {
		document.getElementsByClassName('s3-title')[0].style.top = `${bottomthres}px`;
	}

	if (secThreeTrigger && window.scrollY > this.sumFirstTwo + window.innerHeight * 0.25) {
		document.getElementsByClassName('s3-body-')[0].classList.add('s3-body-anim');
		secThreeTreshold = false;
	}

	if (window.scrollY < this.changeHeight * 0.95) {
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

setInterval(() => {
	y = document.getElementsByClassName('fc-li');
	allPeople = Array.prototype.map.call(y, (x) => x.style.left);
	wid = document.getElementsByClassName('foot-credit')[0].clientWidth;

	size = allPeople.length;

	for (i = 0; i < allPeople.length; i++) {
		y = document.getElementsByClassName('fc-li')[i].style.left;
		if (parseInt(y.substring(0, y.length - 2)) >= this.iconWidth * (allPeople.length - 1)) {
			document.getElementsByClassName('fc-li')[i].style.left = `0px`;
			document.getElementsByClassName('fc-li')[i].style.visibility = `hidden`;
		} else {
			if (parseInt(y.substring(0, y.length - 2)) == 0) {
				document.getElementsByClassName('fc-li')[i].style.visibility = ``;
			}
			document.getElementsByClassName('fc-li')[i].style.left = `${parseInt(allPeople[i].substring(-2)) +
				this.iconWidth}px`;
		}
	}
	//Change transition speed if you change the interval
}, 2000);
