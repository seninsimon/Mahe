import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      

      {/* Centered Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          className="text-yellow-800 text-5xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          MAHÈ Artisanal
        </motion.h1>

        <motion.p
          className="text-gray-200 mt-4 max-w-2xl text-9xl md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Crafting fine flavors, specialty coffee, and artisanal delights with passion and precision.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
