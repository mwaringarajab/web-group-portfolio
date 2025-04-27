// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Toggle "Hire Me" button
const hireMeButton = document.querySelector('.hire-me-btn');
hireMeButton.addEventListener('click', function (e) {
    e.preventDefault();
    alert('Thank you for your interest! I will get in touch with you soon.');
});

// Handle the secondary button in the Hero Section
const portfolioButton = document.querySelector('.hero .btn.secondary');
portfolioButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'https://your-portfolio-link.com'; // Replace with your portfolio link
});

// Scroll Animation for Stats Section
window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.stats');
    const statsOffset = statsSection.offsetTop;
    const statsHeight = statsSection.offsetHeight;
    const windowHeight = window.innerHeight;
    
    if (window.scrollY + windowHeight > statsOffset + statsHeight / 2) {
        const stats = document.querySelectorAll('.stat h3');
        stats.forEach(stat => {
            let currentValue = 0;
            const targetValue = parseInt(stat.textContent);
            const interval = setInterval(() => {
                currentValue += 5;
                stat.textContent = currentValue;
                if (currentValue >= targetValue) clearInterval(interval);
            }, 50);
        });
    }
});

// Toggle skills progress on scroll
window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('.skills');
    const skillsOffset = skillsSection.offsetTop;
    const skillsHeight = skillsSection.offsetHeight;
    const windowHeight = window.innerHeight;

    if (window.scrollY + windowHeight > skillsOffset + skillsHeight / 2) {
        const skillBars = document.querySelectorAll('.skill-bar .progress');
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = width; // trigger the animation
        });
    }
});
