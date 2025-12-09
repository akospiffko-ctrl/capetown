// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all day cards
document.querySelectorAll('.day-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Add current date highlighting
const today = new Date();
const currentDate = today.toISOString().split('T')[0];

// Highlight current day if within trip dates
document.querySelectorAll('.day-card').forEach(card => {
    const dayHeader = card.querySelector('.day-header h3');
    if (dayHeader) {
        const dayText = dayHeader.textContent;
        // Add special styling for current day (you can enhance this logic)
        if (dayText.includes('December') || dayText.includes('January')) {
            // This is a placeholder - you can add more sophisticated date matching
        }
    }
});

// Print functionality
function printItinerary() {
    window.print();
}

// Add print button if needed
const printButton = document.createElement('button');
printButton.textContent = '🖨️ Print Itinerary';
printButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    font-weight: 600;
    z-index: 999;
    transition: all 0.3s ease;
`;

printButton.addEventListener('mouseover', () => {
    printButton.style.transform = 'scale(1.05)';
});

printButton.addEventListener('mouseout', () => {
    printButton.style.transform = 'scale(1)';
});

printButton.addEventListener('click', printItinerary);
document.body.appendChild(printButton);

// Mobile menu toggle (if needed in future)
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
});

// Add transition to navbar
navbar.style.transition = 'transform 0.3s ease';

console.log('🇿🇦 South Africa Travel Guide loaded successfully!');
