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

    // Set default animation properties for better performance and cinematic feel
    gsap.defaults({
      ease: "power3.out",
      duration: 1.2,
      force3D: true
    });

    // Enhanced Hero section animations with staggered children
    const heroTl = gsap.timeline({ delay: 0.2 });
    heroTl
      .from('.hero-content > *', {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out"
      })
      .from('.hero-image', {
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        ease: "expo.out"
      }, '-=0.75');

    // Enhanced Section Headers Animation
    ScrollTrigger.batch('.section-header', {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 60,
          rotationZ: -2,
          duration: 1.5,
          ease: "expo.out",
          stagger: 0.15
        });
      },
      start: 'top 85%',
      once: true
    });

    // About section enhanced animations with a timeline for better control
    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top 75%',
        once: true,
      }
    });
    aboutTl.from('#about .about-content', {
      opacity: 0,
      x: -60,
      duration: 1.5,
      ease: "power4.out"
    }).from('#about .about-highlights > div', {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 1,
      ease: "back.out(1.5)"
    }, "-=1.2");

    // Enhanced Projects section animations
    ScrollTrigger.batch('#projects .project-card', {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 70,
          scale: 0.9,
          stagger: 0.15,
          duration: 1.2,
          ease: "back.out(1.4)"
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
            x: index % 2 === 0 ? -80 : 80,
            duration: 1.5,
            ease: "power3.out",
            delay: index * 0.15
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
          rotation: -3,
          stagger: 0.2,
          duration: 1.2,
          ease: "back.out(1.7)"
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
          y: 50,
          rotation: 2,
          stagger: 0.1,
          duration: 1,
          ease: "expo.out"
        });
      },
      start: 'top 85%',
      once: true
    });

    // Contact section animations
    const contactTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 80%',
        once: true,
      }
    });
    contactTl.from('#contact .contact-content', {
      opacity: 0,
      y: 60,
      duration: 1.5,
      ease: "power3.out"
    });

    // Enhanced parallax effect with throttling
    let ticking = false;
    const updateParallax = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          gsap.to('.parallax-bg', {
            yPercent: -30,
            ease: "none",
            scrollTrigger: {
              trigger: 'body',
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
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
