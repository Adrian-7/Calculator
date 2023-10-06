let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1); // Se elimină ultimul caracter
  document.getElementById("display").value = displayValue;
}

function calculateResult() {
  try {
    displayValue = eval(displayValue);
    document.getElementById("display").value = displayValue;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function calculateResult() {
  try {
    // Înlocuiți simbolul "^" cu "**" pentru a efectua calculul la putere
    displayValue = displayValue.replace(/\^/g, "**");
    // Evaluați expresia actualizată
    displayValue = eval(displayValue);
    document.getElementById("display").value = displayValue;
  } catch (error) {
    document.getElementById("display").value = "Eroare";
  }
}
