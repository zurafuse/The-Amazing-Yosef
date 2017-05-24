//define requestAnimFrame in case browser is old
var requestAnimFrame =  window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function(callback) {
                        window.setTimeout(callback, 1000 / 1);
                    };
					
//define canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 180;
var screenMax = canvas.width * 3;

var gridWidth = 21;
var gridHeight = 11;
var sprtHtControl = canvas.width / gridWidth;

canvas.height = sprtHtControl * gridHeight;

//images
var imageObj = {
	badGuys: {
		badGuy: new Image(),
		badGuy2: new Image(),
		badGuy3: new Image(),
		sockPuppet: new Image(),
		fire: new Image()
	},
	blocks: {
		blockimg: new Image(),
		blockimg2: new Image(),
		blockimg3: new Image(),
		blockimg4: new Image(),
		blockimg5: new Image(),
		breakable: new Image()
	},
	powerUps: {
		runImage: new Image(),
		shootImage: new Image(),
		frequentImage: new Image(),
		healthImage: new Image()	
	},
	backgrounds: {
		crystalBush: new Image(),
		flower2: new Image(),
		hillBackground: new Image()
	},
	player: {
		playerRight: new Image(),
		playerLeft: new Image()
	},
	setPics: function(){
		this.badGuys.badGuy.src = "images/badguy.png";
		this.badGuys.badGuy2.src = "images/badguy2.png";
		this.badGuys.badGuy3.src = "images/badguy3.png";
		this.badGuys.sockPuppet.src = "images/sock_puppet.png";
		this.badGuys.fire.src = "images/fire.png";
		this.blocks.blockimg.src = "images/block.png";
		this.blocks.blockimg2.src = "images/block2.png";
		this.blocks.blockimg3.src = "images/block3.png";
		this.blocks.blockimg4.src = "images/block4.png";
		this.blocks.blockimg5.src = "images/block5.png";
		this.blocks.breakable.src = "images/breakable.png";
		this.powerUps.runImage.src = "images/run.png";
		this.powerUps.shootImage.src = "images/shoot.png";
		this.powerUps.frequentImage.src = "images/frequent.png";
		this.powerUps.healthImage.src = "images/health.png";
		this.backgrounds.crystalBush.src = "images/crystal_bush.PNG";
		this.backgrounds.flower2.src = "images/flower_2.PNG";
		this.backgrounds.hillBackground.src = "images/hill_background.png";
		this.player.playerRight.src = "images/player.png";
		this.player.playerLeft.src = "images/playerLeft.png";
	}
};
imageObj.setPics();

//declare variables
var direction = "right";
var restartSwitch = 0;
var animateSpeedControl = 0;
var bulControl = 0;
var bulTrigger = 0;
var bullSpeed = canvas.width * 0.00461;
var bullFreq = 12;
var moveMe = "false";
var roomNum = 1;
var health = 200;
var powerLevel = 0;
var gameover = false;
var spriteSizes = sprtHtControl;
var dirLead = "default";
var keysDown = {};
var keysUp = {};
var jump = false;
var jumpTrigger = 0;

//declare arrays
var bullets = [];
var badBullets = [];
var blocks = [];
var breakables = [];
var runPower = [];
var shootPower = [];
var frequentPower = [];
var healthPower = [];
var badUFOs = [];
var badDudes2 = [];
var badDudes3 = [];
var sockPuppets = [];
var fires = [];
var backgrounds = [];
var backgrounds2 = [];

//declare randomness
var runPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
var runPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);
var shootPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
var shootPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);
var frequentPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
var frequentPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);

//Create Classes

//Create blocks class
var blockClass = function(inputx, inputy, inputpic){
	this.x = inputx,
	this.y = inputy,
	this.width = spriteSizes,
	this.height = spriteSizes,
	this.pic = inputpic
};
//Create breakables class
var breakClass = function(inputx, inputy){
	this.x = inputx;
	this.y = inputy;
	this.width = spriteSizes;
	this.height = spriteSizes;
	this.sx = 0;
	this.sy = 0;
	this.swidth = 50;
	this.sheight = 50;
};
//Create badUFOs class
var ufoClass = function(inputx, inputy){
	this.x = inputx;
	this.y = inputy;
	this.width = spriteSizes;
	this.height = spriteSizes;
	this.dir = "left";
	this.time = Date.now() / 1000;
};
//Create bat class
var batClass = function(inputx, inputy){
	this.sx = 0;
	this.sy = 0;
	this.swidth = 50;
	this.sheight = 50;
	this.x = inputx;
	this.y = inputy;
	this.width = spriteSizes;
	this.height = spriteSizes;
};
//Create angry cloud class
var cloudClass = function (inputx, inputy){
	this.sx = 0;
	this.sy = 0;
	this.swidth = 50;
	this.sheight = 50;
	this.x = inputx;
	this.y = inputy;
	this.width = spriteSizes;
	this.height = spriteSizes;
	this.timer = 0;
};
//Create puppet class
var puppetClass = function(inputx, inputy){
	this.sx = 0;
	this.sy = 0;
	this.swidth = 100;
	this.sheight = 162;
	this.x = inputx;
	this.y = inputy;
	this.width = spriteSizes * 0.75;
	this.height = spriteSizes;
	this.timer = 0;
	this.shoot = false;
};
//Create fire class
var fireClass = function(inputx, inputy){
	this.sx = 0;
	this.sy = 0;
	this.swidth = 50;
	this.sheight = 50;
	this.x = inputx;
	this.y = inputy;
	this.width = spriteSizes;
	this.height = spriteSizes;
};
//Create backgrounds Class
var backClass = function(inputx, inputy, pic, size){
	this.x = inputx;
	this.y = inputy;
	this.width = spriteSizes * size;
	this.height = spriteSizes * size;
	this.pic = pic;
};
//Create forefront backgrounds Class
var backClass2 = function(inputx, inputy, pic, size){
	this.x = inputx;
	this.y = inputy;
	this.width = spriteSizes * size;
	this.height = spriteSizes * size;
	this.pic = pic;
};	
//define background
var Background = {
	x: 0,
	y: 0,
	width: canvas.width,
	height: canvas.height,
	pic: imageObj.backgrounds.hillBackground
};

/*This function creates blocks
The location of the blocks is dependent on which room you are in.
*/
function populateRoom(){
	if (roomNum == 1){
//blocks
		for (i = 0; i < screenMax; i += spriteSizes){
			blocks.push(new blockClass(i, canvas.height - (spriteSizes - 1), imageObj.blocks.blockimg));
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
		breakables.push(new breakClass(spriteSizes * 5, spriteSizes * 7), new breakClass(spriteSizes * 6, spriteSizes * 7), 
			new breakClass(spriteSizes * 7, spriteSizes * 7), new breakClass(spriteSizes * 14, spriteSizes * 7), 
			new breakClass(spriteSizes * 15, spriteSizes * 7));
	//create powerUps
		shootPower.push({
			x: spriteSizes * 22,
			y: spriteSizes * 6,
			width: spriteSizes * 0.5,
			height: spriteSizes
		});
//function to generate bad guys and add them to arrays
			//UFOs
			badUFOs.push(new ufoClass(spriteSizes * 14, spriteSizes * 8), new ufoClass(spriteSizes * 30, spriteSizes * 8));
			//bats
			badDudes2.push(new batClass(spriteSizes * 33, spriteSizes * 4), new batClass(spriteSizes * 48, spriteSizes * 4));
			//clouds
			badDudes3.push(new cloudClass(spriteSizes * 28, spriteSizes * 3), new cloudClass(spriteSizes * 39, spriteSizes * 4));
			//puppets
			sockPuppets.push(new puppetClass(spriteSizes * 23, spriteSizes * 6));
			//fire
			fires.push(new fireClass(spriteSizes * 17, spriteSizes * 9));
			//background objects
			backgrounds.push(new backClass(spriteSizes * 3, spriteSizes * 9, imageObj.backgrounds.crystalBush, 1));
			//front backgrounds
			backgrounds2.push(new backClass2(spriteSizes * 6, spriteSizes * 9, imageObj.backgrounds.crystalBush, 1), 
				new backClass2(spriteSizes * 8, (spriteSizes * 9) + (spriteSizes * 0.5), imageObj.backgrounds.flower2, 0.5));	
	}
}

//define the main player object
var player = {
	sx: 0,
	sy: 0,
	swidth: 50,
	sheight: 50,
    x: (canvas.width / 2) - spriteSizes,
    y: (canvas.height / 2) - spriteSizes,
    width: spriteSizes,
    height: spriteSizes,
    speed: canvas.width * 0.134,
    color: 'blue',
	bulxPos: this.x + (0.444 * spriteSizes),
	bulyPos: this.y + (0.388 * spriteSizes),
	shoot: false,
	picRight: imageObj.player.playerRight,
	picLeft: imageObj.player.playerLeft,
	updateBull: function(z){
		if (z == "front")
		{
			this.bulxPos = this.x + (0.444 * spriteSizes);
			this.bulyPos = this.y + (0.388 * spriteSizes);
		}
		if (z == "up")
		{
			this.bulxPos = this.x + (0.444 * spriteSizes);
			this.bulyPos = this.y - (0.111 * spriteSizes);
		}
		if (z == "right")
		{
			this.bulxPos = this.x + (0.944 * spriteSizes);
			this.bulyPos = this.y + (0.222 * spriteSizes);
		}
		if (z == "left")
		{
			this.bulxPos = this.x - (0.027 * spriteSizes);
			this.bulyPos = this.y + (0.222 * spriteSizes);
		}		
	}
};