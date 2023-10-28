
const sideX = 30;
const sideY = 30;
const socket = io();
 
 var side = 20;
 
 const knopka = document.querySelector('#knopka')
 const restartBtn = document.querySelector('#restart')
 knopka.addEventListener('click',handlePause)
 restartBtn.addEventListener('click', handleRestartGame)
 let pause = false;
 function handlePause() {
     console.log('clicked');
     pause = !pause
     socket.emit('pause game',pause)
 }
 function handleRestartGame() {
     socket.emit('restart game')
 }
//  statistics
socket.on("change statistics", handleAddStatistics);
const grass = document.querySelector("#grass");
const grassEater = document.querySelector("#grassEater");
const predator = document.querySelector("#predator");

// seasons
const seasonsBtn = document.querySelector('#seasons')
seasonsBtn.addEventListener('click', handleChangeSeason)
let season = 0;
function handleChangeSeason() {
    if (season < 4) {
        season++;
    } else {
        season = 1;
    }
    socket.emit("change season", season)
    if (season == 1) {
        seasonsBtn.textContent = 'Winter'
    }
    else if (season == 2) {
        seasonsBtn.textContent = 'Spring'
    }
    else if (season == 3) {
        seasonsBtn.textContent = 'Summer'
    }
    else if (season == 4) {
        seasonsBtn.textContent = 'Autumn'
    }
}

function handleAddStatistics(obj) {
    grass.innerText = "New grasses: " + obj.grass;
    grassEater.innerText = "New grass eaters: " + obj.grassEater;
    predator.innerText = "New predators: " + obj.predator;
   
    }



 function setup() {

    createCanvas(sideX * side, sideY * side);
    background('#acacac');
    
 
 }
 function drawGame(matrix) {

    for (var y = 0; y < sideY; y++) {
        for (var x = 0; x < sideX; x++) {
 
            if (matrix[y][x] == 1) {
   
                if(season == 1){
                    fill("white")
                } else if ( season == 2){
                    fill("pink")
                }
                else if (season == 4) {
                    fill("brown")
                } else {
                    fill("green")
                }
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
    
 }
 socket.on('update matrix',drawGame)