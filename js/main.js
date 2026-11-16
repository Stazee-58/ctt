/**
 * MAIN.JS - Logic Tương Tác Sổ Kỷ Niệm 11A2
 * Tri Ân Thầy Cô - Niên Khóa 2026–2027
 */

// ============================================================
// 1. DOM READY & INITIAL DATA BINDING FROM CONFIG
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Bind School & Class Information
  const schoolNameEl = document.getElementById('school-name-label');
  if (schoolNameEl) schoolNameEl.textContent = CONFIG.schoolName;

  document.querySelectorAll('.school-year').forEach(el => {
    el.textContent = `${CONFIG.className} · Niên khóa ${CONFIG.schoolYear}`;
  });

  document.querySelectorAll('.dedication-title').forEach(el => {
    el.textContent = `Gửi ${CONFIG.teacherName}`;
  });

  // Bind Media Paths
  const logoEl = document.getElementById('school-logo');
  if (logoEl) logoEl.src = CONFIG.logoSrc;

  const classImg = document.getElementById('class-photo');
  if (classImg) classImg.src = CONFIG.classPhotoSrc;

  const teacherImg = document.getElementById('teacher-photo');
  if (teacherImg) teacherImg.src = CONFIG.teacherPhotoSrc;

  const videoEl = document.getElementById('main-video');
  if (videoEl) {
    const src = videoEl.querySelector('source');
    if (src) src.src = CONFIG.videoSrc;
    if (CONFIG.videoPoster) videoEl.poster = CONFIG.videoPoster;
  }

  const musicEl = document.getElementById('bg-music');
  if (musicEl) musicEl.src = CONFIG.musicSrc;

  // Sync Student Names to Tree Blossom Tags
  if (Array.isArray(CONFIG.wishes)) {
    CONFIG.wishes.forEach((wish, idx) => {
      const node = document.getElementById(`flower-${idx}`);
      if (node) {
        const tag = node.querySelector('.blossom-tag');
        if (tag) {
          if (idx === 0) {
            tag.textContent = "Hiểu Minh";
            tag.style.display = '';
          } else if (idx === 11) {
            tag.textContent = "✦ 11A2 ✦";
            tag.style.display = '';
          } else {
            tag.textContent = '';
            tag.style.display = 'none';
          }
        }
        node.setAttribute('aria-label', (idx === 0) ? "Lời chúc của Hiểu Minh" : (idx === 11 ? "Lời chúc của Tập thể 11A2" : `Thông điệp tri ân số ${idx}`));
      }
    });
  }

  // Setup Ambient Dust & Parallax
  createDustMotes();
  setupParallax();
  setupThemeToggle();
});

// ============================================================
// 2. 3D INTRO BOOK OPENING SEQUENCE
// ============================================================
function openBook() {
  const cover = document.getElementById('book-cover-front');
  const overlay = document.getElementById('intro-overlay');
  if (!cover || !overlay) return;

  playChime(440);
  cover.classList.add('opening');

  setTimeout(() => {
    overlay.classList.add('fade-out');
    startMainExperience();
  }, 1400);

  setTimeout(() => {
    if (overlay && overlay.parentNode) overlay.remove();
  }, 2400);
}

function skipIntro() {
  const overlay = document.getElementById('intro-overlay');
  if (overlay && overlay.parentNode) overlay.remove();
  startMainExperience();
}

function startMainExperience() {
  // Stagger flower bloom sparkle
  const nodes = document.querySelectorAll('.blossom-node');
  nodes.forEach((node, idx) => {
    node.style.opacity = '0';
    node.style.transform = 'translate(-50%, -50%) scale(0.4)';
    setTimeout(() => {
      node.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
      node.style.opacity = '1';
      node.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 300 + idx * 120);
  });

  // Start continuous gentle falling petals
  setTimeout(() => {
    startPetals();
  }, 800);
}

// ============================================================
// 3. VINTAGE WISH POSTCARD MODAL & NAVIGATION
// ============================================================
let currentWishIndex = 0;
let isWishOpen = false;

function openWish(idx) {
  if (!CONFIG.wishes || !CONFIG.wishes[idx]) return;
  currentWishIndex = idx;
  isWishOpen = true;
  renderWish();

  const popup = document.getElementById('wish-popup');
  const backdrop = document.getElementById('wish-backdrop');

  // Realistic natural tilt for paper postcard
  const rot = (Math.random() * 3 - 1.5).toFixed(1) + 'deg';
  popup.style.setProperty('--rot', rot);

  popup.classList.add('visible');
  backdrop.classList.add('visible');
  popup.focus();

  // Play audio chime and burst petal particles
  playChime(640 + idx * 30);
  const node = document.getElementById(`flower-${idx}`);
  if (node) {
    const rect = node.getBoundingClientRect();
    triggerBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
  }
}

function renderWish() {
  const wish = CONFIG.wishes[currentWishIndex];
  if (!wish) return;
  
  const toEl = document.getElementById('wish-to');
  const nameEl = document.getElementById('wish-name');
  const textEl = document.getElementById('wish-text');
  const counterEl = document.getElementById('wish-counter');

  if (toEl) {
    toEl.textContent = wish.to || "Gửi Thầy Cô kính mến,";
  }

  if (nameEl) {
    if (wish.name && wish.name.trim()) {
      nameEl.textContent = wish.name;
      nameEl.style.display = 'block';
    } else {
      nameEl.textContent = '';
      nameEl.style.display = 'none';
    }
  }

  if (textEl) textEl.textContent = `“${wish.text}”`;
  if (counterEl) counterEl.textContent = `${currentWishIndex + 1} / ${CONFIG.wishes.length}`;
}

function nextWish() {
  currentWishIndex = (currentWishIndex + 1) % CONFIG.wishes.length;
  renderWish();
  highlightBlossom(currentWishIndex);
  playChime(760);
}

function prevWish() {
  currentWishIndex = (currentWishIndex - 1 + CONFIG.wishes.length) % CONFIG.wishes.length;
  renderWish();
  highlightBlossom(currentWishIndex);
  playChime(600);
}

function closeWish() {
  const popup = document.getElementById('wish-popup');
  const backdrop = document.getElementById('wish-backdrop');
  if (popup) popup.classList.remove('visible');
  if (backdrop) backdrop.classList.remove('visible');
  isWishOpen = false;
}

function highlightBlossom(idx) {
  const target = document.getElementById(`flower-${idx}`);
  if (target) {
    target.style.transform = 'translate(-50%, -50%) scale(1.35)';
    setTimeout(() => {
      target.style.transform = '';
    }, 1200);
  }
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeWish();
    closeLightbox();
    closeVideoModal();
  }
  if (isWishOpen) {
    if (e.key === 'ArrowRight') { e.preventDefault(); nextWish(); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); prevWish(); }
  }
});

// ============================================================
// 4. PHOTO LIGHTBOX MODAL
// ============================================================
function openLightbox(type) {
  const box = document.getElementById('lightbox');
  const bdrop = document.getElementById('lightbox-backdrop');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');

  if (type === 'class') {
    img.src = CONFIG.classPhotoSrc;
    img.alt = `Tập thể lớp ${CONFIG.className}`;
    cap.textContent = `Tập thể ${CONFIG.className} – Niên khóa ${CONFIG.schoolYear} ❤️`;
  } else {
    img.src = CONFIG.teacherPhotoSrc;
    img.alt = CONFIG.teacherName;
    cap.textContent = `Tri ân Thầy Cô kính yêu – Tập thể ${CONFIG.className} ❤️`;
  }

  box.classList.add('visible');
  bdrop.classList.add('visible');
  document.body.style.overflow = 'hidden';
  playChime(520);
}

function closeLightbox() {
  const box = document.getElementById('lightbox');
  const bdrop = document.getElementById('lightbox-backdrop');
  if (box) box.classList.remove('visible');
  if (bdrop) bdrop.classList.remove('visible');
  document.body.style.overflow = '';
}

// ============================================================
// 5. VIDEO CINEMA MODAL
// ============================================================
function openVideoModal() {
  const modal = document.getElementById('video-modal');
  const bdrop = document.getElementById('video-backdrop');
  if (modal) modal.classList.add('visible');
  if (bdrop) bdrop.classList.add('visible');
  document.body.style.overflow = 'hidden';
  playChime(540);
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  const bdrop = document.getElementById('video-backdrop');
  const video = document.getElementById('main-video');
  if (modal) modal.classList.remove('visible');
  if (bdrop) bdrop.classList.remove('visible');
  document.body.style.overflow = '';
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}

// ============================================================
// 6. FAIRY MUSHROOMS & SECRET EASTER EGG
// ============================================================
let mushTimer = null;
function handleMushroom(el, msg) {
  el.style.animation = 'none';
  el.offsetHeight; // force reflow
  el.style.animation = 'mushroomWiggle 0.5s ease';

  if (el.id === 'mushroom-5') {
    playMagicChord();
    triggerBurst(window.innerWidth / 2, window.innerHeight - 100);
  } else {
    playChime(920);
  }

  const msgEl = document.getElementById('mushroom-msg');
  if (!msgEl) return;
  msgEl.textContent = msg;
  msgEl.classList.add('visible');

  if (mushTimer) clearTimeout(mushTimer);
  mushTimer = setTimeout(() => {
    msgEl.classList.remove('visible');
  }, 4200);
}

// ============================================================
// 7. DAY / NIGHT MODE TOGGLE
// ============================================================
function setupThemeToggle() {
  const themeBtn = document.getElementById('theme-btn');
  let isNightMode = false;

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      isNightMode = !isNightMode;
      document.body.classList.toggle('night-mode', isNightMode);
      
      const icon = themeBtn.querySelector('.pill-icon') || themeBtn.querySelector('.icon');
      const text = themeBtn.querySelector('.pill-text') || themeBtn.querySelector('.text');

      if (isNightMode) {
        if (icon) icon.textContent = '☀️';
        if (text) text.textContent = 'Ban Ngày';
        playMagicChord();
      } else {
        if (icon) icon.textContent = '🌙';
        if (text) text.textContent = 'Đêm Đom Đóm';
        playChime(620);
      }
    });
  }
}

// ============================================================
// 8. 3D MOUSE PARALLAX TILT & DUST MOTES
// ============================================================
function setupParallax() {
  if (window.innerWidth < 900) return;
  const book = document.getElementById('main-book');
  if (!book) return;

  window.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const rotY = ((e.clientX - cx) / cx) * 3.2;
    const rotX = -((e.clientY - cy) / cy) * 2.2;
    book.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
  });

  window.addEventListener('mouseleave', () => {
    book.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });
}

function createDustMotes() {
  const container = document.getElementById('ambient-dust') || document.body;
  const count = 20;
  for (let i = 0; i < count; i++) {
    const mote = document.createElement('div');
    mote.className = 'dust-particle';
    const size = 2 + Math.random() * 3.5;
    mote.style.cssText = `
      left: ${Math.random() * 100}vw;
      top: ${Math.random() * 100}vh;
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${12 + Math.random() * 14}s;
      animation-delay: ${Math.random() * 8}s;
    `;
    container.appendChild(mote);
  }
}
