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

var gridWidth = 21;
var gridHeight = 11;
var sprtHtControl = canvas.width / gridWidth;

canvas.height = sprtHtControl * gridHeight;

var myMusic = new Audio("sound/music.mp3");
myMusic.loop = true;
myMusic.play();

setTimeout(function(){soundObj.credit = false;}, 5000);

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
		breakable: new Image(),
		spring: new Image()
	},
	powerUps: {
		runImage: new Image(),
		shootImage: new Image(),
		frequentImage: new Image(),
		healthImage: new Image(),
		gem: new Image()
	},
	backgrounds: {
		crystalBush: new Image(),
		flower2: new Image(),
		hillBackground: new Image(),
		shroom1: new Image(),
		tree2: new Image(),
		tree: new Image(),
		shroom2: new Image(),
		flower: new Image(),
		rainbow: new Image(),
		palm: new Image(),
		cloud: new Image(),
		cloud2: new Image(),
		arrow: new Image(),
		cloud_background: new Image(),
		forest_background: new Image(),
		green_background: new Image(),
		heiro_background: new Image()
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
		this.blocks.spring.src = "images/spring.png";		
		this.powerUps.runImage.src = "images/run.png";
		this.powerUps.shootImage.src = "images/shoot.png";
		this.powerUps.frequentImage.src = "images/frequent.png";
		this.powerUps.healthImage.src = "images/health.png";
		this.powerUps.gem.src = "images/gem.png";		
		this.backgrounds.crystalBush.src = "images/crystal_bush.PNG";
		this.backgrounds.flower2.src = "images/flower_2.PNG";
		this.backgrounds.hillBackground.src = "images/hill_background.png";
		this.backgrounds.shroom1.src = "images/shroom1.PNG";
		this.backgrounds.tree2.src = "images/tree2.PNG";
		this.backgrounds.tree.src = "images/tree.PNG";
		this.backgrounds.palm.src = "images/palm.png";
		this.backgrounds.shroom2.src = "images/shroom2.PNG";
		this.backgrounds.flower.src = "images/flower.png";
		this.backgrounds.rainbow.src = "images/rainbow.png";		
		this.backgrounds.cloud.src = "images/cloud.png";
		this.backgrounds.cloud2.src = "images/cloud2.png";
		this.backgrounds.arrow.src = "images/arrow.png";		
		this.backgrounds.cloud_background.src = "images/cloud_background.png";
		this.backgrounds.forest_background.src = "images/forest_background.png";
		this.backgrounds.green_background.src = "images/green_background.png";
		this.backgrounds.heiro_background.src = "images/heiro_background.png";
		this.player.playerRight.src = "images/player.png";
		this.player.playerLeft.src = "images/playerLeft.png";
	}
};
imageObj.setPics();

//Create sounds object
var soundObj = {
	music: document.getElementById("music"),
	crunch: document.getElementById("crunch"),
	laser: document.getElementById("laser"),
	gem: document.getElementById("gem"),
	credit: true
};

//declare variables
var direction = "right";
var restartSwitch = 0;
var animateSpeedControl = 0;
var bulControl = 0;
var bulTrigger = 0;
var bullSpeed = canvas.width * 0.00461;
var bullFreq = 12;
var moveMe = "false";
var health = 200;
var powerLevel = 0;
var treasureScore = 0;
var gameover = false;
var spriteSizes = sprtHtControl;
var dirLead = "default";
var keysDown = {};
var keysUp = {};
var jump = false;
var jumpTrigger = 0;
var screenMax = canvas.width * 4;
var	levelEnd = screenMax / spriteSizes;

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
var springs = [];
var gems = [];

//declare randomness
var runPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
var runPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);
var shootPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
var shootPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);
var frequentPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
var frequentPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);

//Create Classes

//Create blocks class
var blockClass = function(inputx, inputy, inputpic, width, height){
	width = (typeof width !== 'undefined') ?  width : 1;
	height = (typeof height !== 'undefined') ?  height : 1;
	this.x = spriteSizes * inputx,
	this.y = spriteSizes * inputy,
	this.width = width * spriteSizes,
	this.height = height * spriteSizes,
	this.pic = inputpic
};
//Create breakables class
var breakClass = function(inputx, inputy, width, height){
	width = (typeof width !== 'undefined') ?  width : 1;
	height = (typeof height !== 'undefined') ?  height : 1;
	this.x = spriteSizes * inputx;
	this.y = spriteSizes * inputy;
	this.width = width * spriteSizes,
	this.height = height * spriteSizes,
	this.sx = 0;
	this.sy = 0;
	this.swidth = 50;
	this.sheight = 50;
};
//Create spring class
var springClass = function(inputx, inputy, width, height){
	width = (typeof width !== 'undefined') ?  width : 1;
	height = (typeof height !== 'undefined') ?  height : 1;
	this.x = inputx * spriteSizes;
	this.y = inputy * spriteSizes;
	this.width = width * spriteSizes,
	this.height = height * spriteSizes,
	this.pic = imageObj.blocks.spring;
	this.bounce = function(index){
		if (testColl(player.x, player.y, player.width, player.height, springs[index].x, springs[index].y, 
		springs[index].width, springs[index].height) == true){
			player.goUp = true;
		}
	};
};
//Create badUFOs class
var ufoClass = function(inputx, inputy, width, height){
	width = (typeof width !== 'undefined') ?  width : 1;
	height = (typeof height !== 'undefined') ?  height : 1;
	this.x = inputx * spriteSizes;
	this.y = inputy * spriteSizes;
	this.width = width * spriteSizes,
	this.height = height * spriteSizes,
	this.dir = "left";
	this.time = Date.now() / 1000;
	this.behavior = function(){
		if (this.x < player.x + canvas.width && this.x > player.x - canvas.width){
			for (j in blocks){
				if (testColl(this.x, this.y, this.width, this.height, 
				blocks[j].x, blocks[j].y, blocks[j].width, blocks[j].height)){
					if (this.dir == "left"){
						this.x += 2;
						this.dir = "right";
					}
					else{
						this.x -= 2;
						this.dir = "left";
					}
				}
			}
			if (this.dir == "right"){
				this.x+= canvas.width * 0.001;
			}
			else{
				this.x-= canvas.width * 0.001;
			}
			if (this.x < -15){
				this.dir = "right";
			}
			if (this.x > blocks[blocks.length - 1].x){
				this.x -= 2;
				this.dir = "left";
			}
		}		
	};
};
//Create bat class
var batClass = function(inputx, inputy, width, height){
	width = (typeof width !== 'undefined') ?  width : 1;
	height = (typeof height !== 'undefined') ?  height : 1;
	this.sx = 0;
	this.sy = 0;
	this.swidth = 50;
	this.sheight = 50;
	this.width = width * spriteSizes,
	this.height = height * spriteSizes,
	this.x = inputx * spriteSizes;
	this.y = inputy * spriteSizes;
};
//Create angry cloud class
var cloudClass = function (inputx, inputy, width, height){
	width = (typeof width !== 'undefined') ?  width : 1;
	height = (typeof height !== 'undefined') ?  height : 1;
	this.sx = 0;
	this.sy = 0;
	this.swidth = 50;
	this.sheight = 50;
	this.x = inputx * spriteSizes;
	this.y = inputy * spriteSizes;
	this.width = width * spriteSizes,
	this.height = height * spriteSizes,
	this.timer = 0;
	//badDudes3 AI
	this.behavior = function(){
		if (this.x < player.x + canvas.width && this.x > player.x - canvas.width){
			if (this.timer < 190){
				if (this.x > player.x + (player.width - 4)){
					this.x-= canvas.width * 0.0006;
				}
				if (this.x + this.width < player.x + 4){
					this.x+= canvas.width * 0.0006;
				}
				if (this.y > player.y + (player.height - 4)){
					this.y-= canvas.width * 0.0006;
				}
				if (this.y + this.width < player.y + 4){
					this.y+= canvas.width * 0.0006;
				}
			}
			else if (this.timer == 265){
				badBullets.push({
					dir: "up",
					x: this.x + (this.width * 0.5),
					y: this.y,
					width: 0.138 * this.width,
					height: 0.138 * this.width
				});
				badBullets.push({
					dir: "front",
					x: this.x + (this.width * 0.5),
					y: this.y + this.height,
					width: 0.138 * this.width,
					height: 0.138 * this.width
				});
				badBullets.push({
					dir: "right",
					x: this.x + this.width,
					y: this.y + (this.height * 0.5),
					width: 0.138 * this.width,
					height: 0.138 * this.width
				});
				badBullets.push({
					dir: "left",
					x: this.x,
					y: this.y + (this.height * 0.5),
					width: 0.138 * this.width,
					height: 0.138 * this.height
				});
			}
			else if (this.timer > 320){
				this.timer = 0;
			}
			this.timer++;
		}		
	};
};
//Create puppet class
var puppetClass = function(inputx, inputy, width, height){
	width = (typeof width !== 'undefined') ?  width : 0.75;
	height = (typeof height !== 'undefined') ?  height : 1;
	this.sx = 0;
	this.sy = 0;
	this.swidth = 100;
	this.sheight = 162;
	this.x = inputx * spriteSizes;
	this.y = inputy * spriteSizes;
	this.width = width * spriteSizes,
	this.height = height * spriteSizes,
	this.timer = 0;
	this.shoot = false;
	this.behavior = function(){
		if (this.shoot == true){
			this.timer++;
			if (this.timer == 150){
				this.sx = 100;
				badBullets.push({
					dir: "left",
					x: this.x,
					y: this.y + (this.width * 0.2),
					width: 0.138 * this.width,
					height: 0.138 * this.height
				});
			}
			if (this.timer > 175){
				this.timer = 0;
				this.sx = 0;
			}
		}
		else{
			this.timer = 0;
			this.sx = 0;
		}
		if (this.x < player.x + (canvas.width * 0.5) && this.x > player.x + player.width){
			this.shoot = true;
		}
		else{
			this.shoot = false;
		}		
	};
};
//Create fire class
var fireClass = function(inputx, inputy, width, height){
	width = (typeof width !== 'undefined') ?  width : 1;
	height = (typeof height !== 'undefined') ?  height : 1;
	this.sx = 0;
	this.sy = 0;
	this.swidth = 50;
	this.sheight = 50;
	this.x = inputx * spriteSizes;
	this.y = inputy * spriteSizes;
	this.width = width * spriteSizes;
	this.height = height * spriteSizes;
	this.behavior = function(){
		this.sx += 50;
		if (this.sx > 350){
			this.sx = 0;
		}	
	}
};
//Create gem class
var gemClass = function(inputx, inputy, width, height){
	width = (typeof width !== 'undefined') ?  width : 0.5;
	height = (typeof height !== 'undefined') ?  height : 0.5;
	this.sx = 0;
	this.sy = 0;
	this.swidth = 100;
	this.sheight = 100;
	this.x = inputx * spriteSizes;
	this.y = inputy * spriteSizes;
	this.width = width * spriteSizes,
	this.height = height * spriteSizes,
	this.collect = function(index){
		if (testColl(player.x, player.y, player.width, player.height, gems[index].x, gems[index].y, 
		gems[index].width, gems[index].height) == true){
			treasureScore++;
			powerLevel += 10;
			gems.splice(index, 1);
		}
	};
};
//Create backgrounds Class
var backClass = function(inputx, inputy, pic, width, height){
	width = (typeof width !== 'undefined') ?  width : 1;
	height = (typeof height !== 'undefined') ?  height : 1;
	this.x = inputx * spriteSizes;
	this.y = inputy * spriteSizes;
	this.width = spriteSizes * width;
	this.height = spriteSizes * height;
	this.pic = pic;
};
//Create forefront backgrounds Class
var backClass2 = function(inputx, inputy, pic, width, height){
	width = (typeof width !== 'undefined') ?  width : 1;
	height = (typeof height !== 'undefined') ?  height : 1;
	this.x = inputx * spriteSizes;
	this.y = inputy * spriteSizes;
	this.width = spriteSizes * width;
	this.height = spriteSizes * height;
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

//define the main player object
var player = {
	sx: 0,
	sy: 0,
	swidth: 50,
	sheight: 50,
    x: 0 - spriteSizes,
    y: (canvas.height / 2) - spriteSizes,
    width: spriteSizes * 0.6,
    height: spriteSizes,
    speed: spriteSizes * 5,
    color: 'blue',
	bulxPos: this.x + (0.444 * spriteSizes),
	bulyPos: this.y + (0.388 * spriteSizes),
	shoot: false,
	picRight: imageObj.player.playerRight,
	picLeft: imageObj.player.playerLeft,
	entry: "left",
	goUp: false,
	bounceTrigger: 0,
	bounce: function(){
		if (dudeUpColl(player) == true){
			if (this.goUp == true){
				if (this.bounceTrigger < 60){
					player.y -= ((player.speed * ((Date.now() - time) / 1000)) * 3);
				}else{
					this.goUp = false;
					this.bounceTrigger = 0;
				}
			}
		}else{
			this.goUp = false;
			this.bounceTrigger = 0;
		}
	},
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