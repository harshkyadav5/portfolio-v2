import { motion } from "framer-motion";

export function FloatingShapes() {
  const shapes = [
    { size: 120, top: "8%", left: "8%", rotate: -12, blur: 12, delay: 0 },
    { size: 80, top: "20%", right: "12%", rotate: 18, blur: 8, delay: 1.2 },
    { size: 56, top: "55%", left: "14%", rotate: 30, blur: 6, delay: 0.6 },
    { size: 100, bottom: "12%", right: "18%", rotate: -8, blur: 10, delay: 1.8 },
    { size: 44, top: "38%", left: "48%", rotate: 24, blur: 4, delay: 0.3 },
    { size: 64, top: "12%", right: "32%", rotate: -22, blur: 6, delay: 2.4 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute glass rounded-[28%]"
          style={{
            width: s.size,
            height: s.size,
            top: s.top,
            left: s.left,
            right: s.right,
            bottom: s.bottom,
            filter: `blur(${s.blur * 0.4}px)`,
          }}
          initial={{ opacity: 0, scale: 0.6, rotate: s.rotate }}
          animate={{
            opacity: [0.45, 0.7, 0.5],
            y: [0, -22, 0],
            x: [0, 12, 0],
            rotate: [s.rotate, s.rotate + 14, s.rotate],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 9 + i * 1.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay,
          }}
        />
      ))}
    </div>
  );
}
