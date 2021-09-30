//export to main.js
module.exports = { isValidDate, getDayOfTheWeek, };

function isLeapYear(year){
    if((year % 4 == 0 || year % 400 == 0) && year % 100 != 0){
		return true;
	} else {
		return false;
	}
}


function getDayOfTheWeek(year, month, day){
    //year intentionally NOT parsed to int at this time
    month = parseInt(month);
    day = parseInt(day);

    // reference computed number to day of the week
    let daysOfTheWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let monthCode = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
    
    let yearLast2 = parseInt(year.slice(-2)); // step 1
    let howMany12s = Math.trunc(yearLast2/12); // step 1
    let rem12 = yearLast2 - (howMany12s * 12); // step 2
    let howMany4s = Math.trunc(rem12/4); // step 3
    let addMonthCode = monthCode[month-1]; // step 3

    /* 
    Step 4 & 5 
    add all numbers, mod by 7. use number to figure out day of the week
    by indexing the daysOfTheWeek[]
    */
    let sumAll = (howMany12s + rem12 + howMany4s + day + addMonthCode);

    year = parseInt(year);

    // step 6: special offsets for leap years
    if(isLeapYear(year)){
        let yearFirst2 = year.substr(0, 2); // extract first 2 digits of year
        yearFirst2 = parseInt(yearFirst2); // parse into integer
        
        // Jan & Feb in leap year, subtract 1 from step 5
        if(month == 1 && month == 2){
            sumAll--;
        }

        // changes to step 5 based on century
        if(yearFirst2 == 16 || yearFirst2 == 20){
            sumAll = sumAll + 6;
        } else if(yearFirst2 == 17 || yearFirst2 == 21){
            sumAll = sumAll + 4;
        } else if(yearFirst2 == 18){
            sumAll = sumAll + 2;
        } 
    }
  
    // step 6
    // Numbers have been summed. mod 7, then print out the answer
    console.log(daysOfTheWeek[sumAll % 7]);
}


// check whether the entered day exist in the entered month
function isValidDate(year, month, day){
    year = parseInt(year)
    month = parseInt(month);
    day = parseInt(day);
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (!isLeapYear || ((isLeapYear == true) && (month != 2))){  // not leap year, or leap year but not february
        return day < daysInMonth[month-1];
    } 
    else { // leap year and month is feb, check if date entered is > 29
        return day < 29;
    }
}
