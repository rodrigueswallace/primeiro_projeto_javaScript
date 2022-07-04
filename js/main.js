var numeroAtual = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1;
  numeroAtual.innerHTML = currentNumber
}

function decrement() {
  currentNumber = currentNumber - 1;
  numeroAtual.innerHTML = currentNumber


  if( currentNumber < 0) {
    console.log('negativo')
  } 
}

