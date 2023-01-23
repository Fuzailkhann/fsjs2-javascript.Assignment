// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm
// declare a function for adding zero before single digit word 
function addZeroBeforeSingleDigit(para){
    if(para<10){
        para= "0" + para;
        return para;
    }
    return para;
}

const date= new Date();


//year
const year = date.getFullYear();

// month
let month = date.getMonth() + 1;
month = addZeroBeforeSingleDigit(month);

// today 
let dateToday = date.getDate();
dateToday = addZeroBeforeSingleDigit(dateToday);

// Hours
let hours = date.getHours();
hours = addZeroBeforeSingleDigit(hours);

//minutes
let min = date.getMinutes();
min = addZeroBeforeSingleDigit(min);

// - yyyy-mm-dd hh-mm
const dateFormat1 = `${year}-${month}-${dateToday}  ${hours}:${min}`;

// dd-mm-yyyy hh:mm
const dateFormat2= `${dateToday}-${month}-${year}  ${hours}:${min}`;

// mm-dd-yyyy hh:mm
const dateFormat3 = `${month}-${dateToday}-${year}  ${hours}:${min}`;

console.log(`Date format 1 ${dateFormat1}
date format 2 ${dateFormat2}
date format 3 ${dateFormat3}`);



