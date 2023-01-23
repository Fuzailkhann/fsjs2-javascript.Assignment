// Q: check the given number is prime or not?
function checkPrimeNumber(num) {
    let isPrime = true;
    for(let i = 2 ; i< num ;i++){
        if (num % i == 0){
            isPrime= false;
            break;
        }
    }
    if( isPrime == true){
        console.log(`${num} is a prime number`);
    }else{
        console.log(`${num} is not a prime number`);
    }
    
}







let userInput = checkPrimeNumber(5) ;
console.log(userInput);

userInput = 6;
checkPrimeNumber(userInput);
