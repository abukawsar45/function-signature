var myCalculate;
var myCalculate2;
var myCalculate3;
myCalculate = function () {
    console.log('first');
};
// singnature
myCalculate2 = function (name) {
    console.log("".concat(name, " first"));
};
myCalculate3 = function (name, age) {
    console.log("".concat(name, " and ").concat(age, " years"));
};
myCalculate();
myCalculate2('aks');
myCalculate3('AbuKawSar', 22);
