'use strict'

let color = 'black'

let click = true;


const buttons = {
    size: document.querySelector('.size'),
    random: document.querySelector('.random'),
    reset: document.querySelector('.reset'),
}

const colorsHTML = {
    red: document.querySelector('.red'),
    blue: document.querySelector('.blue'),
    green: document.querySelector('.green'),
    black: document.querySelector('.black'),
    erase: document.querySelector('.erase'),
}


function createGrid(size,) {
    let board = document.querySelector('.container');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove())
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let divs = size * size;

    for (let i = 0; i < divs; i++) {
        let boardBlocks = document.createElement('div');
        boardBlocks.style.backgroundColor = 'white'
        board.insertAdjacentElement('beforeend', boardBlocks);

        boardBlocks.addEventListener('mouseover', colorBlocks)

        buttons.size.addEventListener('click', () => changeSize())
    }
}
createGrid()

function changeSize(input) {
    if (input >= 2 && input <= 60) {
    createGrid(input)
    }else {alert('Please input size between 16 and 60')}
}

function colorBlocks() {
     if(click) {
        if(color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random()* 360}, 100%, 50%)`;
        }else {
            this.style.backgroundColor = color
        }   
     }
    
}
function changeColor(choice) {
    color = choice;
}

function resetGrid() {
    let board = document.querySelector('.container');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', () => {click = !click})