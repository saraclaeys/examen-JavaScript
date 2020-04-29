document.getElementById("submit").addEventListener("click", bmiCalculator);

function bmiCalculator() {
    let cm = parseInt(document.getElementById("lengte").value);
    let kg = parseInt(document.getElementById("gewicht").value);
    let bmi;
    let meter = parseFloat(cm / 100);
    bmi = kg / (Math.pow(meter, 2));
    bmi = bmi.toFixed(1);

    if (bmi < 18.6) {
        document.getElementById("result").innerHTML = "Je bmi bedraagt: " + bmi + "<br> Je hebt ondergewicht";
    } else if (bmi > 25) {
        document.getElementById("result").innerHTML = "Je bmi bedraagt: " + bmi + "<br> Je hebt een normaal gewicht";
    } else {
        document.getElementById("result").innerHTML = "Je bmi bedraagt: " + bmi + "<br> Je hebt overgewicht";
    }
}