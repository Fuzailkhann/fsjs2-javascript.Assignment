// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but
//  if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
const yourAge = parseInt(prompt("Enter your Age:"));
yourAge >= 18 ? alert("you can drive now") : alert(`you should have to wait for  ${18-yourAge} years more to satrt draving`);