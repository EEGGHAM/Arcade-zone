// =============================================
//  ARCADE ZONE — script.js
// =============================================

let currentUrl = '';

// ---- Open game modal ----
function openGame(url, name) {
  currentUrl = url;
  document.getElementById('modalTitle').textContent = name;
  document.getElementById('modalExternal').href = url;
  document.getElementById('noticeName').textContent = name;
  document.getElementById('noticeLink').href = url;

  // Reset to notice view
  document.getElementById('embedNotice').style.display = 'flex';
  document.getElementById('gameFrame').style.display = 'none';
  document.getElementById('gameFrame').src = '';

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ---- Try embedding anyway ----
function tryEmbed() {
  const frame = document.getElementById('gameFrame');
  frame.src = currentUrl;
  frame.style.display = 'block';
  document.getElementById('embedNotice').style.display = 'none';
}

// ---- Close modal ----
function closeGame() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('gameFrame').src = '';
  document.body.style.overflow = '';
}

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeGame();
});

// ---- Category filter ----
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const filter = link.dataset.filter;

    // Update active nav
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // Filter cards
    document.querySelectorAll('.game-card').forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });

    // Scroll to games
    document.getElementById('games').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ---- Card click opens game too ----
document.querySelectorAll('.game-card').forEach(card => {
  card.addEventListener('click', e => {
    // Only trigger if not clicking the button directly
    if (!e.target.classList.contains('play-small')) {
      const btn = card.querySelector('.play-small');
      if (btn) btn.click();
    }
  });
});

// ---- Subtle entrance animations ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.game-card, .featured-card').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s`;
  observer.observe(el);
});
