
const emoji = document.getElementById('emoji');


function moveEmoji(event) {

  const mouseX = event.clientX;
  const mouseY = event.clientY;

 
  emoji.style.left = `${mouseX - emoji.width / 2}px`;
  emoji.style.top = `${mouseY - emoji.height / 2}px`;
}


document.addEventListener('mousemove', moveEmoji);
