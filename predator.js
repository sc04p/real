class Pred {
    constructor(x,y,index) {
        this.x = x;
        this.y = y;
        this.energy = 20;
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
    mul() {
       
        var newCell = random(this.chooseCell(2));
        if (newCell) {
            var newGrassEater = new Pred(newCell[0], newCell[1], this.index);
            preda.push(newGrassEater);
            matrix[newCell[1]][newCell[0]] = 3;
 
        }
}
eat1() {
    let foods = this.chooseCell(2)
    let food = random(foods)
    if (food) {
        this.energy++;
        matrix[this.y][this.x] = 0
        let newX = food[0]
        let newY = food[1]
        matrix[food[1]][food[0]] = 3
        this.x = newX
        this.y = newY
        for (var i in grassEaterArr) {
            if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
        if (this.energy >= 25) {
            this.mul()
        }
    }
    else {
        this.move();
    }
}
move() {
    this.energy--
    let emptyCells = this.chooseCell(0)
    let newCell = random(emptyCells)
    if (newCell) {
        let newX = newCell[0]
        let newY = newCell[1]
        matrix[this.y][this.x] = 0
        matrix[newY][newX] = 3
        this.x = newX
        this.y = newY
    }

    if (this.energy <= 0) {
        this.die();
    }

 } 
 die() {
    matrix[this.y][this.x] = 0;
    for (var i in preda) {
        if (this.x == preda[i].x && this.y == preda[i].y) {
            preda.splice(i, 1);
            break;
        }
    }
}
}