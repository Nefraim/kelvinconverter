//Change Kelvin
const kelvin = 350;

//Convert Kelvin to Celcius
let celcius = kelvin - 273;

//Kelvin to Fahrenheit
let fahrenheit = celcius * (9/5) + 32;

//Round Down the Number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${celcius} degrees Celcius.`);
