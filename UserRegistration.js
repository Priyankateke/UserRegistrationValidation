 const prompt = require('prompt');

 /**
  * Properties
  */
 const properties = [
     /**
      * User FirstName
      */
    {
        name: 'firstName',
        validator: /^[A-Z]{1}[a-z]{2,}$/,
        warning: 'Firstname must be only letters, First letter should be capital'
    },
    {
        name: 'lastName',
        validator: /^[A-Z]{1}[a-z]{2,}$/,
        warning: 'LastName must be only letters, First letter should be capital'
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
    console.log('  Username: ' + result.firstName);
    console.log('  Password: ' + result.lastName);
});

function onErr(err) {
    console.log(err);
    return 1;
}

