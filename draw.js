//draw.js
///////////////////////////////// DRAW FUNCTIONS

function drawRect(x,y,width,height,color) {
  ctx.beginPath();
  ctx.rect(x,y,width,height);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
}
