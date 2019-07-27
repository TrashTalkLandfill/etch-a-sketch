const outsideTheGrid = document.querySelector('#outsideTheGrid');
const container = document.querySelector('#container');

const button = document.createElement('button');
button.classList.add('button');
outsideTheGrid.insertBefore(button, container);

button.style.cssText = 'font-size:large';
button.textContent = 'Press to reset!'


const addGlow = (div) => {
    div.addEventListener('mouseover', function(e) {
        e.target.style.background = 'black';
    })   
}

const createDiv = () => {
    const div = document.createElement('div');
    div.classList.add('grid')
    container.appendChild(div);
    addGlow(div);    
}


const replicateDiv = (scale) => {
    for (let i = 0; i < Math.pow(scale,2); i++) {
        createDiv();
    }

    container.style.cssText = `grid-template-columns:repeat(${scale},1fr)`;
}

replicateDiv(16);

const removeGrid = () => {
    const gridToRemove = document.getElementsByClassName('grid');
    while (gridToRemove.length > 0) {
        gridToRemove[0].parentNode.removeChild(gridToRemove[0]);
    }
}

const buttonPrompter = () => {
    const rawScale = prompt('How many pixels would you like per side?', 'Please enter a number');
    let scale = parseInt(rawScale, 10);
    console.log(scale);

    if (isNaN(scale)) {
        alert('Please enter a number!')
        scale = buttonPrompter();
    }

    if (scale > 100 || scale < 4) {
        alert ('Please enter a number no larger than 100 and no smaller than 4.')       
        scale = buttonPrompter();
    }
    
    return scale;
}

button.addEventListener('click', function(e) {
    removeGrid();
    replicateDiv(buttonPrompter());
});