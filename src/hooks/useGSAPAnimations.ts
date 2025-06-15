
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
      gsap.set('*', { clearProps: 'all' });
      return;
    }

    // Enhanced default settings for performance
    gsap.defaults({
      ease: "power2.out",
      duration: 1,
      force3D: true
    });

    // Set initial states for better performance
    gsap.set(['.hero-content', '.section-header', '.project-card', '.skill-category', '.timeline-item'], {
      willChange: 'transform, opacity'
    });

    // Enhanced Hero section with staggered timeline
    const heroTl = gsap.timeline();
    heroTl
      .from('.shimmer-text', {
        opacity: 0,
        y: 80,
        scale: 0.9,
        duration: 1.5,
        ease: "power3.out",
        force3D: true
      })
      .from('.hero-subtitle', {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power2.out",
        force3D: true
      }, '-=1')
      .from('.hero-description', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        force3D: true
      }, '-=0.8')
      .from('.hero-social a', {
        opacity: 0,
        y: 20,
        scale: 0.8,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(2)",
        force3D: true
      }, '-=0.6')
      .from('.hero-buttons button', {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.7)",
        force3D: true
      }, '-=0.4')
      .from('.hero-image', {
        opacity: 0,
        scale: 0.8,
        rotation: -5,
        duration: 1.2,
        ease: "back.out(1.7)",
        force3D: true
      }, '-=1.2');

    // Enhanced scroll-triggered section animations
    const createSectionAnimation = (selector: string, direction = 'up') => {
      const elements = document.querySelectorAll(selector);
      
      elements.forEach((element, index) => {
        const animationProps = direction === 'up' 
          ? { y: 80, opacity: 0 }
          : direction === 'left'
          ? { x: -80, opacity: 0 }
          : { x: 80, opacity: 0 };

        gsap.fromTo(element, animationProps, {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
            onEnter: () => gsap.set(element, { willChange: 'auto' }),
            onLeave: () => gsap.set(element, { willChange: 'transform' })
          }
        });
      });
    };

    // Apply animations to different sections
    createSectionAnimation('.section-header', 'up');
    createSectionAnimation('#about .about-content', 'left');
    createSectionAnimation('#about .about-highlights > div', 'up');

    // Enhanced project cards with staggered reveal
    ScrollTrigger.batch('#projects .project-card', {
      onEnter: (elements) => {
        gsap.fromTo(elements, {
          opacity: 0,
          y: 100,
          scale: 0.9,
          rotationY: 15
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          stagger: 0.2,
          duration: 1.4,
          ease: "power3.out",
          force3D: true
        });
      },
      start: 'top 90%',
      once: true
    });

    // Enhanced experience timeline with alternating animations
    ScrollTrigger.batch('#experience .timeline-item', {
      onEnter: (elements) => {
        elements.forEach((element, index) => {
          const isEven = index % 2 === 0;
          const content = element.querySelector('.timeline-content');
          
          if (content) {
            gsap.fromTo(content, {
              opacity: 0,
              x: isEven ? -100 : 100,
              y: 50,
              scale: 0.9
            }, {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 1.3,
              ease: "power3.out",
              delay: index * 0.2,
              force3D: true
            });
          }
        });
      },
      start: 'top 85%',
      once: true
    });

    // Enhanced education cards with rotation effect
    ScrollTrigger.batch('#education .education-card, #education > div > div > div', {
      onEnter: (elements) => {
        gsap.fromTo(elements, {
          opacity: 0,
          scale: 0.8,
          rotation: -10,
          y: 60
        }, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          y: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: "back.out(1.7)",
          force3D: true
        });
      },
      start: 'top 85%',
      once: true
    });

    // Enhanced skills section with wave animation
    ScrollTrigger.batch('#skills .skill-category', {
      onEnter: (elements) => {
        gsap.fromTo(elements, {
          opacity: 0,
          y: 50,
          scale: 0.95
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: {
            amount: 0.8,
            from: "start"
          },
          duration: 1,
          ease: "power2.out",
          force3D: true
        });
      },
      start: 'top 85%',
      once: true
    });

    // Contact section with slide-in effect
    ScrollTrigger.create({
      trigger: '#contact',
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo('#contact .contact-content', {
          opacity: 0,
          y: 80,
          scale: 0.95
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
          force3D: true
        });
      }
    });

    // Enhanced parallax scrolling
    gsap.to('.parallax-bg', {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: 'body',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          // Optimize performance by limiting updates
          if (self.progress < 0.1 || self.progress > 0.9) return;
        }
      }
    });

    // Smooth scrolling enhancements
    ScrollTrigger.normalizeScroll(true);

    // Performance optimization
    const handleResize = gsap.utils.throttle(() => {
      ScrollTrigger.refresh();
    }, 250);

    window.addEventListener('resize', handleResize);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', handleResize);
      gsap.set('*', { willChange: 'auto' });
    };
  }, []);

  return null;
};
