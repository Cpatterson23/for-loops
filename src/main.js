/** 
 * @type {HtmlCanvasElement}
*/
const canvas = document.getElementById("my-canvas");

const ctx = canvas.getContext("2d");

function addRect( x, y, size, fillStyle) {
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x, y, size, size);
}

function main() {
   
    let size = 10;
    let x = 5;
    
    for ( let i = 0; i < 5; i++ ) {
        addRect(5, x,  size, "green");
        x = x + size;
    }

    console.log(size);
}



main();
