import React from "react";
import { motion } from "framer-motion";

export default function Sourcing() {
  return (
    <section className="flex flex-col md:flex-row">
      {/* Left side - Text */}
      <motion.div
        className="bg-[#fef8f3] flex flex-col justify-center items-center text-center p-10 md:w-1/2 md:h-screen"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Sourced with Passion, Baked with Love
        </h2>
        <p className="text-black max-w-xl mb-6">
          We source only the finest ingredients from trusted growers and suppliers,
          ensuring every bake is of the highest quality.  
          Our commitment to freshness means every product is made to order.
        </p>
        <motion.button
          className="border border-black text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          VISIT OUR BAKEHOUSE
        </motion.button>
      </motion.div>

      {/* Right side - Image */}
      <motion.div
        className="md:w-1/2 h-[50vh] md:h-screen"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src="/images/img1.png" // replace with your actual image
          alt="Sourcing Ingredients"
          className="w-full h-full object-cover"
        />

        {/* Video (commented out)
        <video
          src="/videos/sourcing.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        ></video>
        */}
      </motion.div>
    </section>
  );
}
