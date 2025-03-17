// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar un amigo a la lista de amigos ingresados 
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value.toUpperCase();
  if (nombreAmigo.value === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    if (amigos.includes(nombreAmigo)) {
      alert("Este amigo ya fue agregado.");
    } else {
      amigos.push(nombreAmigo);
      document.getElementById("amigo").value="";
      mostrarAmigos();
    }
  }
}

// Función para mostrar la lista de amigos ingresados en pantalla
function mostrarAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  amigos.forEach((amigo) => {
    let elementoAmigos = document.createElement("li");
    elementoAmigos.appendChild(document.createTextNode(amigo));
    listaAmigos.appendChild(elementoAmigos);
  });
}

// Función para sortear un amigo secreto de la lista de amigos ingresados y mostrarlo en pantalla
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Por favor, ingrese al menos dos amigos.");
    } else {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById("resultado").innerHTML = amigoSorteado;
    }
}