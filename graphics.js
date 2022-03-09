function fill(style) {
    ctx.fillStyle = style;
}

function stroke(style) {
    ctx.strokeStyle = style;
}

function circle(x, y, r, mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.stroke();
    }
}

function rect(x, y, w, h, mode) {
    if (mode === "fill") {
        ctx.fillRect(x, y, w, h)
    }
}

function background(color) {
    fill(color);
    rect(0, 0, cnv.width, cnv.height, "fill");
}