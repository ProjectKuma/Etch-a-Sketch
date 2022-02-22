//the following code is for the etch-a-sketch project

//variable for body class
const body = document.querySelector('.body');

//create into function to set grid
for (let i = 0; i < 256; i++) {
    var board = document.createElement('div');
    //board.className('divs')
    body.appendChild(board);
}

//select all divs and assign them class name 'divs'
var allDivs = document.querySelectorAll("div");
for (let j = 0; j < allDivs.length; j++) {
    allDivs[j].className = "divs";
}

//variable to toggle normal colorization or random rgb colors
var colorSettings = "default"
//colors changes background of specific element to darkgray or random rgb values
function colors(e) {
    var randomColor = random_rgba();
    //default value when toggled to default
    if (e.target.matches('.divs') && colorSettings == 'default') {
        e.target.style.background = 'black';
    }
    //random value when toggled to random rgb value
    else if (e.target.matches('.divs') && colorSettings == 'random') {
        e.target.style.background = randomColor;
    }
    else {
        console.log(e);
    }
}
//event listener which changes the color of the divs when hovering your mouse over each square
addEventListener(
    "mouseover", colors
);

//Random color function when using random button and variable. credit for function is taken from stack overflow.
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

//function to set default color button
function setDefaultColor() {
    colorSettings = 'default';
}
//function to set random color button
function setRandomColor() {
    colorSettings = 'random';
}
//Reset button to change background back to original color.
function reset() {
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style.background = 'white';
    }
}