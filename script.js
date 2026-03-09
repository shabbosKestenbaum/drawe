//console.log("helloWorld!");

const varTitulo = document.getElementById("titulo");
const varTexto = document.getElementById("texto");

const listaTexos = ["uno", "dos", "tres", "cuatro", "cinco"];

let estadoInicial = true;
let indice = 0;

varTitulo.addEventListener("click", () => {
    if (estadoInicial === true) {
        varTitulo.innerText = "Buenos días!";
        varTitulo.style.color = "green";
        varTitulo.style.backgroundColor = "white";
    }
        else {
            varTitulo.innerText = "Hola Mundo!";
            varTitulo.style.color = "red";
            varTitulo.style.backgroundColor = "transparent";
        }

    estadoInicial = !estadoInicial;
});

varTexto.addEventListener("click", () => {
    if(indice < listaTexos.length) {
        varTexto.innerText = listaTexos[indice];
        indice = indice + 1;
    } else {
        varTexto.innerText = "FIN.";
    }
});