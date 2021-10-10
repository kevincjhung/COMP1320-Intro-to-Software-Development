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
                rowCSV.unshift(price);

                menuString.push(rowCSV);
                menuString.push("\n");
            }
        }
        menuString.push("\n");
    }
    console.log(menuString);


    fs.writeFile('formattedMenu.txt', menuString.join(' '), function(err){
        if (err) {
            console.log(err)
        } 
    })
});
