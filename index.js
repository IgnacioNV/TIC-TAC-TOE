const cajas = document.querySelectorAll(".cajas");
const popUp = document.querySelector('.primer-pop-up');
const textoGanador = document.querySelector('.texto-ganador');
const btnComenzar = document.querySelector('.comenzar');
const containerBienvenida = document.querySelector('.bienvenidos');
const jugadoresContainer = document.querySelector('.jugadores-container');
const seleccionContainer = document.querySelector('.seleccion');
const btnNuevaPartida = document.querySelector('.nueva-partida');
const btnVolverHome = document.querySelector('.volver-home');
const btnVolverPrimPag = document.querySelector('.volver-prim-pag');
const inputNombreUno = document.querySelector('.nombre-uno');
const inputNombreDos = document.querySelector('.nombre-dos');
const btnNameJugadores = document.querySelector('.btn-name-jugadores');
const gameContainer = document.querySelector('.contenedor-general');
const turnoNombre = document.querySelector('.texto-turno-jugador');
const btnExitMedio = document.querySelector('.exit-game');
const btnAvanzarPopUp = document.querySelector('.avanzar-pop-up');
const segPopUp = document.querySelector('.segundo-pop-up');
const btnPlayAgain = document.querySelector('.btnPlayAgain');
const btnExitFinal = document.querySelector('.exit');

btnComenzar.addEventListener("click", ()=>{
    containerBienvenida.style.display = "none";
    seleccionContainer.style.display = "flex";
    btnVolverHome.style.display = "block";
})
btnNuevaPartida.addEventListener("click", ()=>{
    containerBienvenida.style.display = "none";
    seleccionContainer.style.display = "none";
    jugadoresContainer.style.display = "flex";
    btnVolverPrimPag.style.display = "block";
})
btnVolverPrimPag.addEventListener("click", ()=>{
    containerBienvenida.style.display = "flex";
    jugadoresContainer.style.display = "none";
})
btnVolverHome.addEventListener("click", ()=>{
    containerBienvenida.style.display = "flex";
    seleccionContainer.style.display = "none";
})
btnNameJugadores.addEventListener("click", ()=>{
    if(inputNombreUno.value != "" && inputNombreDos.value != ""){
        containerBienvenida.style.display = "none";
        jugadoresContainer.style.display = "none";
        gameContainer.style.display = "flex";
    }
    else{
        console.log("acá iria la aclaracion para el refill")
    }
})
btnAvanzarPopUp.addEventListener("click", ()=>{
    popUp.style.display = "none";
    segPopUp.style.display = "flex";
})

let jugadorUno = inputNombreUno.textContent;
let jugadorDos = inputNombreDos.textContent;

const A1 = document.querySelector('.A1');
const A2 = document.querySelector('.A2');
const A3 = document.querySelector('.A3');
const B1 = document.querySelector('.B1');
const B2 = document.querySelector('.B2');
const B3 = document.querySelector('.B3');
const C1 = document.querySelector('.C1');
const C2 = document.querySelector('.C2');
const C3 = document.querySelector('.C3');

let fila1 = [A1,B1,C1];
let fila2 = [A2,B2,C2];
let fila3 = [A3,B3,C3];

let colA = [A1,A2,A3];
let colB = [B1,B2,B3];
let colC = [C1,C2,C3];

let cruzadoltr = [A1,B2,C3];
let cruzadortl = [C1,B2,A3];

let circulo = [];
let cruz = [];
let turno = 0;
let tof = true;
for (const caja of cajas) {
    nombreJugador();
    caja.addEventListener("click", () => {
        if (turno < 9 && tof == true && turno%2 == 0 && !(circulo.includes(caja)) && !(cruz.includes(caja))){
            //caja.classList.add('.circle');
            caja.style.backgroundImage = "url('circle-regular-84.png')";
            caja.style.backgroundSize = "cover";
            circulo.push(caja);
            console.log(turno);
            console.log(circulo);
            ganador();
        }
        else if(turno < 9 && tof == true && turno%2 == 1 && !(circulo.includes(caja)) && !(cruz.includes(caja))){
            //caja.classList.add('.x');
            caja.style.backgroundImage = "url('x-regular-84.png')";
            caja.style.backgroundSize = "cover";
            cruz.push(caja);
            console.log(turno);
            console.log(cruz);
            ganador();
        }
            else{
            turno--;
        }
    btnExitMedio.addEventListener("click", ()=>{
        containerBienvenida.style.display = "flex";
        gameContainer.style.display = "none";
        caja.style.backgroundImage = "none";
        inputNombreUno.value = "";
        inputNombreDos.value = "";
        turno = 0;
        tof = true;
        circulo = [];
        cruz = []
    })
    btnExitFinal.addEventListener("click", ()=>{
        containerBienvenida.style.display = "flex";
        gameContainer.style.display = "none";
        segPopUp.style.display = "none";
        caja.style.backgroundImage = "none";
        inputNombreUno.value = "";
        inputNombreDos.value = "";
        turno = 0;
        tof = true;
        circulo = [];
        cruz = []
    })
    btnPlayAgain.addEventListener("click", ()=>{
        gameContainer.style.display = "flex";
        segPopUp.style.display = "none";
        caja.style.backgroundImage = "none";
        inputNombreUno.value = "";
        inputNombreDos.value = "";
        turno = 0;
        tof = true;
        circulo = [];
        cruz = []
    })
    turno++;
    console.log(turno);
    });
}
/*const circuloFila1 = fila1.every((elemento) => circulo.includes(elemento));
const circuloFila2 = fila2.every((elemento) => circulo.includes(elemento));
const circuloFila3 = fila3.every((elemento) => circulo.includes(elemento));
const circuloColA = colA.every((elemento) => circulo.includes(elemento));
const circuloColB = colB.every((elemento) => circulo.includes(elemento));
const circuloColC = colC.every((elemento) => circulo.includes(elemento));
const circuloCruzadoLTR = cruzadoltr.every((elemento) => circulo.includes(elemento));
const circuloCruzadoRTL = cruzadortl.every((elemento) => circulo.includes(elemento));*/

function ganador(){
    if(/*circulo.includes(fila1) || circulo.includes(fila2) || circulo.includes(fila3) || 
    circulo.includes(col1) || circulo.includes(col2) || circulo.includes(col3) || 
    circulo.includes(cruzadoltr) || circulo.includes(cruzadortl)*/
    /*circuloFila1|| circuloFila2 || circuloFila3 ||
    circuloColA || circuloColB|| circuloColC || circuloCruzadoLTR ||circuloCruzadoRTL*/
    circulo.includes(fila1[0])&&circulo.includes(fila1[1])&&circulo.includes(fila1[2])|| //fila1
    circulo.includes(fila2[0])&&circulo.includes(fila2[1])&&circulo.includes(fila2[2])|| //fila2
    circulo.includes(fila3[0])&&circulo.includes(fila3[1])&&circulo.includes(fila3[2])|| //fila3
    circulo.includes(colA[0])&&circulo.includes(colA[1])&&circulo.includes(colA[2])|| //colA
    circulo.includes(colB[0])&&circulo.includes(colB[1])&&circulo.includes(colB[2])|| //colB
    circulo.includes(colC[0])&&circulo.includes(colC[1])&&circulo.includes(colC[2])|| //colC
    circulo.includes(cruzadoltr[0])&&circulo.includes(cruzadoltr[1])&&circulo.includes(cruzadoltr[2])|| //cruzadoLTR
    circulo.includes(cruzadortl[0])&&circulo.includes(cruzadortl[1])&&circulo.includes(cruzadortl[2]) //cruzadortl
    ){

        popUp.style.display = "flex";
        textoGanador.textContent = "Ha ganado "+ jugadorUno;
        tof = false;
    }
    else if(/*cruz.includes(fila1) || cruz.includes(fila2) || cruz.includes(fila3) || 
    cruz.includes(colA) || cruz.includes(colB) || cruz.includes(colC) || 
    cruz.includes(cruzadoltr) || cruz.includes(cruzadortl)*/
    cruz.includes(fila1[0])&&cruz.includes(fila1[1])&&cruz.includes(fila1[2])|| //fila1
    cruz.includes(fila2[0])&&cruz.includes(fila2[1])&&cruz.includes(fila2[2])|| //fila2
    cruz.includes(fila3[0])&&cruz.includes(fila3[1])&&cruz.includes(fila3[2])|| //fila3
    cruz.includes(colA[0])&&cruz.includes(colA[1])&&cruz.includes(colA[2])|| //colA
    cruz.includes(colB[0])&&cruz.includes(colB[1])&&cruz.includes(colB[2])|| //colB
    cruz.includes(colC[0])&&cruz.includes(colC[1])&&cruz.includes(colC[2])|| //colC
    cruz.includes(cruzadoltr[0])&&cruz.includes(cruzadoltr[1])&&cruz.includes(cruzadoltr[2])|| //cruzadoLTR
    cruz.includes(cruzadortl[0])&&cruz.includes(cruzadortl[1])&&cruz.includes(cruzadortl[2]) //cruzadortl
    ){
        popUp.style.display = "flex";
        textoGanador.textContent = "Ha ganado "+ jugadorDos;
        tof = false;
    }
    else if(turno >= 8){ //no se cumplieron ninguna de las dos anteriores
        popUp.style.display = "flex";
        textoGanador.textContent = "Han empatado.";
        tof = false;
    }
}

//probando cómo funciona .includes()

/*let array = [1,2,3,4];
console.log(array.includes(1,2)) //false
console.log(array.includes(1)) //true*/

// tengo un problema. Cuando quiero volver a jugar despues del pop-up se corta al primer click. 
// arreglar función para poner el nombre del jugador.

function nombreJugador(){
    if(turno%2 == 0){
        jugadorUno = inputNombreUno.value;
        textoGanador.textContent = `Es el turno de ${jugadorUno}`;
    }
    else{
        jugadorDos = inputNombreDos.value;
        textoGanador.textContent = `Es el turno de ${jugadorDos}`;
    }
}