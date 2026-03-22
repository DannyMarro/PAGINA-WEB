// --- INICIALIZAR ANIMACIONES AOS ---
AOS.init({
    duration: 800, // Duración por defecto (0.8s)
    easing: 'ease-out-quad', // Efecto suave
    once: true // Solo animar la primera vez que se ve
});

// --- LÓGICA DEL MENÚ HAMBURGUESA ---
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.nav-link'); // Todas las opciones

function toggleMenu() {
    menuToggle.classList.toggle('open');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
}

// Abrir/Cerrar al hacer clic en el botón
menuToggle.addEventListener('click', toggleMenu);

// Cerrar al hacer clic en el fondo oscuro
overlay.addEventListener('click', toggleMenu);

// ✅ CIERRE AUTOMÁTICO AL HACER CLIC EN UNA OPCIÓN
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Solo cerramos si el menú está abierto (buena práctica)
        if (sidebar.classList.contains('open')) {
            toggleMenu();
        }
    });
});


// --- 🎵 EXTRA: LÓGICA DE MÚSICA DE FONDO ---
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-control');

// Volumen bajo por defecto (no invasivo)
music.volume = 0.3; 

musicBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicBtn.classList.add('playing');
        musicBtn.textContent = '🔊'; // Icono de sonido activo
    } else {
        music.pause();
        musicBtn.classList.remove('playing');
        musicBtn.textContent = '🎵'; // Icono por defecto
    }
});
