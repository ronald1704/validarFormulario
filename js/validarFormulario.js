function validarNombre() {
  var validarNombre = document.getElementById('nombre').value;

  if (validarNombre == "") {
    alert("Porfavor ingrese su nombre!!!");
    return false;
  }
}

function validarApellido() {
  var apellido = document.getElementById('apellido').value;

  if (apellido == "") {
    alert("Porfavor ingrese su apellido!!!");
    return false;
  }
}

function validarContrasenia() {
  var contrasenia = document.getElementById('contrasenia').value;

  if (contrasenia=="") {
    alert("Porfavor ingrese su contraseña!!!");
    return false;
  }
}

function validarCedula(entrada) {
  var cedula = document.getElementById('cedula').value;
  var expresionRegular = /^([0-9])*$/;
  if (expresionRegular.test(entrada)) {
    alert("Porfavor ingrese su cedula!!!");
    return false;
  }
}

function validarRadioButton() {
  var radio1 = document.getElementById('sinEstudios').checked;
  var radio2 = document.getElementById('primaria').checked;
  var radio3 = document.getElementById('secundaria').checked;
  var radio4 = document.getElementById('universitario').checked;

  if ((radio1 == "") && (radio2 == "") && (radio3 == "") && (radio4 == "")) {
    alert("Porfavor seleccione su nivel maximo de estudios academicos!!!");
  }
  return false;
}


function validarSelectMunicipio() {

  if (document.formulario.Municipio.value == 1) {
    alert("Porfavor seleccione un municipio!!!");
    return false;
  }
}


function validarSelectArtuculo() {

  if (document.formulario.Artuculo.value == 0) {
    alert("Porfavor seleccione un aruticulo!!!");
    return false;
  }
}
