var imagesPath = "../images/";
var context;
window.addEventListener('load', eventWindowLoaded, false);

function eventWindowLoaded() {
	canvasApp();
	example();
}

function canvasSupport() {
	return Modernizr.canvas;
}

function canvasApp() {
	if (!canvasSupport()) {
		return;
	} else {
		var theCanvas = document.getElementById("canvas");
		if(theCanvas != null)
			context = theCanvas.getContext("2d");
	}
}