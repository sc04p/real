let Creature = require('./creature')
module.exports =class Alien extends Creature{
    constructor(x,y,index)
    {
        super(x,y,index)
        this.directions = [];
    }
    getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
             [this.x - 1, this.y    ],
             [this.x + 1, this.y    ],
             [this.x - 1, this.y + 1],
             [this.x    , this.y + 1],
             [this.x + 1, this.y + 1]
        ];
     }
     chooseCell(character,character2,character3,character4) {
        this.getNewCoordinates();
       var found = [];
       for (var i in this.directions) {
           var x = this.directions[i][0];
           var y = this.directions[i][1];
           if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){

           if (matrix[y][x] == character || matrix[y][x] == character2 || matrix[y][x] == character3 || matrix[y][x] == character4) {
               found.push(this.directions[i]);
           }
       }
       }
       return found;
   }
   
 eat3() {
    // let foods = this.chooseCell(1,2,3,4)
    
    let food = this.selectRandomCell(1)
    if (food) {
       
       matrix[this.y][this.x] = 0
       let newX = food[0]
       let newY = food[1]
       matrix[food[1]][food[0]] = 5
       this.x = newX
       this.y = newY
       for (var i in grassArr) {
           if (newX == grassArr[i].x && newY == grassArr[i].y) {
               grassArr.splice(i, 1);
               break;
           }
       }
       for (var i in grassEaterArr) {
        if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
            grassEaterArr.splice(i, 1);
            break;
        }
    }
    for (var i in preda) {
        if (newX == preda[i].x && newY == preda[i].y) {
            preda.splice(i, 1);
            break;
        }
    }
    for (var i in hum) {
        if (newX == hum[i].x && newY == hum[i].y) {
            hum.splice(i, 1);
            break;
        }
    }
           
       
    }
    else {
       this.move();
    }
    }
    move() {  
    // let emptyCells = this.chooseCell(0)
    let newCell = this.selectRandomCell(0)
    if (newCell) {
       let newX = newCell[0]
       let newY = newCell[1]
       matrix[this.y][this.x] = 0
       matrix[newY][newX] = 5
       this.x = newX
       this.y = newY
    }
    
    
    }
}