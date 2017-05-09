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
var flagImg = new Image();
var hillBackground = new Image();
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
flagImg.src = "images/flag.png";
hillBackground.src = "images/hill_background.png";

//declare variables
var direction = "right";
var restartSwitch = 0;
var animateSpeedControl = 0;
var bulControl = 0;
var bulTrigger = 0;
var flagCount = 0;
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
var badDudes = [];
var badDudes2 = [];
var badDudes3 = [];

//declare randomness
var runPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
var runPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);
var shootPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
var shootPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);
var frequentPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
var frequentPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);

//define the green flag
var myFlag = {
	x:-25,
	y:-25,
	width: spriteSizes,
	height: spriteSizes
};
var flagExists = false;

/*This function creates blocks
The location of the blocks is dependent on which room you are in.
*/
function createBlocks(){
	if (roomNum == 1){
// top row of blocks
		for (i = 0; i < canvas.width * 2; i += spriteSizes){
			blocks.push(
//bottom row of blocks
			{
			x: i,
			y: canvas.height - (spriteSizes - 1),
			width: spriteSizes,
			height: spriteSizes,
			pic: blockimg
			});
		}
		for (i = spriteSizes * 19; i < spriteSizes * 27; i += (spriteSizes)){
			blocks.push({
				x: i,
				y: spriteSizes * 9,
				width: spriteSizes,
				height: spriteSizes,
				pic: blockimg2		
			});
		}
		for (i = spriteSizes * 20; i < spriteSizes * 26; i += spriteSizes){
			blocks.push({
				x: i,
				y: spriteSizes * 8,
				width: spriteSizes,
				height: spriteSizes,
				pic: blockimg2		
			});		
		}
		for (i = spriteSizes * 21; i < spriteSizes * 25; i += spriteSizes){
			blocks.push({
				x: i,
				y: spriteSizes * 7,
				width: spriteSizes,
				height: spriteSizes,
				pic: blockimg2		
			});		
		}
		blocks.push({
			x: canvas.width * 2,
			y: canvas.height - (spriteSizes - 1),
			width: spriteSizes,
			height: spriteSizes,
			pic: blockimg
		});
	}
}

//function to generate bad guys and add them to arrays
function createBadGuys(){
		var thisChange = Math.floor((Math.random() * 3600) + 1);
		if (thisChange > 1000 && thisChange < 1009 && badDudes.length < 6){
			var badGuyLocX = Math.floor((Math.random() * (gridWidth - 2)) + 1);
			var badGuyLocY = Math.floor((Math.random() * (gridHeight - 3)) + 2);
			var badDirChance = Math.floor(Math.random() * 10, 1);
			var collCondition = false;
			if (badDirChance > 5){
				var badDirStart = "left";
			}
			else{
				var badDirStart = "right";
			}

			for (i in blocks){
				if (testColl((spriteSizes * badGuyLocX), (spriteSizes * badGuyLocY), spriteSizes, spriteSizes, 
					blocks[i].x, blocks[i].y, blocks[i].width, blocks[i].height) == true){
					collCondition = true;
				}
			}
			if (collCondition == false){
				badDudes.push({
					x: spriteSizes * badGuyLocX,
					y: spriteSizes * badGuyLocY,
					width: spriteSizes,
					height: spriteSizes,
					dir: badDirStart,
					time: Date.now() / 1000
				});
			}
		}
		if (thisChange > 1008 && thisChange < 1020 && badDudes2.length < 6){
			var badGuyLocX = Math.floor((Math.random() * (gridWidth - 2)) + 1);
			var badGuyLocY = Math.floor((Math.random() * (gridHeight - 3)) + 2);
			badDudes2.push({
				sx: 0,
				sy: 0,
				swidth: 50,
				sheight: 50,
				x: spriteSizes * badGuyLocX,
				y: spriteSizes * badGuyLocY,
				width: spriteSizes,
				height: spriteSizes
			});
		}
		if (thisChange > 1019 && thisChange < 1030 && badDudes3.length < 6){
			var badGuyLocX = Math.floor((Math.random() * (gridWidth - 2)) + 1);
			var badGuyLocY = Math.floor((Math.random() * (gridHeight - 3)) + 2);
			badDudes3.push({
				sx: 0,
				sy: 0,
				swidth: 50,
				sheight: 50,
				x: spriteSizes * badGuyLocX,
				y: spriteSizes * badGuyLocY,
				width: spriteSizes,
				height: spriteSizes,
				timer: 0
			});
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
	/* redfine all items below
var playerImg = new Image();
var playerImg2 = new Image();
playerImg.src = "images/player.png";
playerImg2.src = "images/playerLeft.png";
*/
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