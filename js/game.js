var gameBoard;

function startGame() {
    GameArea.start();
    gameBoard = new component(30, 30, "red", 10, 120)
    gameBoard = new component(30, 30, "red", 10, 220)
}
let tiles =[];
let player;

var GameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 400;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}
function component(width, height, color, x, y){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    draw = GameArea.context;
    draw.fillStyle = color;
    draw.fillRect(this.x, this.y, this.width, this.height);
}
function component(width, height, color, x, y){
    var resolution = 100
    var cols = width / resolution;
    var rows = height / resolution;
    for (i = 0; i < cols * rows i++){
        var tile = new tile (x, y, resolution, i + 1 )
}
    /*let resolution = 100;
    let cols = width / resolution;
    let rows = height / resolution;
    
    let x = 0;
    let y = (rows - 1) * resolution;
    let dir = 1;
    for (let i = 0; i < cols * rows i++){
        let tile = new tile (x, y, resolution, i + 1 )
    tiles.push(tile);
    x=x+(resolution * dir);
    if(x >= width){
    x -=resolution;
    y -=resolution;
    dir *= -1;
    }
if(x <= 0){
    x = resolution;
    y -= resolution;
    dir *= -1;
    }
    }
}*/