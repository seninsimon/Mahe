import React from "react";
import { motion } from "framer-motion";

// Sample product data (replace with API or DB later)
const products = [
  {
    id: 1,
    name: "Arabica Green Beans",
    description: "Premium unroasted Arabica beans sourced from Karnataka.",
    price: "₹550 / Kg (MOQ: 50 Kg)",
    image: "/images/arabica.jpg",
  },
  {
    id: 2,
    name: "Robusta Green Beans",
    description: "Strong-bodied Robusta beans perfect for blends.",
    price: "₹420 / Kg (MOQ: 50 Kg)",
    image: "/images/robusta.jpg",
  },
  {
    id: 3,
    name: "Liberica Coffee",
    description: "Rare Liberica beans with bold smoky flavors.",
    price: "₹900 / Kg (MOQ: 20 Kg)",
    image: "/images/liberica.jpg",
  },
  {
    id: 4,
    name: "Excelsa Coffee",
    description: "Exotic Excelsa variety with fruity undertones.",
    price: "₹1,200 / Kg (MOQ: 20 Kg)",
    image: "/images/excelsa.jpg",
  },
];

export default function ProductListing() {
  return (
    <section className="bg-[#fef8f3] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-stone-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Wholesale Coffee Beans – Product Catalog
        </motion.h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden border border-stone-200 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover"
              />

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-stone-600 text-sm mb-4">
                    {product.description}
                  </p>
                </div>
                <div>
                  <p className="text-lg font-bold text-amber-700 mb-4">
                    {product.price}
                  </p>

                  {/* CTA */}
                  <motion.button
                    className="w-full border border-amber-700 text-amber-700 px-4 py-2 rounded-lg font-semibold hover:bg-amber-700 hover:text-white transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request Quote
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
