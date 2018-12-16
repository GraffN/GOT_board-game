let trapText = document.getElementById("trapText");
let tiles = [];
let player;
let playerImg;
let playerImg2;


function setup() {
    createCanvas(1100, 300); //creates the canvas
    colorMode(HSB);
    
    let resolution = 100; // set a variable for use later to determine the px size of the tiles
    let cols = width / resolution; // create a variable that takes the hight for the tiles and devides it by the resolution
    let rows = height / resolution; // same thing for the width of the tiles
    
    let x = 0;
    let y = (rows -1) * resolution;
    let dir = 1;
    for(let i = 0; i < cols * rows; i++){
        let tile = new Tile(x, y, resolution, i, i + 1);
        tiles.push(tile);
        x = x + (resolution * dir);
        if (x >= width || x <= -resolution){  // loop that place the first tile at 0 that is 100 wide. then goes to the next 100 pixels and put another tile and so on, the size of the gameboard is thefore determined by the hight and width of the canvas that is atm 600*600. it also  knows that when it reaches 700 is should go up by one then start drawing tiles the other direction. going back and forth until the hight also is 600 (determined by the hight of the canvas) then stops drawing tiles.
            dir *= -1;
            x += resolution * dir;
            y -= resolution;
           
        }
    }
    
    tiles[13].next = 9;
    tiles[16].next = 6;
    tiles[24].next = 18;
    tiles[20].next = 2;
    tiles[31].next = 11;
   
    
    
    
    
    
    
    
    playerImg = loadImage(localStorage.getItem("Player1"));
    playerImg2 = loadImage(localStorage.getItem("Player2"));
    console.log(playerImg);
    
    player = new Player();
    
    
}

function draw() {
    frameRate(60);
    background(0);
    for (let tile of tiles){
        tile.show(tiles);
    }
    

   if ((spot1 || spot2) >= tiles.length -1){
        
        console.log("game over");
        noLoop();
       alert("Victory!")
    }
    player.show(tiles);
   
    
}

 /*player.rollDice();*/
