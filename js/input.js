//Input
window.addEventListener('keydown', function(e) {
		keysDown[e.keyCode] = true;
		delete keysUp[e.keyCode];
});
window.addEventListener('keyup', function(e) {
		keysUp[e.keyCode] = true;
		delete keysDown[e.keyCode];
		if ((e.keyCode == 37 && dirLead == "left") || (e.keyCode == 38 && dirLead == "up") || 
			(e.keyCode == 39 && dirLead == "right") || (e.keyCode == 40 && dirLead == "front")){
			dirLead = "default";
		}
});

// touch event handlers
// Set up touch events for mobile, etc
window.addEventListener("touchstart", function (e) {
        mousePos = getTouchPos(canvas, e);
  var touch = e.touches[0];
  var mouseEvent = new MouseEvent("mousedown", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchend", function (e) {
  var mouseEvent = new MouseEvent("mouseup", {});
  canvas.dispatchEvent(mouseEvent);
  	delete keysDown[38];
  	delete keysDown[39];
  	delete keysDown[40];
  	delete keysDown[37];
  	delete keysDown[32];
}, false);

// Get the position of a touch relative to the canvas
function getTouchPos(canvasDom, touchEvent) {
  var thisXPos = touchEvent.touches[0].clientX;
  var thisYPos = touchEvent.touches[0].clientY;
  
  if (thisXPos < canvas.width * 0.25 && thisYPos > canvas.height * 0.19 && thisYPos < canvas.height * 0.90)
  {
  	delete keysDown[38];
  	delete keysDown[39];
  	delete keysDown[40];
	delete keysUp[37];
	
	dirLead = "left";
	keysDown[37] = true;
  }
  
   else if (thisXPos > canvas.width * 0.74 && thisYPos > canvas.height * 0.19 && thisYPos < canvas.height * 0.90)
  {
	delete keysDown[37];
  	delete keysDown[38];
 	delete keysDown[40];
	delete keysUp[39];
	
	dirLead = "right";
  	keysDown[39] = true;
  }
  
   else if (thisXPos < canvas.width * 0.74 && thisXPos > canvas.width * 0.25 && thisYPos < canvas.height * 0.35)
  {
	delete keysDown[37];
  	delete keysDown[39];
  	delete keysDown[40];
	delete keysUp[38];
	
	dirLead = "up";
	keysDown[38] = true;
  }
  
   else if (thisXPos < canvas.width * 0.74 && thisXPos > canvas.width * 0.25 && thisYPos > canvas.height * 0.65)
  {
	delete keysDown[37];
  	delete keysDown[38];
 	delete keysDown[39];
	delete keysUp[40];
	
	dirLead = "front";
  	keysDown[40] = true;
  }
  
   else if (thisXPos < canvas.width * 0.74 && thisXPos > canvas.width * 0.25 && thisYPos > canvas.height * 0.35 && thisYPos < canvas.height * 0.65)
  {
  	keysDown[32] = true;
  }
  
}