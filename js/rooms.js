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
			for (i = 0; i < screenMax; i += spriteSizes){
				if (i < spriteSizes * 29 || i > spriteSizes * 31){
					blocks.push(new blockClass(i, canvas.height - (spriteSizes - 1), imageObj.blocks.blockimg));
				}
			}
			for (i = spriteSizes * 19; i < spriteSizes * 27; i += (spriteSizes)){
				blocks.push(new blockClass(i, spriteSizes * 9, imageObj.blocks.blockimg2));
			}
			for (i = spriteSizes * 20; i < spriteSizes * 26; i += spriteSizes){
				blocks.push(new blockClass(i, spriteSizes * 8, imageObj.blocks.blockimg2));		
			}
			for (i = spriteSizes * 21; i < spriteSizes * 25; i += spriteSizes){
				blocks.push(new blockClass(i, spriteSizes * 7, imageObj.blocks.blockimg2));		
			}
			blocks.push(new blockClass(screenMax, canvas.height - (spriteSizes - 1), imageObj.blocks.blockimg));
		//create breakables
			breakables.push(new breakClass(spriteSizes * 4, spriteSizes * 7), new breakClass(spriteSizes * 5, spriteSizes * 7), 
				new breakClass(spriteSizes * 6, spriteSizes * 7), new breakClass(spriteSizes * 13, spriteSizes * 7), new breakClass(spriteSizes * 14, spriteSizes * 6), 
				new breakClass(spriteSizes * 15, spriteSizes * 6));
		//springs
			springs.push(new springClass(2, 9));
		//create powerUps
			shootPower.push({
				x: spriteSizes * 22,
				y: spriteSizes * 6,
				width: spriteSizes * 0.5,
				height: spriteSizes
			});
			gems.push(new gemClass(12, 6), new gemClass (32, 6));
	//function to generate bad guys and add them to arrays
				//UFOs
				badUFOs.push(new ufoClass(spriteSizes * 17, spriteSizes * 8), new ufoClass(spriteSizes * 30, spriteSizes * 8));
				//bats
				badDudes2.push(new batClass(spriteSizes * 33, spriteSizes * 4), new batClass(spriteSizes * 48, spriteSizes * 4));
				//clouds
				badDudes3.push(new cloudClass(spriteSizes * 28, spriteSizes * 3), new cloudClass(spriteSizes * 39, spriteSizes * 4));
				//puppets
				sockPuppets.push(new puppetClass(spriteSizes * 23, spriteSizes * 6));
				//fire
				fires.push(new fireClass(spriteSizes * 17, spriteSizes * 9));
				//background objects
				backgrounds.push(new backClass(spriteSizes * 13, spriteSizes * 8.5, imageObj.backgrounds.palm, 1, 1.5), 
								new backClass(spriteSizes * 33, spriteSizes * 9, imageObj.backgrounds.shroom1, 1, 1),
								new backClass(spriteSizes * 36, spriteSizes * 8, imageObj.backgrounds.rainbow, 2, 2),
								new backClass(spriteSizes * 40, spriteSizes * 9, imageObj.backgrounds.tree, 1, 1),
								new backClass(spriteSizes * 43, spriteSizes * 9, imageObj.backgrounds.tree2, 1, 1),
								new backClass(spriteSizes * 48, spriteSizes * 9, imageObj.backgrounds.shroom2, 1, 1),
								new backClass(spriteSizes * 53, spriteSizes * 9, imageObj.backgrounds.flower, 1, 1),
								new backClass(spriteSizes * 23, spriteSizes * 4, imageObj.backgrounds.cloud, 2, 1),
								new backClass(spriteSizes * 33, spriteSizes * 3, imageObj.backgrounds.cloud2, 2, 1),
								new backClass(spriteSizes * 43, spriteSizes * 2, imageObj.backgrounds.cloud2, 2, 1),
								new backClass(spriteSizes * 10, spriteSizes * 3, imageObj.backgrounds.cloud, 2, 1),
								new backClass(spriteSizes * 53, spriteSizes * 4, imageObj.backgrounds.cloud, 2, 1)
								);
				//front backgrounds
				backgrounds2.push(new backClass2(spriteSizes * 32, spriteSizes * 9, imageObj.backgrounds.crystalBush, 1, 1), 
					new backClass2(spriteSizes * 8, (spriteSizes * 9) + (spriteSizes * 0.5), imageObj.backgrounds.flower2, 0.5, 0.5),
					new backClass2(spriteSizes * 4, spriteSizes * 9, imageObj.backgrounds.flower, 1, 1),
					new backClass2(spriteSizes * 6, spriteSizes * 9, imageObj.backgrounds.shroom2, 1, 1),
					new backClass2(spriteSizes * 35, spriteSizes * 9, imageObj.backgrounds.tree, 1, 1),
					new backClass2(spriteSizes * 50, spriteSizes * 9, imageObj.backgrounds.flower2, 1, 1),
					new backClass2(spriteSizes * 58, spriteSizes * 9 + (spriteSizes * 0.5), imageObj.backgrounds.shroom1, .5, .5),
					new backClass2(spriteSizes * 66, spriteSizes * 8 + (spriteSizes * 0.5), imageObj.backgrounds.palm, 1, 1.5),
					new backClass(spriteSizes * 63, spriteSizes * 8, imageObj.backgrounds.rainbow, 3, 2)			
				);	
		}
		//Room 2
		else if (roomNum == 2){
	//define background
			Background.pic = imageObj.backgrounds.forest_background;
	//blocks
			for (i = 0; i < screenMax; i += spriteSizes){
				blocks.push(new blockClass(i, canvas.height - (spriteSizes - 1), imageObj.blocks.blockimg));
			}
			blocks.push(new blockClass(screenMax, canvas.height - (spriteSizes - 1), imageObj.blocks.blockimg));		
		}
		//Room 3
		else if (roomNum == 3){
	//define background
			Background.pic = imageObj.backgrounds.green_background;
	//blocks
			for (i = 0; i < screenMax; i += spriteSizes){
				blocks.push(new blockClass(i, canvas.height - (spriteSizes - 1), imageObj.blocks.blockimg));
			}
			blocks.push(new blockClass(screenMax, canvas.height - (spriteSizes - 1), imageObj.blocks.blockimg));			
		}
		//Room 4
		else if (roomNum == 4){
	//define background
			Background.pic = imageObj.backgrounds.heiro_background;
	//blocks
			for (i = 0; i < screenMax; i += spriteSizes){
				blocks.push(new blockClass(i, canvas.height - (spriteSizes - 1), imageObj.blocks.blockimg));
			}
			blocks.push(new blockClass(screenMax, canvas.height - (spriteSizes - 1), imageObj.blocks.blockimg));			
		}
		//Room 5	
		else if (roomNum == 5){
	//define background
			Background.pic = imageObj.backgrounds.cloud_background;
	//blocks
			for (i = 0; i < screenMax; i += spriteSizes){
				blocks.push(new blockClass(i, canvas.height - (spriteSizes - 1), imageObj.blocks.blockimg));
			}
			blocks.push(new blockClass(screenMax, canvas.height - (spriteSizes - 1), imageObj.blocks.blockimg));			
		}
		//Room 6	
		else if (roomNum == 6){
	//define background
			Background.pic = imageObj.backgrounds.hillBackground;
	//blocks
			for (i = 0; i < screenMax; i += spriteSizes){
				blocks.push(new blockClass(i, canvas.height - (spriteSizes - 1), imageObj.blocks.blockimg));
			}
			blocks.push(new blockClass(screenMax, canvas.height - (spriteSizes - 1), imageObj.blocks.blockimg));			
		}
		//Room 7	
		else if (roomNum == 7){
	//define background
			Background.pic = imageObj.backgrounds.green_background;
	//blocks
			for (i = 0; i < screenMax; i += spriteSizes){
				blocks.push(new blockClass(i, canvas.height - (spriteSizes - 1), imageObj.blocks.blockimg));
			}
			blocks.push(new blockClass(screenMax, canvas.height - (spriteSizes - 1), imageObj.blocks.blockimg));			
		}
		//Room 8	
		else if (roomNum == 8){
	//define background
			Background.pic = imageObj.backgrounds.forest_background;
	//blocks
			for (i = 0; i < screenMax; i += spriteSizes){
				blocks.push(new blockClass(i, canvas.height - (spriteSizes - 1), imageObj.blocks.blockimg));
			}
			blocks.push(new blockClass(screenMax, canvas.height - (spriteSizes - 1), imageObj.blocks.blockimg));			
		}
		//Room 9	
		else if (roomNum == 9){
	//define background
			Background.pic = imageObj.backgrounds.cloud_background;
	//blocks
			for (i = 0; i < screenMax; i += spriteSizes){
				blocks.push(new blockClass(i, canvas.height - (spriteSizes - 1), imageObj.blocks.blockimg));
			}
			blocks.push(new blockClass(screenMax, canvas.height - (spriteSizes - 1), imageObj.blocks.blockimg));			
		}
		//Room 10	
		else if (roomNum == 10){
	//define background
			Background.pic = imageObj.backgrounds.heiro_background;
	//blocks
			for (i = 0; i < screenMax; i += spriteSizes){
				blocks.push(new blockClass(i, canvas.height - (spriteSizes - 1), imageObj.blocks.blockimg));
			}
			blocks.push(new blockClass(screenMax, canvas.height - (spriteSizes - 1), imageObj.blocks.blockimg));			
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
