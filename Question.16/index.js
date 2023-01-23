// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

let userInput = prompt("enter a current month");
userInput = userInput.toLowerCase();

switch(userInput){
    case "december":
    case "january":
    case "Fabuary":
    alert(`session is winter , i want to drink black tea `);
    break;

    case "september":
    case "octubar":
    case "November":
    alert(`session is autuman`);
    break;

    case "march":
    case "aprill":
    case "may":
    alert(`The session is spring`);
    break;

    case "jun":
    case "july":
    case "august":
    alert(`session is summer`);
    break;

    default:
    alert(`ohh, SORRY Bro, you entered wrong spelling of month`);
    break;

}