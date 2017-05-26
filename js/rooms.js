/*This function populates the screen with objects
The location of the objects is dependent on which room you are in.
*/
function populateRoom(){
	if (roomNum == 1){
//define background
		Background.pic = imageObj.backgrounds.hillBackground;
//blocks
		for (i = 0; i < screenMax; i += spriteSizes){
			if (i < spriteSizes * 28 || i > spriteSizes * 29){
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
	//create powerUps
		shootPower.push({
			x: spriteSizes * 22,
			y: spriteSizes * 6,
			width: spriteSizes * 0.5,
			height: spriteSizes
		});
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
			backgrounds2.push(new backClass2(spriteSizes * 30, spriteSizes * 9, imageObj.backgrounds.crystalBush, 1, 1), 
				new backClass2(spriteSizes * 8, (spriteSizes * 9) + (spriteSizes * 0.5), imageObj.backgrounds.flower2, 0.5, 0.5),
				new backClass2(spriteSizes * 4, spriteSizes * 9, imageObj.backgrounds.flower, 1, 1),
				new backClass2(spriteSizes * 6, spriteSizes * 9, imageObj.backgrounds.shroom2, 1, 1),
				new backClass2(spriteSizes * 35, spriteSizes * 9, imageObj.backgrounds.tree, 1, 1),
				new backClass2(spriteSizes * 50, spriteSizes * 9, imageObj.backgrounds.flower2, 1, 1),
				new backClass2(spriteSizes * 58, spriteSizes * 9 + (spriteSizes * 0.5), imageObj.backgrounds.shroom1, .5, .5),
				new backClass2(spriteSizes * 66, spriteSizes * 9, imageObj.backgrounds.palm)
			);	
	}
	//Room 2
	else if (roomNum == 2){
	
	}
	//Room 3
	else if (roomNum == 3){
	
	}
	//Room 4
	else if (roomNum == 4){
	
	}
	//Room 5	
	else if (roomNum == 5){
	
	}
	//Room 6	
	else if (roomNum == 6){
	
	}
	//Room 7	
	else if (roomNum == 7){
	
	}
	//Room 8	
	else if (roomNum == 8){
	
	}
	//Room 9	
	else if (roomNum == 9){
	
	}
	//Room 10	
	else if (roomNum == 10){
	
	}
}
