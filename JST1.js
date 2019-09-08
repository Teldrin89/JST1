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
function calcPi(iter){
    // define initial pi and divisor values
    let pi = 0, divisor = 1;
    // note: java scrip has a precision of up to 16 digits only
    
    /*  set a for loop with i as iteration number, starting from 0, going up to
        number of iterations set as input, incrementing by 1
    */
    for(i = 0; i <= iter; i++){
        // use the general formula for Pi and update the same variable over
        pi = pi + (4/divisor) - (4/(divisor+2));
        // increment the divisor value accordingly
        divisor += 4;
    }

}