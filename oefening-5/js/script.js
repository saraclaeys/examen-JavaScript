function initArray() {
    this.length = initArray.arguments.length;
    for (var i = 0; i < this.length; i++)
        this[i + 1] = initArray.arguments[i];
}

var dagArray = new initArray("zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag");

var maandArray = new initArray("januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december");

var nu = new Date();
var dagtekst = dagArray[(nu.getDay() + 1)];
var dag = nu.getDate();
var maandtekst = maandArray[(nu.getMonth() + 1)];
var jaar = nu.getYear();
var jaar4 = ((jaar < 1900) ? (jaar + 1900) : (jaar));

var datumweergave = dagtekst + " " + dag + " " + maandtekst + " " + jaar4 + ", ";

document.write(datumweergave);

var nu = new Date();
var uren = nu.getHours();
var uren2 = ((uren < 10) ? "0" : "") + uren;
var minuten = nu.getMinutes();
var minuten2 = ((minuten < 10) ? " 0" : " ") + minuten;

var tijdweergave = uren2 + " uur" + minuten2 + " minuten"

document.write(tijdweergave);