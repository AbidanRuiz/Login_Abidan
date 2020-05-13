class Operaciones {


    constructor(n1, n2) {

        this.numero1 = (n1);
        this.numero2 = (n2);



    };
    Comparar() {


        if (this.numero1 == "Juan" && this.numero2 == "222") {


            alert("Congratulation...!!!")


        } else if (this.numero1 != "Juan" || this.numero2 != "222") {


            alert("Usuario incorrecto...")

        }
    }


};

var c = 0;
function Iniciar() {


    var res = document.getElementById("Resultado");
    var oper = new Operaciones(document.getElementById("n1").value, document.getElementById("n2").value);

    if (oper.Comparar() == 1) {
        limpiar()
        alert("Bienvenido :" + oper.numero1);
        c = 0;

        alert("Hola bro");
    } else {

        c++;
        alert(c);
        limpiar()
        if (c == 3) {
            deshabilitar();
            alert("NOPE");
        }

    }
}


function limpiar() {

    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";
    document.getElementById('n1').focus();

}
function deshabilitar() {

    document.getElementById('n1').disabled = true;
    document.getElementById('n2').disabled = true;
    document.getElementById('Quitar').disabled = true;

}




