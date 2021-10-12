const parse = require('csv-parse');
const fs = require('fs');
const { type } = require('os');

let csvData = []; // array used to store data

fs.createReadStream(__dirname + '/menu1.csv',) //current directory + file name
    .pipe(
        parse({
            delimiter: ',' //values separated by comma
        })
    ) 
    .on('data', function (dataRow){ // take data from each row of the CSV file
        csvData.push(dataRow); // take each row of data from the CSV file, push it onto the csvData[] 
    })

    .on('end', function (){   // when there is no more data, do:
        //retrieve the 1st column, which are the categories of the menu items, save it under variable "categories" using map function
        let categories = csvData.map(function(value,index) {
            return value[0]
        });
        
        // categories no duplicates. same as categories[], but with the duplicates removed
        let catNoDup = categories.filter(function(elem, index, self) {
            return index === self.indexOf(elem);
        })      
       
        const numberOfRows = csvData.length;

    let menuString = []; // empty array used to store contents of menu

    for(let catIndex = 0; catIndex < catNoDup.length; catIndex++){
        let catName = catNoDup[catIndex];
        menuString.push(`* ${catName} *`); // push category name to menuString
        menuString.push("\n");

        for(let menuIndex = 0; menuIndex < numberOfRows; menuIndex++ ){
            if(catNoDup[catIndex] == csvData[menuIndex][0]){
                let rowCSV = csvData[menuIndex];
                rowCSV.shift(); // remove the first item in the row

                let price  = rowCSV.pop();
                
                // take price, remove $, multiply 1.8, show 2 decimal point
                price = price.substring(1); // take off dollar sign
                price = Number(price * 1.8); // convert variable 'price' to number, multiply by 1.8
                price = price.toFixed(2); // make it show 2 decial places
                price = "$" + price; // add dollar sign
               
                rowCSV.unshift(price); // insert price to first column of menu

                // take edited row of menu from the input csv file
                // push it onto the string menuString
                menuString.push(rowCSV); 
                menuString.push("\n"); // space for formatting
            }
        }
        menuString.push("\n"); // space for formatting
    }

    fs.writeFile('formattedMenu.txt', menuString.join(' '), function(err){
        if (err) {
            console.log(err)
        } 
    })
});
