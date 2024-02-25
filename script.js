'use strict'

const buttons = {
    size: document.querySelector('.size'),
    random: document.querySelector('.random'),
    reset: document.querySelector('.reset'),
}


document.addEventListener('DOMContentLoaded', function() {
    gridBlockSize();

    buttons.size.addEventListener('click', function () {
    let sizeSelected = userSize();
    console.log(sizeSelected)
    gridBlockSize(sizeSelected);
    })

    
})

function gridBlockSize(size = 16) {
    const board = document.querySelector('.container');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let divs = size * size;

    for (let i = 0; i < divs; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = 'black';
        })
        buttons.reset.addEventListener('click', function() {
            div.style.backgroundColor = 'white';
        })
        buttons.random.addEventListener('click', function() {
            div.style.backgroundColor = `hls(${Math.random() * 360}, 100%, 50%)`;
        })
        board.insertAdjacentElement('beforeend', div);
    }
    

}

function userSize() {
    let input = prompt("Please chose a size between 16 and 100");
    let userresponce = document.querySelector('.userresponce');

    if (input == ''){
        userresponce.textContent = "Default Selected";
    }
    else if (input < 16 || input > 100) {
        userresponce.textContent = "Select between 16 and 100"
    }
    else{
        userresponce.textContent = "Play On Cinnabon"
        return input;
    }
}

