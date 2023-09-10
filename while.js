let tries = 0;
while (true) {
 const age = +prompt('What is your age?');
 if (age) {
  alert("Welcome");
  break;
 } else {
   tries++;
   if (tries === 3) {
     alert("You have exhausted all attempts.");
     console.log(tries);
     break;
   } 
   alert('Data is not correct');
 }
}
alert('End');
