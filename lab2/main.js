var getDayOfTheWeek = require("./lab-two").getDayOfTheWeek;
var makeCalendar = require("./lab-two").makeCalendar;
var readline = require("readline-sync")

var year = readline.question("Enter a Year: ");
var month = readline.question("Enter a Month: ");
var date = readline.question("Enter a date: ");

function getDayOfTheWeekForUserDate() {
    return(getDayOfTheWeek(year, month, date));
}
makeCalendar();
console.log(`${year + " " + month + " " + date} is a ${getDayOfTheWeekForUserDate()}.`)
