const container = document.querySelector('#container');
const eventKey = document.querySelector('#event-key');
const eventCode = document.querySelector('#event-code');
window.addEventListener('keydown', (e) => {
  console.log(e);
  container.classList.add('active');
  eventKey.textContent = e.key === ' ' ? 'Space' : e.key;
  eventCode.textContent = e.code;
});

eventKey.addEventListener('click', copyToClipboard);
eventCode.addEventListener('click', copyToClipboard);

function copyToClipboard() {
  let btnText = this.textContent;
  if (this.id === 'event-key' && this.textContent === 'Space') btnText = ' ';
  const tempInput = document.createElement('input');
  tempInput.value = btnText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
}
