var x = 100;
var y = 200;
var resultado = x + y;
function soma(num1, num2) {
    if (resultado >= 150) {
        console.log("a soma de ".concat(x, " com ").concat(y, " \u00E9: ") + resultado);
    }
}
soma(x, y);
