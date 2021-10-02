// link main.js and lab2.js
var isValidDate = require("./lab2.js").isValidDate;
var getDayOfTheWeek = require("./lab2.js").getDayOfTheWeek;

let readlineSync = require('readline-sync');


/*  keep asking for year input until user gives a numerical number
    that is valid. */
let userYear;
let userMonth;
let userDay;

do {
    userYear = readlineSync.question("Enter a valid year in format YYYY: ");
} while(isNaN(userYear));

// reject answer if userMonth is not a number, smaller than 1 or bigger than 12
do {
    userMonth = readlineSync.question("Enter a valid month in format MM: ");
} while(isNaN(userMonth) || parseInt(userMonth) <= 0 || 12 < parseInt(userMonth));

/*  reject answer if user inputted day is not a number, smaller than 1, or the month doesn't have that many days.
    accounts for leap years */
do {
    userDay = readlineSync.question("Enter a valid day in format DD: ");
} while(isNaN(userDay) || parseInt(userDay) <= 0 || isValidDate(userYear, userMonth, userDay) == false);

getDayOfTheWeek(userYear, userMonth, userDay);


function makeCalendar() { 
    /*  print out the date and the day of the week using loops for each day in 2021 start with jan 1st on friday */ 
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let nameOfDay = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const monthsInAYear = 12;
    let dayOfWeek = 5; // tracks day of week, 4 because jan 1st 2021 is a Thursday
	
    for(let month = 1; month <= monthsInAYear; month++){	
        for(let day = 1; day <= daysInMonth[month-1]; day++){
            
	    console.log(month + "-" + day + "-2021 " + " is a " + nameOfDay[dayOfWeek]);
             
	    // increment dayOfWeek variable 
	    if(dayOfWeek == 6) { //wraps around nameOfDay[] if dayOfWeek at end of nameOfDay[] 
	        dayOfWeek = 0; 
	    } else {
	        dayOfWeek++;
	    }
	}
    }
}

makeCalendar();
