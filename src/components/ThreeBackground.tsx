
import { useEffect, useRef } from 'react';

export const ThreeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) return;

    // Dynamically import Three.js to avoid build issues
    import('three').then((THREE) => {
      // Create circular texture for particles
      const createCircleTexture = () => {
        const size = 64;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d')!;
        
        // Create radial gradient for soft circular appearance
        const gradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.5)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size, size);
        
        return new THREE.CanvasTexture(canvas);
      };

      // Scene setup
      const scene = new THREE.Scene();

      // Camera setup
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      // Renderer setup
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current!,
        alpha: true,
        antialias: false,
        powerPreference: "high-performance"
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Create circular texture
      const circleTexture = createCircleTexture();

      // Enhanced particle system with circular sprites
      const particleCount = 120;
      const particles: THREE.Sprite[] = [];
      
      // Site color palette - muted and elegant
      const colors = [
        new THREE.Color(0xB8CFCE), // Muted teal - 40%
        new THREE.Color(0x7F8CAA), // Blue-gray - 35% 
        new THREE.Color(0x8B7FB8), // Soft purple - 25%
      ];

      // Create individual sprite particles for better control
      for (let i = 0; i < particleCount; i++) {
        const material = new THREE.SpriteMaterial({
          map: circleTexture,
          transparent: true,
          opacity: Math.random() * 0.4 + 0.3, // 0.3-0.7 range
          blending: THREE.AdditiveBlending,
          color: colors[Math.floor(Math.random() * colors.length)]
        });

        const sprite = new THREE.Sprite(material);
        
        // Position particles
        sprite.position.set(
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 12
        );
        
        // Scale for size variation
        const scale = Math.random() * 0.3 + 0.2; // 0.2-0.5 range
        sprite.scale.setScalar(scale);
        
        // Store initial properties for animation
        (sprite as any).velocity = {
          x: (Math.random() - 0.5) * 0.015,
          y: (Math.random() - 0.5) * 0.015,
          z: (Math.random() - 0.5) * 0.015
        };
        (sprite as any).baseOpacity = material.opacity;
        (sprite as any).baseScale = scale;
        (sprite as any).pulsePhase = Math.random() * Math.PI * 2;
        
        scene.add(sprite);
        particles.push(sprite);
      }

      // Enhanced mouse interaction
      const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
      const handleMouseMove = (event: MouseEvent) => {
        mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
      };
      window.addEventListener('mousemove', handleMouseMove);

      // Animation variables
      let time = 0;

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        time += 0.005;

        // Smooth mouse interpolation
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        particles.forEach((sprite, index) => {
          const velocity = (sprite as any).velocity;
          const baseOpacity = (sprite as any).baseOpacity;
          const baseScale = (sprite as any).baseScale;
          const pulsePhase = (sprite as any).pulsePhase;
          
          // Update positions
          sprite.position.x += velocity.x;
          sprite.position.y += velocity.y;
          sprite.position.z += velocity.z;

          // Wrap around screen edges
          if (sprite.position.x > 6) sprite.position.x = -6;
          if (sprite.position.x < -6) sprite.position.x = 6;
          if (sprite.position.y > 6) sprite.position.y = -6;
          if (sprite.position.y < -6) sprite.position.y = 6;

          // Pulsing animation for enhanced visibility
          const pulseMultiplier = 1 + Math.sin(time * 2 + pulsePhase) * 0.3;
          sprite.scale.setScalar(baseScale * pulseMultiplier);
          
          // Dynamic opacity based on pulse
          sprite.material.opacity = baseOpacity * (0.8 + Math.sin(time * 1.5 + pulsePhase) * 0.2);
        });

        // Enhanced mouse parallax effect
        const parallaxStrength = 0.2;
        scene.rotation.x += (mouse.y * parallaxStrength - scene.rotation.x) * 0.08;
        scene.rotation.y += (mouse.x * parallaxStrength - scene.rotation.y) * 0.08;

        renderer.render(scene, camera);
      };

      animate();

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

      // Cleanup function
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
        circleTexture.dispose();
        particles.forEach(sprite => {
          sprite.material.dispose();
        });
      };
    }).catch((error) => {
      console.warn('Three.js failed to load:', error);
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 will-change-transform"
      style={{ opacity: 0.6 }}
    />
  );
};
