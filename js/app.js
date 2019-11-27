// 7 Sections
sectionHeights = [ 0, 0, 0, 0, 0, 0, 0 ];
iconWidth = 80 + 40;
quarterHeight = 0;
SetVariables = () => {
	sections = document.getElementsByClassName('sections');
	secHeight = Array.prototype.map.call(sections, (x) => x.offsetHeight);
	sum = 0;
	for (i = 0; i < secHeight.length; i++) {
		sum += secHeight[i];
		this.sectionHeights[i] = sum;
	}
	document.getElementsByClassName('s6-bridge')[0].style.height = `${document.getElementsByClassName(
		's6-img-con__img'
	)[0].clientHeight *
		(69 / 319)}px`;
	this.quarterHeight = document.documentElement.clientHeight / 16;
};
SetVariables();
triggers = {
	header: {
		scrolled: false
	},
	sec1: {
		titleHidden: false
	},
	sec2: {
		textTrigger: true
	},
	sec3: {
		lockTrigger: true
	},
	sec5: {
		colorTrigger: true
	}
};
window.addEventListener('scroll', () => {
	section1Trigger();
});
section1Trigger = () => {
	scrolled = window.scrollY;
	if (scrolled > sectionHeights[0] && !triggers.header.scrolled) {
		triggers.header.scrolled = true;
		document.getElementsByClassName('header')[0].classList.add('header-scrolled');
		console.log('aee');
	} else if (scrolled < sectionHeights[0] && triggers.header.scrolled) {
		document.getElementsByClassName('header')[0].classList.remove('header-scrolled');
		triggers.header.scrolled = false;
		console.log('oee');
	}
	if (!triggers.sec1.titleHidden && scrolled > sectionHeights[0]) {
		document.getElementsByClassName('intro-text')[0].style.visibility = 'hidden';
		document.getElementsByClassName('s3-cavern-text-con')[0].style.visibility = 'visible';
		triggers.sec1.titleHidden = true;
	} else if (triggers.sec1.titleHidden && !(scrolled > sectionHeights[0])) {
		document.getElementsByClassName('intro-text')[0].style.visibility = 'visible';
		document.getElementsByClassName('s3-cavern-text-con')[0].style.visibility = 'hidden';
		triggers.sec1.titleHidden = false;
	}

	if (triggers.sec2.textTrigger && scrolled > sectionHeights[0] * 0.5) {
		document.getElementsByClassName('s2-con-text')[0].style.visibility = 'visible';
		document.getElementsByClassName('s2-con-text')[0].classList.add('animated', 'fadeInLeftBig');
		triggers.sec2.textTrigger = false;
	}

	if (triggers.sec3.lockTrigger && scrolled > sectionHeights[1]) {
		document.getElementsByClassName('s3-cavern-text-con')[0].style.position = 'absolute';
	}
	if (triggers.sec5.colorTrigger && scrolled > sectionHeights[3] - this.quarterHeight) {
		triggers.sec5.colorTrigger = false;
		document.getElementsByClassName('s5-background')[0].classList.add('s5-light');
		document.getElementsByClassName('s5-body')[0].classList.add('s5-light');
		document.getElementsByClassName('s4-background')[0].classList.add('s5-light');
		document.getElementsByClassName('s5')[0].classList.add('s5-light');
		document.getElementsByClassName('s5-background')[0].classList.remove('s5-dark');
		document.getElementsByClassName('s5-body')[0].classList.remove('s5-dark');
		document.getElementsByClassName('s4-background')[0].classList.remove('s5-dark');
		document.getElementsByClassName('s5')[0].classList.remove('s5-dark');
		document.getElementsByClassName('header')[0].classList.add('dark');
	} else if (!triggers.sec5.colorTrigger && scrolled < sectionHeights[3] - this.quarterHeight) {
		triggers.sec5.colorTrigger = true;
		document.getElementsByClassName('s5-background')[0].classList.add('s5-dark');
		document.getElementsByClassName('s5-body')[0].classList.add('s5-dark');
		document.getElementsByClassName('s4-background')[0].classList.add('s5-dark');
		document.getElementsByClassName('s5')[0].classList.add('s5-dark');
		document.getElementsByClassName('header')[0].classList.remove('dark');
		document.getElementsByClassName('s5-background')[0].classList.remove('s5-light');
		document.getElementsByClassName('s5-body')[0].classList.remove('s5-light');
		document.getElementsByClassName('s4-background')[0].classList.remove('s5-light');
		document.getElementsByClassName('s5')[0].classList.remove('s5-light');
	}
};
