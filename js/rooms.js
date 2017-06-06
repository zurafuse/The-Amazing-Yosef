var rooms = {
	number: 0,
	screenMax: canvas.width * 4,
	groundLevel: (canvas.height / spriteSizes) - 1,
	levelEnd: rooms.screenMax / spriteSizes,	
	rooms: [
	//[0] room 1
		{
			background: imageObj.backgrounds.hillBackground,
			blocks: [
				{x: 20, y: 9, img: imageObj.blocks.blockimg2}, {x: 21, y: 9, img: imageObj.blocks.blockimg2},
				{x: 22, y: 9, img: imageObj.blocks.blockimg2}, {x: 23, y: 9, img: imageObj.blocks.blockimg2},
				{x: 24, y: 9, img: imageObj.blocks.blockimg2}, {x: 25, y: 9, img: imageObj.blocks.blockimg2},
				{x: 26, y: 9, img: imageObj.blocks.blockimg2}, {x: 27, y: 9, img: imageObj.blocks.blockimg2},
				{x: 21, y: 8, img: imageObj.blocks.blockimg2}, {x: 22, y: 8, img: imageObj.blocks.blockimg2},
				{x: 23, y: 8, img: imageObj.blocks.blockimg2}, {x: 24, y: 8, img: imageObj.blocks.blockimg2},			
				{x: 25, y: 8, img: imageObj.blocks.blockimg2}, {x: 26, y: 8, img: imageObj.blocks.blockimg2},
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
	//[1] room 2
		{
			background: imageObj.backgrounds.forest_background,
			blocks: [
				{x: , y: , img: }
			],
			breakables: [
				{x: , y: }			
			],
			enemies: [
				ufos: [
					{x: , y: }
				],
				bats: [
					{x: , y: }
				],
				clouds: [
					{x: , y: }
				],
				puppets: [
					{x: , y: }
				],
				fire: [
					{x: , y: }
				]			
			],
			springs: [
				{x: , y: }				
			],
			gems: [
				{x: , y: }			
			],
			backgrounds: [
				{x: , y: , img: , width: , height: }
			],
			backgrounds2: [
				{x: , y: , img: , width: , height: }			
			],
			shootPower: [
				{x: , y: }
			]			
		},
	//[2] room 3
		{
			background: imageObj.backgrounds.green_background,
			blocks: [
				{x: , y: , img: }
			],
			breakables: [
				{x: , y: }			
			],
			enemies: [
				ufos: [
					{x: , y: }
				],
				bats: [
					{x: , y: }
				],
				clouds: [
					{x: , y: }
				],
				puppets: [
					{x: , y: }
				],
				fire: [
					{x: , y: }
				]			
			],
			springs: [
				{x: , y: }				
			],
			gems: [
				{x: , y: }			
			],
			backgrounds: [
				{x: , y: , img: , width: , height: }
			],
			backgrounds2: [
				{x: , y: , img: , width: , height: }			
			],
			shootPower: [
				{x: , y: }
			]			
		},
	//[3] room 4
		{
			background: imageObj.backgrounds.heiro_background,
			blocks: [
				{x: , y: , img: }
			],
			breakables: [
				{x: , y: }			
			],
			enemies: [
				ufos: [
					{x: , y: }
				],
				bats: [
					{x: , y: }
				],
				clouds: [
					{x: , y: }
				],
				puppets: [
					{x: , y: }
				],
				fire: [
					{x: , y: }
				]			
			],
			springs: [
				{x: , y: }				
			],
			gems: [
				{x: , y: }			
			],
			backgrounds: [
				{x: , y: , img: , width: , height: }
			],
			backgrounds2: [
				{x: , y: , img: , width: , height: }			
			],
			shootPower: [
				{x: , y: }
			]			
		},
	//[4] room 5
		{
			background: imageObj.backgrounds.cloud_background,
			blocks: [
				{x: , y: , img: }
			],
			breakables: [
				{x: , y: }			
			],
			enemies: [
				ufos: [
					{x: , y: }
				],
				bats: [
					{x: , y: }
				],
				clouds: [
					{x: , y: }
				],
				puppets: [
					{x: , y: }
				],
				fire: [
					{x: , y: }
				]			
			],
			springs: [
				{x: , y: }				
			],
			gems: [
				{x: , y: }			
			],
			backgrounds: [
				{x: , y: , img: , width: , height: }
			],
			backgrounds2: [
				{x: , y: , img: , width: , height: }			
			],
			shootPower: [
				{x: , y: }
			]			
		},
	//[5] room 6
		{
			background: imageObj.backgrounds.hillBackground,
			blocks: [
				{x: , y: , img: }
			],
			breakables: [
				{x: , y: }			
			],
			enemies: [
				ufos: [
					{x: , y: }
				],
				bats: [
					{x: , y: }
				],
				clouds: [
					{x: , y: }
				],
				puppets: [
					{x: , y: }
				],
				fire: [
					{x: , y: }
				]			
			],
			springs: [
				{x: , y: }				
			],
			gems: [
				{x: , y: }			
			],
			backgrounds: [
				{x: , y: , img: , width: , height: }
			],
			backgrounds2: [
				{x: , y: , img: , width: , height: }			
			],
			shootPower: [
				{x: , y: }
			]			
		},
	//[6] room 7
		{
			background: imageObj.backgrounds.green_background,
			blocks: [
				{x: , y: , img: }
			],
			breakables: [
				{x: , y: }			
			],
			enemies: [
				ufos: [
					{x: , y: }
				],
				bats: [
					{x: , y: }
				],
				clouds: [
					{x: , y: }
				],
				puppets: [
					{x: , y: }
				],
				fire: [
					{x: , y: }
				]			
			],
			springs: [
				{x: , y: }				
			],
			gems: [
				{x: , y: }			
			],
			backgrounds: [
				{x: , y: , img: , width: , height: }
			],
			backgrounds2: [
				{x: , y: , img: , width: , height: }			
			],
			shootPower: [
				{x: , y: }
			]			
		},
	//[7] room 8
		{
			background: imageObj.backgrounds.forest_background,
			blocks: [
				{x: , y: , img: }
			],
			breakables: [
				{x: , y: }			
			],
			enemies: [
				ufos: [
					{x: , y: }
				],
				bats: [
					{x: , y: }
				],
				clouds: [
					{x: , y: }
				],
				puppets: [
					{x: , y: }
				],
				fire: [
					{x: , y: }
				]			
			],
			springs: [
				{x: , y: }				
			],
			gems: [
				{x: , y: }			
			],
			backgrounds: [
				{x: , y: , img: , width: , height: }
			],
			backgrounds2: [
				{x: , y: , img: , width: , height: }			
			],
			shootPower: [
				{x: , y: }
			]			
		},
	//[8] room 9
		{
			background: imageObj.backgrounds.cloud_background,
			blocks: [
				{x: , y: , img: }
			],
			breakables: [
				{x: , y: }			
			],
			enemies: [
				ufos: [
					{x: , y: }
				],
				bats: [
					{x: , y: }
				],
				clouds: [
					{x: , y: }
				],
				puppets: [
					{x: , y: }
				],
				fire: [
					{x: , y: }
				]			
			],
			springs: [
				{x: , y: }				
			],
			gems: [
				{x: , y: }			
			],
			backgrounds: [
				{x: , y: , img: , width: , height: }
			],
			backgrounds2: [
				{x: , y: , img: , width: , height: }			
			],
			shootPower: [
				{x: , y: }
			]			
		},
	//[9] room 10
		{
			background: imageObj.backgrounds.heiro_background,
			blocks: [
				{x: , y: , img: }
			],
			breakables: [
				{x: , y: }			
			],
			enemies: [
				ufos: [
					{x: , y: }
				],
				bats: [
					{x: , y: }
				],
				clouds: [
					{x: , y: }
				],
				puppets: [
					{x: , y: }
				],
				fire: [
					{x: , y: }
				]			
			],
			springs: [
				{x: , y: }				
			],
			gems: [
				{x: , y: }			
			],
			backgrounds: [
				{x: , y: , img: , width: , height: }
			],
			backgrounds2: [
				{x: , y: , img: , width: , height: }			
			],
			shootPower: [
				{x: , y: }
			]			
		}		
	]
};

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
		room.number = 0;
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
		if (rooms.number != 10){
			rooms.number++;
		}else{
			rooms.number = 1;
		}

	//define background
			Background.pic = rooms.rooms[rooms.number].background;
	//blocks
			for (i = 0; i < rooms.levelEnd; i++){
					blocks.push(new blockClass(i, rooms.groundLevel, imageObj.blocks.blockimg));
			}

	//populate everything
			for (i in rooms.rooms[rooms.number].blocks){
				new blockClass(rooms.rooms[rooms.number].blocks[i].x, rooms.rooms[rooms.number].blocks[i].y, rooms.rooms[rooms.number].blocks[i].img);
			}
			blocks.push(new blockClass(rooms.levelEnd, rooms.groundLevel, imageObj.blocks.blockimg));
		//create breakables 
			for (i in rooms.rooms[rooms.number].blocks){		
				breakables.push(new breakClass(rooms.rooms[rooms.number].breakables[i].x, rooms.rooms[rooms.number].breakables[i].y));
			}
		//springs
			springs.push(new springClass(i.x, i.y));
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
			
		//Room 2
		else if (rooms.number == 2){
	//define background
			Background.pic = imageObj.backgrounds.forest_background;
	//blocks
			for (i = 0; i < rooms.levelEnd; i ++){
				blocks.push(new blockClass(i, rooms.groundLevel, imageObj.blocks.blockimg4));
			}
			blocks.push(new blockClass(rooms.levelEnd, rooms.groundLevel, imageObj.blocks.blockimg4));	
			//background objects
			backgrounds.push(new backClass(13, 8.5, imageObj.backgrounds.palm, 1, 1.5), 
			
				new backClass(78, 8, imageObj.backgrounds.arrow, 2, 2)
			);			
		}
		//Room 3
		else if (rooms.number == 3){
	//define background
			Background.pic = imageObj.backgrounds.green_background;
	//blocks
			for (i = 0; i < rooms.levelEndv; i ++){
				blocks.push(new blockClass(i, rooms.groundLevel, imageObj.blocks.blockimg));
			}
			blocks.push(new blockClass(rooms.levelEnd, rooms.groundLevel, imageObj.blocks.blockimg));
	//backgrounds
			backgrounds.push(new backClass(13, 8.5, imageObj.backgrounds.palm, 1, 1.5), 
			
				new backClass(78, 8, imageObj.backgrounds.arrow, 2, 2)
			);			
		}
		//Room 4
		else if (rooms.number == 4){
	//define background
			Background.pic = imageObj.backgrounds.heiro_background;
	//blocks
			for (i = 0; i < rooms.levelEnd; i ++){
				blocks.push(new blockClass(i, rooms.groundLevel, imageObj.blocks.blockimg));
			}
			blocks.push(new blockClass(rooms.levelEnd, rooms.groundLevel, imageObj.blocks.blockimg));
	//backgrounds
			backgrounds.push(new backClass(13, 8.5, imageObj.backgrounds.palm, 1, 1.5),
			
				new backClass(78, 8, imageObj.backgrounds.arrow, 2, 2)
			);				
		}
		//Room 5	
		else if (rooms.number == 5){
	//define background
			Background.pic = imageObj.backgrounds.cloud_background;
	//blocks
			for (i = 0; i < rooms.levelEnd; i ++){
				blocks.push(new blockClass(i, rooms.groundLevel, imageObj.blocks.blockimg5));
			}
			blocks.push(new blockClass(rooms.levelEnd, rooms.groundLevel, imageObj.blocks.blockimg5));
	//backgrounds
			backgrounds.push(new backClass(13, 8.5, imageObj.backgrounds.palm, 1, 1.5), 
			
				new backClass(78, 8, imageObj.backgrounds.arrow, 2, 2)
			);				
		}
		//Room 6	
		else if (rooms.number == 6){
	//define background
			Background.pic = imageObj.backgrounds.hillBackground;
	//blocks
			for (i = 0; i < rooms.levelEnd; i ++){
				blocks.push(new blockClass(i, rooms.groundLevel, imageObj.blocks.blockimg));
			}
			blocks.push(new blockClass(rooms.levelEnd, rooms.groundLevel, imageObj.blocks.blockimg));
	//backgrounds
			backgrounds.push(new backClass(13, 8.5, imageObj.backgrounds.palm, 1, 1.5), 
			
				new backClass(78, 8, imageObj.backgrounds.arrow, 2, 2)
			);				
		}
		//Room 7	
		else if (rooms.number == 7){
	//define background
			Background.pic = imageObj.backgrounds.green_background;
	//blocks
			for (i = 0; i < rooms.levelEnd; i ++){
				blocks.push(new blockClass(i, rooms.groundLevel, imageObj.blocks.blockimg));
			}
			blocks.push(new blockClass(rooms.levelEnd, rooms.groundLevel, imageObj.blocks.blockimg));	
	//backgrounds
			backgrounds.push(new backClass(13, 8.5, imageObj.backgrounds.palm, 1, 1.5), 
			
				new backClass(78, 8, imageObj.backgrounds.arrow, 2, 2)
			);				
		}
		//Room 8	
		else if (rooms.number == 8){
	//define background
			Background.pic = imageObj.backgrounds.forest_background;
	//blocks
			for (i = 0; i < rooms.levelEnd; i ++){
				blocks.push(new blockClass(i, rooms.groundLevel, imageObj.blocks.blockimg4));
			}
			blocks.push(new blockClass(rooms.levelEnd, rooms.groundLevel, imageObj.blocks.blockimg4));
	//backgrounds
			backgrounds.push(new backClass(13, 8.5, imageObj.backgrounds.palm, 1, 1.5), 
			
				new backClass(78, 8, imageObj.backgrounds.arrow, 2, 2)
			);				
		}
		//Room 9	
		else if (rooms.number == 9){
	//define background
			Background.pic = imageObj.backgrounds.cloud_background;
	//blocks
			for (i = 0; i < rooms.levelEnd; i ++){
				blocks.push(new blockClass(i, rooms.groundLevel, imageObj.blocks.blockimg5));
			}
			blocks.push(new blockClass(rooms.levelEnd, rooms.groundLevel, imageObj.blocks.blockimg5));	
	//backgrounds
			backgrounds.push(new backClass(13, 8.5, imageObj.backgrounds.palm, 1, 1.5), 
			
				new backClass(78, 8, imageObj.backgrounds.arrow, 2, 2)
			);				
		}
		//Room 10	
		else if (rooms.number == 10){
	//define background
			Background.pic = imageObj.backgrounds.heiro_background;
	//blocks
			for (i = 0; i < rooms.levelEnd; i ++){
				blocks.push(new blockClass(i, rooms.groundLevel, imageObj.blocks.blockimg));
			}
			blocks.push(new blockClass(rooms.levelEnd, rooms.groundLevel, imageObj.blocks.blockimg));
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
