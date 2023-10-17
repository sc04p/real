let Creature = require('./creature')
module.exports = class Grass extends Creature{
   
     mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= 8 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;  
        }
    }
    
    
}
































/*
class Cat {
    constructor(x,y, name) {
       this.x = x;
       this.y = y;
       this.name = name;
       this.energy = 8;
       this.hungry = true;
       this.mouseCount = 4;
    }
    move() {
        this.x++;
        this.y++;
    }

    eat_full() {
      while ( this.mouseCount > 1)
       {
this.mouseCount--;
this.energy--;
       }
       if (this.mouseCount >= 1)
       this.hungry = false;
    }
    eat()
    {
        if (this.mouseCount > 0 && this.hungry && this.energy > 5)
        { this.energy--;
            this.mouseCount--;
           
        }
        else {this.hungry = false;}
    }
}
var cat1 = new Cat(1,1,'bartholomew')
cat1.move();
cat1.eat();
console.log(cat1);
console.log('hungry=',cat1.hungry);

var cat2 = new Cat(2,3, 'piso');


*/