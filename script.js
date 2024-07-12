// Todo: Make M+ M- and MC functional

let string = "";
let memory = 0;

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
      string = "";
    } else if (e.target.innerHTML == 'AC') {
      string = "";
      memory = 0;
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'C') {
      string = "";
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'M+') {
      memory += parseFloat(string);
      string = "";
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'M-') {
      memory -= parseFloat(string);
      string = "";
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'MC') {
      memory = 0;
      string = "";
      document.querySelector('input').value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})