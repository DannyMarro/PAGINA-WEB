// --- INICIALIZAR ANIMACIONES AOS ---
// (Estas hacen que los elementos aparezcan suavemente al bajar)
AOS.init({
    duration: 1000, // Duración un poco más lenta para elegancia (1s)
    easing: 'ease-out-back', // Efecto con un ligero rebote al final
    once: true // Solo animar la primera vez que se ve
});


// --- 🎵 EXTRA: LÓGICA DE MÚSICA DE FONDO ---
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-control');

// Volumen bajo por defecto (no invasivo)
music.volume = 0.2; 

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
