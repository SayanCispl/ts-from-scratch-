"use strict";
let userid;
userid = 12345;
userid = "Sayan Koley";
function displayUserID(customerID) {
    if (typeof (customerID) === 'number') {
        return customerID + "Sayan";
    }
    else if (typeof (customerID) === 'string') {
        return customerID + "_Koles";
    }
}
console.log(displayUserID(12345));
console.log(displayUserID("Sayan"));
