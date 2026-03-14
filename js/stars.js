
// FALLING STAR ANIMATION
//- - - - - - - - - - - - - - - - - - - - -
// 1. Event Listener: Ensures the script waits for the page structure to exist
document.addEventListener('DOMContentLoaded', () => {
    // 2. Configuration: Setting how many stars we want to create
    const numStars = 10;
    // 3. Document Fragment (Optimization Object): 
    // Think of this as a "virtual folder." We add stars here first 
    // so we don't lag the browser by updating the real page 10 times.
    const starsContainer = document.createDocumentFragment();

    // 4. The Loop: Runs 10 times to generate 10 individual stars
    for (let i = 0; i < numStars; i++) {
        // 5. DOM Manipulation: Create a new <div> in the browser's memory
        const star = document.createElement('div');
        // 6. DOM Manipulation: Add the 'star' CSS class for styling (size, color, etc.)
        star.classList.add('star');

        // 7. Randomization Logic: Using Math.random() to make them look natural
        // Math.random() gives a number between 0 and 1 (e.g., 0.543)
        // Random horizontal position (0 to 100% of the viewport width)
        star.style.left = `${Math.random() * 100}vw`;
        // Random speed (between 10s and 50s)
        star.style.animationDuration = `${Math.random() * 40 + 10}s`;
        // Random start time so they don't all move at once
        star.style.animationDelay = `${Math.random() * 15}s`;

        // 8. Staging: Put the finished star into our "virtual folder"
        starsContainer.appendChild(star);
    }

    // 9. Final DOM Manipulation: "Dump" all 10 stars into the actual <body> at once
    document.body.appendChild(starsContainer);
});