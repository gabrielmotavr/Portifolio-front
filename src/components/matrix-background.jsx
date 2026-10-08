import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const CHARS = "0101010101010101010101";
const FONT_SIZE = 16;
const FRAME_MS = 60; // ~16fps: chuva lenta, discreta

// Chuva de caracteres estilo "Matrix", bem sutil, fixa atrás do conteúdo
export default function MatrixBackground() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const color = theme === "light" ? "#047857" : "#22C55E";
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    let drops = [];
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${FONT_SIZE}px monospace`;

      // Começa cada coluna numa altura aleatória para não "cair" tudo junto
      const columns = Math.ceil(width / FONT_SIZE);
      drops = Array.from({ length: columns }, () => ({
        y: Math.random() * -height / FONT_SIZE,
        speed: 0.4 + Math.random() * 0.6,
      }));
    };

    const draw = () => {
      // Apaga gradualmente o frame anterior mantendo o canvas transparente (rastro)
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";

      ctx.fillStyle = color;
      drops.forEach((drop, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillText(char, i * FONT_SIZE, drop.y * FONT_SIZE);

        drop.y += drop.speed;
        if (drop.y * FONT_SIZE > height && Math.random() > 0.98) {
          drop.y = 0;
        }
      });
    };

    resize();
    window.addEventListener("resize", resize);

    // Movimento reduzido: só um quadro estático
    if (reduceMotion) {
      for (let i = 0; i < 80; i++) draw();
      return () => window.removeEventListener("resize", resize);
    }

    let rafId;
    let last = 0;
    const loop = (time) => {
      rafId = requestAnimationFrame(loop);
      if (time - last < FRAME_MS) return;
      last = time;
      draw();
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="matrix-bg fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
