class Human{

    constructor(x, y, index) {
        this.x = x;
        this.y = y;
       
        this.index = index;
     
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
       var found = [];
       for (var i in this.directions) {
           var x = this.directions[i][0];
           var y = this.directions[i][1];
           if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){

           if (matrix[y][x] == character) {
               found.push(this.directions[i]);
           }
       }
       }
       return found;

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

