const listOfTemperatures = ['13c', '23c', '12c', '57f', '69f', '30c'];

// takes temperature in celsius, converts to fahrenheit and prints the result
function cToF(temp) { 
  console.log(temp + ' degrees celsius is ' + (Math.round(temp * 9 / 5 + 32)) + ' degrees fahrenheit');
}

// takes temperature in fahrenheit, converts to celsius and prints the result
function fToC(temp) {
  console.log(temp + ' degrees fahrenheit is ' + (Math.round((temp - 32) * 5 / 9)) + ' degrees celsius');
}

// iterate through elements in listOfTemperatures, pass through functions cToF() and fToC()
for (let element of listOfTemperatures) {
    let tUnit = element[(element.length-1)];
    
    if (tUnit === 'c') {
      let temp = element.replace('c', '');
        cToF( Number(temp) );
    } else if (tUnit === 'f') {
      let temp = element.replace('f', ''); 
      fToC( Number(temp) );
    }
}

/*
references for methods that weren't covered in lecture
 https://www.w3schools.com/jsref/jsref_number.asp
 https://www.w3schools.com/jsref/jsref_replace.asp
 */
