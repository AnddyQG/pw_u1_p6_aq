const sumar = (idNum1,idNum2)=> {

    var num1 = parseInt( document.getElementById(idNum1).value);

    var num2 =parseInt( document.getElementById(idNum2).value);

    var total = num1 + num2 ;
    console.log(total);
    document.getElementById("idResultado").innerText= total;


}
const restar = (idNum1,idNum2)=> {

    var num1 = parseInt( document.getElementById(idNum1).value);

    var num2 =parseInt( document.getElementById(idNum2).value);

    var total = num1 - num2 ;
    console.log(total);
    document.getElementById("idResultado").innerText= total;


}
const dividir = (idNum1,idNum2)=> {

    var num1 = parseInt( document.getElementById(idNum1).value);

    var num2 =parseInt( document.getElementById(idNum2).value);

    var total = num1 / num2 ;
    console.log(total);
    document.getElementById("idResultado").innerText= total;


}
const multiplicar = (idNum1,idNum2)=> {

    var num1 = parseInt( document.getElementById(idNum1).value);

    var num2 =parseInt( document.getElementById(idNum2).value);

    var total = num1 * num2 ;
    console.log(total);
    document.getElementById("idResultado").innerText= total;


}
function agregarElemento(){
    document.getElementById('idDivision').innerHTML= "<button>NUEVO</button>";
    
}

function quitarElemento(){
    document.getElementById('idDivision').innerHTML= "";
    
}

function conceptosJS(){
    // Tipos de datos JS
    //let,var,cons
// a los cons no se puede modificar el valor, con mayuscula
    const IVA=15;
    console.log(IVA)
  
//Si se puede moficiar el valor
    var nombre="Anddy";
    console.log(nombre)
    nombre = "Bucocham"
    console.log(nombre)

    let apellido ="Quisilema";
    console.log(apellido)
    apellido= "Ticorita";
    console.log(apellido)
}