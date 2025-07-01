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
    const elements = document.querySelectorAll('.instrument-card, .testimonial-card, .featured-instrument, .package-option, .cta-package');
    
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
document.querySelectorAll('.instrument-card, .testimonial-card, .featured-instrument, .package-option, .cta-package').forEach(element => {
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
            counter.textContent = copies + " cópias restantes";
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

// Efeito de máquina de escrever para o subtítulo
function typeWriterSubtitle() {
    const subtitle = document.querySelector('.header-content p');
    if (subtitle) {
        const text = subtitle.textContent;
        subtitle.textContent = '';
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 50);
    }
}

// Iniciar efeitos quando a página estiver totalmente carregada
window.addEventListener('load', function() {
    typeWriterSubtitle();
    
    // Adicionar efeito de brilho nos botões principais
    const mainButtons = document.querySelectorAll('.btn-package, .featured-btn, .btn-buy');
    mainButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = `0 0 15px ${this.style.backgroundColor || '#FF6B35'}`;
        });
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
    
    // Adicionar tooltip para os ícones
    const tooltipIcons = document.querySelectorAll('.feature-icon');
    tooltipIcons.forEach(icon => {
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip-text';
        tooltip.textContent = icon.parentElement.querySelector('.feature-text strong').textContent;
        icon.appendChild(tooltip);
    });
});

// Animação de pulsar para os pacotes
function pulsePackages() {
    const packages = document.querySelectorAll('.package-option');
    packages.forEach((pkg, index) => {
        setTimeout(() => {
            pkg.style.transform = 'scale(1.05)';
            setTimeout(() => {
                pkg.style.transform = '';
            }, 1000);
        }, index * 500);
    });
    
    setTimeout(pulsePackages, 3000);
}

// Iniciar animação de pulsar após 3 segundos
setTimeout(pulsePackages, 3000);

document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('sax-alto').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
    
    // Adiciona destaque
    const card = document.getElementById('sax-alto');
    card.classList.add('highlight');
    setTimeout(() => card.classList.remove('highlight'), 2000);
});




