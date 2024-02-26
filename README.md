# odin-etch-a-sketch
-So how will we tackle this.
--We need to create the grid but the internal divs need to be accessible from outside the function that created them
- How do we achieve this
--We place the function that created the grid on the same level scope as the functions that interact with it.
--Lets implement just this and test it so we sure it works.


///////////////////////////////////////////////////////////////////////////////////
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
    
    const rdom = function random(min, max) {
        return min + Math.random() * (max - min);
    }
    
    
    function getRandom() {
        var h = rdom(1, 360);
        var s = rdom(0, 100);
        var l = rdom(0, 100);
        return 'hsl(' + h + ',' + s + '%,' + l + '%)';
    }
    








Old Code

var columns = 16;
var rows = 16;

    var grid = document.createElement('div');            
    grid.className = 'grid';
    for (let i = 0; i < columns; ++i) {
         let column = document.createElement('div');      
         column.className = 'column';
         for (var j = 0; j < rows; ++j) {
            var cell = document.createElement('div');    
            cell.className = 'cell';
            //cell.textContent = (i + 1) + '-' + (j + 1);  
            column.appendChild(cell);                    
        }
        grid.appendChild(column);                        
    }
    document.body.appendChild(grid);                     
