let isBarking = false;
let shakeAmount = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);

  // 짖을 때 흔들림 값
  if (isBarking) {
    shakeAmount = random(-10, 10);
  } else {
    shakeAmount = 0;
  }

  // 강아지 크게 + 흔들림 적용
  textSize(300);
  text("🐶", width/2 + shakeAmount, height/2 + 50 + shakeAmount);

  // 짖는 텍스트
  if (isBarking) {
    textSize(60);
    fill(255, 0, 0);
    text("멍!", width/2, 80);
  }
}

function mousePressed() {
  let d = dist(mouseX, mouseY, width/2, height/2);

  if (d < 150) {
    isBarking = true;

    setTimeout(() => {
      isBarking = false;
    }, 500);
  }
}