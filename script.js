'use strict'

document.addEventListener('DOMContentLoaded', function() {
    gridBlockSize()
    console.log('nono')
})

function gridBlockSize(size = 16) {
    const board = document.querySelector('.container');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let divs = size * size;

    for (let i = 0; i < divs; i++) {
        let div = document.createElement('div');
        board.insertAdjacentElement('beforeend', div);
    }

}
