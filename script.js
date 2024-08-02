// für das einfügen von HTML Inhalt als Template
async function includeHTML() {
  let includeElements = document.querySelectorAll("[w3-include-html]");
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html");
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = "Page not found";
    }
  }
}

// für die Wechselnde Anzeige von Rezepten alle 10 Sekunden
const items = [
  {
      topic: "selbstgemachte Pizza",
      text: "Verwöhnen Sie Ihren Gaumen mit selbstgemachter Pizza, wo knuspriger Teig, reichhaltige Tomatensauce, saftiger Belag und geschmolzener Käse eine unwiderstehliche kulinarische Symphonie bilden – ein Genuss, den Sie nach Herzenslust kreieren können!",
      imgSrc: "img/pizza.jpg",
      recipeLink: "rezept1.html",
  },
  {
      topic: "Fladenbrot",
      text: "Genießen Sie herrlich duftende, selbstgemachte Fladenbrote mit einer zarten Kruste und weichem Inneren, perfekt als vielseitige Beilage oder Basis für köstliche Wraps und Sandwiches!",
      imgSrc: "img/fladenbrot.jpg",
      recipeLink: "rezept2.html",
  },
  {
      topic: "Cheesecake",
      text: "Verführen Sie Ihren Gaumen mit einem himmlischen Beeren-Cheesecake, wo die samtige Creme auf einem zarten Keks-Krümelboden ruht und von einer Fülle saftiger Beeren gekrönt wird – ein sinnliches Geschmackserlebnis, das Frische und Süße in jedem Bissen vereint!",
      imgSrc: "img/cheescake.jpg",
      recipeLink: "rezept3.html",
  },
  {
      topic: "Rezept des Tages | Griechischer Bauernsalat",
      text: "Bereit für eine kulinarische Reise ins sonnige Griechenland? Unser nächstes Rezept führt dich direkt an die Ägäis-Küste, wo wir den klassischen griechischen Bauernsalat zubereiten werden. Mit saftigen Tomaten, knackigen Gurken, herzhaftem Feta-Käse und aromatischen Oliven bietet dieser Salat einen Geschmack von mediterranem Himmel.",
      imgSrc: "img/salad.jpg",
      recipeLink: "rezept4.html",
  },
];

let currentItemIndex = 0;

function updateContent() {
  const topic = document.getElementById("topic");
  const text = document.getElementById("text");
  const image = document.getElementById("left_pic");
  const button = document.getElementById("recipe_button");
  const imagelink = document.getElementById("image").querySelector("a");

  topic.style.opacity = 0;
  text.style.opacity = 0;
  image.style.opacity = 0;
  button.style.opacity = 0;
  imagelink.style.opacity = 0;

  setTimeout(() => {
    const currentItem = items[currentItemIndex];
    topic.innerHTML = `<h2>${currentItem.topic}</h2>`;
    text.innerHTML = `<p>${currentItem.text}</p>`;
    image.src = currentItem.imgSrc;

    // Aktualisieren Sie sowohl die Verlinkung des Buttons als auch die des Bildes
    button.parentElement.setAttribute("href", currentItem.recipeLink);
    imagelink.setAttribute("href", currentItem.recipeLink); 

    topic.style.opacity = 1;
    text.style.opacity = 1;
    image.style.opacity = 1;
    button.style.opacity = 1;
    imagelink.style.opacity = 1;

    currentItemIndex = (currentItemIndex + 1) % items.length;
  }, 500);
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
      return true; 
  }
}


// Zutatenrechner
let table = document.getElementById("myTable");

let originalValues = [];

function zutatenrechner() {
  let valueCells = document.querySelectorAll(".value");
  valueCells.forEach(function (cell) {
    let originalValue = parseFloat(cell.textContent);
    if (!isNaN(originalValue)) {
      originalValues.push(originalValue);
    }
  });

  let calculateButton = document.getElementById("calculateButton");

  calculateButton.addEventListener("click", function () {
    let multiplier = parseFloat(document.getElementById("multiplier").value);

    valueCells.forEach(function (cell, index) {
      let originalValue = originalValues[index];
      let newValue = originalValue * multiplier;
      cell.textContent = newValue;
    });
  });
}
