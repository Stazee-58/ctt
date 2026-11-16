/**
 * AUDIO.JS - Quản lý âm thanh Web Audio API & Trình phát nhạc nền
 * Class 11A2 - Tri Ân Thầy Cô
 */

// ============================================================
// 1. WEB AUDIO SYNTHESIZER (Âm thanh ma thuật thuần JS)
// ============================================================
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Play sparkling wind chime sound for flowers
function playChime(freq = 880) {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + 0.35);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.65);
  } catch(e) {}
}

// Play magical chord for secret mushroom & special events
function playMagicChord() {
  try {
    const ctx = getAudioContext();
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
      setTimeout(() => playChime(freq), idx * 80);
    });
  } catch(e) {}
}

// ============================================================
// 2. MUSIC PLAYER TOGGLE
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const musicBtn = document.getElementById('music-btn');
  const bgMusic = document.getElementById('bg-music');
  let isPlaying = false;

  if (musicBtn && bgMusic) {
    musicBtn.addEventListener('click', () => {
      const icon = musicBtn.querySelector('.pill-icon') || musicBtn.querySelector('.icon');
      const text = musicBtn.querySelector('.pill-text') || musicBtn.querySelector('.text');

      if (isPlaying) {
        bgMusic.pause();
        if (icon) icon.textContent = '🎵';
        if (text) text.textContent = 'Bật Nhạc';
        isPlaying = false;
      } else {
        bgMusic.play().then(() => {
          if (icon) icon.textContent = '🔊';
          if (text) text.textContent = 'Tắt Nhạc';
          isPlaying = true;
        }).catch(() => {
          // If file doesn't exist, provide chime feedback & toast notification
          playMagicChord();
          const toast = document.getElementById('mushroom-msg');
          if (toast) {
            toast.textContent = "Thêm file music.mp3 vào cùng thư mục để nghe trọn vẹn giai điệu nhé! 🎵";
            toast.classList.add('visible');
            setTimeout(() => toast.classList.remove('visible'), 4000);
          }
        });
      }
    });
  }
});
