
import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<any[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced color palette matching site theme
    const colors = [
      { r: 184, g: 207, b: 206, name: 'light-teal' },
      { r: 127, g: 140, b: 170, name: 'blue-gray' },
      { r: 234, g: 239, b: 239, name: 'light-gray' },
      { r: 51, g: 52, b: 70, name: 'dark-blue' }
    ];

    // Particle class with enhanced physics
    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      size: number;
      baseSize: number;
      opacity: number;
      baseOpacity: number;
      color: { r: number; g: number; b: number };
      pulsePhase: number;
      pulseSpeed: number;
      connectionDistance: number;

      constructor(canvas: HTMLCanvasElement) {
        this.baseX = this.x = Math.random() * canvas.width / (window.devicePixelRatio || 1);
        this.baseY = this.y = Math.random() * canvas.height / (window.devicePixelRatio || 1);
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.baseSize = this.size = Math.random() * 3 + 1;
        this.baseOpacity = this.opacity = Math.random() * 0.6 + 0.3;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.connectionDistance = Math.random() * 100 + 80;
      }

      update(mouse: { x: number; y: number; radius: number }, canvas: HTMLCanvasElement) {
        // Gentle floating motion
        this.baseX += this.vx;
        this.baseY += this.vy;

        // Boundary wrapping
        const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
        const canvasHeight = canvas.height / (window.devicePixelRatio || 1);

        if (this.baseX < -10) this.baseX = canvasWidth + 10;
        if (this.baseX > canvasWidth + 10) this.baseX = -10;
        if (this.baseY < -10) this.baseY = canvasHeight + 10;
        if (this.baseY > canvasHeight + 10) this.baseY = -10;

        // Mouse interaction with smoother physics
        const dx = mouse.x - this.baseX;
        const dy = mouse.y - this.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          
          // Smooth attraction/repulsion
          const targetX = this.baseX - Math.cos(angle) * force * 30;
          const targetY = this.baseY - Math.sin(angle) * force * 30;
          
          this.x += (targetX - this.x) * 0.1;
          this.y += (targetY - this.y) * 0.1;
          
          // Enhanced visual effects near cursor
          this.size = this.baseSize * (1 + force * 0.8);
          this.opacity = Math.min(this.baseOpacity * (1 + force * 0.6), 1);
        } else {
          // Return to base position smoothly
          this.x += (this.baseX - this.x) * 0.05;
          this.y += (this.baseY - this.y) * 0.05;
          this.size += (this.baseSize - this.size) * 0.1;
          this.opacity += (this.baseOpacity - this.opacity) * 0.1;
        }

        // Subtle pulsing animation
        this.pulsePhase += this.pulseSpeed;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const pulse = Math.sin(this.pulsePhase) * 0.2 + 1;
        const finalSize = this.size * pulse;
        
        // Create radial gradient for soft glow
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, finalSize * 2
        );
        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`);
        gradient.addColorStop(0.4, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity * 0.6})`);
        gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);

        ctx.beginPath();
        ctx.arc(this.x, this.y, finalSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Additional glow for enhanced particles
        if (finalSize > 2) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, finalSize * 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity * 0.1})`;
          ctx.fill();
        }
      }
    }

    // Initialize particles
    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas));
    }
    
    particlesRef.current = particles;

    // Mouse tracking with smooth interpolation
    let targetMouse = { x: 0, y: 0 };
    
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouse.x = event.clientX - rect.left;
      targetMouse.y = event.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Smooth mouse interpolation
    const updateMouse = () => {
      mouseRef.current.x += (targetMouse.x - mouseRef.current.x) * 0.1;
      mouseRef.current.y += (targetMouse.y - mouseRef.current.y) * 0.1;
    };

    // Connection lines between nearby particles
    const drawConnections = (ctx: CanvasRenderingContext2D, particles: Particle[]) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = (120 - distance) / 120 * 0.2;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(184, 207, 206, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    // Optimized animation loop
    let lastTime = 0;
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      
      // Limit to 60fps for performance
      if (deltaTime < 16.67) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastTime = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      updateMouse();
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update(mouseRef.current, canvas);
        particle.draw(ctx);
      });
      
      // Draw connections with throttling
      if (particles.length < 50) {
        drawConnections(ctx, particles);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none will-change-transform opacity-70"
      style={{ 
        zIndex: 1,
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default ParticleBackground;
