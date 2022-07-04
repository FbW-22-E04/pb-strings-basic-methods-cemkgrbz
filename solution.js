//1

const parkWalkStr = 'I can walk in the park all day!';
console.log(parkWalkStr.substring(18,22));

//2

const helloStr = 'Hello World';
const helloStrUpperCase = helloStr.toUpperCase();
console.log(helloStrUpperCase)

//3

const earthlingsStr = 'Hello Earthling';
const earthlingsStrLowerCase = earthlingsStr.toLowerCase();
console.log(earthlingsStrLowerCase);

//4

const jsStr = 'JavaScripct'
console.log(jsStr.substring(3,6));

//5

const niceShoesStr = 'nice shoes'
console.log(niceShoesStr.includes('l'))
console.log(niceShoesStr.includes('n'))

//6

const oldStr = 'Tarostraße';
const newStr = oldStr.charAt(0) + oldStr + oldStr.charAt(0);
console.log(newStr)

//7

const scritcherStr = 'Revolution';
const lastThreeChars = scritcherStr.slice(-3);
console.log(lastThreeChars+scritcherStr+lastThreeChars);

//8

const boogieNightsStr = 'Sun'
const boogieNightsStrFirst = boogieNightsStr[0];
const boogieNightsStrLast = boogieNightsStr[2];
console.log(boogieNightsStrLast+boogieNightsStr.slice(1,2)+boogieNightsStrFirst)

//9

const firstName = 'Maria';
const city = 'Berlin';
const job = 'teacher';
console.log('My name is', firstName+'.','I live in' , city, 'and I am a', job+'.');

//10

const foxStr = 'the quick brown fox';
const firstLetter = foxStr[0].toUpperCase();
const restLetters = foxStr.substring(1);
console.log(firstLetter+restLetters);