// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Navigation active link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
    });
});

// Play button functionality
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Playing video...');
    });
});

// More info button
document.querySelectorAll('.btn-secondary').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('More information about the content...');
    });
});

// Movie card interaction
document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.movie-info h3').textContent;
        alert(`Playing: ${title}`);
    });

    card.addEventListener('mouseenter', () => {
        // Pause any animations if needed
    });

    card.addEventListener('mouseleave', () => {
        // Resume animations if needed
    });
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        console.log('Closing modal or alert');
    }
});

// Smooth scroll for navigation links
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

// Profile icon click
document.querySelector('.user-profile').addEventListener('click', () => {
    alert('Profile menu clicked!');
});

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    console.log('Netflix Clone loaded successfully!');
    // Set first nav link as active
    document.querySelector('.nav-link').classList.add('active');
});

// Dark mode toggle (optional feature)
let darkMode = true;

function toggleDarkMode() {
    darkMode = !darkMode;
    const root = document.documentElement;
    if (darkMode) {
        root.style.colorScheme = 'dark';
    } else {
        root.style.colorScheme = 'light';
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'd') {
        e.preventDefault();
        toggleDarkMode();
    }
});
