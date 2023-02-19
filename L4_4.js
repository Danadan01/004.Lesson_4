const answr1 = prompt("What's your first number?");
const answr2 = prompt("What's your second number?");
const answr3 = prompt("What's your third number?");

const num1 = Number.parseFloat(answr1);
const num2 = Number.parseFloat(answr2);
const num3 = Number.parseFloat(answr3);

const average = (num1 + num2 + num3) / 3;
alert(`Arithmetic mean of your numbers equals ${average}`)