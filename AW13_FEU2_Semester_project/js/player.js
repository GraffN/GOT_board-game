var spot1 = 0;
var spot2 = 0;
var count = 0;
var yourRoll = document.getElementById("roll-display");
var whosTurn = document.getElementById("whosTurn");

function whosTurnIsIt (num){
    return num % 2 === 0
}

function checkForTrap(spot) {
  switch (spot) {
    case 13:
      trapText.innerHTML = "Ohh no! <br> Your camp got raided. Move back to tile 9 to get new supplies";
      return 9;
    case 16:
      trapText.innerHTML = "Ambush!!! <br> A retreet is needed! You move your troops back to tile 6 for a better attacking position ";
      return 6;
    case 20:
      trapText.innerHTML = "What horrible fate! <br> Your army have gotten sick. You move back to tile 2 to rebuild your army!";
      return 2;
    case 24:
      trapText.innerHTML = "What a disaster! <br> Your food suply have rotted away. Move back to tile 18 to resuply";
      return 18;
    case 31:
      trapText.innerHTML = "SO WEAK!! <br> ";
      return 11;
    default:
      return spot;
  }
}

class Player{
    constructor(){
        /*this.spot = 0;*/
    }
    
    rollDice(tiles) {
    var randomRoll = /*floor(random(1, 7))*/Math.floor(Math.random() * 6) + 1;
    trapText.innerHTML = " " // resets the trap text when you roll
    if (whosTurnIsIt(count)){
      spot1 += randomRoll;
      spot1 = checkForTrap(spot1); //function returns what tile to be placed on BASED on what trap was hit.
      
    }else {
      spot2 += randomRoll;
      spot2 = checkForTrap(spot2); //function returns what tile to be placed on BASED on what trap was hit.
    }
    console.log("the current roll was --> " + randomRoll);
    yourRoll.innerHTML = randomRoll;


    if (randomRoll == 6){
      count --;
      console.log("YAY you rolled 6. roll again!");
      yourRoll.innerHTML = randomRoll + "<br> Nice roll! <br>" /*using br here to split the line so  that it displays correctly on the page*/  + "Roll again!";
    }
    count++
  }
            
    
    show(/*tiles*/){
    let current = tiles[spot1];
    let current2 = tiles[spot2];
    fill(255);
    let center = current.getCenter();
    let center2 = current2.getCenter();

    //the order the player is drawn in is switched so that the first player to roll is the one that is drawn last making it appear on top when u start the game, following code does also check if the players share the same tile and when they do, player2 becomes bigger to make it vissible behind player1
    image(playerImg2 , center2[0], center2[1],
      spot1 === spot2 ? playerImg2.width/5.5 : playerImg2.width/6,
      spot1 === spot2 ? playerImg2.height/5.5 : playerImg2.height/6);
    image(playerImg, center[0], center[1], playerImg.width/6, playerImg.height/6);

    /* console.log("player show tiles",tiles);
     console.log(" player show spot", spot);*/
  };

}
playerInstance = new Player();

