
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

      // Create floating particles with enhanced visibility
      const particleCount = 120;
      const positions = new Float32Array(particleCount * 3);
      const velocities = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);
      const pulsePhases = new Float32Array(particleCount);

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        positions[i3] = (Math.random() - 0.5) * 12;
        positions[i3 + 1] = (Math.random() - 0.5) * 12;
        positions[i3 + 2] = (Math.random() - 0.5) * 12;

        velocities[i3] = (Math.random() - 0.5) * 0.015;
        velocities[i3 + 1] = (Math.random() - 0.5) * 0.015;
        velocities[i3 + 2] = (Math.random() - 0.5) * 0.015;

        // Varied particle sizes for depth
        sizes[i] = Math.random() * 0.12 + 0.08;
        pulsePhases[i] = Math.random() * Math.PI * 2;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      // Enhanced material with better visibility
      const material = new THREE.PointsMaterial({
        color: 0x64FFDA,
        size: 0.1,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
        vertexColors: false
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

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

        if (particles) {
          const positions = particles.geometry.attributes.position.array as Float32Array;
          const sizes = particles.geometry.attributes.size.array as Float32Array;
          
          for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            
            // Update positions
            positions[i3] += velocities[i3];
            positions[i3 + 1] += velocities[i3 + 1];
            positions[i3 + 2] += velocities[i3 + 2];

            // Wrap around screen edges with smoother boundaries
            if (positions[i3] > 6) positions[i3] = -6;
            if (positions[i3] < -6) positions[i3] = 6;
            if (positions[i3 + 1] > 6) positions[i3 + 1] = -6;
            if (positions[i3 + 1] < -6) positions[i3 + 1] = 6;

            // Pulsing animation for enhanced visibility
            const baseSizeIndex = i;
            const baseSize = 0.08 + Math.random() * 0.12;
            const pulseMultiplier = 1 + Math.sin(time * 2 + pulsePhases[i]) * 0.3;
            sizes[baseSizeIndex] = baseSize * pulseMultiplier;
          }

          particles.geometry.attributes.position.needsUpdate = true;
          particles.geometry.attributes.size.needsUpdate = true;
          
          // Enhanced mouse parallax effect
          const parallaxStrength = 0.2;
          particles.rotation.x += (mouse.y * parallaxStrength - particles.rotation.x) * 0.08;
          particles.rotation.y += (mouse.x * parallaxStrength - particles.rotation.y) * 0.08;
        }

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
        geometry.dispose();
        material.dispose();
      };
    }).catch((error) => {
      console.warn('Three.js failed to load:', error);
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 will-change-transform"
      style={{ opacity: 0.5 }}
    />
  );
};
