import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;


// Como mostrar los elmentos de una tabla con el loop FOR
// let array1 = [1,2,3,4,5,6,7,8,9,10];
// for(let i=0;i<array1.length;i++){
//  console.log(array1[i]);
// }

//1.1. Create two variables (one variable should be a string and the other a number), 
//one that can change and one that cannot update its value and log them into the
// console.

`
let string ="Manolo";
const number = 1;

et age = 21;
const name = "Your Name";

console.log(string);
console.log(number);
}
`

// 1.1. Update the value of the variable that allowes its value to change
// and log it into the console.


`
let string = "Pepe"
console.log(string);
`

// 2.1. Create an array of names.

`
let array2 =["paco","maria","pepe","manolo","jose"];
  
for(let i=0;i<array2.length;i++){
  console.log(array2[i]);
}
`

// 2.2. Log the array into the console.

`
console.log(array2);
`

// 2.3. Log one of the items of the array into the console.

`
console.log(array2[0]);
`

// 2.4. For each item of the array log the message "Hi, (item of the array)";

`
array2.forEach(nombreQuequieras => console.log(`Hi, ${nombreQuequieras}`));

`



// 2.5 Use a for loop on the array to output into the console the same message
// on the previous instructions (2.4.).

`
for (let i = 0; i<array2.length;i++) {
  
  console.log(`(for) Hi ${array2[i]}`);

}
`

// 2.6. Use a while loop to output into the console the same message
// on the instruction 2.4.

`
while( veces < array2.length){
  console.log(`Hola ${array2[veces]}`)
  //también vale así: console.log("Hola", array2[i]);
  veces++;
}

`

// 3.1. Create a conditional statement where you use one of the variables in 
// step 1.1.
// If the type of the variable is a string, it should return the message 
// 'I am a string',
// and if it is a number it should return 'I am a number'.


`
if (typeof age === "number" ){
  console.log("Hello I am a nummber")
}else{
  console.log("Hello I am a String")  
} 

if (typeof name === "number" ){
  console.log("Hello I am a nummber")
}else{
  console.log("Hello I am a String")  
}


const num = 4;
const str = '4';

num === str 
? console.log('true') 
: console.log('false');

`

// 3.2. Use a ternary instead of a conditional to do the previous exercise (3.1.).

`
typeof age === "numer" 
    ? console.log("Hola soy un numero") 
    : console.log("Hola soy un cadena");

typeof name === "numer" 
    ? console.log("Hola soy un numero") 
    : console.log("Hola soy un cadena");

También es posible realizar evaluaciones ternarias múltiples 
(Nota: El operador condicional es asociativo, termina de asociar con ; (punto y coma)):

var firstCheck = false,
    secondCheck = false,
    
access = firstCheck 
    ? "Acceso Denegado" 
    : secondCheck 
    ? "Acceso Denegado" 
    : "Acceso Permitido";

console.log( access ); // muestra "Acceso Permitido"

`

// 3.3. Create a variable named fruit which value should be a fruit, and then create switch where
// the argument is the variable we have just created and each case should be a different fruit and
// log into the console the message 'I like this fruit' or 'I don't like this fruit(depending on your
// likes). The default should be 'I don't know if I like this fruit'.

`

let fruit = "Mango";

switch (fruit){
  case 'Pera':
    console.log('Aqui tiene su Pera');
    break;
  case 'Manzana':
  case 'Kiwis':  
    console.log('Aqui tiene un Kiwi y una Manzana, hoy estamos de oferta con estos productos');
    break;
  case 'Platano':
    console.log('Aquí tiene su Plano');
    break;
  default:
      console.log("Lo siento NO tenemos ESA fruta");

`

