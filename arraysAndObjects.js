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
		for (i = 0; i < canvas.width; i += spriteSizes){
			blocks.push(
		/*
		{
			x: i,
			y: spriteSizes,
			width: spriteSizes,
			height: spriteSizes
			},
		*/
//bottom row of blocks
			{
			x: i,
			y: canvas.height - (spriteSizes - 1),
			width: spriteSizes,
			height: spriteSizes
			});
		}
//left row of blocks
/*
		for (i = spriteSizes; i < canvas.height; i += spriteSizes){
			blocks.push({
			x: 0,
			y: i,
			width: spriteSizes,
			height: spriteSizes
			},
//right row of blocks
			{
			x: canvas.width - spriteSizes,
			y: i,
			width: spriteSizes,
			height: spriteSizes
			});
		}		
//random blocks
		for (i = 0; i < canvas.width / spriteSizes; i++){
			if (i > 2 && (i < 11 || i > 15) && i < 24){
				blocks.push({
					x: spriteSizes * i,
					y: spriteSizes * 5,
					width: spriteSizes,
					height: spriteSizes
				});
			}
			if (i > 6 && i < 22){
				blocks.push({
					x: spriteSizes * i,
					y: spriteSizes * 9,
					width: spriteSizes,
					height: spriteSizes
				});
			}
		}
		*/
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
		bulxPos = player.x + (0.444 * spriteSizes);
		bulyPos = player.y + (0.388 * spriteSizes);
	}
	if (z == "up")
	{
		bulxPos = player.x + (0.444 * spriteSizes);
		bulyPos = player.y - (0.111 * spriteSizes);
	}
	if (z == "right")
	{
		bulxPos = player.x + (0.944 * spriteSizes);
		bulyPos = player.y + (0.222 * spriteSizes);
	}
	if (z == "left")
	{
		bulxPos = player.x - (0.027 * spriteSizes);
		bulyPos = player.y + (0.222 * spriteSizes);
	}
}