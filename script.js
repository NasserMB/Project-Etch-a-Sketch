// Declerations
let containerSize = 16;
let container = document.createElement('div');

// Container attributes
container.className = 'container';

// Clear grid function
function clearGrid () {
    let clearCells = document.getElementsByClassName('row');
    for (let i = 0; i < clearCells.length; i++) {
        clearCells[i].style.backgroundColor = '';
    }
}

// Resize grid
function resizeGrid () {
    containerSize = prompt('Enter grid size');
    if (containerSize > 100) containerSize = 100;
    removeGrid();
    createGrid();
    clearGrid();
}

// Remove grid
function removeGrid () {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstElementChild);
    }
}

// function to create the grid
function createGrid () {
    for (let i = 0; i < containerSize; i++) {
        let column = document.createElement('div');
        column.className = 'column';
    
        for (let j = 0; j < containerSize; j++){
            let row = document.createElement('div');
            row.className = 'row';
            row.addEventListener('mouseover', () => {
                row.style.backgroundColor = 'black';
            });
            column.appendChild(row);
        }
        container.appendChild(column);
    }
}

createGrid();

// Append container to the page
document.body.appendChild(container);