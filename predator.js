let Creature = require('./creature')
module.exports = class Pred extends Creature {
    constructor(x,y,index) {
        super(x,y,index)
        this.energy = 20;
        
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
    mul() {
       
        var newCell = this.selectRandomCell(2);
        if (newCell) {
            var newGrassEater = new Pred(newCell[0], newCell[1], this.index);
            preda.push(newGrassEater);
            matrix[newCell[1]][newCell[0]] = 3;
 
        }
}
eat1() {
    // let foods = this.chooseCell(2)
    let food = this.selectRandomCell(2)
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