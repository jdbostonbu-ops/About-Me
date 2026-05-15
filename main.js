
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Reveal sections on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Subtle tilt effect on skill cards
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;
        card.style.transform = `translateY(-8px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
 
    // Stat counter animation — fires once when strip scrolls into view
    const statNums = document.querySelectorAll('.stat-num');
    if (statNums.length) {
      function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
      function animateCounter(el, target, suffix, duration) {
        const start = performance.now();
        function tick(now) {
          const p = Math.min((now - start) / duration, 1);
          el.textContent = Math.round(easeOut(p) * target) + (p === 1 ? suffix : '');
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }
      const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            statNums.forEach((el, i) => {
              const target = parseInt(el.dataset.target);
              const suffix = el.dataset.suffix || '';
              setTimeout(() => animateCounter(el, target, suffix, 1800), i * 120);
            });
            statObserver.disconnect();
          }
        });
      }, { threshold: 0.3 });
      const strip = document.getElementById('statStrip');
      if (strip) statObserver.observe(strip);
    }

    // ── STATUS BAR ──
    // To update: change the studying string below, save, push to GitHub
    const STATUS = {
      studying: 'Phase II | Think with AI: Full-Stack Architecture'
    };
    const statusEl = document.getElementById('statusStudying');
    if (statusEl) statusEl.textContent = STATUS.studying;

    // ── TIMELINE — fires on scroll via IntersectionObserver ──
    const tlItems = ['tl0','tl1','tl2','tl3','tl4','tl5'];
    const tlDelays = [0, 300, 580, 840, 1080, 1320];

    const tlObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = document.getElementById('tlFill');
          if (fill) {
            fill.style.height = '100%';
          }
          tlItems.forEach((id, i) => {
            setTimeout(() => {
              const el = document.getElementById(id);
              if (el) el.classList.add('tl-vis');
            }, tlDelays[i] + 200);
          });
          tlObserver.disconnect();
        }
      });
    }, { threshold: 0.15 });

    const tlSection = document.getElementById('journey');
    if (tlSection) tlObserver.observe(tlSection);
