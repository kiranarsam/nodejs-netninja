// normal function statement
function sayHai(){
    console.log("Hi");
}

sayHai();

//function expression
var sayBye = function() {
    console.log("Bye");
};

sayBye();

function callFunction(fun) {
    fun(); // invoke the function or call the function
}

callFunction(sayBye);
