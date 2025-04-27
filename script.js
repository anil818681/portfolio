// Smooth scroll for navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Function to toggle project details
function toggleDetails(projectId) {
    const project = document.getElementById(projectId);
    project.classList.toggle('active');
}

// Typing effect logic
const texts = [
    "A passionate developer with expertise in Python.",
    "Skilled in SQL and data analytics.",
    "Building solutions to solve real-world problems.",
    "Let's connect and create something amazing!"
];
let currentTextIndex = 0;
let currentCharIndex = 0;
const typingElement = document.getElementById("typing-text");

function typeText() {
    if (currentTextIndex < texts.length) {
        if (currentCharIndex < texts[currentTextIndex].length) {
            typingElement.innerHTML += texts[currentTextIndex].charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(typeText, 80); // typing speed
        } else {
            // Move to the next sentence
            currentTextIndex++;
            currentCharIndex = 0;
            setTimeout(() => {
                typingElement.innerHTML = ''; // Clear the text for the next sentence
                typeText(); // Start typing the next sentence
            }, 1000); // Pause before starting the next text
        }
    } else {
        // Restart the loop
        currentTextIndex = 0;
        currentCharIndex = 0;
        typingElement.innerHTML = '';
        setTimeout(typeText, 1000);
    }
}

// Start typing effect when page loads
window.onload = typeText;
