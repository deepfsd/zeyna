document.addEventListener("DOMContentLoaded", () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial setup functions
    initMagneticButtons();
    initScrollAnimations();
    initMobileMenu();

    // Setup Barba.js
    barba.init({
        transitions: [{
            name: 'fade-transition',
            leave(data) {
                return gsap.to(data.current.container, {
                    opacity: 0,
                    duration: 0.4,
                    ease: "power2.inOut"
                });
            },
            enter(data) {
                // Scroll to top
                window.scrollTo(0, 0);

                // Re-initialize plugins
                lucide.createIcons();
                initMagneticButtons();
                initScrollAnimations();

                return gsap.from(data.next.container, {
                    opacity: 0,
                    duration: 0.4,
                    ease: "power2.inOut"
                });
            }
        }]
    });

    // Barba Hooks for NProgress
    barba.hooks.before(() => {
        NProgress.start();
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && mobileMenu.classList.contains('active')) {
             mobileMenu.classList.remove('active');
        }
    });

    barba.hooks.enter((data) => {
        // Update active nav links
        const currentPath = data.next.url.path;

        // Desktop nav links
        const desktopLinks = document.querySelectorAll('header nav .hidden.md\\:flex.items-center.gap-8 a');
        desktopLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('text-brand-600');
                link.classList.remove('text-slate-600');
            } else {
                link.classList.remove('text-brand-600');
                link.classList.add('text-slate-600');
            }
        });

        // Mobile nav links
        const mobileLinks = document.querySelectorAll('#mobile-menu a:not(.bg-brand-600)');
        mobileLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('text-brand-600');
                link.classList.remove('text-dark');
            } else {
                link.classList.remove('text-brand-600');
                link.classList.add('text-dark');
            }
        });

        // Re-initialize reCAPTCHA if we are on the contact page
        if (data.next.namespace === 'contact' || currentPath === '/contact') {
            if (typeof grecaptcha !== 'undefined' && grecaptcha.render) {
                const recaptchaContainer = data.next.container.querySelector('.g-recaptcha');
                if (recaptchaContainer) {
                    try {
                        recaptchaContainer.innerHTML = '';
                        grecaptcha.render(recaptchaContainer, {
                            'sitekey': '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                        });
                    } catch (e) {
                        console.error('reCAPTCHA render error:', e);
                    }
                }
            } else {
                // Dynamically load script if it wasn't loaded
                const script = document.createElement('script');
                script.src = "https://www.google.com/recaptcha/api.js";
                script.async = true;
                script.defer = true;
                document.head.appendChild(script);
            }
        }
    });

    barba.hooks.after(() => {
        NProgress.done();
        ScrollTrigger.refresh();
    });

    // Mobile Menu Toggle
    function initMobileMenu() {
        const toggleBtn = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        if (toggleBtn && mobileMenu) {
            toggleBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
            });

            // Close when clicking a link inside
            const links = mobileMenu.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                });
            });
        }
    }

    // Magnetic Buttons
    function initMagneticButtons() {
        const magnets = document.querySelectorAll('.magnetic');

        magnets.forEach((magnet) => {
            magnet.addEventListener('mousemove', function(e) {
                const position = magnet.getBoundingClientRect();
                const x = e.pageX - position.left - position.width / 2;
                const y = e.pageY - position.top - position.height / 2;

                gsap.to(magnet, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.5,
                    ease: "power3.out"
                });
            });

            magnet.addEventListener('mouseleave', function() {
                gsap.to(magnet, {
                    x: 0,
                    y: 0,
                    duration: 0.7,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        });
    }

    // Scroll Animations (gsap-reveal)
    function initScrollAnimations() {
        const revealElements = document.querySelectorAll('.gsap-reveal');

        revealElements.forEach((element) => {
            gsap.fromTo(element,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%", // Animation starts when top of element hits 85% of viewport
                        toggleActions: "play none none reverse" // Play on enter, reverse on leave back
                    }
                }
            );
        });

        // Staggered reveal
        const staggerContainers = document.querySelectorAll('.gsap-stagger-container');
        staggerContainers.forEach(container => {
             const items = container.querySelectorAll('.gsap-stagger-item');
             gsap.fromTo(items,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 80%"
                    }
                }
             );
        });
    }
});
