const account_id = 123345
let accountEmail = "arpitkumark2@gmail.com"
var accountPassword ="123445"
accountCity = "Jaipur"
let accountState;


// accountCity = "Jaipur" may possible without declaration of variable but it is not good 

// account_id = 2 // not alllowed
// Prefer not to use var, 
// because of issue in block scope and functional scope

accountEmail = "hc@hc.com"
accountPassword = "23412345"
accountCity = "Ramgarh"
console.log(account_id);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// OR 

console.table([account_id, accountEmail, accountPassword, accountCity, accountState]);