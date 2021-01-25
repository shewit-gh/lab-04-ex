

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
};


if (parseInt(choice)== 1){
    noOfnumbers = prompt("How many numbers do you want to add?");
    for (let i = 0; i<parseInt(noOfnumbers); i++){
        numbers[i] = prompt("Enter the number")
    };
    console.log(" The total sum is : " + addition(numbers));

    
}
else if ( parseInt(choice) == 2){
    number1 = prompt("Enter the first number");
    number2 = prompt("Enter the second number");
    console.log("The difference is : " + subtraction(number1, number2));

}
else if( parseInt(choice) == 3){
    noOfnumbers = prompt("How many numbers do you want to multiply?");
    for (let i = 0; i<parseInt(noOfnumbers); i++){
        numbers[i] = prompt("Enter the number")
    };
    console.log("The result is : " + multiplication(numbers));

}
else if( parseInt(choice) == 4){
    number1 = prompt("Enter the first number");
    number2 = prompt("Enter the second number");
    console.log(" The division reuslt is : " + division(number1, number2));

}

else if( parseInt(choice) == 5){
    noOfnumbers = prompt("How many numbers do you want to do an average of?");
    for (let i = 0; i<parseInt(noOfnumbers); i++){
        numbers[i] = prompt("Enter the number")
    };
    console.log("The average is : " + average(numbers));


}
else if( parseInt(choice) == 6){
    number1 = prompt("Enter the number");
    console.log( "The square of " + number1 + " is" + " "+ square(number1));
}
else{
    console.log("Incorrect choice")

};












