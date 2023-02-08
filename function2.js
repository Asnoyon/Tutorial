// passing function as a arguments

function printVariable(variable){
    console.log(variable);
}

function firstName(name,callback){
    callback("Hello " + name);
}

firstName("Noyon", printVariable);