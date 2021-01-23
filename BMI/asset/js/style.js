
let personProfile= {
    firstName:"",
    lastName:"",
    weight: "",
    height: "",



    calcBmi: function() {

        let bmi = this.weight / (this.height * this.height);


        bmi = Number(bmi.toFixed(1));

        console.log("Your Body Mass Index is : " + bmi);
        if (bmi < 18.5)
            console.log("Your are  Underweight");
        else if (bmi >= 18.5 && bmi <= 24.9)
            console.log("Your are  Normal");
        else if (bmi >= 25.0 && bmi <= 29.9)
            console.log("Your are  Overweight");
        else if (bmi >= 30.0)
            console.log("Your are  Obese");


    }
    
};

personProfile.firstName = prompt(" Your First Name");
personProfile.lastName = prompt("Your Last Name");
personProfile.weight = prompt(" What is your weight in Kg?");
personProfile.height = prompt("What is your height in meter?");


( function(){
    console.log("*************************************************************")
    console.log(" Here is your profile")
    console.log("Name: " + personProfile.firstName + "" + personProfile.lastName);

    personProfile.calcBmi();

    console.log("**************************************************************")
})();
