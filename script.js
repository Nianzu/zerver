const roomba = document.getElementById('roomba');

// Function to generate random position values for the Roomba
function getRandomPosition() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const roombaWidth = roomba.offsetWidth;
  const roombaHeight = roomba.offsetHeight;

  const maxX = screenWidth - roombaWidth;
  const maxY = screenHeight - roombaHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  return { x: randomX, y: randomY };
}

// Function to move the Roomba to a random position
function moveRoomba() {
  const position = getRandomPosition();
  roomba.style.left = `${position.x}px`;
  roomba.style.top = `${position.y}px`;
}

// Call the moveRoomba function initially to set the Roomba at a random position
moveRoomba();

// Move the Roomba every 3 seconds
setInterval(moveRoomba, 3000);
