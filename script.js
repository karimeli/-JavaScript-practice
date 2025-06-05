
const leftEye = document.getElementById('left-eye');
const rightEye = document.getElementById('right-eye');
const emojiContainer = document.getElementById('emoji-container');


function moveEyes(event) {

  const emojiContainerRect = emojiContainer.getBoundingClientRect();
  
  
  const mouseX = event.clientX - emojiContainerRect.left;
  const mouseY = event.clientY - emojiContainerRect.top;


  const eyeCenterX = emojiContainerRect.width / 2;
  const eyeCenterY = emojiContainerRect.height / 2;

  
  const angleLeft = Math.atan2(mouseY - eyeCenterY, mouseX - (eyeCenterX - 25));
  const angleRight = Math.atan2(mouseY - eyeCenterY, mouseX - (eyeCenterX + 25));

  // Establecer la rotación para cada ojo para que sigan el puntero
  leftEye.style.transform = `rotate(${angleLeft}rad)`;
  rightEye.style.transform = `rotate(${angleRight}rad)`;
}

document.addEventListener('mousemove', moveEyes);
