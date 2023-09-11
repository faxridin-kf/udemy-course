let age = 12;
 age >= 18 ? console.log('access grandet') : console.log('access denied')
let array = [1,2,3,4,5,6,7,8,9,0]
for (let i = 0; i < array.length; i++) {
 array[i] *=  2
 console.log('====================================');
 console.log(array[i]);
 console.log('====================================');
 
}

function getDataFromUser () {
 let name = prompt('your name?')
 let age = +prompt('your age?')
 if (age){
  alert(`congrats ${name}!`)
 } else{
  alert('you are damn')
 }
 return name, age
}
getDataFromUser()