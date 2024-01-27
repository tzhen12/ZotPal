
let level = 1;
const button = document.getElementById('level-up');
const display = document.getElementById('level'); 

button.addEventListener('click', levelUp);

function levelUp() {
    level++;
    display.innerHTML = level;
    }

