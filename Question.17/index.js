// 17. Write a program which tells the number of days in a month.
// Date object constructor take year , month and date as argument and when we use getDate() method, it return specified day of that month 
// and in this case 0 as day is not valid so it will return last day of previous month.
// Note , in javascript month start from 0 
function getDaysInMonths(year , month){
    const days = new Date(year , month , 0 ).getDate();
    return days;
}

// find total day in march
console.log(getDaysInMonths(2023 , 3));

// find days in september
console.log(getDaysInMonths(2022 , 9));
