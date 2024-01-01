// erzeugt eine temporäre div mit der class="overlay"
function openImage() {
    const imageUrl = document.getElementById('image').getAttribute('src'); // Get the image source dynamically
    const overlay = document.createElement("div");
    overlay.className = "overlay";

    // erzeugt eine temporäres img mit der class="enlarged-img"
    const enlargedImg = document.createElement("img");
    enlargedImg.className = "enlarged-img";
    enlargedImg.src = imageUrl;

    //CSS-Klasse beachten
    overlay.appendChild(enlargedImg);
    document.body.appendChild(overlay);

    //onclick auf Element um die function zu schließen
    overlay.onclick = function () {
      document.body.removeChild(overlay);
    };
  }