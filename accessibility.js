// Enlarge Text Button
const enlargeTextBtn = document.getElementById("enlarge-text-btn");
let isTextEnlarged = false;

enlargeTextBtn.addEventListener("click", () => {
    document.body.classList.toggle("large-text");
    isTextEnlarged = !isTextEnlarged;
    enlargeTextBtn.textContent = isTextEnlarged ? "Reset Text Size" : "Enlarge Text";
});

// Toggle Color Scheme Button
const toggleColorBtn = document.getElementById("toggle-color-btn");
let isHighContrast = false;

toggleColorBtn.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
    isHighContrast = !isHighContrast;
    toggleColorBtn.textContent = isHighContrast ? "Standard Color Scheme" : "Toggle Color Scheme";
});

function displayAltText() {
    const images = document.querySelectorAll('#image-gallery img');
    const altTextDisplay = document.getElementById('altTextDisplay');

    // Clear previous alt text if any
    altTextDisplay.innerHTML = '';

    // Loop through images and add alt text to display area
    images.forEach((img, index) => {
        const altText = document.createElement('p');
        altText.innerText = `Image ${index + 1}: ${img.alt}`;
        altTextDisplay.appendChild(altText);
    });
}
