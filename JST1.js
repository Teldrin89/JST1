// comments in JS start with "//"
/*
mulitiline comments 
*/

// function to calculate Pi
/*
    to calculate Pi the formula goes like this: Pi = 4/1 - 4/3 + 4/5 - 4/7...
    to make this type of calculation the functio will use a "for" loop and 
    input variable in form of number of iterations
*/
function calcPI(iter){
    // define initial pi and divisor values
    let pi = 0, divisor = 1;
    // note: java scrip has a precision of up to 16 digits only
    
    // set up iter as user input
    var iter = prompt("Please set number of iterations for Pi calculation: ", 
    "10000");

    /*  set a for loop with i as iteration number, starting from 0, going up to
        number of iterations set as input, incrementing by 1
    */
    for(i = 0; i <= iter; i++){
        // use the general formula for Pi and update the same variable over
        pi = pi + (4/divisor) - (4/(divisor+2));
        // increment the divisor value accordingly
        divisor += 4;
    }
    // put output (rounded to 10dig) of the function in output area of html doc
    document.getElementById("output1").value = pi.toFixed(10);
}

// initialize an array that will store the values
let fibList = [];
// function to generate and write Fibonacci List
function getFibList(howMany){
    // Fibonacci List is a list that has this kind of pattern: 1, 1, 2, 3, 5...
    // so the one number we are at and one before create the next one

    // the function takes single input as to how many of numbers shall be in this list
    // run for loop till input value to run a separate function that will get the
    // specific number in the list
    for(i = 0; i < howMany; i++){
        // put itmes in previously set array
        fibList[i] = fib(i);
    }
}

// fib function that generates specific number of Fibonacci List
function fib(whichNum){
    // setup few variables for the calculation
    let num1 = 1, num2 = 0, temp, i = 0;
    
    // calculate the specific number with while loop
    while(i < whichNum){
        temp = num1;
        num1 = num1 + num2;
        num2 = temp;
        i++;
    }
}