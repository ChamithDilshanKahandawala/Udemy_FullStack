function BMICalculator(){
    var weight = prompt("Enter Weight");
    var height = prompt("Enter Height?");
    const BMI = weight/Math.pow(height,2);

    if(BMI < 18.5){
        alert("Your BMI is "+BMI+", so you are underweight.")
    }
    if(BMI >=18.5 && BMI<=24.9){
        alert("Your BMI is"+BMI+ ", so you have a normal weight.");
        
    }
    else{
        alert("Your BMI is "+ BMI+", so you are overweight.");

    }

    RequiredWeight(height);

}

function RequiredWeight(height){
    RMaxWeight = 24.9*Math.pow(height,2);
    RLowWeight = 18.5*Math.pow(height, 2);

    alert("Required Max Weight is "+RMaxWeight);
    alert("Minimum Weight is"+RLowWeight);
}

BMICalculator();





