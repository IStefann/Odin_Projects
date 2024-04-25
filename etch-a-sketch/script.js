const grid = document.querySelector(".grid");
const gridSizeTxt = document.querySelector("#gridSize");
const gridSize = document.querySelector("input");
const eraser = document.querySelector(".eraser")
let drawing = false;
let rainbow = false;
let rainbowOn = false;
function rainbowColors() {
    if (rainbowOn === false) {
        rainbow = true;
        rainbowOn = true;
    }
    else if (rainbowOn === true) {
        rainbow = false;
        rainbowOn = false;
    }
}
function createGrid(heightWidth) {
    grid.textContent = "";
    const flexBasis = 100 / heightWidth;
    const totalCells = heightWidth * heightWidth;
    for (let i = 0; i < totalCells; i++) {
        const square = document.createElement("div");
        square.setAttribute('class', 'square');
        square.setAttribute('draggable', 'false');
        square.style.flexBasis = `${flexBasis}%`;
        grid.appendChild(square);
    };
    const squares = document.querySelectorAll(".square");
    addEventListener("mousedown", () => { drawing = true; })
    addEventListener("mouseup", () => { drawing = false; })
    const color = document.querySelector(".color");
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            if(eraser.checked === false){
            if (drawing === true && rainbow === false)
                square.style.backgroundColor = `${color.value}`;
            else if (drawing === true && rainbow === true) {
                let rand = Math.floor(Math.random() * 256);
                let rand2 = Math.floor(Math.random() * 256);
                let rand3 = Math.floor(Math.random() * 256);
                square.style.backgroundColor = `rgb(${rand},${rand2},${rand3})`;
            }
        }else
        if (drawing === true)
                square.style.backgroundColor = "#EEEEEE";
        });
    });

    gridSizeTxt.textContent = `Grid Size: ${heightWidth} x ${heightWidth}`;
}
createGrid(16);
gridSize.addEventListener("input", () => {
    createGrid(gridSize.value);
});