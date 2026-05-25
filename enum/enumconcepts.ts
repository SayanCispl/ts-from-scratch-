// enum = enumeration
// An enum is a way of giving more friendly names to sets of numeric values. 
// Enums allow us to define a set of named constants, which can make our code more readable and maintainable.
// number based enums, string based enums, heterogenous enums 

// number based enum

enum Browser{
    Chrome, // 0
    Firefox, // 1
    Safari, // 2
    Edge = GetVersion("Edge")
}

function GetVersion(browser: string): number{
    if(browser === "Edge"){
        return 11;
    }
    return 50;
}

console.log(Browser.Edge); 
console.log(Browser);

// string based enum

enum Environment{
    Development = "development",
    Production = "production",
    Testing = "testing",
    Staging = "staging"
}
console.log(Environment.Production);

// heterogenous enum

enum Status{
    Success = 200,
    NotFound = 404,
    InternalServerError = "500"
}
console.log(Status.Success);
console.log(Status.InternalServerError);