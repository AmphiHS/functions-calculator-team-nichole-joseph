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
