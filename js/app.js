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
var runImage = new Image();
var blockimg = new Image();
var blockimg2 = new Image();
var blockimg3 = new Image();
var blockimg4 = new Image();
var blockimg5 = new Image();
var shootImage = new Image();
var frequentImage = new Image();
var healthImage = new Image();
var badGuy = new Image();
var badGuy2 = new Image();
var badGuy3 = new Image();
var breakable = new Image();
blockimg.src = "images/block.png";
blockimg2.src = "images/block2.png";
blockimg3.src = "images/block3.png";
blockimg4.src = "images/block4.png";
blockimg5.src = "images/block5.png";
runImage.src = "images/run.png";
shootImage.src = "images/shoot.png";
frequentImage.src = "images/frequent.png";
healthImage.src = "images/health.png";
badGuy.src = "images/badguy.png";
badGuy2.src = "images/badguy2.png";
badGuy3.src = "images/badguy3.png";
breakable.src = "images/breakable.png";

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
}			
//define background
var Background = {
	x: 0,
	y: 0,
	width: canvas.width,
	height: canvas.height,
	pic: new Image(),
	setPic: function(){
		this.pic.src = "images/hill_background.png";
	}
}

/*This function creates blocks
The location of the blocks is dependent on which room you are in.
*/
function populateRoom(){
	if (roomNum == 1){
//blocks
		for (i = 0; i < screenMax; i += spriteSizes){
			blocks.push(new blockClass(i, canvas.height - (spriteSizes - 1), blockimg));
		}
		for (i = spriteSizes * 19; i < spriteSizes * 27; i += (spriteSizes)){
			blocks.push(new blockClass(i, spriteSizes * 9, blockimg2));
		}
		for (i = spriteSizes * 20; i < spriteSizes * 26; i += spriteSizes){
			blocks.push(new blockClass(i, spriteSizes * 8, blockimg2));		
		}
		for (i = spriteSizes * 21; i < spriteSizes * 25; i += spriteSizes){
			blocks.push(new blockClass(i, spriteSizes * 7, blockimg2));		
		}
		blocks.push(new blockClass(canvas.width * 2, canvas.height - (spriteSizes - 1), blockimg));
	//create breakables
		breakables.push(new breakClass(spriteSizes * 8, spriteSizes * 7));

//function to generate bad guys and add them to arrays
			//UFOs
			badUFOs.push(new ufoClass(spriteSizes * 15, spriteSizes * 8), new ufoClass(spriteSizes * 30, spriteSizes * 8));
			//bats
			badDudes2.push(new batClass(spriteSizes * 18, spriteSizes * 4), new batClass(spriteSizes * 38, spriteSizes * 4));
			//clouds
			badDudes3.push(new cloudClass(spriteSizes * 10, spriteSizes * 3), new cloudClass(spriteSizes * 20, spriteSizes * 4));	
			//background objects
			backgrounds.push({
				x: spriteSizes * 3,
				y: spriteSizes * 9,
				width: spriteSizes,
				height: spriteSizes,
				pic: new Image(),
				setPic: function(){
					this.pic.src = "images/crystal_bush.PNG";
				}
			});
			for (i = 0; i < backgrounds.length; i++){
				backgrounds[i].setPic();
			}
			
			//front backgrounds
			backgrounds2.push({
				x: spriteSizes * 6,
				y: spriteSizes * 9,
				width: spriteSizes,
				height: spriteSizes,
				pic: new Image(),
				setPic: function(){
					this.pic.src = "images/crystal_bush.PNG";
				}
			});
			backgrounds2.push({
				x: spriteSizes * 8,
				y: (spriteSizes * 9) + (spriteSizes * 0.5),
				width: spriteSizes * 0.5,
				height: spriteSizes * 0.5,
				pic: new Image(),
				setPic: function(){
					this.pic.src = "images/flower_2.PNG";
				}
			});
			for (i = 0; i < backgrounds2.length; i++){
				backgrounds2[i].setPic();
			}			
	}
}

function updateBulletPos(z){
	if (z == "front")
	{
		player.bulxPos = player.x + (0.444 * spriteSizes);
		player.bulyPos = player.y + (0.388 * spriteSizes);
	}
	if (z == "up")
	{
		player.bulxPos = player.x + (0.444 * spriteSizes);
		player.bulyPos = player.y - (0.111 * spriteSizes);
	}
	if (z == "right")
	{
		player.bulxPos = player.x + (0.944 * spriteSizes);
		player.bulyPos = player.y + (0.222 * spriteSizes);
	}
	if (z == "left")
	{
		player.bulxPos = player.x - (0.027 * spriteSizes);
		player.bulyPos = player.y + (0.222 * spriteSizes);
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
	picRight: new Image(),
	picLeft: new Image(),
	setPics: function(){
		this.picRight.src = "images/player.png";
		this.picLeft.src = "images/playerLeft.png";
	}
};
player.setPics();
Background.setPic();