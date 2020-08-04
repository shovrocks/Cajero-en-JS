var cliente_usuario = "NEL"
var cliente_contrasena = "NULL"

//Aqui van las cantidades de billetes
var billetes = [];
billetes["b_quinientos"] = 15;
billetes["b_cien"] = 100;
billetes["b_cincuenta"] = 200;
billetes["b_veinte"] = 200;
billetes["b_diez"] = 200;
//Dinero actual es

var dinero_cajero = (billetes["b_quinientos"] * 500) + (billetes["b_cien"] * 100) + (billetes["b_cincuenta"] * 50) + (billetes["b_veinte"] * 20) + (billetes["b_diez"] * 10);



var usuarios = [];
//Aqui se definen el usuario y contraseña administrador
usuarios["admin"] = [];
usuarios["admin"]["user"] = "admin";
usuarios["admin"]["pass"] = "root";
usuarios["admin"]["pisto"] = (billetes["b_quinientos"] * 500) + (billetes["b_cien"] * 100) + (billetes["b_cincuenta"] * 50) + (billetes["b_veinte"] * 20) + (billetes["b_diez"] * 10);

//Aqui se definen los usuarios y contraseñas de clientes
usuarios["jeova1"] = [];
usuarios["jeova1"]["user"] = "jeova1";
usuarios["jeova1"]["pass"] = "cuenta1";
usuarios["jeova1"]["pisto"] = 10000;

usuarios["jeova2"] = [];
usuarios["jeova2"]["user"] = "jeova2";
usuarios["jeova2"]["pass"] = "cuenta2";
usuarios["jeova2"]["pisto"] = 1000;

//Aqui se define lo que pasa cuando se UTILIZA el botón de la primera página
function pasar_a_acciones() {
  cliente_usuario = document.getElementById("usuario_input").value;
  cliente_contrasena = document.getElementById("contrasena_input").value;

  //Se verifica usuario y contraseña
  if (cliente_usuario == usuarios["admin"]["user"] && cliente_contrasena == usuarios["admin"]["pass"]) {
    document.getElementById('p_acciones_admin').style = "display:block";
    document.getElementById('p_bienvenida').style = "display:none";
    document.getElementById('dinero_en_cajero').value = dinero_cajero;

  } else if (cliente_usuario == usuarios["jeova1"]["user"] && cliente_contrasena == usuarios["jeova1"]["pass"] || cliente_usuario == usuarios["jeova2"]["user"] && cliente_contrasena == usuarios["jeova2"]["pass"]) {
    //Si los usuarios colocan bien la información, enviar a página de acciones
    document.getElementById('p_bienvenida').style = "display:none";
    document.getElementById('p_acciones_clientes').style = "display:block";
  } else {
    alert("DATOS INCORRECTOS, REVISAR INFORMACIÓN.")
  }


}

function pasar_a_gestion() {
  document.getElementById('p_depositos').style = "display:block";
  document.getElementById('p_depositos_clientes').style = "display:none";
  document.getElementById('p_depositos_admin').style = "display:block";
  document.getElementById('p_boton_admin').style = "display:block";
  document.getElementById('p_boton_cliente').style = "display:none";



}

function pasar_a_retiros() {

  document.getElementById('p_bienvenida').style = "display:none";
  document.getElementById('p_acciones_clientes').style = "display:none";
  document.getElementById('p_retiros').style = "display:block";
  document.getElementById('p_saldos').style = "display:none";

}

function pasar_a_depositos() {

  document.getElementById('p_bienvenida').style = "display:none";
  document.getElementById('p_acciones_clientes').style = "display:none";
  document.getElementById('p_depositos_clientes').style = "display:none";
  document.getElementById('p_retiros').style = "display:none";
  document.getElementById('p_saldos').style = "display:none";
  document.getElementById('p_depositos').style = "display:block";
  document.getElementById('p_depositos_clientes').style = "display:block";
  document.getElementById('p_boton_cliente').style = "display:block";
}

function realizar_deposito() {
  var billetes_d = [];
  billetes_d["d_quinientos"] = document.getElementById('bdepositados500').value;
  billetes_d["d_cien"] = document.getElementById('bdepositados100').value;
  billetes_d["d_cincuenta"] = document.getElementById('bdepositados50').value;
  billetes_d["d_veinte"] = document.getElementById('bdepositados20').value;
  billetes_d["d_diez"] = document.getElementById('bdepositados10').value;

  billetes["b_quinientos"] = parseInt(billetes["b_quinientos"]) + parseInt(billetes_d["d_quinientos"]);
  billetes["b_cien"] = parseInt(billetes["b_cien"]) + parseInt(billetes_d["d_cien"]);
  billetes["b_cincuenta"] = parseInt(billetes["b_cincuenta"]) + parseInt(billetes_d["d_cincuenta"]);
  billetes["b_veinte"] = parseInt(billetes["b_veinte"]) + parseInt(billetes_d["d_veinte"]);
  billetes["b_diez"] = parseInt(billetes["b_diez"]) + parseInt(billetes_d["d_diez"]);

  usuarios[cliente_usuario]["pisto"] = (usuarios[cliente_usuario]["pisto"] + (billetes_d["d_quinientos"] * 500) + (billetes_d["d_cien"] * 100) + (billetes_d["d_cincuenta"] * 50) + (billetes_d["d_veinte"] * 20) + (billetes_d["d_diez"] *
  10));
  dinero_cajero = dinero_cajero + (billetes_d["d_quinientos"] * 500) + (billetes_d["d_cien"] * 100) + (billetes_d["d_cincuenta"] * 50) + (billetes_d["d_veinte"] * 20) + (billetes_d["d_diez"] * 10);

  alert(cliente_usuario + " su depósito es de " + ((billetes_d["d_quinientos"] * 500) + (billetes_d["d_cien"] * 100) + (billetes_d["d_cincuenta"] * 50) + (billetes_d["d_veinte"] * 20) + (billetes_d["d_diez"] * 10)));

  document.getElementById('dinero_en_cajero').value = dinero_cajero;
}

function realizar_retiro_admin() {
  var billetes_d = [];
  billetes_d["d_quinientos"] = document.getElementById('bdepositados500').value;
  billetes_d["d_cien"] = document.getElementById('bdepositados100').value;
  billetes_d["d_cincuenta"] = document.getElementById('bdepositados50').value;
  billetes_d["d_veinte"] = document.getElementById('bdepositados20').value;
  billetes_d["d_diez"] = document.getElementById('bdepositados10').value;

  billetes["b_quinientos"] = parseInt(billetes["b_quinientos"]) - parseInt(billetes_d["d_quinientos"]);
  billetes["b_cien"] = parseInt(billetes["b_cien"]) - parseInt(billetes_d["d_cien"]);
  billetes["b_cincuenta"] = parseInt(billetes["b_cincuenta"]) - parseInt(billetes_d["d_cincuenta"]);
  billetes["b_veinte"] = parseInt(billetes["b_veinte"]) - parseInt(billetes_d["d_veinte"]);
  billetes["b_diez"] = parseInt(billetes["b_diez"]) - parseInt(billetes_d["d_diez"]);

  usuarios[cliente_usuario]["pisto"] = usuarios[cliente_usuario]["pisto"] - (billetes_d["d_quinientos"] * 500) - (billetes_d["d_cien"] * 100) - (billetes_d["d_cincuenta"] * 50) - (billetes_d["d_veinte"] * 20) - (billetes_d["d_diez"] * 10);

  dinero_cajero = dinero_cajero - (billetes_d["d_quinientos"] * 500) - (billetes_d["d_cien"] * 100) - (billetes_d["d_cincuenta"] * 50) - (billetes_d["d_veinte"] * 20) - (billetes_d["d_diez"] * 10);

  alert(cliente_usuario + " su retiro es de " + ((billetes_d["d_quinientos"] * 500) + (billetes_d["d_cien"] * 100) + (billetes_d["d_cincuenta"] * 50) + (billetes_d["d_veinte"] * 20) + (billetes_d["d_diez"] * 10)));

  document.getElementById('dinero_en_cajero').value = dinero_cajero;

}


//Aqui viene el código de funcionamiento de ingreso de monto de RETIROS
const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function inputDigit(digit) {
  const {
    displayValue,
    waitingForSecondOperand
  } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue =
      displayValue === '0' ? digit : displayValue + digit;
  }
}

function inputDecimal(dot) {
  if (calculator.waitingForSecondOperand === true) {
    calculator.displayValue = '0.';
    calculator.waitingForSecondOperand = false;
    return;
  }

  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}

function handleOperator(nextOperator) {
  const {
    firstOperand,
    displayValue,
    operator
  } = calculator;
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }

  if (firstOperand == null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const currentValue = firstOperand || 0;
    const result = calculate(currentValue, inputValue, operator);

    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}

function calculate(firstOperand, secondOperand, operator) {
  if (operator === '+') {
    return firstOperand + secondOperand;
  } else if (operator === '-') {
    return firstOperand - secondOperand;
  } else if (operator === '*') {
    return firstOperand * secondOperand;
  } else if (operator === '/') {
    return firstOperand / secondOperand;
  }

  return secondOperand;
}

function resetCalculator() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
}

function updateDisplay() {
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', event => {
  const {
    target
  } = event;
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('all-clear')) {
    resetCalculator();
    updateDisplay();
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});
// aqui termina ese churro


function retirar_dinero() {
  var cantidad_retiro = parseInt(document.getElementById("monto").value);
  if (cantidad_retiro > 15000) {
    alert("SOLO SE PERMITEN RETIROS DE HASTA 15000 LEMPIRAS");
    resetCalculator();
    updateDisplay();
  } else if (cantidad_retiro > dinero_cajero) {
    alert("LA OPERACIÓN NO SE PUEDE REALIZAR. REGRESE OTRO DÍA A VER SI TIENE SUERTE.");
    resetCalculator();
    updateDisplay();
  } else if (cantidad_retiro > usuarios[cliente_usuario]["pisto"]) {
    alert("USTED NO TIENE PISTO. VAYA A TRABAJAR")
  } else if (cantidad_retiro % 10 != 0) {
    alert("SOLO PUEDE RETIRAR MÚLTIPLOS DE 10, REVISAR MONTO DE RETIRO");
    resetCalculator();
    updateDisplay();
  } else {
    //Aquí restamos el saldo de la cuenta del cliente
    usuarios[cliente_usuario]["pisto"] -= cantidad_retiro;
    //Aqui van las cantidades de billetes
    var billetes_r = [];
    billetes_r["r_quinientos"] = 0;
    billetes_r["r_cien"] = 0;
    billetes_r["r_cincuenta"] = 0;
    billetes_r["r_veinte"] = 0;
    billetes_r["r_diez"] = 0;
    if (billetes["b_quinientos"] >= Math.floor(cantidad_retiro / 500)) {
      billetes_r["r_quinientos"] = Math.floor(cantidad_retiro / 500);
      cantidad_retiro = cantidad_retiro - (Math.floor(cantidad_retiro / 500) * 500);
    } else {
      billetes_r["r_quinientos"] = billetes["b_quinientos"];
      cantidad_retiro = cantidad_retiro - (billetes_r["r_quinientos"] * 500);
    }
    if (billetes["b_cien"] >= Math.floor(cantidad_retiro / 100)) {
      billetes_r["r_cien"] = Math.floor(cantidad_retiro / 100);
      cantidad_retiro = cantidad_retiro - (Math.floor(cantidad_retiro / 100) * 100);
    } else {
      billetes_r["r_cien"] = billetes["b_cien"];
      cantidad_retiro = cantidad_retiro - (billetes_r["r_cien"] * 100);
    }

    if (billetes["b_cincuenta"] >= Math.floor(cantidad_retiro / 50)) {
      billetes_r["r_cincuenta"] = Math.floor(cantidad_retiro / 50);
      cantidad_retiro = cantidad_retiro - (Math.floor(cantidad_retiro / 50) * 50);
    } else {
      billetes_r["r_cincuenta"] = billetes["b_cincuenta"];
      cantidad_retiro = cantidad_retiro - (billetes_r["r_cincuenta"] * 50);
    }

    if (billetes["b_veinte"] >= Math.floor(cantidad_retiro / 20)) {
      billetes_r["r_veinte"] = Math.floor(cantidad_retiro / 20);
      cantidad_retiro = cantidad_retiro - (Math.floor(cantidad_retiro / 20) * 20);
    } else {
      billetes_r["r_veinte"] = billetes["b_veinte"];
      cantidad_retiro = cantidad_retiro - (billetes_r["r_veinte"] * 20);
    }

    if (billetes["b_diez"] >= Math.floor(cantidad_retiro / 10)) {
      billetes_r["r_diez"] = Math.floor(cantidad_retiro / 10);
      cantidad_retiro = cantidad_retiro - (Math.floor(cantidad_retiro / 10) * 10);
    } else {
      billetes_r["r_diez"] = billetes["b_diez"];
      cantidad_retiro = cantidad_retiro - (billetes_r["r_diez"] * 10);
    }
    document.getElementById('bretirados500').value = billetes_r["r_quinientos"];
    document.getElementById('bretirados100').value = billetes_r["r_cien"];
    document.getElementById('bretirados50').value = billetes_r["r_cincuenta"];
    document.getElementById('bretirados20').value = billetes_r["r_veinte"];
    document.getElementById('bretirados10').value = billetes_r["r_diez"];
    alert("Su retiro es de" + (document.getElementById("monto").value));
    resetCalculator();
    updateDisplay();
    billetes["b_quinientos"] -= billetes_r["r_quinientos"];
    billetes["b_cien"] -= billetes_r["r_cien"];
    billetes["b_cincuenta"] -= billetes_r["r_cincuenta"];
    billetes["b_veinte"] -= billetes_r["r_veinte"];
    billetes["b_diez"] -= billetes_r["r_diez"];
    dinero_cajero = (billetes["b_quinientos"] * 500) + (billetes["b_cien"] * 100) + (billetes["b_cincuenta"] * 50) + (billetes["b_veinte"] * 20) + (billetes["b_diez"] * 10);
  }
}

function retirar_billetes() {
  document.getElementById('bretirados500').value = "";
  document.getElementById('bretirados100').value = "";
  document.getElementById('bretirados50').value = "";
  document.getElementById('bretirados20').value = "";
  document.getElementById('bretirados10').value = "";
  alert("GRACIAS POR USAR BANCO BONITO");
  document.getElementById('p_bienvenida').style = "display:block";
  document.getElementById('p_acciones_clientes').style = "display:none";
  document.getElementById('p_retiros').style = "display:none";
  document.getElementById('usuario_input').value = "";
  document.getElementById('contrasena_input').value = "";
}

function pasar_a_saldos() {
  document.getElementById('p_bienvenida').style = "display:none";
  document.getElementById('p_acciones_clientes').style = "display:none";
  document.getElementById('p_retiros').style = "display:none";
  document.getElementById('p_saldos').style = "display:block";
  document.getElementById('p_depositos').style = "display:none";
  document.getElementById('nombre_cliente').innerHTML += '<br>' + cliente_usuario;
  document.getElementById('saldo_usuario').value = usuarios[cliente_usuario]["pisto"];
}

function salir() {
  alert("GRACIAS POR USAR BANCO BONITO");
  document.getElementById('p_bienvenida').style = "display:block";
  document.getElementById('p_acciones_clientes').style = "display:none";
  document.getElementById('p_retiros').style = "display:none";
  document.getElementById('p_saldos').style = "display:none";
  document.getElementById('usuario_input').value = "";
  document.getElementById('contrasena_input').value = "";
  document.getElementById('p_depositos_clientes').style = "display:none";
  document.getElementById('p_depositos_admin').style = "display:none";
  document.getElementById('p_boton_cliente').style = "display:none";
}
