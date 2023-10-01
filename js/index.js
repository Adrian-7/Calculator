const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  attempts++;

  if (isNaN(guess) || guess < 1 || guess > 100) {
    setMessage("Introduceți un număr valid între 1 și 100.");
    return;
  }

  if (guess === randomNumber) {
    setMessage(
      `Felicitări! Ați ghicit numărul ${randomNumber} în ${attempts} încercări.`
    );
    document.getElementById("guess").disabled = true;
  } else {
    const difference = Math.abs(guess - randomNumber);
    let message = "";

    if (difference <= 10) {
      message = "Încălzire!";
    } else {
      message = "Rece!";
    }

    setMessage(`${message} Mai încercați!`);
  }
}

function setMessage(msg) {
  document.getElementById("message").textContent = msg;
}
