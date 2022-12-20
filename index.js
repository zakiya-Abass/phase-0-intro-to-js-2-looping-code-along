// Code your solutions in this file

function writeCards(names, eventName) {
  let newArray = [];
  for (let i = 0; i < names.length; i++)
    newArray.push(
      `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
    );
  return newArray;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "suprise");
//while loop

function countDown(num) {
  while (num >= 0) {
    console.log(num--);
  }
}
