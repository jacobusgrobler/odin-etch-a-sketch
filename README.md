# odin-etch-a-sketch

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
