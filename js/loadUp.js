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
var playerImg = new Image();
var playerImg2 = new Image();

//load source for all images
playerImg.src = "images/player.png";
playerImg2.src = "images/playerLeft.png";
var runImage = new Image();
var blockimg = new Image();
var shootImage = new Image();
var frequentImage = new Image();
var healthImage = new Image();
var badGuy = new Image();
var badGuy2 = new Image();
var badGuy3 = new Image();
var breakable = new Image();
var flagImg = new Image();
var hillBackground = new Image();

//load source for all images
blockimg.src = "images/block.png";
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