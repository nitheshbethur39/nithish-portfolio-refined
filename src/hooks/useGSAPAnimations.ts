
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
      duration: 1
    });

    // Hero section animations
    const heroTl = gsap.timeline();
    heroTl
      .from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out"
      })
      .from('.hero-social', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8
      }, '-=0.8')
      .from('.hero-buttons', {
        opacity: 0,
        y: 30,
        duration: 0.8
      }, '-=0.6')
      .from('.hero-image', {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "back.out(1.7)"
      }, '-=1');

    // About section animations
    ScrollTrigger.create({
      trigger: '#about',
      start: 'top 80%',
      end: 'bottom 20%',
      onEnter: () => {
        gsap.from('#about .about-content', {
          opacity: 0,
          x: -50,
          duration: 1,
          ease: "power2.out"
        });
        gsap.from('#about .about-highlights', {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.8,
          delay: 0.3
        });
      }
    });

    // Projects section animations
    ScrollTrigger.create({
      trigger: '#projects',
      start: 'top 80%',
      end: 'bottom 20%',
      onEnter: () => {
        gsap.from('#projects .project-card', {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out"
        });
      }
    });

    // Experience section timeline animation
    ScrollTrigger.create({
      trigger: '#experience',
      start: 'top 80%',
      end: 'bottom 20%',
      onEnter: () => {
        gsap.from('#experience .timeline-item', {
          opacity: 0,
          x: (index) => index % 2 === 0 ? -50 : 50,
          stagger: 0.3,
          duration: 1,
          ease: "power2.out"
        });
      }
    });

    // Education section animations
    ScrollTrigger.create({
      trigger: '#education',
      start: 'top 80%',
      end: 'bottom 20%',
      onEnter: () => {
        gsap.from('#education .education-card', {
          opacity: 0,
          scale: 0.9,
          stagger: 0.2,
          duration: 0.8,
          ease: "back.out(1.7)"
        });
      }
    });

    // Skills section animations
    ScrollTrigger.create({
      trigger: '#skills',
      start: 'top 80%',
      end: 'bottom 20%',
      onEnter: () => {
        gsap.from('#skills .skill-category', {
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out"
        });
      }
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
          duration: 1,
          ease: "power2.out"
        });
      }
    });

    // Parallax effect for background elements
    gsap.to('.parallax-bg', {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: 'body',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null;
};
