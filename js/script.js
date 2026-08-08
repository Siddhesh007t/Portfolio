// --- Sticky Navbar ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- Smooth Scroll Reveal ---
const revealElements = document.querySelectorAll('.reveal');
const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -20px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); 
        }
    });
}, revealOptions);

revealElements.forEach(el => revealOnScroll.observe(el));

// --- Typing Animation ---
const words = ["systems engineering.", "low-level optimization.", "clean architecture."];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

const typingTextElement = document.querySelector('.typing-text');

function type() {
    if(!typingTextElement) return;

    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
        typingTextElement.textContent = currentWord.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        typingTextElement.textContent = currentWord.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    let speed = isDeleting ? 30 : 60;
    
    if (!isDeleting && currentCharIndex === currentWord.length) {
        speed = 2000; 
        isDeleting = true;
    } 
    else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        speed = 400; 
    }

    setTimeout(type, speed);
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 800);
});

// --- Project Card Spotlight Effect ---
// This tracks the mouse over cards to create a sleek glowing spotlight effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Smooth scroll routing fallback
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
