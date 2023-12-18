// Crear tabla y agregar encabezados

const tabla = document.createElement("table");
const encabezados = ["Nombre", "Apellido", "Edad", "Grupo", "Editar", "Eliminar"];
const encabezadoRow = document.createElement("tr");
encabezadoRow.classList.add("encabezados");
let identificador = 0;

encabezados.forEach(encabezado => {
  const th = document.createElement("th");
  th.textContent = encabezado;
  encabezadoRow.appendChild(th);
});
tabla.appendChild(encabezadoRow);

// Función para desplazar la pagina
function scroll() {
  const alturaTotal = document.documentElement.scrollHeight;
  window.scrollTo({
    top: alturaTotal,
    behavior: 'smooth'
  });
}

// Función para crear la tabla

function crearTabla() {
  const name = document.getElementById("name");
  const lastName = document.getElementById("lastName");
  const age = document.getElementById("age");
  const group = document.getElementById("group");
  const button = document.getElementById("btn");

  // Condicional para que no almacenar valores vacios

  if (name.value == "" | lastName.value == "" | age.value == "" | group.value == "") {
    alert("No dejes campos vacios")
  }
  else {

    // Se comprueba si el encabezado esta oculto
    const visible = window.getComputedStyle(tabla).display;
    if (visible == "none") {
      tabla.style.display = "table";
    }



    // Funcion para poner la primera letra en mayusculas

    function capitalizarPrimeraLetra(input1, input2) {
      input1.value = input1.value.charAt(0).toUpperCase() + input1.value.slice(1);
      input2.value = input2.value.charAt(0).toUpperCase() + input2.value.slice(1);
    }
    capitalizarPrimeraLetra(name, lastName);
    const fila = document.createElement("tr");
    fila.id = identificador;
    identificador++;

    // Agregar filas con datos del estudiante 

    // Celda del nombre
    const nombreCell = document.createElement("td");
    nombreCell.textContent = name.value;
    fila.appendChild(nombreCell);

    // Celda del apellido
    const apellidoCell = document.createElement("td");
    apellidoCell.textContent = lastName.value;
    fila.appendChild(apellidoCell);

    // Celda de la edad
    const edadCell = document.createElement("td");
    edadCell.textContent = age.value;
    fila.appendChild(edadCell);

    // Celda para el grupo
    const grupoCell = document.createElement("td");
    grupoCell.textContent = group.value;
    fila.appendChild(grupoCell);

    // Creacion de botones en una celda

    // Boton de editar
    const editarCell = document.createElement("td");
    const edit = document.createElement("button");
    edit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="#ffffff" d="m230.15 70.54l-44.69-44.68a20 20 0 0 0-28.28 0L33.86 149.17A19.86 19.86 0 0 0 28 163.31V208a20 20 0 0 0 20 20h168a12 12 0 0 0 0-24h-91L230.15 98.83a20 20 0 0 0 0-28.29ZM136 81l11 11l-71 71l-11-11ZM52 204v-31l15.52 15.51L83 204Zm52-13l-11-11l71-71l11 11Zm88-88l-39-39l18.34-18.34l39 39Z"/></svg>`;
    edit.classList = "btnEdit";
    edit.onclick = editar;
    fila.appendChild(editarCell);
    editarCell.append(edit);

    // Boton de eliminar
    const eliminarCell = document.createElement("td");
    const remove = document.createElement("button");
    remove.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#ffffff" d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Zm2-4h2V8H9v9Zm4 0h2V8h-2v9Z"/></svg>`;
    remove.classList = "btnRemove";
    remove.onclick = eliminar;
    fila.appendChild(eliminarCell);
    eliminarCell.append(remove);

    // Agregar la fila a la tabla

    tabla.appendChild(fila);

    // Cambiar el fondo según su grupo

    function cambioColor() {
      if (group.value == "Jobs") {
        fila.style = "background-color: #b2cba3;"
      }
      else if (group.value == "Ritchie") {
        fila.style = "background-color: #e1e6d3;"
      }
      else if (group.value == "Lovelace") {
        fila.style = "background-color: #cafcb1;"
      }
      else if (group.value == "Tesla") {
        fila.style = "background-color: #ffcdb8;"
      }
    }
    cambioColor();

    // Se vacian los inputs

    name.value = "";
    lastName.value = "";
    age.value = "";
    group.value = "";

    // Agregar la tabla al cuerpo del documento

    document.body.appendChild(tabla);

    // Funcion para acceder a la fila segun su id
    let idFila = fila.id;
    function editar() {

      // Desplazamiendo al inicio de la pagina
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      const editarFila = document.getElementById(idFila);

      // Recorrer los td de la fila, excluyendo los dos últimos

      for (let i = 0; i < editarFila.children.length - 2; i++) {
        const tdActual = editarFila.children[i];

        // Obtener el contenido del td actual
        const contenidoTd = tdActual.innerHTML;

        // Agregar el contenido al input

        if (i == 0) {
          name.value = contenidoTd;
        }
        else if (i == 1) {
          lastName.value = contenidoTd;
        }
        else if (i == 2) {
          age.value = contenidoTd;
        }
        else if (i == 3) {
          group.value = contenidoTd;
        }

        // Cambio de funcionalidad del boton
        button.removeEventListener("click", crearTabla);
        button.textContent = "Actualizar";
        button.onclick = actualizar;
        remove.disabled = true;
      }

      // Funcion para actualizar los valores de las filas

      function actualizar() {
        const updateFila = document.getElementById(idFila);
        capitalizarPrimeraLetra(name, lastName);

        for (let i = 0; i < updateFila.children.length - 2; i++) {
          const tdActual = updateFila.children[i];

          // Agregar el contenido a la celda

          if (i == 0) {
            tdActual.innerHTML = name.value;
            name.value = "";
          }
          else if (i == 1) {
            tdActual.innerHTML = lastName.value;
            lastName.value = "";
          }
          else if (i == 2) {
            tdActual.innerHTML = age.value;
            age.value = "";
          }
          else if (i == 3) {
            tdActual.innerHTML = group.value;
            cambioColor();
            group.value = "";
          }

          // Cambio de funcionalidad del boton
          button.removeEventListener("click", actualizar);
          button.textContent = "Guardar";
          button.onclick = crearTabla;
          remove.disabled = false;
          scroll();
        }
      }
    }
    function eliminar() {
      const confirmacion = confirm("Estas seguro de eliminar la fila?");

      if (confirmacion == true) {
        tabla.removeChild(fila);

        if (tabla.childElementCount < 2) {
          tabla.style.display = "none";
        }
      }
    }
    scroll();
  }
};


