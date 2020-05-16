var validation = require('./Validation');

//Regex pattern for first name
let firstNamePattern = "^[A-Z]{1}[a-z]{2,}$"

let name="Priyanka"

//readline built in module
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin,
                                    output : process.stdout});
//take user first name
rl.question("Enter first name : ",function(name){
    var msg ="";

    if(validation.validateName(name, firstNamePattern))
        msg = "Valid Name"
    else
        msg= "Invalid Name"

    console.log(msg)
    process.exit();
});