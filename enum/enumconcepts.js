"use strict";
// enum = enumeration
// An enum is a way of giving more friendly names to sets of numeric values. 
// Enums allow us to define a set of named constants, which can make our code more readable and maintainable.
// number based enums, string based enums, heterogenous enums 
// number based enum
var Browser;
(function (Browser) {
    Browser[Browser["Chrome"] = 0] = "Chrome";
    Browser[Browser["Firefox"] = 1] = "Firefox";
    Browser[Browser["Safari"] = 2] = "Safari";
    Browser[Browser["Edge"] = GetVersion("Edge")] = "Edge";
})(Browser || (Browser = {}));
function GetVersion(browser) {
    if (browser === "Edge") {
        return 11;
    }
    return 50;
}
console.log(Browser.Edge);
console.log(Browser);
// string based enum
var Environment;
(function (Environment) {
    Environment["Development"] = "development";
    Environment["Production"] = "production";
    Environment["Testing"] = "testing";
    Environment["Staging"] = "staging";
})(Environment || (Environment = {}));
console.log(Environment.Production);
// heterogenous enum
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status["InternalServerError"] = "500";
})(Status || (Status = {}));
console.log(Status.Success);
console.log(Status.InternalServerError);
