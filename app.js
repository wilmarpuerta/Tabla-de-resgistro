// Crear tabla y agregar encabezados

const tabla = document.createElement("table");
const encabezados = ["Editar", "Nombre", "Apellido", "Edad", "Grupo"];
const encabezadoRow = document.createElement("tr");


encabezados.forEach(encabezado => {
  const th = document.createElement("th");
  th.textContent = encabezado;
  encabezadoRow.appendChild(th);
});
tabla.appendChild(encabezadoRow);

// Función para crear la tabla

function crearTabla() {
  var alturaTotal = document.documentElement.scrollHeight;
  window.scrollTo({
    top: alturaTotal,
    behavior: 'smooth' 
  });
  const name = document.getElementById("name");
  const lastName = document.getElementById("lastName");
  const age = document.getElementById("age");
  const group = document.getElementById("group");
  
  
  // Condicional para que no deje valores vacios
  
  if (name.value == "" | lastName.value == "" | age.value == "" | group.value == "") {
    alert("No dejes campos vacios")
  }
  else {
  
    // Agregar filas con datos del estudiante 
    function capitalizarPrimeraLetra(input1,input2) {
      input1.value = input1.value.charAt(0).toUpperCase() + input1.value.slice(1);
      input2.value = input2.value.charAt(0).toUpperCase() + input2.value.slice(1);
    }
    capitalizarPrimeraLetra(name,lastName);
    const fila = document.createElement("tr");


    const editarCell = document.createElement("td");
    const newBtn = document.createElement("button");
    newBtn.textContent = "Editar";
    // newBtn.onclick = clases;
    fila.appendChild(editarCell);
    editarCell.append(newBtn);


    const nombreCell = document.createElement("td");
    nombreCell.textContent = name.value;
    fila.appendChild(nombreCell);

    const apellidoCell = document.createElement("td");
    apellidoCell.textContent = lastName.value;
    fila.appendChild(apellidoCell);

    const edadCell = document.createElement("td");
    edadCell.textContent = age.value;
    fila.appendChild(edadCell);

    const grupoCell = document.createElement("td");
    grupoCell.textContent = group.value;
    fila.appendChild(grupoCell);

    tabla.appendChild(fila);

    // Agregar la tabla al cuerpo del documento

    document.body.appendChild(tabla);

  }
};

