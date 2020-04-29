function bmiCalculator(gewicht, lengte) {

    let bmiCalc = gewicht / Math.pow(lengte, 2);
    let bmi = Math.round(bmiCalc);

    if (bmi < 18.5) {
        return ("Your BMI is " + bmi + ", so you are underweight.");
    }

    if (bmi >= 18.5 && bmi <= 24.9) {
        return ("Your BMI is " + bmi + ", so you have a normal weight.");
    }

    if (bmi >= 30 && bmi <= 34.9) {
        return ("Your BMI is " + bmi + ", so you are overweight.");
    } else {
        return ("Your BMI is " + bmi + ", so you are overweight.");
    }
}