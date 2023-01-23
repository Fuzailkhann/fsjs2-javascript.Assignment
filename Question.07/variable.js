// Q07 declare array containing multiple values and use lastIndexOf to determine position of first and last occurence of word " pw skills"
// 07. Declare an array containing the multiple values and use 
// lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".


const arr = ["facebook" , "twitter" , "pw skills" , "linkedIn"];
const lastOccurence = arr.lastIndexOf("pw skills");
console.log(lastOccurence)

const firstOcc = arr.indexOf("pw skills" ,0);
console.log(firstOcc)