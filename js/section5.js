// 7 Sections
sectionHeights = [ 0, 0, 0, 0, 0, 0, 0 ];
sumFirstTwo = 0;
changeHeight = 0;
secOneTextVisible = true;
SetVariables = () => {
	sections = document.getElementsByClassName('section');
	sectionHeights = Array.prototype.map.call(sections, (x) => x.offsetHeight);
	sumFirstTwo = sectionHeights[0] + sectionHeights[1];
	changeHeight = sectionHeights.slice(0, 4).reduce((sum, current) => sum + current);
	document.getElementById('height').innerText = `h:${window.outerHeight}px`;
	document.getElementById('width').innerText = `w:${window.outerWidth}px`;
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
	if (window.scrollY > this.sumFirstTwo && this.secOneTextVisible) {
		this.secOneTextVisible = false;
		document.getElementsByClassName('sec-1-text')[0].style.visibility = 'hidden';
	} else if (window.scrollY <= this.sumFirstTwo && !secOneTextVisible) {
		this.secOneTextVisible = true;
		document.getElementsByClassName('sec-1-text')[0].style.visibility = 'visible';
	}

	if (window.scrollY < this.changeHeight) {
		document.getElementsByClassName(`sec-5`)[0].style.backgroundColor = 'rgba(7, 38, 84, 0)';
	} else {
		percentage = (window.scrollY - this.changeHeight) / this.sectionHeights[4];
		console.log(percentage);
		/*
            if the scroll bar is between 0 and 10% of the div
                then the gradient will get softer to reveal the true color
            if its past
                set to true color
        */
		document.getElementsByClassName(`sec-5`)[0].style.backgroundColor = `rgba(7, 38, 84, ${percentage < 0.1
			? percentage * 10
			: 1})`;
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
