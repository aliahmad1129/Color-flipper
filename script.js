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
const fColorLabel = document.querySelector('.f-c-label');

function updateColor() {
  bodyElement.style.background = `linear-gradient(135deg, ${randomColor()} 10%, ${randomColor()} 100%)`;
  btnElement.style.background = `linear-gradient(${randomDegree()}, ${randomColor()} 10%, ${randomColor()} 100%)`;
  textElement.style.color = randomColorDark();
  fColorLabel.textContent =  bodyElement.style.background;
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
const copyBtn = document.querySelector('.copy-btn');
if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    if (fColorLabel) {
      navigator.clipboard.writeText(fColorLabel.textContent);
      copyBtn.textContent = 'Copied!';
      setTimeout(() => copyBtn.textContent = 'Copy', 1000);
    }
  });
}





