// Countdown Timer
function updateCountdown() {
    const now = new Date();
    const targetDate = new Date();
    
    // Set target to tomorrow midnight
    targetDate.setDate(targetDate.getDate() + 1);
    targetDate.setHours(0, 0, 0, 0);
    
    const diff = targetDate - now;
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animation on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.instrument-card, .testimonial-card, .featured-instrument');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animated elements
document.querySelectorAll('.instrument-card, .testimonial-card, .featured-instrument').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Efeito de digitação no título (opcional)
function typeWriter(element, text, i = 0) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(element, text, i), 100);
    }
}

// Iniciar efeito de digitação quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.header-content h1');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        typeWriter(title, text);
    }
});

// Adicionar classe quando o usuário rola para baixo
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Contador de cópias restantes (gatilho de escassez)
function updateRemainingCopies() {
    const counter = document.getElementById('remaining-copies');
    if (counter) {
        let copies = 17;
        const interval = setInterval(() => {
            copies--;
            counter.textContent = copies;
            if (copies <= 5) {
                counter.style.color = '#ff6b6b';
                counter.style.fontWeight = 'bold';
            }
            if (copies <= 0) {
                clearInterval(interval);
                counter.textContent = "0 - ESGOTANDO!";
            }
        }, 60000); // Diminui 1 cópia a cada minuto
    }
}

document.addEventListener('DOMContentLoaded', updateRemainingCopies);