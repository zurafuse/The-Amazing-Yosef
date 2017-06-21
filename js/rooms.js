var rooms = {
	number: -1,
	groundLevel: (canvas.height / spriteSizes) - 1,	
	rooms: [
	//[0] room 1
		{
			background: imageObj.backgrounds.hillBackground,
			ground: imageObj.blocks.blockimg,
			blocks: [
				{x: 20, y: 7, img: imageObj.blocks.blockimg2}, {x: 22, y: 7, img: imageObj.blocks.blockimg},
				{x: 24, y: 7, img: imageObj.blocks.blockimg3}, {x: 35, y: 9, img: imageObj.blocks.blockimg4},
				{x: 35, y: 8, img: imageObj.blocks.blockimg}, {x: 36, y: 9, img: imageObj.blocks.blockimg5},
				{x: 36, y: 8, img: imageObj.blocks.blockimg3}, {x: 41, y: 9, img: imageObj.blocks.blockimg},
				{x: 41, y: 8, img: imageObj.blocks.blockimg}, {x: 41, y: 7, img: imageObj.blocks.blockimg},
				{x: 42, y: 9, img: imageObj.blocks.blockimg}, {x: 42, y: 8, img: imageObj.blocks.blockimg},
				{x: 42, y: 7, img: imageObj.blocks.blockimg}, {x: 45, y: 9, img: imageObj.blocks.blockimg2},
				{x: 45, y: 8, img: imageObj.blocks.blockimg2}, {x: 45, y: 7, img: imageObj.blocks.blockimg2},
				{x: 46, y: 9, img: imageObj.blocks.blockimg2}, {x: 46, y: 8, img: imageObj.blocks.blockimg2},
				{x: 46, y: 7, img: imageObj.blocks.blockimg2}, {x: 50, y: 9, img: imageObj.blocks.blockimg2},
				{x: 50, y: 8, img: imageObj.blocks.blockimg2},
				{x: 68, y: 9, img: imageObj.blocks.blockimg2}, {x: 69, y: 9, img: imageObj.blocks.blockimg3},
				{x: 70, y: 9, img: imageObj.blocks.blockimg4}, {x: 71, y: 9, img: imageObj.blocks.blockimg},
				{x: 72, y: 9, img: imageObj.blocks.blockimg5}, {x: 69, y: 8, img: imageObj.blocks.blockimg3},
				{x: 70, y: 8, img: imageObj.blocks.blockimg}, {x: 71, y: 8, img: imageObj.blocks.blockimg3},
				{x: 72, y: 8, img: imageObj.blocks.blockimg2}, {x: 70, y: 7, img: imageObj.blocks.blockimg},
				{x: 71, y: 7, img: imageObj.blocks.blockimg4}, {x: 72, y: 7, img: imageObj.blocks.blockimg},
				{x: 71, y: 6, img: imageObj.blocks.blockimg2}, {x: 72, y: 6, img: imageObj.blocks.blockimg5},
				{x: 72, y: 5, img: imageObj.blocks.blockimg}
			],
			breakables: [
				{x: 13, y: 7}, {x: 21, y: 7}, {x: 23, y: 7},
				{x: 21, y: 4}, {x: 22, y: 4}, {x: 23, y: 4}
			],
			enemies: {
				ufos: [
					{x:31, y:8.9}, {x:38, y:8.9}
				],
				bats: [
					{x: 66, y: 4}
				],
				clouds: [
					{x: 69, y: 4}
				],
				puppets: [
					{x: 50, y: 7}, {x: 66, y: 9}
				],
				fire: [
					{x:43, y:9}, {x:44, y:9}, {x:75, y:9}
				]			
			},
			springs: [
				{x: 38, y: 9}				
			],
			gems: [
				{x:32, y:6}			
			],
			backgrounds: [
				{x: 78, y: 8, img: imageObj.backgrounds.arrow, width: 2, height: 2}	
			],
			backgrounds2: [
				{x: 66, y: 8.5, img: imageObj.backgrounds.palm, width: 1, height: 1.5}		
			],
			shootPower: [
				{x: 24, y: 6}
			]			
		},
	//[1] room 2
		{
			background: imageObj.backgrounds.forest_background,
			ground: imageObj.blocks.blockimg4,
			blocks: [
				{x: 20, y: 9, img: imageObj.blocks.blockimg2}, {x: 21, y: 9, img: imageObj.blocks.blockimg2},
				{x: 22, y: 9, img: imageObj.blocks.blockimg2}, {x: 23, y: 9, img: imageObj.blocks.blockimg2},
				{x: 24, y: 9, img: imageObj.blocks.blockimg2}, {x: 25, y: 9, img: imageObj.blocks.blockimg2},
				{x: 26, y: 9, img: imageObj.blocks.blockimg2}, {x: 27, y: 9, img: imageObj.blocks.blockimg2},
				{x: 21, y: 8, img: imageObj.blocks.blockimg2}, {x: 22, y: 8, img: imageObj.blocks.blockimg2},
				{x: 23, y: 8, img: imageObj.blocks.blockimg2}, {x: 24, y: 8, img: imageObj.blocks.blockimg2},			
				{x: 25, y: 8, img: imageObj.blocks.blockimg2}, {x: 26, y: 8, img: imageObj.blocks.blockimg2},
				{x: 22, y: 7, img: imageObj.blocks.blockimg2},
				{x: 23, y: 7, img: imageObj.blocks.blockimg2}, {x: 24, y: 7, img: imageObj.blocks.blockimg2},			
				{x: 25, y: 7, img: imageObj.blocks.blockimg2},
				{x: 40, y: 9, img: imageObj.blocks.blockimg2}, {x: 41, y: 9, img: imageObj.blocks.blockimg2},			
				{x: 40, y: 8, img: imageObj.blocks.blockimg2}, {x: 41, y: 8, img: imageObj.blocks.blockimg2},	
				{x: 44, y: 9, img: imageObj.blocks.blockimg2}, {x: 45, y: 9, img: imageObj.blocks.blockimg2},			
				{x: 44, y: 8, img: imageObj.blocks.blockimg2}, {x: 45, y: 8, img: imageObj.blocks.blockimg2},	
				{x: 48, y: 9, img: imageObj.blocks.blockimg2}, {x: 49, y: 9, img: imageObj.blocks.blockimg2},			
				{x: 48, y: 8, img: imageObj.blocks.blockimg2}, {x: 49, y: 8, img: imageObj.blocks.blockimg2}			
			],
			breakables: [
				{x:3, y:7}, {x:4 , y:7}, {x:5 , y:7}, 
				{x:13 , y:7}, {x:14 , y:6}, {x:54 , y:7}, 
				{x:15 , y:6}, {x:55 , y:7}, {x:56 , y:7}, 
				{x:62 , y:7}, {x:63 , y:7}, {x:64 , y:7}
			],
			enemies: {
				ufos: [
					{x:37, y:8}, {x:50, y:8}
				],
				bats: [
					{x:58 , y:4 }, {x:66 , y:4 }
				],
				clouds: [
					{x:55, y:3}, {x:69, y:4}
				],
				puppets: [
					{x:41, y:7}, {x:66, y:9}
				],
				fire: [
					{x:17, y:9}, {x:42, y:9}, {x:43, y:9}, 
					{x:46, y:9}, {x:47, y:9}, {x:75, y:9}
				]			
			},
			springs: [
				{x: 38, y: 9}				
			],
			gems: [
				{x:12, y:6}, {x:32, y:6}, {x:6, y:6},
				{x:11, y:9}, {x:12, y:9}, {x:13, y:9},
				{x:23, y:5}, {x:24, y:5}, {x:59, y:7},
				{x:25, y:5}, {x:58, y:7}, {x:60, y:7},
				{x:42, y:6}, {x:45, y:6}, {x:49, y:6}		
			],
			backgrounds: [
				{x: 13, y: 8.5, img: imageObj.backgrounds.palm, width:1, height:1.5},
				{x: 33, y: 9, img: imageObj.backgrounds.shroom1, width: 1, height: 1},
				{x: 36, y: 8, img: imageObj.backgrounds.rainbow, width: 2, height: 2},
				{x: 40, y: 9, img: imageObj.backgrounds.tree, width: 1, height: 1},
				{x: 43, y: 9, img: imageObj.backgrounds.tree2, width: 1, height: 1},
				{x: 48, y: 9, img: imageObj.backgrounds.shroom2, width: 1, height: 1},
				{x: 53, y: 9, img: imageObj.backgrounds.flower, width: 1, height: 1},
				{x: 3, y: 4, img: imageObj.backgrounds.cloud, width: 2, height: 1},
				{x: 33, y: 3, img: imageObj.backgrounds.cloud2, width: 2, height: 1},
				{x: 43, y: 2, img: imageObj.backgrounds.cloud2, width: 2, height: 1},
				{x: 10, y: 3, img: imageObj.backgrounds.cloud, width: 2, height: 1},
				{x: 53, y: 4, img: imageObj.backgrounds.cloud, width: 2, height: 1},
				{x: 78, y: 8, img: imageObj.backgrounds.arrow, width: 2, height: 2}				
			],
			backgrounds2: [
				{x: 32, y: 9, img: imageObj.backgrounds.crystalBush, width: 1, height: 1},
				{x: 8, y: 9.5, img: imageObj.backgrounds.flower2, width: .5, height: .5},
				{x: 4, y: 9, img: imageObj.backgrounds.flower, width: 1, height: 1},				
				{x: 6, y: 9, img: imageObj.backgrounds.shroom2, width: 1, height: 1},
				{x: 35, y: 9, img: imageObj.backgrounds.tree, width: 1, height: 1},
				{x: 50, y: 9, img: imageObj.backgrounds.flower2, width: 1, height: 1},
				{x: 58, y: 9.5, img: imageObj.backgrounds.shroom1, width: .5, height: .5},
				{x: 66, y: 8.5, img: imageObj.backgrounds.palm, width: 1, height: 1.5},
				{x: 63, y: 8, img: imageObj.backgrounds.rainbow, width: 3, height: 2}			
			],
			shootPower: [
				{x: 24, y: 6}
			]			
		},
	//[2] room 3
		{
			background: imageObj.backgrounds.green_background,
			ground: imageObj.blocks.blockimg,
			blocks: [
				{x: 0, y: 10, img: imageObj.blocks.blockimg}
			],
			breakables: [
				{x: 5, y: 5}			
			],
			enemies: {
				ufos: [
					{x:37, y:8}
				],
				bats: [
					{x: 66, y: 4}
				],
				clouds: [
					{x: 69, y: 4}
				],
				puppets: [
					{x: 66, y: 9}
				],
				fire: [
					{x:75, y:9}
				]			
			},
			springs: [
				{x: 38, y: 9}				
			],
			gems: [
				{x:32, y:6}			
			],
			backgrounds: [
				{x: 78, y: 8, img: imageObj.backgrounds.arrow, width: 2, height: 2}	
			],
			backgrounds2: [
				{x: 66, y: 8.5, img: imageObj.backgrounds.palm, width: 1, height: 1.5}		
			],
			shootPower: [
				{x: 24, y: 6}
			]		
		},
	//[3] room 4
		{
			background: imageObj.backgrounds.cloud_background,
			ground: imageObj.blocks.blockimg5,
			blocks: [
				{x: 0, y: 10, img: imageObj.blocks.blockimg}
			],
			breakables: [
				{x: 5, y: 5}			
			],
			enemies: {
				ufos: [
					{x:37, y:8}
				],
				bats: [
					{x: 66, y: 4}
				],
				clouds: [
					{x: 69, y: 4}
				],
				puppets: [
					{x: 66, y: 9}
				],
				fire: [
					{x:75, y:9}
				]			
			},
			springs: [
				{x: 38, y: 9}				
			],
			gems: [
				{x:32, y:6}			
			],
			backgrounds: [
				{x: 78, y: 8, img: imageObj.backgrounds.arrow, width: 2, height: 2}	
			],
			backgrounds2: [
				{x: 66, y: 8.5, img: imageObj.backgrounds.palm, width: 1, height: 1.5}		
			],
			shootPower: [
				{x: 24, y: 6}
			]
		},
	//[4] room 5
		{
			background: imageObj.backgrounds.heiro_background,
			ground: imageObj.blocks.blockimg,
			blocks: [
				{x: 0, y: 10, img: imageObj.blocks.blockimg}
			],
			breakables: [
				{x: 5, y: 5}			
			],
			enemies: {
				ufos: [
					{x:37, y:8}
				],
				bats: [
					{x: 66, y: 4}
				],
				clouds: [
					{x: 69, y: 4}
				],
				puppets: [
					{x: 66, y: 9}
				],
				fire: [
					{x:75, y:9}
				]			
			},
			springs: [
				{x: 38, y: 9}				
			],
			gems: [
				{x:32, y:6}			
			],
			backgrounds: [
				{x: 78, y: 8, img: imageObj.backgrounds.arrow, width: 2, height: 2}	
			],
			backgrounds2: [
				{x: 66, y: 8.5, img: imageObj.backgrounds.palm, width: 1, height: 1.5}		
			],
			shootPower: [
				{x: 24, y: 6}
			]		
		}		
	],
	populate: function(){
/*This function populates the screen with objects
The location of the objects is dependent on which room you are in.
*/
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
		player.shoot = false;
//declare variables
		rooms.number = -1;
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
		if (rooms.number != rooms.rooms.length - 1){
			rooms.number++;
		}else{
			rooms.number = 0;
		}

	//define background
			Background.pic = rooms.rooms[rooms.number].background;
	//blocks
			for (i = 0; i < levelEnd; i++){
				blocks.push(new blockClass(i, rooms.groundLevel, rooms.rooms[rooms.number].ground));
			}

	//populate everything
			for (i in rooms.rooms[rooms.number].blocks){
				blocks.push(new blockClass(rooms.rooms[rooms.number].blocks[i].x, rooms.rooms[rooms.number].blocks[i].y, rooms.rooms[rooms.number].blocks[i].img));
			}
			blocks.push(new blockClass(levelEnd, rooms.groundLevel, rooms.rooms[rooms.number].ground));
		//create breakables 
			for (i in rooms.rooms[rooms.number].breakables){		
				breakables.push(new breakClass(rooms.rooms[rooms.number].breakables[i].x, rooms.rooms[rooms.number].breakables[i].y));
			}
		//springs
			for (i in rooms.rooms[rooms.number].springs){
				springs.push(new springClass(rooms.rooms[rooms.number].springs.x, rooms.rooms[rooms.number].springs.y));
			}
		//create powerUps
			for (i in rooms.rooms[rooms.number].shootPower){	
				shootPower.push({
					x: spriteSizes * rooms.rooms[rooms.number].shootPower[i].x,
					y: spriteSizes * rooms.rooms[rooms.number].shootPower[i].y,
					width: spriteSizes * 0.5,
					height: spriteSizes
				});
			}
			
			for (i in rooms.rooms[rooms.number].gems){			
				gems.push(new gemClass(rooms.rooms[rooms.number].gems[i].x, rooms.rooms[rooms.number].gems[i].y));
			}
	//function to generate bad guys and add them to arrays
				//UFOs
				for (i in rooms.rooms[rooms.number].enemies.ufos){	
					badUFOs.push(new ufoClass(rooms.rooms[rooms.number].enemies.ufos[i].x, rooms.rooms[rooms.number].enemies.ufos[i].y));
				}
				//bats
				for (i in rooms.rooms[rooms.number].enemies.bats){				
					badDudes2.push(new batClass(rooms.rooms[rooms.number].enemies.bats[i].x, rooms.rooms[rooms.number].enemies.bats[i].y));
				}
				//clouds
				for (i in rooms.rooms[rooms.number].enemies.clouds){					
					badDudes3.push(new cloudClass(rooms.rooms[rooms.number].enemies.clouds[i].x, rooms.rooms[rooms.number].enemies.clouds[i].y));
				}
				//puppets
				for (i in rooms.rooms[rooms.number].enemies.puppets){				
					sockPuppets.push(new puppetClass(rooms.rooms[rooms.number].enemies.puppets[i].x, rooms.rooms[rooms.number].enemies.puppets[i].y));
				}
				//fire
				for (i in rooms.rooms[rooms.number].enemies.fire){				
					fires.push(new fireClass(rooms.rooms[rooms.number].enemies.fire[i].x, rooms.rooms[rooms.number].enemies.fire[i].y));
				}
				//background objects
				for (i in rooms.rooms[rooms.number].backgrounds){				
					backgrounds.push(new backClass(rooms.rooms[rooms.number].backgrounds[i].x, 
					rooms.rooms[rooms.number].backgrounds[i].y,
					rooms.rooms[rooms.number].backgrounds[i].img, 
					rooms.rooms[rooms.number].backgrounds[i].width, 
					rooms.rooms[rooms.number].backgrounds[i].height));
				}
				//front backgrounds
				for (i in rooms.rooms[rooms.number].backgrounds2){				
					backgrounds2.push(new backClass2(rooms.rooms[rooms.number].backgrounds2[i].x, 
					rooms.rooms[rooms.number].backgrounds2[i].y,
					rooms.rooms[rooms.number].backgrounds2[i].img, 
					rooms.rooms[rooms.number].backgrounds2[i].width, 
					rooms.rooms[rooms.number].backgrounds2[i].height));
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
};

