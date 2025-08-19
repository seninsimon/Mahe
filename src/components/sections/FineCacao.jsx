import React from "react";
import { motion } from "framer-motion";

const FineCacao = () => {
  return (
    <section className="flex flex-col md:flex-row playfair">
      {/* Left side - Image */}
      <motion.div
        className="md:w-1/2 h-[50vh] md:h-screen"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src="/pexels-cristian-rojas-10040003.jpg" // replace with your actual image
          alt="Fine Cacao"
          className="w-full h-full object-cover"
        />

        {/* Video (commented out)
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/finecocao.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        */}
      </motion.div>

      {/* Right side - Text */}
      <motion.div
        className="bg-[#fef8f3] flex flex-col justify-center items-center text-center p-10 md:w-1/2 md:h-screen"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
          Handcrafted Cacao Indulgence
        </h2>
        <p className="text-black max-w-xl mb-6">
          From single-origin cacao beans to velvety ganache, each creation is
          an artisanal masterpiece. Our truffles, pralines, and desserts are
          crafted to celebrate the deep, complex flavors of fine chocolate —
          indulgence in its purest form.
        </p>
        <motion.button
          className="border border-black hover:border-[#8e4921] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#8e4921] hover:text-white transition"
        >
          DISCOVER CACAO DELIGHTS
        </motion.button>
      </motion.div>
    </section>
  );
};

export default FineCacao;
