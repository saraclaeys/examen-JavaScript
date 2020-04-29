function bmi() {
    var x = parseInt(document.querySelector('.lengte').value);
    var y = parseInt(document.querySelector('.gewicht').value);
    cm = parseFloat(x / 100);
    var bmi = y / (cm * cm);
    bmi = bmi.toFixed(1);

    if (bmi < 18.5) {
        document.querySelector('.bmi-waarde').innerHTML = "Uw BMI is: " + bmi + "<br>" + " U heeft ondergewicht";
        document.querySelector('.bmi-waarde').style.color = 'red'

    } else if (bmi >= 18.5 && bmi < 25) {
        document.querySelector('.bmi-waarde').innerHTML = "Uw BMI is: " + bmi + "<br>" + " U heeft een gezond gewicht";
        document.querySelector('.bmi-waarde').style.color = 'green'

    } else if (bmi >= 25 && bmi < 30) {
        document.querySelector('.bmi-waarde').innerHTML = "Uw BMI is: " + bmi + "<br>" + " U heeft overgewicht";
        document.querySelector('.bmi-waarde').style.color = 'orange'

    } else if (bmi > 30) {
        document.querySelector('.bmi-waarde').innerHTML = "Uw BMI is: " + bmi + "<br>" + " U heeft Obesitas";
        document.querySelector('.bmi-waarde').style.color = 'red'
    }
}