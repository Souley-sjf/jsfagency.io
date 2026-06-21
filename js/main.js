document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');

    if (nav) {
        const onScroll = () => {
            nav.classList.toggle('scrolled', window.scrollY > 24);
        };

        window.addEventListener('scroll', onScroll);
        onScroll();

        document.querySelector('.menu-btn')
            ?.addEventListener('click', () => nav.classList.toggle('open'));
    }

    // Reveal animation
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.12 });

        reveals.forEach(el => io.observe(el));
    }

    // Active nav link
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-panel a').forEach(a => {
        if ((a.getAttribute('href') || '').endsWith(path)) {
            a.classList.add('active');
        }
    });

    // Filters
    const chips = document.querySelectorAll('[data-filter]');
    const items = document.querySelectorAll('[data-cat]');

    chips.forEach(c => {
        c.addEventListener('click', () => {
            chips.forEach(x => x.classList.remove('active'));
            c.classList.add('active');

            const filter = c.dataset.filter;

            items.forEach(i => {
                i.style.display =
                    (filter === 'all' || i.dataset.cat === filter)
                        ? ''
                        : 'none';
            });
        });
    });

    // Contact form
    const form = document.querySelector('#contact-form');

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();

            const fd = new FormData(form);

            const name = fd.get('name');
            const email = fd.get('email');
            const subject = fd.get('subject') || 'Nouveau projet';
            const budget = fd.get('budget') || 'Non précisé';
            const message = fd.get('message');

            const body =
                `Bonjour Souleymane,%0D%0A%0D%0A` +
                `Je suis ${name} (${email}).%0D%0A%0D%0A` +
                `Budget estimé : ${budget}%0D%0A%0D%0A${message}`;

            window.location.href =
                `mailto:souleymanefaye.sjf@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        });
    }

    // LIGHTBOX
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    if (lightbox && lightboxImg && closeBtn) {
        document.querySelectorAll('.project .ph').forEach(item => {
            item.addEventListener('click', () => {
                const bg = window.getComputedStyle(item).backgroundImage;

                const imageUrl = bg
                    .replace(/^url\(["']?/, '')
                    .replace(/["']?\)$/, '');

                lightboxImg.src = imageUrl;
                lightbox.classList.add('active');
            });
        });

        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });

        lightbox.addEventListener('click', e => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                lightbox.classList.remove('active');
            }
        });
    }
});