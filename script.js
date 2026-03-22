// 1. INICIALIZAR ANIMACIONES AL HACER SCROLL (AOS)
AOS.init({
    duration: 1000, // Las cosas aparecen en 1 segundo
    easing: 'ease-out-back', 
    once: true 
});

// 2. LÓGICA DE TRADUCCIÓN (INGLÉS / ESPAÑOL)
const btnLang = document.getElementById('btn-lang');
const textsToChange = document.querySelectorAll('.lang');

if (btnLang) {
    btnLang.addEventListener('click', () => {
        // Si el botón dice EN, queremos pasar a Inglés
        const targetLanguage = btnLang.textContent === 'EN' ? 'en' : 'es';
        
        textsToChange.forEach(el => {
            const translation = el.getAttribute(`data-${targetLanguage}`);
            if (translation) {
                el.textContent = translation;
            }
        });

        // Cambiamos el texto del botón para la próxima vez
        btnLang.textContent = targetLanguage === 'en' ? 'ES' : 'EN';
    });
}

// 3. LÓGICA DE MÚSICA DE FONDO
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-control');

if (music && musicBtn) {
    music.volume = 0.2; // Volumen bajito para que sea elegante

    musicBtn.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            musicBtn.classList.add('playing');
            musicBtn.textContent = '🔊'; 
        } else {
            music.pause();
            musicBtn.classList.remove('playing');
            musicBtn.textContent = '🎵'; 
        }
    });
}
