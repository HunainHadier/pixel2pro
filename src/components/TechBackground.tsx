import { useEffect, useRef } from "react";

interface CanvasNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  type: "dot" | "symbol";
  char?: string;
  size?: number;
  opacity: number;
}

const TechBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Dynamic node configuration based on screen width
    const totalCount = Math.min(65, Math.floor((width * height) / 18000));
    const nodes: CanvasNode[] = [];

    const educationalSymbols = [
      "</>", "{}", "[]", "( )", "f()", "JS", "Py", "C#", "SQL", "AI", 
      "🎓", "📚", "1", "0", "++", "=>", "Code", "Web"
    ];

    // Initialize nodes with a mix of connectivity dots and floating symbols
    for (let i = 0; i < totalCount; i++) {
      const isSymbol = Math.random() < 0.45; // 45% are symbols, 55% are network dots
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3, // slow motion
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 1.2,
        type: isSymbol ? "symbol" : "dot",
        char: isSymbol ? educationalSymbols[Math.floor(Math.random() * educationalSymbols.length)] : undefined,
        size: isSymbol ? Math.floor(Math.random() * 5) + 11 : undefined, // 11px to 15px text
        opacity: Math.random() * 0.2 + 0.15, // between 15% and 35% opacity
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Grid Lines (Subtle blueprint grid background)
      ctx.strokeStyle = "rgba(226, 232, 240, 0.12)"; // Very light slate-200 grid
      ctx.lineWidth = 1;
      const gridSpacing = 85;

      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Update and Draw Tech/Education Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off boundaries with a small padding
        const margin = 20;
        if (node.x < -margin) node.x = width + margin;
        if (node.x > width + margin) node.x = -margin;
        if (node.y < -margin) node.y = height + margin;
        if (node.y > height + margin) node.y = -margin;

        // Draw node
        if (node.type === "symbol" && node.char && node.size) {
          ctx.font = `600 ${node.size}px Inter, "Segoe UI", sans-serif`;
          ctx.fillStyle = `rgba(100, 116, 139, ${node.opacity})`;
          ctx.fillText(node.char, node.x, node.y);
        } else {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(100, 116, 139, ${node.opacity})`;
          ctx.fill();
        }

        // Draw connection lines between nearby nodes (type doesn't restrict connection)
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Connection threshold (130px)
          if (distance < 130) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            
            // Connection line opacity decreases with distance
            const lineOpacity = (1 - distance / 130) * 0.12;
            ctx.strokeStyle = `rgba(148, 163, 184, ${lineOpacity})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 select-none opacity-45"
      style={{ mixBlendMode: "multiply" }}
    />
  );
};

export default TechBackground;
