//Name: Nichole
const circumfrence = (num1) => {
    return 2*Math.PI*num1;
}
const areaTriange = (num1,num2) => {
    return 1/2*num1*num2;
}
const areaTrap = (num1,num2,num3) => {
    return 1/2*num3*(num1+num2);
}
const areaRegPoly = (num1,num2,num3) => {
    return num3*(1/2*num1*num2);
}
const arcLength = (num1,num2) => {
    return 2*Math.PI*num1*(num2/360);
}
const areaCircle = (num1) => {
    return num1*num1*(Math.PI);
}
const areaSector = (num1,num2) => {
    return num1*num1*(Math.PI)*(num2/360); 
}
const volumeSphere = (num1) => {
    return 4/3*Math.PI*(num1*num1*num1);
}
const volumeCylinder = (num1,num2) => {
    return Math.PI*(num1*num1)*num2;
}
const volumeCone = (num1,num2) => {
    return 1/3*Math.PI*(num1*num1)*num2;
}
const pythagorean = (num1,num2) => {
    return Math.sqrt(num1*num1+(num2*num2));
}
const inchCen = (num1) => {
    return 2.54*num1;
}
const cenInch = (num1) => {
    return num1/2.54;
}
const feetMeter = (num1) => {
    return 0.305*num1;
}
const meterFeet = (num1) => {
    return num1/0.305;
}
const milesKilo = (num1) => {
    return 1.609*num1;
}
const kiloMiles = (num1) => {
    return num1/1.609;
}
const gollonLite = (num1) => {
    return 3.78*num1;
}
const liteGallon = (num1) => {
    return num1/3.78;
}
const poundKilogram = (num1) => {
    return 0.45*num1;
}
const kilogramPound = (num1) => {
    return num1/0.45;
}
const celsiusFaren = (num1) => {
    return 1.8*num1+32;
}
const farenCelsius = (num1) => {
    return num1/1.8-32;
}
