var score = 0;
var aWidth;
var aHeight;
var timer;
var iterations = 0;

window.addEventListener('load', setGameAreaBounds);

//Sets the area and boundary for the game
function setGameAreaBounds(){
    aWidth = innerWidth;
    aHeight = innerHeight;
    aWidth -= 22;
    aHeight -= 97;
    document.getElementById('gameArea').style.width = aWidth + 'px';
    document.getElementById('gameArea').style.height = aHeight + 'px';
    document.getElementById('dot').addEventListener('click', detectHit);
    aWidth -= 74;
    aHeight -= 74;
    moveDot();
}
//detects everytime you hit the button and adds to your score
function detectHit(){
    score += 1;
    document.getElementById('scoreLabel').innerHTML = "Score: " + score;
}
//randomly moves the button around the game area
function moveDot(){
    var x = Math.floor(Math.random()*aWidth);
    var y = Math.floor(Math.random()*aHeight);
    if(x<10)
        x = 10;
    if(y<10)
        y = 10;
    document.getElementById("dot").style.left = x + 'px';
    document.getElementById("dot").style.top = y + 'px';
//sets the time in seconds for before the game ends
    if(iterations < 10)
        timer = setTimeout("moveDot()",1000);
    else{
//lets you know the game ended
        document.getElementById('scoreLabel').innerHTML += "     Game Over!";
//stops the clicking of the button stopping the game
        document.getElementById('dot').removeEventListener('click',detectHit);
        clearTimeout(timer);
    }
    iterations++;
}

