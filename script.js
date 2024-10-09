document.addEventListener('DOMContentLoaded', () => {
    // Name prompt and display
    document.getElementById('nameButton').addEventListener('click', function() {
        let userName = prompt("Please enter your name:");
        if (userName) {
            document.getElementById('nameDisplay').textContent = "Hello, " + userName + "!";
        }
    });

    // Clickable image that enlarges
    let profileImage = document.getElementById('profileImage');
    profileImage.addEventListener('click', function(event) {
        event.preventDefault();
        let img = profileImage.querySelector('img');
        if (img.classList.contains('enlarged-image')) {
            img.classList.remove('enlarged-image'); // Shrink the image back
        } else {
            img.classList.add('enlarged-image'); // Enlarge the image
        }
    });

    // Hover In and Hover Out for Navigation Items
    window.hoverIn = function(element) {
        element.querySelector('a').style.color = 'yellow';
    };

    window.hoverOut = function(element) {
        element.querySelector('a').style.color = 'white';
    };
});
