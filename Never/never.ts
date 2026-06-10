function throwError(msg: string){
    throw new Error(msg)
}

//throwError("Some Error Message")

function displayMsg(): never{
    while(true){
       // console.log("Welcome")   infinite loop
    }
}