let userid : (number | string );
userid = 12345;
userid = "Sayan Koley";


function displayUserID(customerID: (string | number)){
    if(typeof(customerID) === 'number'){
        return customerID + "Sayan"
    }
    else if(typeof(customerID) === 'string'){
        return customerID+ "_Koles"
    }
}

console.log(displayUserID(12345));
console.log(displayUserID("Sayan"));

// console.log(displayUserID(true)); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
