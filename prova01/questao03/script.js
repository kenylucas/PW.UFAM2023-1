const button = document.querySelector('.button');
const resultText = document.querySelector('p');

button.addEventListener('click', () => {
  // open alert o get first number
  const firstNumber = prompt('Digite um número:');
  // open alert o get second number
  const secondNumber = prompt('Digite outro número:');
  if(firstNumber === null || secondNumber === null) return;
  // convert string to number
  const firstNumberConverted = Number(firstNumber);
  const secondNumberConverted = Number(secondNumber);
  // sum numbers
  const sum = firstNumberConverted + secondNumberConverted;
  // set retult in p
  const resultSpan = document.createElement('span');
  resultSpan.textContent = `${sum}!`;
  resultText.textContent = `A soma entre ${firstNumber} e ${secondNumber} é igual a `;
  resultText.appendChild(resultSpan);
});