// für das einfügen von HTML Inhalt als Template
async function includeHTML() {
  let includeElements = document.querySelectorAll("[w3-include-html]");
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = "Page not found";
    }
  }
}

// Für das Kontaktformular
function validateForm() {
  var vorname = document.getElementById("vorname").value;
  var nachname = document.getElementById("nachname").value;
  var email = document.getElementById("email").value;
  var nachricht = document.getElementById("nachricht").value;

  if (vorname === "" || nachname === "" || email === "" || nachricht === "") {
    alert("Bitte füllen Sie alle Felder aus.");
    return false;
  } else {
    alert("Formular erfolgreich abgesendet!");
    // Hier könntest du weitere Aktionen ausführen, z. B. das Formular zurücksetzen.
    return true; // Das Formular wird abgesendet
  }
}

// Zutatenrechner
let table = document.getElementById("myTable");

let originalValues = [];

function zutatenrechner() {
  var crowdInput = document.getElementById("multiplier");
  var crowd = parseFloat(crowdInput.value);

  if (isNaN(crowd) || crowd <= 0) {
    crowdInput.value = "1";
    crowd = 1;
    zutatenrechner();
 }
  else {
    let valueCells = document.querySelectorAll(".value");
    valueCells.forEach(function (cell) {
      let originalValue = parseFloat(cell.textContent);
      if (!isNaN(originalValue)) {
        originalValues.push(originalValue);
      }
    });
    let calculateButton = document.getElementById("calculateButton");
    multiplier = parseFloat(document.getElementById("multiplier").value);
    valueCells.forEach(function (cell, index) {
      let originalValue = originalValues[index];
      let newValue = originalValue * multiplier;
      cell.textContent = newValue;
    });
  }
}