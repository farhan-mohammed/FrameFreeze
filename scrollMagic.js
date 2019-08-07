// init controller
var controller = new ScrollMagic.Controller();

var tl = new TimelineMax({ onUpdate: updatePercentage });

tl.to('.s2-closer', 0.5, { rotation: 0 });
// build scene
console.log(1 - $('.header').height() / $(window).height());
var scene = new ScrollMagic.Scene({
	duration: (1 - $('.header').height() / $(window).height()) * 100 + '%',
	triggerElement: '.s1',
	triggerHook: $('.header').height() / $(window).height()
})
	.setTween(tl)
	.addTo(controller)
	.addIndicators();

function updatePercentage() {
	//percent.innerHTML = (tl.progress() *100 ).toFixed();
	tl.progress();
	// console.log(tl.progress());
}
