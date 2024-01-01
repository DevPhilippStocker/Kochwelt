const topic = document.getElementById("topic");
        const text = document.getElementById("text");
        const image = document.getElementById("left_pic");
        const currentImage = document.getElementById("image");
        const button = document.getElementById("recipe_button")

        const items = [
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
                imgSrc: "Gruppenarbeit - Kochwelt/03 - Gruppenarbeit - Kochwelt/img/croissant.jpg"
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