// With ANY--

function printID(id:any){
    console.log(id.toUpperCase());
}
// printID(512.123);

//   This code is too much risky because any allows any type of data as input but when methods are not compatible it can crash asap in production.


// With UNION-- {Type-Narrowing}

function printStringedID(id:string | number){
    if(typeof id === "string"){
        console.log(id.toUpperCase());
    } else {
        console.log(id.toFixed(2));
    }
}
printStringedID(512.123);

// This code is safer because here TS ensures that there is only one data type and that is string which can be taken as input, Any Other data through error while compilation.