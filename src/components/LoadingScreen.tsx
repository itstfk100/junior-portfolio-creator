
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
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
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={(definition) => {
        if (definition === "animate") {
          document.body.style.overflow = "auto";
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d0d15] overflow-hidden"
    >
      {/* Interactive background blobs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[100px]"
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
        className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[100px]"
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

      <div className="relative text-center z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
          className="relative"
        >
          <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
            Bienvenido
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-xl rounded-full animate-pulse" />
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ 
            duration: 1.5, 
            ease: "easeInOut",
            delay: 0.3
          }}
          className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 mx-auto rounded-full relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 blur-md" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
