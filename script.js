// Declerations
let containerSize = 16;
let container = document.createElement('div');

// Container attributes
container.className = 'container';

// Itterate to create the grid
for (let i = 0; i < containerSize; i++) {
    let column = document.createElement('div');
    column.className = 'column';

    for (let j = 0; j < containerSize; j++){
        let row = document.createElement('div');
        row.className = 'row';
        column.appendChild(row);
    }
    container.appendChild(column);
}

// Append container to the page
document.body.appendChild(container);

// ** WORKING ON IT **
let cells = document.getElementsByClassName('row');
container.addEventListener('mousedown', () => {
    cells.classList.add('paint');
});