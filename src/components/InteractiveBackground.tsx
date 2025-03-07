
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#0d0d15] via-[#1a1a2e] to-[#262640]">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-[100px]"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 50,
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px]"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 55,
        }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[100px]"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 60,
        }}
      />
    </div>
  );
};

export default InteractiveBackground;
