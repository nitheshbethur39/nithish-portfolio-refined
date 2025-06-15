
import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced particle system
    const particles: Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      baseSize: number;
      currentSize: number;
      opacity: number;
      baseOpacity: number;
      pulsePhase: number;
      pulseSpeed: number;
      color: { r: number; g: number; b: number };
    }> = [];

    // Mouse interaction variables
    const mouse = { x: 0, y: 0, radius: 100 };
    
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Create enhanced particles
    for (let i = 0; i < 60; i++) {
      const baseSize = Math.random() * 5 + 3; // Size range: 3-8px
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        baseSize: baseSize,
        currentSize: baseSize,
        baseOpacity: Math.random() * 0.4 + 0.3, // Opacity range: 0.3-0.7
        opacity: Math.random() * 0.4 + 0.3,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        color: {
          r: 255,
          g: Math.random() * 50 + 107, // Slight variation in red channel
          b: Math.random() * 50 + 107
        }
      });
    }

    let animationTime = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animationTime += 0.016; // ~60fps

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Boundary collision with smooth wrapping
        if (particle.x < -particle.baseSize) particle.x = canvas.width + particle.baseSize;
        if (particle.x > canvas.width + particle.baseSize) particle.x = -particle.baseSize;
        if (particle.y < -particle.baseSize) particle.y = canvas.height + particle.baseSize;
        if (particle.y > canvas.height + particle.baseSize) particle.y = -particle.baseSize;

        // Mouse interaction - subtle attraction/repulsion
        const distanceToMouse = Math.sqrt(
          Math.pow(mouse.x - particle.x, 2) + Math.pow(mouse.y - particle.y, 2)
        );

        if (distanceToMouse < mouse.radius) {
          const force = (mouse.radius - distanceToMouse) / mouse.radius;
          const angle = Math.atan2(particle.y - mouse.y, particle.x - mouse.x);
          
          // Gentle repulsion effect
          particle.x += Math.cos(angle) * force * 0.5;
          particle.y += Math.sin(angle) * force * 0.5;
          
          // Enhance particle when near mouse
          particle.currentSize = particle.baseSize * (1 + force * 0.3);
          particle.opacity = Math.min(particle.baseOpacity * (1 + force * 0.4), 0.9);
        } else {
          // Return to normal size and opacity
          particle.currentSize += (particle.baseSize - particle.currentSize) * 0.1;
          particle.opacity += (particle.baseOpacity - particle.opacity) * 0.1;
        }

        // Pulsing animation
        particle.pulsePhase += particle.pulseSpeed;
        const pulse = Math.sin(particle.pulsePhase) * 0.2 + 1;
        const finalSize = particle.currentSize * pulse;

        // Create gradient for more appealing visuals
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, finalSize
        );
        gradient.addColorStop(0, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.opacity})`);
        gradient.addColorStop(0.7, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0)`);

        // Draw particle with gradient
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, finalSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Add subtle glow effect for larger particles
        if (finalSize > 4) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, finalSize * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.opacity * 0.1})`;
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none will-change-transform"
      style={{ zIndex: 1 }}
    />
  );
};

export default ParticleBackground;
