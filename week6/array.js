let animal = ['cat', 'dog', 'horse'];
//              0      1       2
/*animal[2] = 'Kribesh'
animal.pop()//remove last element
animal.push("monke")//add last element
animal.shift();//remove first element
animal.unshift("sambrid");//add first element
let pet = animal.slice(1,2)

console.log(animal)
console.log(pet)
document.body.innerHTML= pet;
*/
animal.splice(1,0,'kribesh',);
document.body.innerHTML= animal;