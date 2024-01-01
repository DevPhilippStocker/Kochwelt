// für die Wechselnde Anzeige von Rezepten alle 10 Sekunden
const items = [
  {
      topic: "Wiener Schnitzel",
      text: "Ein Klassiker der österreichischen Küche, das Wiener Schnitzel, ist ein einfaches, aber köstliches Gericht. Zarte, panierte Fleischschnitzel, knusprig gebraten und mit einer frischen Zitronenscheibe garniert, sind ein wahres Gaumenfest. Begleitet von knusprigen Pommes frites oder einem erfrischenden Salat, ist das Wiener Schnitzel ein kulinarisches Erlebnis, das die Herzen der Feinschmecker im Sturm erobert. Erfahren Sie, wie Sie dieses beliebte Gericht in unserer einfachen Anleitung zubereiten können, um einen Hauch von Wiener Eleganz in Ihre Küche zu bringen",
      imgSrc: "img/schnitzel.jpg",
      recipeLink: "rezept1.html",
  },
  {
      topic: "Honig-Senf Hähnchen mit Gemüse",
      text: "Dieses Gericht ist nicht nur einfach zuzubereiten, sondern bietet auch eine perfekte Kombination aus süßem Honig, würzigem Senf und zartem Hähnchen, die mit dem knackigen Gemüse harmoniert. Es ist ein geschmackliches Festmahl, das sowohl alltäglich als auch für besondere Anlässe geeignet ist. Guten Appetit!",
      imgSrc: "img/gulasch.jpg",
      recipeLink: "rezept2.html",
  },
  {
      topic: "Spaghetti Bolognese",
      text: "Nudeln sind ein Klassiker und gehen immer. Ob Groß, ob Klein jeder hat sie gern.",
      imgSrc: "img/bolognese.jpg",
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
  const imagelink = document.getElementById("image").querySelector("a"); // Das Element, das das Bild umgibt

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
    imagelink.setAttribute("href", currentItem.recipeLink); // Hier wird die Verlinkung des Bildes aktualisiert

    topic.style.opacity = 1;
    text.style.opacity = 1;
    image.style.opacity = 1;
    button.style.opacity = 1;
    imagelink.style.opacity = 1;

    currentItemIndex = (currentItemIndex + 1) % items.length;
  }, 500);
}

// Wechselt alle 10 Sekunden
setInterval(updateContent, 10000);
