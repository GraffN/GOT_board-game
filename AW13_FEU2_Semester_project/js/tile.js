class Tile{
    constructor(x, y, wh, index, next){
        this.x = x
        this.y = y
        this.wh = wh
        this.index = index;
        this.itsATrap = 0;
        this.next = next;
        this.color = (50);
    }
    
    getCenter(){
        let cx = this.x + this.wh /5.5;
        let cy = this.y + this.wh /5.5;
        return [cx, cy];
    }
    tileCenter(){
        let cx = this.x + this.wh /2;
        let cy = this.y + this.wh /2;
        return [cx, cy];
    }
    
    show(tiles){
        
        fill(this.color);
        rect(this.x, this.y, this.wh, this.wh,);
        textSize(30);
        text(this.index, this.x, this.y + this.wh);
        
        if (this.next !== this.index + 1){
            let myCenter = this.tileCenter();
            let nextCenter = tiles[this.next].tileCenter();
            fill(200, 70);
            strokeWeight(2);
            stroke (255);
           
            line (myCenter[0], myCenter[1], nextCenter[0], nextCenter[1]);
            fill(255, 70);
        }
        
        /*text(this.index + '->' + this.next, this.x, this.y + this.wh);*/
    }
    
}