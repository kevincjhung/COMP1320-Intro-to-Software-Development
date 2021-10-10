const parse = require('csv-parse');
const fs = require('fs');

let csvData = []; // array used to store data from csv file

fs.createReadStream(__dirname + '/menu1.csv',) //current directory + file name
    .pipe(
        parse({
            delimiter: ',' //values separated by comma
        })
    )
    .on('data', function (dataRow){
        csvData.push(dataRow);
    })
    .on('end', function (){   
        csvData.sort(); // sort the menu
        
        //retrieve the 1st column, which are the categories of the menu items, save it under a variable categories
        let categories = csvData.map(function(value,index) {
            return value[0]
        });
        // need to remoove duplicates from variable categories
});

/**
* The code at this point will read the csv file from menu1.csv and store it in the variable csvData[]
*/
