
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
      // Disable animations for users who prefer reduced motion
      gsap.set('*', { clearProps: 'all' });
      return;
    }

    // Set default animation properties for better performance
    gsap.defaults({
      ease: "power2.out",
      duration: 1,
      force3D: true
    });

    // Enhanced Hero section animations
    const heroTl = gsap.timeline();
    heroTl
      .from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
        force3D: true
      })
      .from('.hero-social a', {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.7)",
        force3D: true
      }, '-=0.8')
      .from('.hero-buttons button', {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)",
        force3D: true
      }, '-=0.6')
      .from('.hero-image', {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "back.out(1.7)",
        force3D: true
      }, '-=1');

    // Enhanced Section Headers Animation
    ScrollTrigger.batch('.section-header', {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out",
          stagger: 0.1,
          force3D: true
        });
      },
      start: 'top 85%',
      once: true
    });

    // About section enhanced animations
    ScrollTrigger.create({
      trigger: '#about',
      start: 'top 80%',
      end: 'bottom 20%',
      onEnter: () => {
        gsap.from('#about .about-content', {
          opacity: 0,
          x: -50,
          duration: 1.2,
          ease: "power2.out",
          force3D: true
        });
        gsap.from('#about .about-highlights > div', {
          opacity: 0,
          y: 50,
          stagger: 0.15,
          duration: 0.8,
          delay: 0.3,
          ease: "back.out(1.7)",
          force3D: true
        });
      }
    });

    // Enhanced Projects section animations
    ScrollTrigger.batch('#projects .project-card', {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 60,
          scale: 0.95,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
          force3D: true
        });
      },
      start: 'top 85%',
      once: true
    });

    // Enhanced Experience timeline animation
    ScrollTrigger.batch('#experience .timeline-item', {
      onEnter: (elements) => {
        elements.forEach((element, index) => {
          gsap.from(element.querySelector('div:last-child'), {
            opacity: 0,
            x: index % 2 === 0 ? -60 : 60,
            duration: 1.2,
            ease: "power2.out",
            delay: index * 0.2,
            force3D: true
          });
        });
      },
      start: 'top 85%',
      once: true
    });

    // Enhanced Education section animations
    ScrollTrigger.batch('#education .education-card', {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          scale: 0.9,
          rotation: -2,
          stagger: 0.2,
          duration: 1,
          ease: "back.out(1.7)",
          force3D: true
        });
      },
      start: 'top 85%',
      once: true
    });

    // Enhanced Skills section animations
    ScrollTrigger.batch('#skills .skill-category', {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 40,
          rotation: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          force3D: true
        });
      },
      start: 'top 85%',
      once: true
    });

    // Contact section animations
    ScrollTrigger.create({
      trigger: '#contact',
      start: 'top 80%',
      end: 'bottom 20%',
      onEnter: () => {
        gsap.from('#contact .contact-content', {
          opacity: 0,
          y: 50,
          duration: 1.2,
          ease: "power2.out",
          force3D: true
        });
      }
    });

    // Enhanced parallax effect with throttling
    let ticking = false;
    const updateParallax = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          gsap.to('.parallax-bg', {
            yPercent: -50,
            ease: "none",
            scrollTrigger: {
              trigger: 'body',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    // Throttled scroll listener
    window.addEventListener('scroll', updateParallax, { passive: true });

    // Performance optimization: Refresh ScrollTrigger on resize with throttling
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('scroll', updateParallax);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return null;
};
