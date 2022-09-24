/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
  imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
  lenguajes: "HTML y CSS",
  bimestre: "1er bimestre",
},
{
  imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
  lenguajes: "Javascript",
  bimestre: "2do bimestre",
},
{
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
  lenguajes: "React JS",
  bimestre: "3er bimestre",
},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingrese su nombre");
  let añoDeNacimiento = prompt("Ingrese su año de nacimiento");
  datosPersona.ciudad = prompt("Ingrese su ciudad");
  datosPersona.interesPorJs = confirm("Ingrese su interes por JS");
  datosPersona.interesPorJs = datosPersona.interesPorJs ? "Si" : "No";
  datosPersona.edad = 2022 - añoDeNacimiento;
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  let nombre = document.getElementById("nombre");
  nombre.innerText = datosPersona.nombre;

  let edad = document.getElementById("edad");
  edad.innerText = datosPersona.edad;

  let ciudad = document.getElementById("ciudad");
  ciudad.innerText = datosPersona.ciudad;

  let interesPorJs = document.getElementById("javascript");
  interesPorJs.innerText = datosPersona.interesPorJs;

}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let contenedor = document.getElementById("fila");
  contenedor.innerHTML = "";

  listado.map(item => {
    contenedor.innerHTML +=
      `
    <div class="caja">
    <img src="${item.imgUrl}" alt="${item.lenguajes}">
    <p class="lenguajes">${item.lenguajes}</p>
    <p class="bimestre">${item.bimestre}</p>
    </div>
    `
  });
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let tema = document.getElementById("sitio");
  tema.classList.toggle("dark");
}
/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

window.addEventListener("keypress", function (e) {
  if (e.key == "f") {
    miTexto = document.getElementById("sobre-mi");
    miTexto.classList.toggle("oculto")
  }
})