let Creature = require('./creature')
module.exports =class Human{

    constructor(x, y, index) {
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
     chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character)
    }
   

eat2() {
let foods = this.chooseCell(3)
let food = random(foods)
if (food) {
   
   matrix[this.y][this.x] = 0
   let newX = food[0]
   let newY = food[1]
   matrix[food[1]][food[0]] = 4
   this.x = newX
   this.y = newY
   for (var i in preda) {
       if (newX == preda[i].x && newY == preda[i].y) {
           preda.splice(i, 1);
           break;
       }
   }
  

   
}
else {
   this.move();
}
}
move() {

let emptyCells = this.chooseCell(0)
let newCell = random(emptyCells)
if (newCell) {
   let newX = newCell[0]
   let newY = newCell[1]
   matrix[this.y][this.x] = 0
   matrix[newY][newX] = 4
   this.x = newX
   this.y = newY
}


}

} 


