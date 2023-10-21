const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io") (server);
matrix=[];
grassArr = [];
  grassEaterArr =[];
  preda = [];
  hum = [];
  alien = [];
const sideX = 30;
const sideY = 30;
let Grass=require('./class')
let Human=require('./human')
let Alien=require('./alien')
let Pred=require('./predator')
let GrassEater=require('./grass_eater')
function random(min, max) {
  if (min === undefined && max === undefined) {
    return Math.random();
  } else if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.random() * (max - min) + min;
}

function charac(quantity, char) {
    let initialNumber = 0;
    while (initialNumber < quantity) {
      let x = Math.floor(random(0, sideX));
      let y = Math.floor(random(0, sideY));
      if (matrix[y][x] == 0) {
        matrix[y][x] = char;
      }
      initialNumber++;
    }
  }

  for (let i = 0; i < sideY; i++) {
    matrix.push([]);
    for (let j = 0; j < sideX; j++) {
      matrix[i].push(0);
    }
  }
//...

//...
function initGame(){
    charac(20,1);
    charac(25,2);
    charac(20,3);
    charac(5,4);
    charac(3,5);
    startInterval();
    initArrays();
}
function initArrays() {
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
const speed = 300
let intName;
function startInterval(){
    clearInterval(intName)
    intName=setInterval(function(){playGame()},speed)
}

function playGame(){
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
     io.emit('update matrix',matrix)
}
app.use(express.static("."));

app.get("/", function (req, res) {
    res.redirect("index.html");
});
io.on('connection', function(socket){
    socket.emit('update matrix', matrix)
    initGame()
})
server.listen(3000, () => {
    console.log("server running on 3000")
})}
