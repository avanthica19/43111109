const box = document.querySelector('.box');

// Get slider + value display elements
const marginControl = document.getElementById('marginControl');
const borderControl = document.getElementById('borderControl');
const paddingControl = document.getElementById('paddingControl');

const marginValue = document.getElementById('marginValue');
const borderValue = document.getElementById('borderValue');
const paddingValue = document.getElementById('paddingValue');

// Update box styles when sliders move
marginControl.addEventListener('input', () => {
  box.style.margin = marginControl.value + "px auto";
  marginValue.textContent = marginControl.value;
});

borderControl.addEventListener('input', () => {
  box.style.borderWidth = borderControl.value + "px";
  borderValue.textContent = borderControl.value;
});

paddingControl.addEventListener('input', () => {
  box.style.padding = paddingControl.value + "px";
  paddingValue.textContent = paddingControl.value;
});