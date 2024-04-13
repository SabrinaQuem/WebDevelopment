let isLampOn = false;

const lamp = document.getElementById('lamp');
const toggleButton = document.getElementById('toggleButton');
const body = document.body;

toggleButton.addEventListener('click', function() {
    if (isLampOn) {
        lamp.src = 'https://i.postimg.cc/KjK1wL3c/bulb-off.png';
        toggleButton.textContent = 'Acender';
        body.style.backgroundColor = '#000000';
    } else {
        lamp.src = 'https://i.postimg.cc/6QyTynzr/bulb-on.png';
        toggleButton.textContent = 'Apagar';
        body.style.backgroundColor = '#ffff99';
    }
    
    isLampOn = !isLampOn;
});