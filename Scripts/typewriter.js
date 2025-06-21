// Typing effect for hero text
function initTypingEffect() {
    const words = ['engineering', 'design', 'creativity', 'hardware', 'electronics', 'innovation', 'mechatronics', 'buzzwords, AI, and synergy'];
    const typedTextElement = document.getElementById('typed-text');
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typedTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = 100;
        
        if (isDeleting) {
            typeSpeed = 50;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 1000; // Pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before next word
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
}

// Initialize typing effect when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTypingEffect();
});