import React from 'react';

const Hero = () => {
  return (
    <section className="playfair relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-36">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight capitalize">
          Specialty coffee. Craft bakes. Fine cacao.
          <br />
          <span className="block">
            From the subcontinent. For all.
          </span>
        </h1>

        {/* Optional: Add a subtitle or call-to-action */}
        <div className="mt-8 dm-sans">
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-[#8e4921] hover:text-white transition-all">
            Explore MAHÈ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;