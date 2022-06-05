// this is today's forecast, which will stay constant, so const
const kelvin = 293;

// this is converting kelvin to celsius
const celsius = kelvin - 273;

// this is converting celsius to fahrenheit and rounding down
var fahrenheit = Math.floor(celsius * (9/5) + 32);

// this is logging the correct formula - remember to use backticks
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// this is for extra practice with the newton scale
// var newton = Math.floor(celsius * (33/100));

// console.log(`The temperature is ${newton} degrees Newton.`);
