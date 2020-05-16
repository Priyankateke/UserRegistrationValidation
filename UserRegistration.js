 const prompt = require('prompt');

 /**
  * Properties
  */
 const properties = [
    {
        name: 'firstName',
        validator: /^[A-Z]{1}[a-z]{2,}$/,
        warning: 'Firstname must be only letters, First letter should be capital'
    },
    {
        name: 'lastName',
        validator: /^[A-Z]{1}[a-z]{2,}$/,
        warning: 'LastName must be only letters, First letter should be capital'
    },
    {
        name: 'emailId',
        validator: /^[0-9a-zA-Z]+([.+_-]?[0-9a-zA-Z]+)*([@][0-9a-zA-Z]+){1}([.][a-zA-Z]{2,3}){1,2}$/,
        warning: 'Email id must be in valid format'
    },
    {
        name: 'mobileNo',
        validator: /^[0-9]{1,3}[' '][0-9]{10}$/,
        warning: 'Mobile Number must be only numbers, first 2 digit then space and 10 digits'
    }
];

//Start prompt
prompt.start();

/**
 * If invalid input then display error 
 * If valid input then receive input
 */
prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  First Name: ' + result.firstName);
    console.log('  Last Name: ' + result.lastName);
    console.log('  Email Id: ' + result.emailId);
    console.log('  Mobile No: ' + result.mobileNo);
});

function onErr(err) {
    console.log(err);
    return 1;
}

