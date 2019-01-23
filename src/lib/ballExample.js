export const setupCanvas = () => {
  createCanvas(710, 400);
}

export const drawBallAttachedToMouse = () => {
  fill(0, 12);
  rect(0, 0, width, height);
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 60, 60);
}