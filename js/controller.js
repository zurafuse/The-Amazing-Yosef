
var origState = "default";

// touch event handlers
// Set up touch events for mobile, etc
// touch event handlers
// Set up touch events for mobile, etc

window.addEventListener("touchstart", function (e) {
  mousePos = getTouchPos(canvas, e);
  var touch = [];
  for (i in e.touches)
  {
	touch.push(e.touches[i]);
  }
}, false);

window.addEventListener("touchend", function (e) {
  mousePos = endTouchPos(canvas, e);
  var touch = [];
  for (i in e.touches)
  {
	touch.push(e.touches[i]);
  }
}, false);

// Get the position of a touch relative to the canvas
function getTouchPos(canvasDom, touchEvent) {

	for (i in touchEvent.touches)
	{	
		var thisXPos = touchEvent.touches[i].clientX;
		var thisYPos = touchEvent.touches[i].clientY;
	
			//Listen for the user touching the arrow keys 
		if (thisXPos < yosefUI.joyStick.left.x + (yosefUI.joyStick.left.width * 1.3) && thisXPos > yosefUI.joyStick.left.x * 0.7 &&
			thisYPos > yosefUI.joyStick.left.y - (yosefUI.joyStick.left.height * 0.7) && thisYPos < yosefUI.joyStick.left.y + (yosefUI.joyStick.left.height * 0.7))
		{
			player.controller.right = false;
			player.controller.left = true;
			player.dir = "left";
		}
		
		if (thisXPos < yosefUI.joyStick.right.x + (yosefUI.joyStick.right.width * 1.3) && thisXPos > yosefUI.joyStick.right.x * 0.7 &&
			thisYPos > yosefUI.joyStick.right.y - (yosefUI.joyStick.right.height * 0.7) && thisYPos < yosefUI.joyStick.right.y + (yosefUI.joyStick.right.height * 0.7))
		{
			player.controller.right = true;
			player.controller.left = false;
			player.dir = "right";
		}
		
		if (thisXPos < yosefUI.joyStick.up.x + (yosefUI.joyStick.up.width * 0.8) && thisXPos > yosefUI.joyStick.up.x - (yosefUI.joyStick.up.width * 0.8) &&
			thisYPos > yosefUI.joyStick.up.y * 0.8 && thisYPos < yosefUI.joyStick.up.y + (yosefUI.joyStick.up.height * 1.2))
		{
			player.controller.up = true;
			player.dir = "up";
			
		}
		
		if (thisXPos < yosefUI.joyStick.down.x + (yosefUI.joyStick.down.width * 0.7) && thisXPos > yosefUI.joyStick.down.x - (yosefUI.joyStick.down.width * 0.7) &&
			thisYPos > yosefUI.joyStick.down.y * 0.8 && thisYPos < yosefUI.joyStick.down.y + yosefUI.joyStick.down.height * 1.2)
		{
			player.controller.down = true;
			player.dir = "down";
		}
		
			//detect user input on title screen
				if (yosef.gamestate == "title")
				{
					yosef.gamestate = "play";
				}
	}
}

function endTouchPos(canvasDom, touchEvent) {
	player.controller.left = false;
	player.controller.right = false;
	player.controller.up = false;
	player.controller.down = false;
}