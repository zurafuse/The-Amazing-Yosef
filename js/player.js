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
    color: 'blue'
};
var bulxPos = player.x + (0.444 * spriteSizes);
var bulyPos = player.y + (0.388 * spriteSizes);
