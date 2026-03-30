import { useEffect, useRef } from 'react';
import './StarryBackground.css';

const NUM_STARS = 150;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function StarryBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let rafId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const stars = Array.from({ length: NUM_STARS }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: randomBetween(0.5, 2),
      opacity: randomBetween(0.4, 1),
      delta: randomBetween(0.003, 0.012),
      direction: Math.random() > 0.5 ? 1 : -1,
    }));

    let shooter = null;
    let shooterTimer = randomBetween(4000, 8000);
    let lastTime = performance.now();

    function spawnShooter() {
      shooter = {
        x: randomBetween(0, window.innerWidth * 0.7),
        y: randomBetween(0, window.innerHeight * 0.4),
        length: randomBetween(80, 140),
        speed: randomBetween(6, 10),
        opacity: 1,
        angle: Math.PI / 6,
      };
    }

    function draw(now) {
      const dt = now - lastTime;
      lastTime = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of stars) {
        s.opacity += s.delta * s.direction;
        if (s.opacity >= 1 || s.opacity <= 0.3) s.direction *= -1;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.opacity})`;
        ctx.fill();
      }

      shooterTimer -= dt;
      if (shooterTimer <= 0) {
        spawnShooter();
        shooterTimer = randomBetween(4000, 8000);
      }

      if (shooter) {
        const dx = Math.cos(shooter.angle) * shooter.speed;
        const dy = Math.sin(shooter.angle) * shooter.speed;
        shooter.x += dx;
        shooter.y += dy;
        shooter.opacity -= 0.018;

        if (shooter.opacity > 0) {
          const grad = ctx.createLinearGradient(
            shooter.x, shooter.y,
            shooter.x - Math.cos(shooter.angle) * shooter.length,
            shooter.y - Math.sin(shooter.angle) * shooter.length,
          );
          grad.addColorStop(0, `rgba(255,255,255,${shooter.opacity})`);
          grad.addColorStop(1, 'rgba(255,255,255,0)');

          ctx.beginPath();
          ctx.moveTo(shooter.x, shooter.y);
          ctx.lineTo(
            shooter.x - Math.cos(shooter.angle) * shooter.length,
            shooter.y - Math.sin(shooter.angle) * shooter.length,
          );
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        } else {
          shooter = null;
        }
      }

      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="starry-canvas" />;
}
