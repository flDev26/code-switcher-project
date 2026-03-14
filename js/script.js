// CODE CONTAINER ANIMATION
//- - - - - - - - - - - - - - - - - - - - -
// 1. Event Listener: Wait for the HTML to be fully loaded before running script
document.addEventListener("DOMContentLoaded", function() {
    // 2. DOM Manipulation: Selecting all tab buttons and all code blocks
    const tabs = document.querySelectorAll(".code-container__tab");
    const codeBlocks = document.querySelectorAll(".code-container__code");

    // 3. Loop: Attach a click listener to every single tab
    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            
            // 4. State Extraction: Get the language name from the 'data-language' attribute
            // 'this' refers to the specific tab that was clicked
            const language = this.getAttribute("data-language");

            // 5. DOM Manipulation: "Resetting" the UI
            // Remove the active (visible) class from all tabs and blocks first
            tabs.forEach(t => t.classList.remove("code-container__tab--active"));
            codeBlocks.forEach(c => c.classList.remove("code-container__code--active"));

            // 6. DOM Manipulation: "Updating" the UI
            // Add the active class to the clicked tab...
            this.classList.add("code-container__tab--active");
            
            // ...and find the specific code block using a Template Literal (the backticks)
            const activeBlock = document.querySelector(`.code-container__code--${language}`);
            activeBlock.classList.add("code-container__code--active");

            // 7. Library Function: Tell Prism.js to re-scan the new visible code
            // Without this, the colors (syntax highlighting) might disappear on switch
            Prism.highlightElement(activeBlock.querySelector(`code`));
        });
    });
});

// FOOTER ANIMATION
//- - - - - - - - - - - - - - - - - - - - -
// 1. DOM Manipulation: Selecting the parent container of the letters
const footer = document.querySelector('.footer__inner');
// 2. DOM Manipulation: Selecting all individual <span> elements (the letters) inside that parent
const footerSpans = footer.querySelectorAll('span');
// 3. Creating an 'IntersectionObserver' (A built-in Browser API/Object)
// This "observes" an element and runs a function when it enters the viewport
const observer = new IntersectionObserver(entries => {
    // 'entries' is an array of elements being watched
    entries.forEach(entry => {
        // Check if the footer has actually scrolled into view
        if (entry.isIntersecting) {
            // 4. Staggered Animation Logic: Loop through each letter
            footerSpans.forEach((span, index) => {
                // setTimeout is a built-in function to create a delay
                setTimeout(() => {
                    // DOM Manipulation: Add the CSS class that triggers the transition
                    span.classList.add('animate');
                }, index * 100); // Multiplying the index by 100ms creates the "stagger" (0ms, 100ms, 200ms...)
            });
            // 5. Optimization: Stop watching the footer once the animation has started
            observer.unobserve(footer); 
        }
    });
}, { threshold: 0.1 }); // Trigger when at least 10% of the footer is visible

// Start the observer on our footer element
observer.observe(footer);