import React from "react";
import { motion } from "framer-motion";

export default function CoffeeSection() {
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
          A Journey Through the Subcontinent’s Finest Beans
        </h2>
        <p className="text-black max-w-xl mb-6">
          From the misty hills of Karnataka to the lush estates of Sri Lanka,
          our beans are handpicked and roasted with precision.  
          Guided by certified Arabica Q Graders, we bring you the very best in
          Arabica, Robusta, Liberica, and Excelsa — each cup telling the story
          of its origin.
        </p>
        <motion.button
          className="border border-black text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          DISCOVER OUR COFFEE
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
          src="/images/img3.jpg"
          alt="Coffee Beans"
          className="w-full h-full object-cover"
        />

        {/* Video (commented out for now)
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/craft-bakes.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        */}
      </motion.div>
    </section>
  );
}
