const container = document.querySelector('.container');

let colorPicked;
const colors = [
    "white",
    "black",
    "red",
    "green",
    "blue",
    "brown",
    "crimson",
    "cadetblue"
]

let gridWidth = 5;
let gridHeight = gridWidth;

let pixelWidth = '50px';
let pixelHeight = pixelWidth;

function startup(){
    grid(gridWidth, gridHeight);
    color(colors);
}

function grid(gridWidth, gridHeight){
    const totalPixel = gridWidth * gridHeight;
    for(let i=0; i<totalPixel; i++){
        container.style.gridTemplateColumns = `repeat(${gridWidth}, ${pixelWidth})`;
        createPixelGrid(pixelWidth, pixelHeight);
    }
}
function createPixelGrid(pixelWidth, pixelHeight){
    const newPixel = document.createElement('div');

    newPixel.classList = 'false pixel';
    newPixel.style.width = pixelWidth;
    newPixel.style.height = pixelHeight;
    newPixel.style.border = '1px solid black';

    // Drawing
    newPixel.addEventListener('click', () => {
        newPixel.style.background = colorPicked;
    });

    container.appendChild(newPixel);
}
function color(colorArray){
    const container = document.querySelector('.colorContainer');

    for(let i=0; i<colors.length; i++){
        const color = document.createElement('div');

        color.classList = 'color';
        color.style.backgroundColor = colorArray[i];
        // Color choice
        color.addEventListener('click', () => {
            colorPicked = colorArray[i];
        });

        container.appendChild(color);
    }
}