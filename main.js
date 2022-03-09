// Bubbles assignment by Sami

let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Create an array of random bubbles
let bubbles = [];

requestAnimationFrame(draw);
function draw() {
    // Fill Canvas
    background("black");

    // Move & Draw All Bubbles
    for (let i = 0; i < bubbles.length; i++) {
        moveBubble(bubbles[i])
        drawBubble(bubbles[i])
    }

    requestAnimationFrame(draw);
}

// Event stuff 
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    if (event.keyCode === 39) { // Right Arrow - Add a new random bubble
        addBubble();
    } else if (event.keyCode === 37) {
        // Left Arrow - Remove the last bubble
        bubbles.pop();

    }
}

// Timers 
setInterval(addBubble, 1000);

function addBubble() {
    bubbles.push(newBubble(400, 300, 30, randomRGB()));
}