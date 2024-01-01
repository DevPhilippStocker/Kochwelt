// für das einfügen von HTML Inhalt als Template
async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

// für die Wechselnde Anzeige von Rezepten alle 5 Sekunden
const topic = document.getElementById("topic");
        const text = document.getElementById("text");
        const image = document.getElementById("left_pic");
        const currentImage = document.getElementById("image");
        const button = document.getElementById("recipe_button")

        const items = [
            {
                topic: "Rezept des Tages",
                text: "Text 2",
                imgSrc: "bild2.jpg"
            },
            {
                topic: "Titel 2",
                text: "Text 2",
                imgSrc: "bild2.jpg"
            },
            {
                topic: "Titel 3",
                text: "Text 3",
                imgSrc: "bild3.jpg"
            },
            {
                topic: "Französische Croissants",
                text: "Schmackhafte Croissants können auch zu Hause sehr einfach gebacken werden. Mit ca. 30 Minuten Aufwand kannst du ein wundervolles Frühstück zaubern.",
                imgSrc: "img/croissant.jpg"
            }
        ];

        let currentItemIndex = 0;

        function updateContent() {
            const topic = document.getElementById("topic");
            const text = document.getElementById("text");
            const image = document.getElementById("left_pic");
            const currentImage = document.getElementById("image");
            const button = document.getElementById("recipe_button")

            topic.style.opacity = 0;
            text.style.opacity = 0;
            image.style.opacity = 0;
            button.style.opacity = 0;

            setTimeout(() => {
                topic.innerHTML = `<h2>${items[currentItemIndex].topic}</h2>`;
                text.innerHTML = `<p>${items[currentItemIndex].text}</p>`;
                currentImage.src = items[currentItemIndex].imgSrc;

                topic.style.opacity = 1;
                text.style.opacity = 1;
                image.style.opacity = 1;
                button.style.opacity = 1;

                currentItemIndex = (currentItemIndex + 1) % items.length;
            }, 500);

        }

        setInterval(updateContent, 7500); // Wechselt alle 5 Sekunden

// Für das Kontaktformular
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var nachricht = document.getElementById("nachricht").value;

    if (name === "" || email === "" || nachricht === "") {
        alert("Bitte füllen Sie alle Felder aus.");
        return false;
    }
    else (
        alert("Vielen Dank für Ihre Nachricht. Unser Team wird die Nachricht bearbeiten und sich schnellmöglich bei Ihnen melden!")
    )
}