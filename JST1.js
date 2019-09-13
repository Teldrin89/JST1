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
    // shift the list to ommit the 1st entry - "0"
    fibList.shift();
    // in case of removal of last entry use "pop", in case of specific - "splice"
    // output the results to the output box, separating them by comma and space
    document.getElementById("output1").value = fibList.join(", ")
}

// fib function that generates specific number of Fibonacci List
function fib(whichNum){
    // setup few variables for the calculation
    let num1 = 1, num2 = 0, temp, i = 0;
    
    // calculate the specific number with while loop
    while(i < whichNum){
        // start up the value with 1, store it in temporary
        temp = num1;
        // new num1 is the incremented value
        num1 = num1 + num2;
        // new num2 is equal to temp
        num2 = temp;
        // increment
        i++;
    }
    // result of function
    return num2;
}

// MadLib generator fuction - will return a story based on words put by user
// define the text of the story - each "\n" means new line, each "~" is input
let mLText = "My dear old ~ sat me down to hear some words of wisdom \n 1. Give a man  a ~ and you ~ him for a day ~ a man to ~ and he'll ~ forever \n 2. He who ~ at the right time can ~ again \n 3. Always wear ~ ~ in case you're in a ~ \n 4. Don't use your ~ to wipe your ~ Always have a clean ~ with you";

// convert string into an array - splitting with " "
let mLArray = mLText.split(" ");
// set array for user input
let inputArray = []

function madLibGenerator(){
    // call the function to create array
    createInputArray();
    // check for missing space in input
    if(checkForMissingInput()){
        // output error if any of input is missing
        // TODO: consider adding check against empty input as well
        document.getElementById("output1").value = "Enter all values above";
    } else{
        // call function to create the story
        createMLSentance();
    }
}

// function for creating of input array
function createInputArray(){
    // cycle trhough input id's to read data
    for(i = 0; i <=13; i++){
        // there are 13 input id's - each checked with for loop
        inputArray[i] = document.getElementById("i" + i).value;
    }
}

// function that checks missing input
function checkForMissingInput(){
    // create an array with default strings in input
    let defaultArrayVals = ["Person", "Noun", "Verb", "Adjective", "Plural Verb", "Body Part", "Event"];
    // run for loop to check input array against any of the words in defautl array
    for(i = 0; i < inputArray.length; i++){
        // if there are no matches there will be a "-1" after comparison
        // "indexOf" suggest that the comparison is done against all values of array
        if(defaultArrayVals.indexOf(inputArray[i]) > -1){
            // return true if input array value is not in default
            return true;
        }
    }
    // return false in other case
    return false;
}