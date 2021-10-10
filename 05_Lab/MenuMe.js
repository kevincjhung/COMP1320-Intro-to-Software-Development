const parse = require('csv-parse');
const fs = require('fs');

let csvData = []; // array used to store data

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
        //retrieve the 1st column, which are the categories of the menu items, save it under a variable categories
        let categories = csvData.map(function(value,index) {
            return value[0]
        });
        for(let i = 0; i < 5; i++){
            console.log(typeof(csvData[i][0]));
        }
        
        // catNoDup = categories no duplicates
        let catNoDup = categories.filter(function(elem, index, self) {
            return index === self.indexOf(elem);
        })        
});
