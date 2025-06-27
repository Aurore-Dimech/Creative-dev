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

function createTriangleCircle(containerSelector, triangleCount, spacing) {
    const container = document.querySelector(containerSelector);
    const angleStep = 360 / triangleCount;

    for (let i = 0; i < triangleCount; i++) {
        const triangle = document.createElement('div');
        triangle.className = 'triangle';
        triangle.style.transform = `rotate(${i * angleStep}deg) translateY(${spacing}px)`;
        container.appendChild(triangle);
    }
}

createTriangleCircle('.container', 24, 50);

////////////////////////////////////////////////////////////////////////////////



// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;
// const raduis = 150;

// function drawSection(startAngle, endAngle, color) {
//   ctx.beginPath();
//   ctx.moveTo(width / 2 ,height / 2);
//   ctx.arc(width/2, height/2, raduis, startAngle, endAngle);
//   ctx.closePath();
//   ctx.fillStyle = color;
//   ctx.fill();
// }


// const colors = '#ff5ec1';
// const sectionCount = colors.length;
// const angleStep = (2 * Math.PI) / sectionCount;

// for (let i = 0; i < sectionCount; i++) {
//   drawSection(i, (i + 1), colors[i]);
// }

// ctx.beginPath();
// ctx.arc(width/2, height/2, 60, 0, 2 * Math.PI);
// ctx.fillStyle = '#e0e0f0';
// ctx.shadowColor = '#ffffff';
// ctx.shadowBlur = 10;
// ctx.fill();
// ctx.shadowBlur = 0;

// ctx.beginPath();
// ctx.arc(width/2, height/2, radius, 0, 2 * Math.PI);
// ctx.lineWidth = 4;
// ctx.strokeStyle = '#ffffff';
// ctx.stroke();