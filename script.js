document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DO CONTADOR DE TEMPO ---
    const startDate = new Date(2024, 6, 11, 0, 47, 0);
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateTimer() {
        const now = new Date();
        const diffInSeconds = Math.floor((now - startDate) / 1000);
        if (diffInSeconds < 0) {
            daysEl.innerText = 0;
            hoursEl.innerText = 0;
            minutesEl.innerText = 0;
            secondsEl.innerText = 0;
            return;
        }
        const d = Math.floor(diffInSeconds / (3600 * 24));
        const h = Math.floor((diffInSeconds % (3600 * 24)) / 3600);
        const m = Math.floor((diffInSeconds % 3600) / 60);
        const s = Math.floor(diffInSeconds % 60);
        daysEl.innerText = d;
        hoursEl.innerText = h < 10 ? '0' + h : h;
        minutesEl.innerText = m < 10 ? '0' + m : m;
        secondsEl.innerText = s < 10 ? '0' + s : s;
    }
    setInterval(updateTimer, 1000);
    updateTimer();

    // --- LÓGICA DA ANIMAÇÃO DE CORAÇÕES ---
    const heartsContainer = document.getElementById('hearts-container');
    const numberOfHearts = 50;
    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${5 + Math.random() * 10}s`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        // As linhas de tamanho foram removidas daqui para usar o tamanho fixo do CSS
        heartsContainer.appendChild(heart);
    }

    // --- LÓGICA DO SLIDESHOW DE FOTOS ---
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 4000;
        slides[currentSlide].style.display = 'block';
        function nextSlide() {
            slides[currentSlide].style.display = 'none';
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].style.display = 'block';
        }
        setInterval(nextSlide, slideInterval);
    }
});