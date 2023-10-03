
var matrix = [];
var n = 40;
var m = 40;

// Fill the matrix with random integers from 0 to 3
function charac (quantity, character){
    var q = 0;
    while (q < quantity) {
        var x = Math.floor(random(0,n))
        var y = Math.floor(random(0,m))
        if (matrix[x][y] == 0) {
            matrix[x][y] = character;
        }
        q++;
    }

}


/*var matrix = [ 
[0, 0, 1, 0, 3],
[1, 0, 0, 0, 0],
[2, 1, 2, 0, 0],
[0, 0, 1, 0, 0],
[1, 1, 0, 0, 0],
[1, 1, 0, 3, 0],
[1, 1, 0, 0, 0]
]
;
*/
 
 var side = 20;
 var grassArr = [];
 var grassEaterArr =[];
 var preda = [];
 var hum = [];
 var alien = [];
 
 function setup() {
    for (var y = 0; y < n; y++) {
        matrix.push([])
        for (var x = 0; x < m; x++) {
         matrix[y].push(0)
        }
      }
      charac(20,1)
     charac(25,2)
      charac(20,3)
      charac(5,4)
      charac(3,5)
     
     
    frameRate(12);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for(var y = 0; y < matrix.length; ++y){
        for(var x = 0; x < matrix[y].length; ++x){
            if(matrix[y][x] == 1){
                var gr = new Grass(x,y,1);
                grassArr.push(gr);
            }
            else if(matrix[y][x] == 2){
                var gre = new GrassEater(x,y,1);
                grassEaterArr.push(gre);
            }
            else if(matrix[y][x] == 3){
                var pre = new Pred(x,y,1);
                preda.push(pre);
           
            }
            else if(matrix[y][x] == 4)
            {
                var hu = new Human(x,y,1);
                hum.push(hu);
            }
            else if(matrix[y][x] == 5)	
            {
                var al = new Alien(x,y,1);
                alien.push(al);
            }
        }
     }
     
     
    
    
 }
 function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
 
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2)
            {
                fill("yellow");
            }
            else if ( matrix[y][x] == 3)
            {
                fill("red")
            }
            else if (matrix[y][x] == 4)
            {
                fill("black")
            }
            else if (matrix[y][x] == 5)
            {
                fill("purple")
            }
         
            rect(x * side, y * side, side, side);
     
     
        }
    }
    for(var i in grassArr){
        grassArr[i].mul();
     }
     for(var i in grassEaterArr){
        grassEaterArr[i].eat();
     }
     for (var i in preda) {
         preda[i].eat1();
     }
     for (var i in hum) {
         hum[i].eat2();
     }
     for (var i in alien) {
         alien[i].eat3();
     }
 }
 