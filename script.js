const canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d");

const width = canvas.clientWidth * 2
const height = canvas.clientHeight * 2

canvas.width = width
canvas.height = height

function drawFlower(x, y, size) {
  ctx.save();
  ctx.translate(x, y);

  const petals = 5
  
  for (let i = 0; i < petals; i++) {
    ctx.rotate((2 * Math.PI) / petals);
    ctx.beginPath();
    ctx.arc(0, size / 2, size / 2, 0, Math.PI * 2);
    ctx.fillStyle = '#E22483';
    ctx.fill();
  }

  ctx.beginPath();
  ctx.arc(0, 0, size / 3, 0, Math.PI * 2);
  ctx.fillStyle = '#F7EB2B';
  ctx.fill();

  ctx.restore();
}

function generateFlowers(count) {
  for (let i = 0; i < count; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = 50 + Math.random() * 100;

    drawFlower(x, y, size);
  }
}

const numberOfFlowers = 10 + Math.floor(Math.random() * 10);
generateFlowers(numberOfFlowers);