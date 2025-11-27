// скролл эффект для хедера
window.addEventListener('scroll', () => {
  document.body.classList.toggle('scrolled', window.scrollY > 20);
});

// неоновые частицы
document.addEventListener('DOMContentLoaded', () => {
  const particlesContainer = document.querySelector('.neon-particles');
  if (!particlesContainer) return;

  const numParticles = 25;
  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('neon-particle');
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${6 + Math.random() * 4}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particle.style.width = `${3 + Math.random() * 6}px`;
    particle.style.height = particle.style.width;
    const hue = 300 + Math.random() * 40;
    particle.style.background = `radial-gradient(circle, hsl(${hue}, 100%, 70%) 0%, transparent 70%)`;
    particlesContainer.appendChild(particle);
  }
});

// Бургер меню
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const navMenu = document.getElementById('nav-menu');
  if (!burger || !navMenu) return;

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
});

// Тема светлая/темная
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  const applyTheme = (isLight) => {
    document.body.classList.toggle('light', isLight);
    themeToggle.innerHTML = isLight ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-pressed', isLight);
  };

  const saved = localStorage.getItem('sweetlife-theme');
  if (saved) applyTheme(saved === 'light');
  else applyTheme(window.matchMedia('(prefers-color-scheme: light)').matches);

  themeToggle.addEventListener('click', () => {
    const isLightNow = !document.body.classList.contains('light');
    applyTheme(isLightNow);
    localStorage.setItem('sweetlife-theme', isLightNow ? 'light' : 'dark');
  });
});