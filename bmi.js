var peso = prompt("Inserisci il tuo peso in kg: ");
var altezza = prompt("Inserisci la tua altezza in cm ");

altezza = altezza / 100

function bmiCalcolo(peso, altezza) {
    let bmi = peso / Math.pow(altezza,2);
    return Math.round(bmi)
}

let bmi = bmiCalcolo(peso, altezza);
    
alert("Il tuo BMI è " + bmiCalcolo(peso,altezza))

if (bmi <= 18.5){
    alert("Il tuo BMI è " + bmi + ", quindi sei sottopeso");   
} else if (bmi > 18.5 && bmi <= 25.9){
    alert("Il tuo BMI è " + bmi + ", quindi sei in perfetta forma");
} else if (bmi > 24.9 && bmi <= 29.9){
    alert("Il tuo BMI è " + bmi + ", quindi sei sovrappeso");
} else {
    alert("Il tuo BMI è " + bmi + ", quindi sei obeso")
}