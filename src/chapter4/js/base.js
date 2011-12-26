var imagesPath = "../images/";
var theCanvas;
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
		theCanvas = document.getElementById("canvas");
		if(theCanvas != null)
			context = theCanvas.getContext("2d");
	}
}