const parse = require('csv-parse');
const fs = require('fs');

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
});
