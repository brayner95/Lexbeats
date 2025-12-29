const beatsData = [
    { title: "LAS PACAS Detroit Trap Beat 2025", bpm: 140, type: "Detroit Trap", price: "$29.99", videoId: "RtpIXrh1ve0" },
    { title: "GYALES Dancehall Beat 2025", bpm: 100, type: "Dancehall", price: "$24.99", videoId: "HWAIbCTGtv0" },
    { title: "MASALVEO Reggaeton Beat 2025", bpm: 92, type: "Reggaeton", price: "$34.99", videoId: "R8bYY1-UDaA" },
    { title: "TE OLVIDÉ Reggaeton Beat 2025", bpm: 90, type: "Reggaeton", price: "$29.99", videoId: "HG2z5mSTn3A" },
    { title: "BÁILAME Afrobeat Type Beat 2024", bpm: 105, type: "Afrobeat", price: "$39.99", videoId: "qUqgv0nqMp8" },
    { title: "MALDAD Reggaeton Beat 2024", bpm: 94, type: "Reggaeton", price: "$29.99", videoId: "Dj8romuPYcY" },
    { title: "CHIMBITA Reggaeton Beat 2024", bpm: 92, type: "Reggaeton", price: "$29.99", videoId: "d_EeKg5bp3s" }
];

function loadBeats() {
    const grid = document.getElementById('beats-grid');
    if (!grid) return;

    grid.innerHTML = beatsData.map(beat => `
        <div class="beat-card" style="opacity: 0; transform: translateY(20px); transition: all 0.6s ease;">
            ${beat.videoId ?
            `<iframe width="100%" height="200" src="https://www.youtube.com/embed/${beat.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 10px; margin-bottom: 1rem;"></iframe>`
            : ''}
            <h3>${beat.title}</h3>
            <p style="color: #a0a0a0; margin: 0.5rem 0;">${beat.type} • ${beat.bpm} BPM</p>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem;">
                <span style="font-weight: 800; color: #00d4ff;">${beat.price}</span>
                <button style="padding: 0.5rem 1rem; font-size: 0.8rem; border-radius: 15px;" class="primary-btn">Añadir</button>
            </div>
        </div>
    `).join('');

    // Animación de entrada
    const cards = grid.querySelectorAll('.beat-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

document.addEventListener('DOMContentLoaded', loadBeats);

// Smooth scroll para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* Hamburger Menu Logic */
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent bubbling issues
            // Toggle Nav
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('toggle');
            }
        });
    }

    // Close menu when a link is clicked
    if (links) {
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('toggle');
            });
        });
    }
});
