var groundLevel = (canvas.height / spriteSizes) - 1;
var levelEnd = screenMax / spriteSizes;
/*This function populates the screen with objects
The location of the objects is dependent on which room you are in.
*/
function populateRoom(){
	if (gameover == true){
	//define the main player object
		player.sx = 0;
		player.sy = 0;
		player.swidth = 50;
		player.sheight = 50;
		player.x = 0 - spriteSizes;
		player.y = (canvas.height / 2) - spriteSizes;
		player.width = spriteSizes;
		player.height = spriteSizes;
		player.speed = spriteSizes * 5;
		player.bulxPos = player.x + (0.444 * spriteSizes);
		player.bulyPos = player.y + (0.388 * spriteSizes);
//declare variables
		roomNum = 0;
		direction = "right";
		restartSwitch = 0;
		animateSpeedControl = 0;
		bulControl = 0;
		bulTrigger = 0;
		bullSpeed = canvas.width * 0.00461;
		bullFreq = 12;
		moveMe = "false";
		powerLevel = 0;
		treasureScore = 0;
		dirLead = "default";
		keysDown = {};
		keysUp = {};		
	}

//declare arrays
	runPower = [];
	shootPower = [];
	frequentPower = [];
	badUFOs = [];
	badDudes2 = [];
	sockPuppets = [];
	badDudes3 = [];
	fires = [];
    bullets = [];
    badBullets = [];
    blocks = [];
    breakables = [];
    runPower = [];
    backgrounds = [];
    backgrounds2 = [];
    springs = [];
    gems = [];
//declare randomness
	runPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
	runPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);
	shootPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
	shootPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);
	frequentPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
	frequentPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);
//Make sure gameover is false
	gameover = false;
//Change rooms if player wins
	if (player.x > canvas.width - 8 || player.x < 0 - (spriteSizes * 0.5)){
		if (roomNum != 8){
			roomNum++;
		}else{
			roomNum = 1;
		}
		
		if (roomNum == 1){
	//define background
			Background.pic = imageObj.backgrounds.hillBackground;
	//blocks
			for (i = 0; i < levelEnd; i++){
				if ((i < 29 || i > 31) && i != 69 && i != 70){
					blocks.push(new blockClass(i, groundLevel, imageObj.blocks.blockimg));
				}
			}
			for (i = 20; i < 28; i++){
				blocks.push(new blockClass(i, 9, imageObj.blocks.blockimg2));
			}
			for (i = 21; i < 27; i++){
				blocks.push(new blockClass(i, 8, imageObj.blocks.blockimg2));		
			}
			for (i = 22; i < 26; i++){
				blocks.push(new blockClass(i, 7, imageObj.blocks.blockimg2));		
			}
			blocks.push(new blockClass(40, 9, imageObj.blocks.blockimg2),
				new blockClass(41, 9, imageObj.blocks.blockimg2),
				new blockClass(40, 8, imageObj.blocks.blockimg2),
				new blockClass(41, 8, imageObj.blocks.blockimg2),
				
				new blockClass(44, 9, imageObj.blocks.blockimg2),
				new blockClass(45, 9, imageObj.blocks.blockimg2),
				new blockClass(44, 8, imageObj.blocks.blockimg2),
				new blockClass(45, 8, imageObj.blocks.blockimg2),
				
				new blockClass(48, 9, imageObj.blocks.blockimg2),
				new blockClass(49, 9, imageObj.blocks.blockimg2),
				new blockClass(48, 8, imageObj.blocks.blockimg2),
				new blockClass(49, 8, imageObj.blocks.blockimg2)
			)
			
			blocks.push(new blockClass(levelEnd, groundLevel, imageObj.blocks.blockimg));
		//create breakables
			breakables.push(new breakClass(3, 7), new breakClass(4, 7), 
				new breakClass(5, 7), new breakClass(13, 7), new breakClass(14, 6), 
				new breakClass(15, 6));
			breakables.push(new breakClass(54, 7), new breakClass(55, 7), new breakClass(56, 7),
				new breakClass(62, 7), new breakClass(63, 7), new breakClass(64, 7)); 
		//springs
			springs.push(new springClass(38, 9));
		//create powerUps
			shootPower.push({
				x: spriteSizes * 24,
				y: spriteSizes * 6,
				width: spriteSizes * 0.5,
				height: spriteSizes
			});
			gems.push(new gemClass(12, 6), new gemClass (32, 6), new gemClass(6, 6), new gemClass(11, 9), 
				new gemClass(12, 9), new gemClass(13, 9), new gemClass(23, 5), new gemClass(24, 5),
				new gemClass(25, 5), new gemClass(58, 7), new gemClass(59, 7), new gemClass(60, 7),
				new gemClass(42, 6), new gemClass(45, 6), new gemClass(49, 6));
	//function to generate bad guys and add them to arrays
				//UFOs
				badUFOs.push(new ufoClass(37, 8), new ufoClass(50, 8));
				//bats
				badDudes2.push(new batClass(58, 4), new batClass(66, 4));
				//clouds
				badDudes3.push(new cloudClass(55, 3), new cloudClass(69, 4));
				//puppets
				sockPuppets.push(new puppetClass(41, 7), new puppetClass(66, 9));
				//fire
				fires.push(new fireClass(17, 9));
				fires.push(new fireClass(42, 9));
				fires.push(new fireClass(43, 9));
				fires.push(new fireClass(46, 9));
				fires.push(new fireClass(47, 9));
				fires.push(new fireClass(75, 9));
				//background objects
				backgrounds.push(new backClass(13, 8.5, imageObj.backgrounds.palm, 1, 1.5), 
								new backClass(33, 9, imageObj.backgrounds.shroom1, 1, 1),
								new backClass(36, 8, imageObj.backgrounds.rainbow, 2, 2),
								new backClass(40, 9, imageObj.backgrounds.tree, 1, 1),
								new backClass(43, 9, imageObj.backgrounds.tree2, 1, 1),
								new backClass(48, 9, imageObj.backgrounds.shroom2, 1, 1),
								new backClass(53, 9, imageObj.backgrounds.flower, 1, 1),
								new backClass(3, 4, imageObj.backgrounds.cloud, 2, 1),
								new backClass(33, 3, imageObj.backgrounds.cloud2, 2, 1),
								new backClass(43, 2, imageObj.backgrounds.cloud2, 2, 1),
								new backClass(10, 3, imageObj.backgrounds.cloud, 2, 1),
								new backClass(53, 4, imageObj.backgrounds.cloud, 2, 1),
								new backClass(78, 8, imageObj.backgrounds.arrow, 2, 2)
								);
				//front backgrounds
				backgrounds2.push(new backClass2(32, 9, imageObj.backgrounds.crystalBush, 1, 1), 
					new backClass2(8, 9.5, imageObj.backgrounds.flower2, 0.5, 0.5),
					new backClass2(4, 9, imageObj.backgrounds.flower, 1, 1),
					new backClass2(6, 9, imageObj.backgrounds.shroom2, 1, 1),
					new backClass2(35, 9, imageObj.backgrounds.tree, 1, 1),
					new backClass2(50, 9, imageObj.backgrounds.flower2, 1, 1),
					new backClass2(58, 9.5, imageObj.backgrounds.shroom1, .5, .5),
					new backClass2(66, 8.5, imageObj.backgrounds.palm, 1, 1.5),
					new backClass(63, 8, imageObj.backgrounds.rainbow, 3, 2)					
				);	
		}
		//Room 2
		else if (roomNum == 2){
	//define background
			Background.pic = imageObj.backgrounds.forest_background;
	//blocks
			for (i = 0; i < levelEnd; i ++){
				blocks.push(new blockClass(i, groundLevel, imageObj.blocks.blockimg4));
			}
			blocks.push(new blockClass(levelEnd, groundLevel, imageObj.blocks.blockimg4));	
			//background objects
			backgrounds.push(new backClass(13, 8.5, imageObj.backgrounds.palm, 1, 1.5), 
			
				new backClass(78, 8, imageObj.backgrounds.arrow, 2, 2)
			);			
		}
		//Room 3
		else if (roomNum == 3){
	//define background
			Background.pic = imageObj.backgrounds.green_background;
	//blocks
			for (i = 0; i < levelEnd; i ++){
				blocks.push(new blockClass(i, groundLevel, imageObj.blocks.blockimg));
			}
			blocks.push(new blockClass(levelEnd, groundLevel, imageObj.blocks.blockimg));
	//backgrounds
			backgrounds.push(new backClass(13, 8.5, imageObj.backgrounds.palm, 1, 1.5), 
			
				new backClass(78, 8, imageObj.backgrounds.arrow, 2, 2)
			);			
		}
		//Room 4
		else if (roomNum == 4){
	//define background
			Background.pic = imageObj.backgrounds.heiro_background;
	//blocks
			for (i = 0; i < levelEnd; i ++){
				blocks.push(new blockClass(i, groundLevel, imageObj.blocks.blockimg));
			}
			blocks.push(new blockClass(levelEnd, groundLevel, imageObj.blocks.blockimg));
	//backgrounds
			backgrounds.push(new backClass(13, 8.5, imageObj.backgrounds.palm, 1, 1.5),
			
				new backClass(78, 8, imageObj.backgrounds.arrow, 2, 2)
			);				
		}
		//Room 5	
		else if (roomNum == 5){
	//define background
			Background.pic = imageObj.backgrounds.cloud_background;
	//blocks
			for (i = 0; i < levelEnd; i ++){
				blocks.push(new blockClass(i, groundLevel, imageObj.blocks.blockimg5));
			}
			blocks.push(new blockClass(levelEnd, groundLevel, imageObj.blocks.blockimg5));
	//backgrounds
			backgrounds.push(new backClass(13, 8.5, imageObj.backgrounds.palm, 1, 1.5), 
			
				new backClass(78, 8, imageObj.backgrounds.arrow, 2, 2)
			);				
		}
		//Room 6	
		else if (roomNum == 6){
	//define background
			Background.pic = imageObj.backgrounds.hillBackground;
	//blocks
			for (i = 0; i < levelEnd; i ++){
				blocks.push(new blockClass(i, groundLevel, imageObj.blocks.blockimg));
			}
			blocks.push(new blockClass(levelEnd, groundLevel, imageObj.blocks.blockimg));
	//backgrounds
			backgrounds.push(new backClass(13, 8.5, imageObj.backgrounds.palm, 1, 1.5), 
			
				new backClass(78, 8, imageObj.backgrounds.arrow, 2, 2)
			);				
		}
		//Room 7	
		else if (roomNum == 7){
	//define background
			Background.pic = imageObj.backgrounds.green_background;
	//blocks
			for (i = 0; i < levelEnd; i ++){
				blocks.push(new blockClass(i, groundLevel, imageObj.blocks.blockimg));
			}
			blocks.push(new blockClass(levelEnd, groundLevel, imageObj.blocks.blockimg));	
	//backgrounds
			backgrounds.push(new backClass(13, 8.5, imageObj.backgrounds.palm, 1, 1.5), 
			
				new backClass(78, 8, imageObj.backgrounds.arrow, 2, 2)
			);				
		}
		//Room 8	
		else if (roomNum == 8){
	//define background
			Background.pic = imageObj.backgrounds.forest_background;
	//blocks
			for (i = 0; i < levelEnd; i ++){
				blocks.push(new blockClass(i, groundLevel, imageObj.blocks.blockimg4));
			}
			blocks.push(new blockClass(levelEnd, groundLevel, imageObj.blocks.blockimg4));
	//backgrounds
			backgrounds.push(new backClass(13, 8.5, imageObj.backgrounds.palm, 1, 1.5), 
			
				new backClass(78, 8, imageObj.backgrounds.arrow, 2, 2)
			);				
		}
		//Room 9	
		else if (roomNum == 9){
	//define background
			Background.pic = imageObj.backgrounds.cloud_background;
	//blocks
			for (i = 0; i < levelEnd; i ++){
				blocks.push(new blockClass(i, groundLevel, imageObj.blocks.blockimg5));
			}
			blocks.push(new blockClass(levelEnd, groundLevel, imageObj.blocks.blockimg5));	
	//backgrounds
			backgrounds.push(new backClass(13, 8.5, imageObj.backgrounds.palm, 1, 1.5), 
			
				new backClass(78, 8, imageObj.backgrounds.arrow, 2, 2)
			);				
		}
		//Room 10	
		else if (roomNum == 10){
	//define background
			Background.pic = imageObj.backgrounds.heiro_background;
	//blocks
			for (i = 0; i < levelEnd; i ++){
				blocks.push(new blockClass(i, groundLevel, imageObj.blocks.blockimg));
			}
			blocks.push(new blockClass(levelEnd, groundLevel, imageObj.blocks.blockimg));
	//backgrounds
			backgrounds.push(new backClass(13, 8.5, imageObj.backgrounds.palm, 1, 1.5), 
			
				new backClass(78, 8, imageObj.backgrounds.arrow, 2, 2)
			);				
		}
		
		if (player.entry == "right"){
			var offset = (blocks[blocks.length - 1].x + blocks[blocks.length - 1].width) - canvas.width;
			for (i in breakables){
				breakables[i].x -= offset;			
			}
			for (i in runPower){
				runPower[i].x -= offset;		
			}
			for (i in shootPower){
				shootPower[i].x -= offset;		
			}
			for (i in frequentPower){
				frequentPower[i].x -= offset;		
			}
			for (i in badUFOs){
				badUFOs[i].x -= offset;		
			}
			for (i in badDudes2){
				badDudes2[i].x -= offset;		
			}
			for (i in badDudes3){
				badDudes3[i].x -= offset;		
			}
			for (i in sockPuppets){
				sockPuppets[i].x -= offset;		
			}
			for (i in fires){
				fires[i].x -= offset;		
			}
			for (i in backgrounds){
				backgrounds[i].x -= offset;		
			}
			for (i in backgrounds2){
				backgrounds2[i].x -= offset;		
			}
			for (i in blocks){
				blocks[i].x -= offset;
			}
		}
			player.x = spriteSizes * 7;
			player.y = spriteSizes * 6;
	}
}
