function randomColor () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function randomDegree () {
  let deg = Math.floor(Math.random() * 361);
  return `${deg}deg`;
}

function randomColorDark () {
  let r = Math.floor(Math.random() * 60);
  let g = Math.floor(Math.random() * 60);
  let b = Math.floor(Math.random() * 60);
  return `rgb(${r}, ${g}, ${b})`;
}

const bodyElement = document.body;
const btnElement = document.getElementById('btn');
const textElement = document.querySelector('.text');
const fColorElement = document.querySelector('.f-c');
const sColorElement = document.querySelector('.s-c');
const fColorLabel = document.querySelector('.f-c-label');
const sColorLabel = document.querySelector('.s-c-label');

function updateColor() {

  let c1 = randomColor();
  let c2 = randomColor();
  let d = randomDegree();
  bodyElement.style.background = `linear-gradient(${d}, ${c1} 10%, ${c2} 100%)`;
  btnElement.style.background = `linear-gradient(${randomDegree()}, ${randomColor()} 10%, ${randomColor()} 100%)`;
  textElement.style.color = randomColorDark();
  fColorLabel.textContent =  c1;
  sColorLabel.textContent = c2;
}

updateColor();

btnElement.addEventListener('click', ()=>{
  updateColor();
});

btnElement.addEventListener ('keydown', (e)=> {
  if (e.key ==='Enter' || e.keyCode === 13) {
    updateColor();
  }
});

// Copy button logic
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const label = btn.previousElementSibling;
    if (label) {
      navigator.clipboard.writeText(label.textContent);
      btn.textContent = 'Copied!';
      setTimeout(() => btn.textContent = 'Copy', 1000);
    }
  });
});




