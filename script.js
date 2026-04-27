// ── Theme Toggle ──────────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');
const html        = document.documentElement;

function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    themeIcon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    localStorage.setItem('theme', theme);
}

// Load saved theme
applyTheme(localStorage.getItem('theme') || 'dark');

themeToggle.addEventListener('click', () => {
    applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});


// ── Mobile Menu ────────────────────────────────────────────
const menuToggle = document.getElementById('menuToggle');
const sideMenu   = document.getElementById('sideMenu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    sideMenu.classList.toggle('active');
    document.body.style.overflow = sideMenu.classList.contains('active') ? 'hidden' : '';
});

document.querySelectorAll('.menu-items a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        sideMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

sideMenu.addEventListener('click', e => {
    if (e.target === sideMenu) {
        menuToggle.classList.remove('active');
        sideMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});


// ── Header scroll shadow ───────────────────────────────────
window.addEventListener('scroll', () => {
    document.getElementById('header').style.boxShadow =
        window.scrollY > 10 ? '0 2px 20px rgba(0,0,0,0.3)' : 'none';
});


// ── FAQ Accordion ──────────────────────────────────────────
function toggleFaq(questionEl) {
    const item = questionEl.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
}


// ── Footer Year ────────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();
