// 7 Sections
sectionHeights = [ 0, 0, 0, 0, 0, 0, 0 ];
iconWidth = 80 + 40;
SetVariables = () => {
	sections = document.getElementsByClassName('sections');
	secHeight = Array.prototype.map.call(sections, (x) => x.offsetHeight);
	sum = 0;
	for (i = 0; i < secHeight.length; i++) {
		sum += secHeight[i];
		this.sectionHeights[i] = sum;
	}
};
SetVariables();
triggers = {
	sec1: {
		titleHidden: false
	},
	sec2: {
		textTrigger: true
	},
	sec3: {
		lockTrigger: true
	}
};
window.addEventListener('scroll', () => {
	section1Trigger();
});
section1Trigger = () => {
	if (!triggers.sec1.titleHidden && window.scrollY > sectionHeights[0]) {
		document.getElementsByClassName('intro-text')[0].style.visibility = 'hidden';
		document.getElementsByClassName('s3-cavern-text-con')[0].style.visibility = 'visible';
		triggers.sec1.titleHidden = true;
	} else if (triggers.sec1.titleHidden && !(window.scrollY > sectionHeights[0])) {
		document.getElementsByClassName('intro-text')[0].style.visibility = 'visible';
		document.getElementsByClassName('s3-cavern-text-con')[1].style.visibility = 'hidden';
		triggers.sec1.titleHidden = false;
	}

	if (triggers.sec2.textTrigger && window.scrollY > sectionHeights[0] * 0.5) {
		document.getElementsByClassName('s2-con-text')[0].style.visibility = 'visible';
		document.getElementsByClassName('s2-con-text')[0].classList.add('animated', 'fadeInLeftBig');
		triggers.sec2.textTrigger = false;
	}

	if (triggers.sec3.lockTrigger && window.scrollY > sectionHeights[1]) {
		document.getElementsByClassName('s3-cavern-text-con')[0].style.position = 'absolute';
	}
};
