// Code your solutions in this file
const names = ["Kelvin", "Philip", "Naomi", "Erick"];
const eventName = "swimmingGala";

function writeCards(names, eventName){
  const messages = [];
  for(let i = 0; i < names.length; i++){
    const congrats = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    messages.push(congrats);
  }
  return messages;
}
const finalMessage = writeCards(names, eventName);
console.log(finalMessage);



const number = 20;
function countDown(number){
  let i = number;
  while (i >= 0){
    console.log(i);
    i--;
  }
  return number;
}