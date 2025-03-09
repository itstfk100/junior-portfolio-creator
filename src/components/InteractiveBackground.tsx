
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
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#0f0f1b] via-[#1a1a2e] to-[#262645]">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-[#8B5CF6]/20 blur-[120px]"
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
        className="absolute w-[400px] h-[400px] rounded-full bg-[#60A5FA]/20 blur-[100px]"
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
        className="absolute w-[300px] h-[300px] rounded-full bg-[#EC4899]/20 blur-[80px]"
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
