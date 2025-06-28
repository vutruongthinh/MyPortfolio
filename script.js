// Enhanced Performance-Optimized JavaScript with Micro-interactions
document.addEventListener('DOMContentLoaded', function() {
    
    // Performance: Intersection Observer for reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, observerOptions);

    // Add reveal class and observe elements
    const revealElements = document.querySelectorAll('.expertise-card, .project-card, .contact-item, .hero-text, .hero-image');
    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    // Enhanced Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open'); // Prevent scroll when menu is open
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }));

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // Enhanced Navbar Scroll Effect
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNavbar() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }

        // Auto-hide navbar on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            navbar?.style.setProperty('transform', 'translateY(-100%)');
        } else {
            navbar?.style.setProperty('transform', 'translateY(0)');
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });

    // Enhanced Active Navigation Links
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const correspondingNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                correspondingNavLink?.classList.add('active');
            }
        });
    }

    let navTicking = false;
    window.addEventListener('scroll', () => {
        if (!navTicking) {
            requestAnimationFrame(updateActiveNavLink);
            navTicking = true;
        }
    });

    // Enhanced Smooth Scrolling with offset for fixed navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        let backToTopTicking = false;
        
        function updateBackToTop() {
            const scrollPercent = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
                // Add progress indicator
                backToTopButton.style.setProperty('--progress', `${scrollPercent}%`);
            } else {
                backToTopButton.classList.remove('visible');
            }
            backToTopTicking = false;
        }

        window.addEventListener('scroll', () => {
            if (!backToTopTicking) {
                requestAnimationFrame(updateBackToTop);
                backToTopTicking = true;
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Enhanced Button Interactions
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('pulse-gently')) {
                this.classList.add('pulse-gently');
                setTimeout(() => this.classList.remove('pulse-gently'), 3000);
            }
        });
    });

    // Lazy Loading for Images (Performance Enhancement)
    const images = document.querySelectorAll('img[src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        img.classList.add('loading-skeleton');
        img.addEventListener('load', () => {
            img.classList.remove('loading-skeleton');
            img.classList.add('loaded');
        });
        imageObserver.observe(img);
    });

    // Enhanced Keyboard Navigation
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Enhanced Focus Management for Accessibility
    document.querySelectorAll('.btn, .nav-link, .social-links a, .project-link').forEach(element => {
        element.classList.add('focus-enhanced');
    });

    // Performance: Debounced resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Handle any resize-specific logic here
            updateActiveNavLink();
        }, 150);
    });

    // Enhanced Scroll Progress Indicator
    const scrollProgress = document.getElementById('scroll-progress');
    
    function updateScrollProgress() {
        const scrollPercent = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollProgress) {
            scrollProgress.style.transform = `scaleX(${scrollPercent / 100})`;
        }
    }

    let progressTicking = false;
    window.addEventListener('scroll', () => {
        if (!progressTicking) {
            requestAnimationFrame(() => {
                updateScrollProgress();
                progressTicking = false;
            });
            progressTicking = true;
        }
    });

    console.log('✨ Enhanced portfolio loaded with micro-interactions and performance optimizations');
});
