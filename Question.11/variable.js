// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

const date = new Date();
const year =date.getFullYear();
console.log(`The current year ${year}`);

const month = date.getMonth();
console.log(`The month number as per JS is ${month} and as per our calender is ${month + 1}`); 

const todayDate= date.getDate();
console.log(`The current date is ${todayDate}`);

const day= date.getDay();
console.log(`currnt day is ${day}`);

const hrs = date.getHours();
console.log(`curent hrs is ${hrs}`);

const mins= date.getMinutes();
console.log(`current minuts are ${mins}`);

const mse = date.getTime();
const secondElapsed = mse / 1000;
console.log(`no of secound elapsed from 1 jan 1970 ${secondElapsed}`);