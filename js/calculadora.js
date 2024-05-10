function sumar(idNum1,idNum2){

    var num1 = parseInt( document.getElementById(idNum1).value);

    var num2 =parseInt( document.getElementById(idNum2).value);

    var total = num1 + num2 ;
    console.log(total);
    document.getElementById("idResultado").innerText= total;

}

function restar(idNum1,idNum2){

    var num1 =parseInt( document.getElementById(idNum1).value);

    var num2 = parseInt(document.getElementById(idNum2).value);

    var total = num1 - num2 ;
    console.log(total);
    document.getElementById("idResultado").innerText= total;

}
function multiplicar(idNum1,idNum2){

    var num1 = parseInt(document.getElementById(idNum1).value);

    var num2 = parseInt(document.getElementById(idNum2).value);

    var total = num1 * num2 ;
    console.log(total);
    document.getElementById("idResultado").innerText= total;

}

function dividir(idNum1,idNum2){

    var num1 = parseInt(document.getElementById(idNum1).value);

    var num2 = parseInt(document.getElementById(idNum2).value);

    var total = num1 / num2 ;
    console.log(total);
    document.getElementById("idResultado").innerText= total;

}