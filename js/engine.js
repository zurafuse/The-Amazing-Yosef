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

//Collisions
function dudeLeftColl(dude) {
	for (i = 0; i < blocks.length; i++){
		if ((dude.y + dude.height) >= blocks[i].y + 4 && 
			dude.y <= (blocks[i].y + blocks[i].height) - 4 && 
			dude.x <= (blocks[i].x + blocks[i].width)){
				if (dude.x + dude.width > blocks[i].x + blocks[i].width){
					dude.x = blocks[i].x + blocks[i].width;
					return false;
				}
				else if ((dude.x - player.speed * ((Date.now() - time) / 1000)) + 
					dude.width > blocks[i].x + blocks[i].width){
					dude.x = blocks[i].x + blocks[i].width;
					return false;
				}								
		}
	}
	for (i = 0; i < breakables.length; i++){
		if ((dude.y + dude.height) >= breakables[i].y + 4 && 
			dude.y <= (breakables[i].y + breakables[i].height) - 4 && 
			dude.x <= (breakables[i].x + breakables[i].width)){
				if (dude.x + dude.width > breakables[i].x + breakables[i].width){
					dude.x = breakables[i].x + breakables[i].width;
					return false;
				}
				else if ((dude.x - player.speed * ((Date.now() - time) / 1000)) + 
					dude.width > breakables[i].x + breakables[i].width){
					dude.x = breakables[i].x + breakables[i].width;
					return false;
				}								
		}
	}	
	return true;
}

function dudeRightColl(dude) {
	for (i = 0; i < blocks.length; i++){
		if ((dude.y + dude.height) >= blocks[i].y + 4 && 
			dude.y <= (blocks[i].y + blocks[i].height) - 4 && 
			dude.x + dude.width >= blocks[i].x){
				if (dude.x + dude.width < blocks[i].x + blocks[i].width){
					dude.x = blocks[i].x - dude.width;
					return false;
				}
				else if ((dude.x + player.speed * ((Date.now() - time) / 1000)) + 
					dude.width < blocks[i].x + blocks[i].width){
					dude.x = blocks[i].x - dude.width;
					return false;
				}
		}
	}
	for (i = 0; i < breakables.length; i++){
		if ((dude.y + dude.height) >= breakables[i].y + 4 && 
			dude.y <= (breakables[i].y + breakables[i].height) - 4 && 
			dude.x + dude.width >= breakables[i].x){
				if (dude.x + dude.width < breakables[i].x + breakables[i].width){
					dude.x = breakables[i].x - dude.width;
					return false;
				}
				else if ((dude.x + player.speed * ((Date.now() - time) / 1000)) + 
					dude.width < breakables[i].x + breakables[i].width){
					dude.x = breakables[i].x - dude.width;
					return false;
				}
		}
	}
	return true;
}

function dudeUpColl(dude) {
	for (i = 0; i < blocks.length; i++){
		if ( 
			(dude.x + dude.width) >= blocks[i].x + 4 && 
			dude.x <= (blocks[i].x + blocks[i].width) - 4 && 
			dude.y <= (blocks[i].y + blocks[i].height)){
				if (dude.y > blocks[i].y){
					dude.y = blocks[i].y + blocks[i].height;
					return false;
				}
				else if ((dude.y - player.speed * ((Date.now() - time) / 1000)) > 
					blocks[i].y){
					dude.y = blocks[i].y + blocks[i].height;
					return false;
				}
		}
	}
	for (i = 0; i < breakables.length; i++){
		if ( 
			(dude.x + dude.width) >= breakables[i].x + 4 && 
			dude.x <= (breakables[i].x + breakables[i].width) - 4 && 
			dude.y <= (breakables[i].y + breakables[i].height)){
				if (dude.y > breakables[i].y){
					dude.y = breakables[i].y + breakables[i].height;
					//progress the fragility of the breakable
					if (breakables[i].sx < 300){
						breakables[i].sx += 100;
						if (gameover == false){
							powerLevel += 5;
						}
					}
					else{
						var thisBreakTest = Math.floor((Math.random() * 8) + 1);
	
						if (thisBreakTest == 2){
							runPower.push({
								x: breakables[i].x,
								y: breakables[i].y,
								width: spriteSizes,
								height: spriteSizes
							});
						}
						else if (thisBreakTest == 3){
							shootPower.push({
								x: breakables[i].x,
								y: breakables[i].y,
								width: spriteSizes * 0.5,
								height: spriteSizes
							});
						}
						else if (thisBreakTest == 4){
							frequentPower.push({
								x: breakables[i].x,
								y: breakables[i].y,
								width: spriteSizes,
								height: spriteSizes
							});
						}
						if (gameover == false){
							powerLevel += 20;
						}
						breakables.splice(i, 1);
					}
					bullets.splice(i, 1);
					return false;	
				}
				
				else if ((dude.y - player.speed * ((Date.now() - time) / 1000)) > 
					breakables[i].y){
					dude.y = breakables[i].y + breakables[i].height;
					return false;
				}
		}
	}
	return true;
}

function dudeFrontColl(dude) {
	for (i = 0; i < blocks.length; i++){
		if ( 
			(dude.x + dude.width) >= blocks[i].x + 4 && 
			dude.x <= (blocks[i].x + blocks[i].width) - 4 && 
			dude.y + dude.height >= blocks[i].y){
				if (dude.y < blocks[i].y){
					dude.y = blocks[i].y - blocks[i].height;
					return false;
				}
				else if ((dude.y + player.speed * ((Date.now() - time) / 1000)) < blocks[i].y){
					dude.y = blocks[i].y - blocks[i].height;
					return false;
				}
		}
	}
	for (i = 0; i < breakables.length; i++){
		if ( 
			(dude.x + dude.width) >= breakables[i].x + 4 && 
			dude.x <= (breakables[i].x + breakables[i].width) - 4 && 
			dude.y + dude.height >= breakables[i].y){
				if (dude.y < breakables[i].y){
					dude.y = breakables[i].y - breakables[i].height;
					return false;
				}
				else if ((dude.y + player.speed * ((Date.now() - time) / 1000)) < breakables[i].y){
					dude.y = breakables[i].y - breakables[i].height;
					return false;
				}
		}
	}
	return true;
}

function update(mod) {

//remove bullets from array if they leave the canvas	
	for (i in bullets){
		if (bullets[i].x > canvas.width + 3 ||
			bullets[i].x < -3 ||
			bullets[i].y > canvas.height + 3 ||
			bullets[i].y < -3){
				bullets.splice(i, 1);
			}
	}
	
	for (i in badBullets){
		if (badBullets[i].x > canvas.width + 3 ||
			badBullets[i].x < -3 ||
			badBullets[i].y > canvas.height + 3 ||
			badBullets[i].y < -3){
				badBullets.splice(i, 1);
			}
	}
	
	if (32 in keysUp){
		bulTrigger = 0;
	}
	if (32 in keysDown){
		if (player.shoot == true){
			if (bulControl % bullFreq == 0  || bulTrigger == 0){
				player.updateBull(direction);
				bullets.push({
					dir: direction,
					x: player.bulxPos,
					y: player.bulyPos,
					width: 0.138 * spriteSizes,
					height: 0.138 * spriteSizes,
				});
			bulTrigger = 1;
			}
		}
	}
    if (37 in keysDown) {
		if (dudeLeftColl(player) == true){
			if (dirLead != "right" || dirLead == "default"){
				if (player.x > canvas.width * 0.5){
					player.x -= player.speed * mod;
				}
				else{
					if (blocks[0].x < 0){
						for (i = 0; i < blocks.length; i++){
							blocks[i].x +=  player.speed * mod;
						}
						for (i = 0; i < breakables.length; i++){
							breakables[i].x +=  player.speed * mod;
						}
						for (i = 0; i < badUFOs.length; i++){
							badUFOs[i].x +=  player.speed * mod;
						}
						for (i = 0; i < badDudes2.length; i++){
							badDudes2[i].x +=  player.speed * mod;
						}
						for (i = 0; i < badDudes3.length; i++){
							badDudes3[i].x +=  player.speed * mod;
						}
						for (i = 0; i < sockPuppets.length; i++){
							sockPuppets[i].x +=  player.speed * mod;
						}
						for (i = 0; i < fires.length; i++){
							fires[i].x +=  player.speed * mod;
						}
						for (i = 0; i < backgrounds.length; i++){
							backgrounds[i].x +=  player.speed * mod;
						}
						for (i = 0; i < backgrounds2.length; i++){
							backgrounds2[i].x +=  player.speed * mod;
						}
						for (i = 0; i < runPower.length; i++){
							runPower[i].x +=  player.speed * mod;
						}
						for (i = 0; i < shootPower.length; i++){
							shootPower[i].x +=  player.speed * mod;
						}
						for (i = 0; i < frequentPower.length; i++){
							frequentPower[i].x +=  player.speed * mod;
						}
						Background.x = Background.x + 0.5;
					}
					else{
						player.x -= player.speed * mod;
					}
				}				
				direction = "left";
				dirLead = "left";
			}
		}

		moveMe = "true";
    }
    if (38 in keysDown) {
		if (dudeUpColl(player) == true){
			if (dudeFrontColl(player) == false)
			{
				jumpTrigger++;
			}
			if (jump == true){
				jumpTrigger++;
				player.y -= ((player.speed * mod) * 3);
				dirLead = "up";
			}
		}
		else{
			jumpTrigger = 0;
			jump = false;
		}
		moveMe = "true";
    }
    if (39 in keysDown) {
		if (dudeRightColl(player) == true){
			if (dirLead != "left" || dirLead == "default"){
				direction = "right";
				dirLead = "right";
				if (player.x < canvas.width * 0.5){
					player.x += player.speed * mod;
				}
				else{
					if ((blocks[blocks.length - 1].x + blocks[blocks.length - 1].width) > canvas.width){
						for (i = 0; i < blocks.length; i++){
							blocks[i].x -=  player.speed * mod;
						}
						for (i = 0; i < breakables.length; i++){
							breakables[i].x -=  player.speed * mod;
						}
						for (i = 0; i < badUFOs.length; i++){
							badUFOs[i].x -=  player.speed * mod;
						}
						for (i = 0; i < badDudes2.length; i++){
							badDudes2[i].x -=  player.speed * mod;
						}
						for (i = 0; i < badDudes3.length; i++){
							badDudes3[i].x -=  player.speed * mod;
						}
						for (i = 0; i < sockPuppets.length; i++){
							sockPuppets[i].x -=  player.speed * mod;
						}
						for (i = 0; i < fires.length; i++){
							fires[i].x -=  player.speed * mod;
						}
						for (i = 0; i < backgrounds.length; i++){
							backgrounds[i].x -=  player.speed * mod;
						}
						for (i = 0; i < backgrounds2.length; i++){
							backgrounds2[i].x -=  player.speed * mod;
						}
						for (i = 0; i < runPower.length; i++){
							runPower[i].x -=  player.speed * mod;
						}
						for (i = 0; i < shootPower.length; i++){
							shootPower[i].x -=  player.speed * mod;
						}
						for (i = 0; i < frequentPower.length; i++){
							frequentPower[i].x -=  player.speed * mod;
						}
						Background.x = Background.x - 0.5;
					}
					else{
						player.x += player.speed * mod;
					}
				}
			}
			moveMe = "true";
		}
    }

	if (dudeFrontColl(player) == true && jump == false){
		player.y += (player.speed * mod) * 2;
	}
	if (dudeFrontColl(player) == true){
		jump = false;
	}
	if (!(38 in keysDown))
	{
		jump = false;
		jumpTrigger = 0;
	}
//badDudes movement
	for (i in badUFOs){	
		for (j in blocks){
			if (testColl(badUFOs[i].x, badUFOs[i].y, badUFOs[i].width, badUFOs[i].height, 
			blocks[j].x, blocks[j].y, blocks[j].width, blocks[j].height)){
				if (badUFOs[i].dir == "left"){
					badUFOs[i].x += 2;
					badUFOs[i].dir = "right";
				}
				else{
					badUFOs[i].x -= 2;
					badUFOs[i].dir = "left";
				}
			}
		}
		if (badUFOs[i].dir == "right"){
			badUFOs[i].x++;
		}
		else{
			badUFOs[i].x--;
		}
		if (badUFOs[i].x < -15){
			badUFOs.splice(i, 1);
		}
		if (badUFOs[i].x > blocks[blocks.length - 1].x){
			badUFOs[i].x -= 2;
			badUFOs[i].dir = "left";
		}
	}	
//badDudes2 AI
	for (i in badDudes2){
		if (badDudes2[i].x > player.x + (player.width - 4)){
			badDudes2[i].x--;
		}
		if (badDudes2[i].x + badDudes2[i].width < player.x + 4){
			badDudes2[i].x++;
		}
		if (badDudes2[i].y > player.y + (player.height - 4)){
			badDudes2[i].y--;
		}
		if (badDudes2[i].y + badDudes2[i].width < player.y + 4){
			badDudes2[i].y++;
		}
	}
	
//badDudes3 AI
	for (i in badDudes3){
		if (badDudes3[i].timer < 190){
			if (badDudes3[i].x > player.x + (player.width - 4)){
				badDudes3[i].x--;
			}
			if (badDudes3[i].x + badDudes3[i].width < player.x + 4){
				badDudes3[i].x++;
			}
			if (badDudes3[i].y > player.y + (player.height - 4)){
				badDudes3[i].y--;
			}
			if (badDudes3[i].y + badDudes3[i].width < player.y + 4){
				badDudes3[i].y++;
			}
		}
		else if (badDudes3[i].timer == 265){
			badBullets.push({
				dir: "up",
				x: badDudes3[i].x + (spriteSizes * 0.2),
				y: badDudes3[i].y,
				width: 0.138 * spriteSizes,
				height: 0.138 * spriteSizes
			});
			badBullets.push({
				dir: "front",
				x: badDudes3[i].x + (spriteSizes * 0.2),
				y: badDudes3[i].y + spriteSizes,
				width: 0.138 * spriteSizes,
				height: 0.138 * spriteSizes
			});
			badBullets.push({
				dir: "right",
				x: badDudes3[i].x + spriteSizes,
				y: badDudes3[i].y + (spriteSizes * 0.2),
				width: 0.138 * spriteSizes,
				height: 0.138 * spriteSizes
			});
			badBullets.push({
				dir: "left",
				x: badDudes3[i].x,
				y: badDudes3[i].y + (spriteSizes * 0.2),
				width: 0.138 * spriteSizes,
				height: 0.138 * spriteSizes
			});
		}
		else if (badDudes3[i].timer > 320){
			badDudes3[i].timer = 0;
		}
		badDudes3[i].timer++;
	}
//sock puppets AI
	for (i in sockPuppets){
		if (sockPuppets[i].shoot == true){
			sockPuppets[i].timer++;
			if (sockPuppets[i].timer == 150){
				sockPuppets[i].sx = 100;
				badBullets.push({
					dir: "left",
					x: sockPuppets[i].x,
					y: sockPuppets[i].y + (spriteSizes * 0.2),
					width: 0.138 * spriteSizes,
					height: 0.138 * spriteSizes
				});
			}
			if (sockPuppets[i].timer > 175){
				sockPuppets[i].timer = 0;
				sockPuppets[i].sx = 0;
			}
		}
		else{
			sockPuppets[i].timer = 0;
			sockPuppets[i].sx = 0;
		}
		if (sockPuppets[i].x < player.x + (canvas.width * 0.5) && sockPuppets[i].x > player.x + player.width){
			sockPuppets[i].shoot = true;
		}
		else{
			sockPuppets[i].shoot = false;
		}
	}
//fire movement
	for (i in fires){
		fires[i].sx += 50;
		if (fires[i].sx > 350){
			fires[i].sx = 0;
		}
	}
//If player falls off screen he's dead
	if (player.y - 30 > spriteSizes * gridHeight){
		gameover = true;
	}
//If the Game is Over, RESTART
	if (gameover == true){
		powerLevel = 0;
		bullets = [];
		badBullets = [];
		if (restartSwitch == 0){
			restartSwitch = 1;
			setTimeout(restart, 4000);
		}
	}
}

function restart(){
//declare variables
	direction = "right";
	restartSwitch = 0;
	animateSpeedControl = 0;
	bulControl = 0;
	bulTrigger = 0;
	bullSpeed = canvas.width * 0.00461;
	bullFreq = 12;
	moveMe = "false";
	roomNum = 1;
	powerLevel = 0;
	gameover = false;
	dirLead = "default";
	keysDown = {};
	keysUp = {};
//declare arrays
	runPower = [];
	shootPower = [];
	frequentPower = [];
	badUFOs = [];
	badDudes2 = [];
	sockPuppets = [];
	fires = [];
//declare randomness
	runPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
	runPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);
	shootPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
	shootPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);
	frequentPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
	frequentPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);
	
//define the main player object
	player.sx = 0;
		player.sy = 0;
		player.swidth = 50;
		player.sheight = 50;
		player.x = (canvas.width / 2) - spriteSizes;
		player.y = (canvas.height / 2) - spriteSizes;
		player.width = spriteSizes;
		player.height = spriteSizes;
		player.speed = canvas.width * 0.134;
	player.bulxPos = player.x + (0.444 * spriteSizes);
	player.bulyPos = player.y + (0.388 * spriteSizes);
}

function spitBullets(){
	for (i = 0; i < bullets.length; i++)
	{
			if (bullets[i].dir == "front")
			{
				bullets[i].y += bullSpeed;
			}
			if (bullets[i].dir == "right")
			{
				bullets[i].x += bullSpeed;			
			}
			if (bullets[i].dir == "left")
			{
				bullets[i].x -= bullSpeed;			
			}		
			if (bullets[i].dir == "up")
			{
				bullets[i].y -= bullSpeed;			
			}	
			ctx.fillStyle = player.color;
			ctx.fillRect(bullets[i].x,bullets[i].y,bullets[i].width,bullets[i].height);
	}
}

function spitBadBullets(){
	for (i = 0; i < badBullets.length; i++)
	{
			if (badBullets[i].dir == "front")
			{
				badBullets[i].y += bullSpeed;
			}
			if (badBullets[i].dir == "right")
			{
				badBullets[i].x += bullSpeed;			
			}
			if (badBullets[i].dir == "left")
			{
				badBullets[i].x -= bullSpeed;			
			}		
			if (badBullets[i].dir == "up")
			{
				badBullets[i].y -= bullSpeed;			
			}	
			ctx.fillStyle = "red";
			ctx.fillRect(badBullets[i].x, badBullets[i].y, badBullets[i].width, badBullets[i].height);
	}
}

function render() {
//control player animation	
	if (moveMe == "true"){
		if (animateSpeedControl % 3 == 0){
			if (player.sx < 350){
				player.sx += 50;
			}else{
				player.sx = 0;
			}
		}
	}else{player.sx = 0;}
//control bad guy 2 animation	
	if (animateSpeedControl % 3 == 0){
		for (i in badDudes2){
			if (badDudes2[i].sx < 350){
				badDudes2[i].sx += 50;
			}else{
				badDudes2[i].sx = 0;
			}
		}
	}
//control bad guy 3 animation	
	if (animateSpeedControl % 3 == 0){
		for (i in badDudes3){
			if (badDudes3[i].sx < 350){
				badDudes3[i].sx += 50;
			}else{
				badDudes3[i].sx = 0;
			}
		}
	}

	ctx.clearRect(0, 0, canvas.width, canvas.height);
/* This is another way of clearing the canvas
ctx.fillStyle = '#FFFFFF';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = player.color;
*/
	if (Background.x + Background.width < 0){
		Background.x = 0;
	}
//draw background
	ctx.drawImage(Background.pic, Background.x, Background.y, Background.width, Background.height);
	ctx.drawImage(Background.pic, Background.x + Background.width, Background.y, Background.width, Background.height);
	
//draw background items
	for (i = 0; i < backgrounds.length; i++){
		ctx.drawImage(backgrounds[i].pic, backgrounds[i].x, backgrounds[i].y, backgrounds[i].width, backgrounds[i].height);
	}

//handle Game Over
	if (gameover == false){
		if (direction == "front"){
			ctx.drawImage(player.picRight, player.sx, player.sy, player.swidth, player.sheight, player.x, player.y, player.width, player.height);
		}
		if (direction == "up"){
			ctx.drawImage(player.picRight, player.sx, player.sy, player.swidth, player.sheight, player.x, player.y, player.width, player.height);
		}
		if (direction == "right"){
			ctx.drawImage(player.picRight, player.sx, player.sy, player.swidth, player.sheight, player.x, player.y, player.width, player.height);
		}	
		if (direction == "left"){
			ctx.drawImage(player.picLeft, player.sx, player.sy, player.swidth, player.sheight, player.x, player.y, player.width, player.height);
		}
	}
	
	for (i = 0; i < backgrounds2.length; i++){
		ctx.drawImage(backgrounds2[i].pic, backgrounds2[i].x, backgrounds2[i].y, backgrounds2[i].width, backgrounds2[i].height);
	}
	
	for (i = 0; i < blocks.length; i++){
		ctx.drawImage(blocks[i].pic, blocks[i].x, blocks[i].y, blocks[i].width, blocks[i].height);
	}
	
	for (i = 0; i < breakables.length; i++){
		ctx.drawImage(imageObj.blocks.breakable, breakables[i].sx, breakables[i].sy, breakables[i].swidth, breakables[i].sheight, breakables[i].x, breakables[i].y, breakables[i].width, breakables[i].height);
	}
	
	for (i = 0; i < runPower.length; i++){
		ctx.drawImage(imageObj.powerUps.runImage, runPower[i].x, runPower[i].y, runPower[i].width, runPower[i].height);
	}
	
	for (i = 0; i < shootPower.length; i++){
		ctx.drawImage(imageObj.powerUps.shootImage, shootPower[i].x, shootPower[i].y, shootPower[i].width, shootPower[i].height);
	}
	
	for (i = 0; i < frequentPower.length; i++){
		ctx.drawImage(imageObj.powerUps.frequentImage, frequentPower[i].x, frequentPower[i].y, frequentPower[i].width, frequentPower[i].height);
	}
	
	for (i in badUFOs){
		ctx.drawImage(imageObj.badGuys.badGuy, badUFOs[i].x, badUFOs[i].y, badUFOs[i].width, badUFOs[i].height);
	}
	
	for (i in badDudes2){
		ctx.drawImage(imageObj.badGuys.badGuy2, badDudes2[i].sx, badDudes2[i].sy, badDudes2[i].swidth, badDudes2[i].sheight, badDudes2[i].x, badDudes2[i].y, badDudes2[i].width, badDudes2[i].height);
	}
	
	for (i in badDudes3){
		ctx.drawImage(imageObj.badGuys.badGuy3, badDudes3[i].sx, badDudes3[i].sy, badDudes3[i].swidth, badDudes3[i].sheight, badDudes3[i].x, badDudes3[i].y, badDudes3[i].width, badDudes3[i].height);
	}
	for (i in sockPuppets){
		ctx.drawImage(imageObj.badGuys.sockPuppet, sockPuppets[i].sx, sockPuppets[i].sy, sockPuppets[i].swidth, sockPuppets[i].sheight, sockPuppets[i].x, sockPuppets[i].y, sockPuppets[i].width, sockPuppets[i].height);
	}
	for (i in fires){
		ctx.drawImage(imageObj.badGuys.fire, fires[i].sx, fires[i].sy, fires[i].swidth, fires[i].sheight, fires[i].x, fires[i].y, fires[i].width, fires[i].height);
	}
	ctx.font = canvas.width * 0.017  + "px Arial";
	ctx.fillStyle = "black";
	ctx.fillText("Score: " + powerLevel, spriteSizes * (gridWidth * 0.14), spriteSizes / 1.6);	
	ctx.fillText("Treasure: " + powerLevel, spriteSizes * (gridWidth * 0.50), spriteSizes / 1.6);
	
	if (gameover == true){
		ctx.font = canvas.width * 0.04  + "px Arial";
		ctx.fillText("GAME OVER", spriteSizes * (gridWidth * 0.4), spriteSizes * (gridHeight * 0.5));
	}
	


	spitBullets();
	spitBadBullets();
		
	animateSpeedControl++;
	if (animateSpeedControl > 3600)
		{animateSpeedControl = 1;}
	
	bulControl++;
	if (bulControl > 899)
	{
		bulControl = 1;
		bulTrigger = 0;
	}
	
	moveMe = "false";
	
	if (jumpTrigger > 0 && jumpTrigger < 32)
	{
		jump = true;
	}
	else
	{
		jumpTrigger = 0;
		jump = false;
	}
}
//define collision function
function testColl(aX, aY, aWidth, aHeight, bX, bY, bWidth, bHeight) {
	return ((aX + aWidth) >= bX && aX <= (bX + bWidth) &&
		(aY + aHeight) >= bY && aY <= (bY + bHeight));
}

function bulletDestroy(){
	for (i = 0; i < bullets.length; i++){
		for (k = 0; k < badUFOs.length; k++){
			if (testColl(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, badUFOs[k].x, badUFOs[k].y, badUFOs[k].width, badUFOs[k].height) == true){
				bullets.splice(i, 1);
				badUFOs.splice(k, 1);
				if (gameover == false){
					powerLevel += 20;
				}
				return;
			}			
		}
		for (k = 0; k < badDudes2.length; k++){
			if (testColl(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, badDudes2[k].x, badDudes2[k].y, badDudes2[k].width, badDudes2[k].height) == true){
				bullets.splice(i, 1);
				badDudes2.splice(k, 1);
				if (gameover == false){
					powerLevel += 20;
				}
				return;
			}			
		}
		
		for (k = 0; k < badDudes3.length; k++){
			if (testColl(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, badDudes3[k].x, badDudes3[k].y, badDudes3[k].width, badDudes3[k].height) == true){
				bullets.splice(i, 1);
				badDudes3.splice(k, 1);
				if (gameover == false){
					powerLevel += 20;
				}
				return;
			}			
		}

		for (k = 0; k < sockPuppets.length; k++){
			if (testColl(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, sockPuppets[k].x, sockPuppets[k].y, sockPuppets[k].width, sockPuppets[k].height) == true){
				bullets.splice(i, 1);
				sockPuppets.splice(k, 1);
				if (gameover == false){
					powerLevel += 20;
				}
				return;
			}			
		}
		
		for (j = 0; j < blocks.length; j++){
			if (testColl(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, blocks[j].x, 
			blocks[j].y, blocks[j].width, blocks[j].height) == true){
				bullets.splice(i, 1);
				return;
			}
		}
		
		for (l = 0; l < breakables.length; l++){
			if (testColl(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, breakables[l].x, 
			breakables[l].y, breakables[l].width, breakables[l].height) == true){
				if (breakables[l].sx < 350){
					breakables[l].sx += 50;
					if (gameover == false){
						powerLevel += 5;
					}
				}
				else{
					var thisBreakTest = Math.floor((Math.random() * 9) + 1);

					if (thisBreakTest == 2){
						runPower.push({
							x: breakables[l].x,
							y: breakables[l].y,
							width: spriteSizes,
							height: spriteSizes
						});
					}
					else if (thisBreakTest == 3){
						shootPower.push({
							x: breakables[l].x,
							y: breakables[l].y,
							width: spriteSizes,
							height: spriteSizes
						});
					}
					else if (thisBreakTest == 4){
						frequentPower.push({
							x: breakables[l].x,
							y: breakables[l].y,
							width: spriteSizes,
							height: spriteSizes
						});
					}
					if (gameover == false){
						powerLevel += 20;
					}
					breakables.splice(l, 1);
				}
				bullets.splice(i, 1);
				return;
			}
		}
		
	}	
}

function runDestroy(){
	for (i in runPower){
		if (testColl(player.x, player.y, player.width, player.height, runPower[i].x, runPower[i].y, 
		runPower[i].width, runPower[i].height) == true){
			runPower.splice(i, 1);
			if (gameover == false){
				powerLevel += 10;
			}
			if (player.speed < canvas.width * 0.21)
				{player.speed += (canvas.width * 0.0134);}
			if (player.speed > canvas.width * 0.2)
				{player.speed = canvas.width * 0.2;}
			break;
		}		
	}
}

function shootDestroy(){
	for (i in shootPower){
		if (testColl(player.x, player.y, player.width, player.height, shootPower[i].x, shootPower[i].y, 
			shootPower[i].width, shootPower[i].height) == true){
			shootPower.splice(i, 1);
			if (gameover == false){
				player.shoot = true;
			}
			break;
		}		
	}
}

function frequentDestroy(){
	for (i in frequentPower){
		if (testColl(player.x, player.y, player.width, player.height, frequentPower[i].x, frequentPower[i].y, 
			frequentPower[i].width, frequentPower[i].height) == true){
			frequentPower.splice(i, 1);
			if (gameover == false){
				powerLevel += 10;
			}
			bullFreq -= 3;
			if (bullFreq < 2)
			{
				bullFreq = 2;
			}
			break;
		}		
	}
}

function damageTaken(){
	for (i in badUFOs){
		if (testColl(player.x, player.y, player.width, player.height, badUFOs[i].x, badUFOs[i].y, 
			badUFOs[i].width, badUFOs[i].height) == true){
			if (player.y + player.height > badUFOs[i].y + 7){
				gameover = true;
			}
			badUFOs.splice(i, 1);
			break;
		}		
	}
	for (i in badDudes2){
		if (testColl(player.x, player.y, player.width, player.height, badDudes2[i].x, badDudes2[i].y, 
			badDudes2[i].width, badDudes2[i].height) == true){
			if (player.y + player.height > badDudes2[i].y + 7){
				gameover = true;
			}
			badDudes2.splice(i, 1);
			break;
		}		
	}
	for (i in badDudes3){
		if (testColl(player.x, player.y, player.width, player.height, badDudes3[i].x, badDudes3[i].y, 
			badDudes3[i].width, badDudes3[i].height) == true){
			if (player.y + player.height > badDudes3[i].y + 7){
				gameover = true;
			}
			badDudes3.splice(i, 1);
			break;
		}		
	}	
	for (i in sockPuppets){
		if (testColl(player.x, player.y, player.width, player.height, sockPuppets[i].x, sockPuppets[i].y, 
			sockPuppets[i].width, sockPuppets[i].height) == true){
			if (player.y + player.height > sockPuppets[i].y + 7){
				gameover = true;
			}
			sockPuppets.splice(i, 1);
			break;
		}		
	}
	for (i in fires){
		if (testColl(player.x, player.y, player.width, player.height, fires[i].x, fires[i].y, 
			fires[i].width, fires[i].height) == true){
			gameover = true;
			break;
		}		
	}
	for (i in badBullets){
		if (testColl(player.x, player.y, player.width, player.height, badBullets[i].x, badBullets[i].y, 
			badBullets[i].width, badBullets[i].height) == true){
			badBullets.splice(i, 1);
				gameover = true;
			break;
		}		
	}	
}

function run() {
    update((Date.now() - time) / 1000);
    render();
    time = Date.now();
	runDestroy();
	shootDestroy();
	frequentDestroy();
	bulletDestroy();
	damageTaken();
	requestAnimFrame(run);
}

var time = Date.now();
populateRoom();
requestAnimFrame(run);