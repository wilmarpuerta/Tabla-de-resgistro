// Crear tabla y agregar encabezados

const tabla = document.createElement("table");
const encabezados = ["Nombre", "Apellido", "Edad", "Grupo", "Editar", "Eliminar"];
const encabezadoRow = document.createElement("tr");
let identificador = 0;

encabezados.forEach(encabezado => {
  const th = document.createElement("th");
  th.textContent = encabezado;
  encabezadoRow.appendChild(th);
});
tabla.appendChild(encabezadoRow);

// Función para crear la tabla

function crearTabla() {
  const alturaTotal = document.documentElement.scrollHeight;
  window.scrollTo({
    top: alturaTotal,
    behavior: 'smooth' 
  });
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

    // Funcion para poner la primera letra en mayusculas
  
    function capitalizarPrimeraLetra(input1,input2) {
      input1.value = input1.value.charAt(0).toUpperCase() + input1.value.slice(1);
      input2.value = input2.value.charAt(0).toUpperCase() + input2.value.slice(1);
    }
    capitalizarPrimeraLetra(name,lastName);
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
    const newBtn = document.createElement("button");
    newBtn.textContent = "Editar";
    newBtn.onclick = editar;
    fila.appendChild(editarCell);
    editarCell.append(newBtn);

    // Boton de eliminar
    const eliminarCell = document.createElement("td");
    const newBtn2 = document.createElement("button");
    newBtn2.textContent = "Eliminar";
    // newBtn2.onclick = eliminar;
    fila.appendChild(eliminarCell);
    eliminarCell.append(newBtn2);

    // Agregar la fila a la tabla

    tabla.appendChild(fila);

    // Cambiar el fondo según su grupo
    
    function cambioColor(){
    if(group.value == "Jobs"){
      fila.style = "background-color: rgba(95, 240, 240, 0.918);"
    }
    else if(group.value == "Ritchie"){
      fila.style = "background-color: rgba(95, 240, 124, 0.918);"
    }
    else if(group.value == "lovelace"){
      fila.style = "background-color: rgba(225, 240, 95, 0.918);"
    }
    else if(group.value == "Tesla"){
      fila.style = "background-color: rgba(185, 111, 235, 0.918);"
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
    function editar(){
      const editarFila = document.getElementById(idFila);

        // Recorrer los td de la fila, excluyendo los dos últimos

        for (let i = 0; i < editarFila.children.length - 2; i++) {
          const tdActual = editarFila.children[i];
          
          // Obtener el contenido del td actual
          const contenidoTd = tdActual.innerHTML;
    
          // Agregar el contenido al input

          if (i==0){
            name.value = contenidoTd;
          }
          else if(i==1){
            lastName.value = contenidoTd;
          }
          else if(i==2){
            age.value = contenidoTd;
          }
          else if(i==3){
            group.value = contenidoTd;
          }
          // Cambio de funcionalidad del boton
          button.removeEventListener("click", crearTabla);
          button.onclick = actualizar;
        }

    // Funcion para actualizar los valores de las filas

    function actualizar(){
      const updateFila = document.getElementById(idFila);
      capitalizarPrimeraLetra(name,lastName);

        for (let i = 0; i < updateFila.children.length - 2; i++) {
          const tdActual = updateFila.children[i];
    
          // Agregar el contenido a la celda

          if (i==0){
            tdActual.innerHTML = name.value;
            name.value = "";
          }
          else if(i==1){
            tdActual.innerHTML = lastName.value;
            lastName.value = "";
          }
          else if(i==2){
            tdActual.innerHTML = age.value;
            age.value = "";
          }
          else if(i==3){
            tdActual.innerHTML = group.value;
            cambioColor();
            group.value = "";
          }
          // Cambio de funcionalidad del boton
          button.removeEventListener("click", actualizar);
          button.onclick = crearTabla;
        }
    }
    }
  }
};


