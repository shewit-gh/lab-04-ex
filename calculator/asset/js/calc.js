

var number1;
var number2;
var choice;
var noOfnumbers;
let numbers = new Array();


choice = prompt("please input the number infront of your service choice \n1. Addition \n2. Subtraction \n3. Multiplication \n" + 
"4. Division \n5. Average \n6. Square" );


function addition(numbers){
    sum = 0;
    for (let i = 0; i< numbers.length; i++ ){
        sum += parseInt( numbers[i]) 
    }
    return sum

};

function subtraction(number1, number2){
    return parseInt(number1)  - parseInt(number2);

};

function multiplication(numbers){
    multi = 1;
    for (let i = 0; i< numbers.length; i++ ){
        multi *= parseInt(numbers[i]) 
    }
    return multi

};

function division(number1, number2){
    if (parseInt(number2) == 0){
        console.log("The denominator has to be different from zero.");
    }
    else{
        return parseInt(number1) /parseInt(number2);
    }

};
function average(numbers){
    sum = 0;
    for (let i = 0; i< numbers.length; i++ ){
        sum += parseInt( numbers[i]) 
    
    }
    return sum/numbers.length

};
function square(number1){
    return parseInt(number1)  * parseInt(number1)
}












