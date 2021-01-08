/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */
// eslint-disable-next-line no-console
/*jslint devel: true */
/*global
document,setTimeout
*/ 
var start=0.0;
var end=0.0;
var lowestTime=100000.0;
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      if (i == 4 && color == "#F0F8F" ) {
          color += letters[Math.floor(Math.random() * 13)];
      } else {
          color += letters[Math.floor(Math.random() * 16)];
      }
    }
    return color;
}


function positionShape() {
    var topPos = (Math.random() * (document.getElementById("container").offsetHeight - document.getElementById("shape").offsetHeight).toFixed(1) - .1) + .06;
    var leftPos = (Math.random() * (document.getElementById("container").offsetWidth - document.getElementById("shape").offsetWidth).toFixed(1) - .1) + .06;
    
    document.getElementById("shape").setAttribute("style", document.getElementById("shape").getAttribute("style") + "position: relative;left: " + leftPos + "px;top: " + topPos + "px;");
    
    start=Date.now();
}



function createCircle() {
    var width = Math.random() * 400 + 20;
    document.getElementById("shape").setAttribute("style", "background-color: " + getRandomColor() + ";height: " + width + "px;width: " + width + "px;border-radius: 50%;");
    
    positionShape();
}


function createSquare() {
    var width = Math.random() * 400 + 20;
    document.getElementById("shape").setAttribute("style", "background-color: " + getRandomColor() + ";height: " + width + "px;width: " + width + "px;");
    
    positionShape();
}


function createRectangle() {
    var width = Math.random() * 400 + 20;
    var hight = Math.random() * 400 + 20;
    document.getElementById("shape").setAttribute("style", "background-color: " + getRandomColor() + ";height: " + hight + "px;width: " + width + "px;");
    
    positionShape();
}


function createOval() {
    var width = Math.random() * 400 + 20;
    var hight = Math.random() * 400 + 20;
    document.getElementById("shape").setAttribute("style", "background-color: " + getRandomColor() + ";height: " + hight + "px;width: " + width + "px;border-radius: 50%;");
    
    positionShape();
}

function createTriangle() {
    var first = Math.random() * 400 + 20;
    var second = Math.random() * 400 + 20;
    var third= 400;
    if ((first + second) < 390) {
        third = Math.random() * ((first + second) - 30) + 20;
    } else {
        third = Math.random() * 400 + 20;
    }
    var side = new Array();
    side = ["top", "left", "right", "bottom"];
    
    var finalSide = new Array();
    
    for(var i = 0; i < 3; i++){
        var ran = Math.floor(Math.random() * (3-i));
        finalSide.push(side[ran]);
        side.splice(ran, 1);
    }
    document.getElementById("shape").setAttribute("style", "width: 0;height: 0;border-" + finalSide[0] + ": " + first + "px solid transparent;border-" + finalSide[1] + ": " + second + "px solid transparent;border-" + finalSide[2] + ": " + third + "px solid " + getRandomColor() + ";");
    
    positionShape();
}

function createShape() {
    var choice = Math.floor(Math.random() * 5);
    if (choice == 0){
        createRectangle();
    } else if (choice == 1) {
        createCircle();
    } else if (choice == 2) {
        createSquare();
    } else if (choice == 3) {
        createTriangle();
    } else{
        createOval();
    }
}

createShape();

document.getElementById("shape").onclick = function () {
    var time =(Math.random() * 3000);
    document.getElementById("shape").style.display = "none";
    end=Date.now();
    var timeTaken=parseFloat((end-start)/1000).toFixed(3);
    if (lowestTime > timeTaken) {
        lowestTime = timeTaken;
        document.getElementById("time").innerHTML= "It took " + timeTaken +"s. New Record!";
    } else {
        document.getElementById("time").innerHTML= "It took " + timeTaken +"s. Record time is " + lowestTime + "s";
    }
    
    setTimeout(createShape, time);
};














