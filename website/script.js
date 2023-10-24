const roomba = document.getElementById('roomba');
const start = document.getElementById('start');
const target = document.getElementById('target');

obstacles = document.getElementsByClassName("obstacle");

const title = document.getElementById('title');
const nav = document.getElementById('nav');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const roombaWidth = roomba.offsetWidth;
const roombaHeight = roomba.offsetHeight;

roombaAngle = 0
function clamp(position){
    const maxX = window.innerWidth - roombaWidth*1.2;
    const maxY = window.innerHeight - roombaHeight*1.2;
    const minX = roombaWidth*1.2;
    const minY = roombaHeight*1.2;
    if (position.x > maxX)
    {
        position.x = maxX
    } else if (position.x < minX) 
    {
        position.x = minX
    }
    if (position.y > maxY)
    {
        position.y = maxY
    } else if (position.y < minY) 
    {
        position.y = minY
    }
    return position
}
// Function to generate random position values for the Roomba
function getRandomPosition() {
    const maxX = window.innerWidth - roombaWidth*1.2;
    const maxY = window.innerHeight - roombaHeight*1.2;
  
    const randomX = Math.floor(Math.random() * maxX) + (roombaWidth*1.2 / 2);
    const randomY = Math.floor(Math.random() * maxY) + (roombaHeight*1.2 / 2);
  
    return { x: randomX, y: randomY };
  }

function rotateRoomba(callback,position){
    const stepSize = 0.05;
    let currentX = parseInt(roomba.style.left || roomba.offsetLeft);
    let currentY = parseInt(roomba.style.top || roomba.offsetTop);
    const distanceX = position.x - currentX;
    const distanceY = position.y - currentY;
    const directionX = distanceX > 0 ? 1 : -1;
    const directionY = distanceY > 0 ? 1 : -1;
    angle = Math.atan(distanceY/distanceX);
    targetAngle = angle +directionX*Math.PI/2;
    start.style.left = `${currentX}px`
    start.style.top = `${currentY}px`
    target.style.left = `${position.x}px`
    target.style.top = `${position.y}px`


    
  const interval = setInterval(() => {
    
    roomba.style.transformOrigin = 'center center';
    roomba.style.transform = `translate(-50%, -50%)rotate(${roombaAngle}rad)`;

    if (Math.abs(roombaAngle-targetAngle) <= 2 * stepSize)
    {
        roombaAngle = targetAngle
        clearInterval(interval);
        moveRoomba(callback,position)
    } else {
        roombaAngle += Math.sign(targetAngle-roombaAngle) * stepSize
    }
  }, 10);


}
// Function to move the Roomba smoothly to a new position
function moveRoomba(callback,position) {

  // Calculate the distance to move in small steps
  const stepSize = window.innerWidth/500;
  let currentX = parseInt(roomba.style.left || roomba.offsetLeft);
  let currentY = parseInt(roomba.style.top || roomba.offsetTop);
  const distanceX = position.x - currentX;
  const distanceY = position.y - currentY;
  const distance = Math.sqrt(Math.pow(distanceX,2) + Math.pow(distanceY,2))
  steps = Math.abs(Math.floor(distance / stepSize));
  const directionX = distanceX > 0 ? 1 : -1;
  const directionY = distanceY > 0 ? 1 : -1;
  angle = Math.atan(distanceY/distanceX);
  offset = 1
  if (angle < 0){
    offset = -1
  }

  // Move the Roomba gradually by updating the position in small steps
    roomba.style.transformOrigin = 'center center';
    roomba.style.transform = `translate(-50%, -50%)rotate(${angle+directionX*Math.PI/2}rad)`;
    console.log("angle")
    console.log(angle)
    console.log(angle+Math.PI/2)
  const interval = setInterval(() => {

    currentX += stepSize * directionX * Math.cos(angle);
    roomba.style.left = `${currentX}px`;
    currentY += stepSize * directionY * Math.sin(angle)*offset;
    roomba.style.top = `${currentY}px`;
    steps--;
    
    for (const obs of obstacles)
    {
        // if (currentX < parseInt(obs.style.left || obs.offsetLeft)+obs.offsetWidth+roomba.offsetWidth/2 && 
        // currentX > parseInt(obs.style.left || obs.offsetLeft)-roomba.offsetWidth/2 &&
        // currentY < parseInt(obs.style.top || obs.offsetTop)+obs.offsetHeight+roomba.offsetHeight/2 && 
        // currentY > parseInt(obs.style.top || obs.offsetTop)-roomba.offsetHeight/2
        // )
        if (currentX < obs.getBoundingClientRect().left +obs.offsetWidth+roomba.offsetWidth/2 && 
        currentX > obs.getBoundingClientRect().left-roomba.offsetWidth/2 &&
        currentY < obs.getBoundingClientRect().top +obs.offsetHeight+roomba.offsetHeight/2 && 
        currentY > obs.getBoundingClientRect().top-roomba.offsetHeight/2
        )
        {
            difx = currentX - (obs.getBoundingClientRect().left+obs.offsetWidth/2)
            dify = currentY - (obs.getBoundingClientRect().top+obs.offsetHeight/2)
            newtargetx = currentX + difx
            newtargety = currentY + dify
            position = {x: newtargetx , y: newtargety };
            position = clamp(position)
            clearInterval(interval);
            callback(position);
        }
    }
    if (steps <= 0) {
        const position = getRandomPosition();
      clearInterval(interval);
      callback(position);
    }
  }, 10);
}

function onAnimationComplete(position) {
    setTimeout(() => {

      rotateRoomba(onAnimationComplete,position);
    }, 0); // Delay before calling moveRoomba again
  }

// Call the moveRoomba function initially to set the Roomba at a random position
const position = getRandomPosition();
console.log(obstacles)
onAnimationComplete(position);
