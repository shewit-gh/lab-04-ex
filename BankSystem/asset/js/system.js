
 

function deposite(depoAmount, currentBalance){
    currentBalance += parseInt(depoAmount);
    console.log(" Deposite amount: " + depoAmount);
    console.log( "Current Balance:" + currentBalance);
};

function withdraw(withdAmount, currentBalance){
    currentBalance -= parseInt(withdAmount);
    console.log(" Withdraw amount: " + withdAmount);
    console.log( "Current Balance: " + currentBalance);
};

function transfer( transAmount, currentBalance, accountNo){
    currentBalance -= parseInt(transAmount);
    console.log("Transfer amount: " + transAmount);
    console.log("To account number: " + accountNo);
    console.log("Current Balance: " + currentBalance);

};
function balance(currentBalance){
    console.log("Your current balance is " + currentBalance);
};



(function(){
    var currentBalance = 100000;
    var depoAmount;
    var transAmount;
    var withdAmount;
    var accountNo;
 


choice = prompt("please input the number infront of your service choice \n1. Deposite \n2. Withdraw \n3. Transfer \n" + 
"4. Balance" );

if (choice == 1){
    depoAmount = prompt(" Enter the amount you want to deposite");
    deposite(depoAmount, currentBalance);
}
else if( choice == 2){
    withdAmount = prompt(" Enter the amount you want to withdraw");
    if (withdAmount > 60000 || withdAmount < 50){
        console.log("This amount of withdrawal is not allowed");
    }
    else{
        withdraw(withdAmount, currentBalance);
    }
   

    
}
else if(choice == 3){
    transAmount = prompt(" Enter the amount you want to transfer");
    accountNo = prompt(" Enter the account you  want to transfer to");
    transfer(transAmount, currentBalance, accountNo);
}
else if( choice == 4){
    balance(currentBalance);
}
else{
    console.log("Invalid choice");
};



})();

