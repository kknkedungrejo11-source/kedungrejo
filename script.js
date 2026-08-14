document.addEventListener('DOMContentLoaded', () => {

  // Toggle menu mobile
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // HANYA menutup menu saat diklik di HP (tidak lagi mengunci perpindahan halaman)
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });

  // Tombol panah hero (placeholder, karena hanya 1 foto)
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  const heroSlide = document.querySelector('.hero-slide');

  if (prevBtn && nextBtn && heroSlide) {
    function pulseSlide() {
      heroSlide.style.opacity = '0.6';
      setTimeout(() => { heroSlide.style.opacity = '1'; }, 250);
    }
    prevBtn.addEventListener('click', pulseSlide);
    nextBtn.addEventListener('click', pulseSlide);
  }

  // Simulasi penghitung kunjungan hari ini
  const visitCountEl = document.getElementById('visitCount');
  if (visitCountEl) {
    const storageKey = 'kedungrejo_visit_count_' + new Date().toISOString().slice(0, 10);
    let count = parseInt(localStorage.getItem(storageKey) || '16', 10);

    const alreadyVisited = sessionStorage.getItem('visited_today');
    if (!alreadyVisited) {
      count += 1;
      localStorage.setItem(storageKey, count);
      sessionStorage.setItem('visited_today', 'true');
    }

    visitCountEl.textContent = count;
  }
});