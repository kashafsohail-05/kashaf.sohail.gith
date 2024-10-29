// formHandler.js

// Function to handle form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect data from the form
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value, // Added phone number
            message: document.getElementById('message').value,
            referral: document.querySelector('input[name="referral"]:checked').value,
            features: Array.from(document.querySelectorAll('input[name="features"]:checked')).map(checkbox => checkbox.value),
            recommendation: document.getElementById('recommendation').value,
            additionalComments: document.getElementById('additionalComments').value,
        };

        // Store data in local storage
        localStorage.setItem('contactFormData', JSON.stringify(formData));

        // Alert the user
        alert('Thank you for your feedback!');

        // Clear the form
        form.reset();
    });
});
