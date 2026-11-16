/**
 * PETALS.JS - Hiệu ứng cánh hoa rơi (Canvas) & Pháo hoa cánh hoa khi click
 * Class 11A2 - Tri Ân Thầy Cô
 */

//  10. FALLING PETALS CANVAS ANIMATION
    // ============================================================
    let petalsActive = false;
    function startPetals() {
      if (petalsActive) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      petalsActive = true;

      const canvas = document.getElementById('petals-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const colors = ['#f48fb1', '#ff80ab', '#ffd54f', '#ffcc80', '#e1bee7', '#fff59d'];
      const petals = [];

      function createPetal(customY) {
        return {
          x: Math.random() * canvas.width,
          y: customY !== undefined ? customY : -20,
          size: 5 + Math.random() * 8,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedY: 0.5 + Math.random() * 1.4,
          speedX: (Math.random() - 0.5) * 0.8,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.05,
          wobble: Math.random() * Math.PI * 2,
          wobbleSpeed: 0.02 + Math.random() * 0.03,
          isHeart: Math.random() < 0.35
        };
      }

      // Initial seeds
      for (let i = 0; i < 22; i++) {
        petals.push(createPetal(Math.random() * canvas.height));
      }

      function drawHeart(c, s) {
        c.beginPath();
        c.moveTo(0, -s * 0.3);
        c.bezierCurveTo(0, -s, -s, -s, -s, -s * 0.3);
        c.bezierCurveTo(-s, s * 0.4, 0, s * 0.7, 0, s);
        c.bezierCurveTo(0, s * 0.7, s, s * 0.4, s, -s * 0.3);
        c.bezierCurveTo(s, -s, 0, -s, 0, -s * 0.3);
        c.closePath();
        c.fill();
      }

      function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (Math.random() < 0.06 && petals.length < 50) {
          petals.push(createPetal());
        }

        for (let i = petals.length - 1; i >= 0; i--) {
          const p = petals[i];
          p.wobble += p.wobbleSpeed;
          p.x += p.speedX + Math.sin(p.wobble) * 0.6;
          p.y += p.speedY;
          p.rotation += p.rotSpeed;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = 0.75;

          if (p.isHeart) {
            drawHeart(ctx, p.size * 0.7);
          } else {
            ctx.beginPath();
            ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();

          if (p.y > canvas.height + 30 || p.x < -30 || p.x > canvas.width + 30) {
            petals.splice(i, 1);
          }
        }

        requestAnimationFrame(render);
      }

      render();

      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    }

    // ============================================================
    //  11. PETAL PARTICLE BURST ON FLOWER CLICK
    // ============================================================
    function triggerBurst(cx, cy) {
      const colors = ['#ff4081', '#ffd54f', '#f48fb1', '#81d4fa', '#ba68c8'];
      const total = 14;

      for (let i = 0; i < total; i++) {
        const angle = (i / total) * Math.PI * 2;
        const dist = 50 + Math.random() * 65;
        const tx = Math.cos(angle) * dist;
        const ty = Math.sin(angle) * dist - 15;
        const tr = (Math.random() * 360) + 'deg';

        const particle = document.createElement('div');
        particle.className = 'petal-burst-particle';
        particle.style.cssText = `
          left: ${cx}px;
          top: ${cy}px;
          width: ${7 + Math.random() * 8}px;
          height: ${7 + Math.random() * 8}px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          --tx: ${tx}px;
          --ty: ${ty}px;
          --tr: ${tr};
          animation-duration: ${0.7 + Math.random() * 0.4}s;
          border-radius: 50% 0 50% 50%;
        `;

        document.body.appendChild(particle);
        particle.addEventListener('animationend', () => particle.remove());
      }
    }

    // ============================================================
