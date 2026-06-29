'use client';
import { useRef, useEffect, useState } from 'react';
import { useMotionValue, useSpring, motion, AnimatePresence } from 'framer-motion';

const isTouchDevice = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

interface SpotlightConfig {
  radius?: number;
  brightness?: number;
  color?: string;
  smoothing?: number;
}

export const SpotlightCursor = ({
  config = {},
}: {
  config?: SpotlightConfig;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tooltip, setTooltip] = useState<{ text: string; visible: boolean }>({
    text: '',
    visible: false
  });

  // Smooth tooltip position with spring physics
  const tooltipX = useMotionValue(0);
  const tooltipY = useMotionValue(0);

  const smoothTooltipX = useSpring(tooltipX, {
    stiffness: 500,
    damping: 50,
    bounce: 0
  });
  const smoothTooltipY = useSpring(tooltipY, {
    stiffness: 500,
    damping: 50,
    bounce: 0
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0;
    let running = false;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const hexToRgb = (hex: string) => {
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `${r},${g},${b}`;
    };

    const radius = config.radius || 320;
    // Almost transparent — a barely-there trail that hints rather than glows.
    const brightness = config.brightness ?? 0.05;
    const rgbColor = hexToRgb(config.color || '#ffffff');

    // Particle trail: each mouse move emits soft blobs that drift, shrink and fade.
    // The cloud naturally deforms/stretches in the direction of movement (a comet-like
    // estela). The pool is capped and the RAF loop stops once no particles remain, so
    // there's zero cost while the cursor is idle.
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      decay: number;
      size: number;
    }
    const particles: Particle[] = [];
    const MAX_PARTICLES = 160;
    const MIN_STEP = 6; // spawn spacing in px, keeps the trail even at any speed

    let lastX = -1000;
    let lastY = -1000;

    const emit = (x: number, y: number, mvx: number, mvy: number) => {
      if (particles.length >= MAX_PARTICLES) particles.shift();
      particles.push({
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 6,
        // inherit a bit of cursor velocity (trail) + small random spread (scatter)
        vx: mvx * 0.18 + (Math.random() - 0.5) * 0.9,
        vy: mvy * 0.18 + (Math.random() - 0.5) * 0.9,
        life: 1,
        decay: 0.014 + Math.random() * 0.014,
        size: radius * (0.14 + Math.random() * 0.16),
      });
    };

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.9;
        p.vy *= 0.9;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const eased = p.life * p.life; // quadratic fade — softer tail
        const r = p.size * (1.5 - p.life * 0.5); // grows a touch as it fades
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        g.addColorStop(0, `rgba(${rgbColor}, ${eased * brightness})`);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.fillRect(p.x - r, p.y - r, r * 2, r * 2);
      }

      if (particles.length > 0) {
        animationFrameId = requestAnimationFrame(tick);
      } else {
        running = false;
      }
    };

    const ensureRunning = () => {
      if (!running) {
        running = true;
        animationFrameId = requestAnimationFrame(tick);
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;

      // Tooltip follows the raw cursor (smoothed by springs below).
      tooltipX.set(x + 20);
      tooltipY.set(y - 40);

      if (lastX !== -1000) {
        const dx = x - lastX;
        const dy = y - lastY;
        const dist = Math.hypot(dx, dy);
        // Emit along the path so the trail is even regardless of pointer speed.
        if (dist >= MIN_STEP) {
          const steps = Math.min(Math.floor(dist / MIN_STEP), 8);
          for (let s = 1; s <= steps; s++) {
            const t = s / steps;
            emit(lastX + dx * t, lastY + dy * t, dx, dy);
          }
          lastX = x;
          lastY = y;
          ensureRunning();
        }
      } else {
        lastX = x;
        lastY = y;
        emit(x, y, 0, 0);
        ensureRunning();
      }
    };

    const handleMouseLeave = () => {
      lastX = -1000;
      lastY = -1000;
      setTooltip({ text: '', visible: false });
    };

    // Listen for custom tooltip events
    const handleShowTooltip = (event: CustomEvent) => {
      setTooltip({ text: event.detail.text, visible: true });
    };

    const handleHideTooltip = () => {
      setTooltip({ text: '', visible: false });
    };

    const handleResize = () => {
      resizeCanvas();
    };

    resizeCanvas();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('showCursorTooltip', handleShowTooltip as EventListener);
    window.addEventListener('hideCursorTooltip', handleHideTooltip);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('showCursorTooltip', handleShowTooltip as EventListener);
      window.removeEventListener('hideCursorTooltip', handleHideTooltip);
      cancelAnimationFrame(animationFrameId);
    };
  }, [config.radius, config.brightness, config.color, tooltipX, tooltipY]);

  if (isTouchDevice()) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'screen',
        }}
      />
      <AnimatePresence>
        {tooltip.visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ 
              type: "spring", 
              stiffness: 600, 
              damping: 30,
              bounce: 0.1
            }}
            style={{
              position: 'fixed',
              left: smoothTooltipX,
              top: smoothTooltipY,
              backgroundColor: 'var(--color-yellow)',
              color: '#0A0A0A',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '14px',
              fontFamily: 'var(--font-body)',
              fontWeight: '500',
              pointerEvents: 'none',
              zIndex: 10000,
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {tooltip.text}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
