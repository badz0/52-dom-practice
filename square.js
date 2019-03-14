const square = document.getElementById('square');

square.addEventListener('click', function() {
  square.textContent = '';
  square.style.width = '100px';
  square.style.height = '100px';

  initGame();
}, { once: true });

function moveSquare(event) {
  const { x, y } = event;

  if (x > 50) {
    square.style.left = x + 'px';
  }
  if (y > 50) {
    square.style.top = y + 'px';
  }
}

function moveSquareKeys(event) {
  const { offsetLeft: x, offsetTop: y } = square;

  if (event.keyCode === 37) {
    moveSquare({x: x - 20, y: y })
  } else if (event.keyCode === 38) {
    moveSquare({x: x, y: y - 20})
  } else if (event.keyCode === 39) {
    moveSquare({x: x + 20, y: y })
  } else if (event.keyCode === 40) {
    moveSquare({x: x, y: y + 20})
  }
}

function initGame() {
  square.addEventListener('mousedown', function() {
    document.addEventListener('mousemove', moveSquare);
  });

  document.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', moveSquare);
  });

  document.addEventListener('click', moveSquare)

  square.addEventListener('keydown', moveSquareKeys)
}
