import React from "react";

const ProductsSection = () => {
    const products = [
        {
            name: "Japanese Style White Bread",
            weight: "500 Gms",
            packing: "1X1",
            image: "charlotte-thomas-nPLrLh-saOU-unsplash.jpg", // replace with actual
        },
        {
            name: "Wholemeal Bread",
            weight: "500 Gms",
            packing: "1X1",
            image: "young-shih-TS1W9BeXnl8-unsplash.jpg",
        },
        {
            name: "Sour Dough Bread",
            weight: "500 Gms",
            packing: "1X1",
            image: "lizzie-oren-iCUEWaBjtG8-unsplash.jpg",
        },
    ];

    return (
        <section className="py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <h2
                    className="text-4xl font-semibold mb-8 pt-4 playfair"
                    style={{ borderColor: "#8e4921", color: "#8e4921" }}
                >
                    Our Products
                </h2>

                {/* Product Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((item, index) => (
                        <div
                            key={index}
                            className="overflow-hidden bg-white transition rounded-xl dm-sans"
                        >
                            {/* Product Image */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-48 object-cover"
                            />

                            {/* Card Content */}
                            <div className="py-5">
                                <h3
                                    className="text-lg font-semibold mb-2"
                                    style={{ color: "#8e4921" }}
                                >
                                    {item.name}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    <span className="font-medium">Weight:</span> {item.weight}
                                </p>
                                <p className="text-gray-600 text-sm mb-3">
                                    <span className="font-medium">Packing:</span> {item.packing}
                                </p>

                                {/* CTA */}
                                <button
                                    className="w-full py-2 font-semibold rounded-full transition"
                                    style={{
                                        backgroundColor: "#8e4921",
                                        color: "white",
                                    }}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-10 text-center">
                    <button
                        className="px-8 py-3 font-semibold rounded-full transition text-white"
                        style={{
                            backgroundColor: "#8e4921",
                        }}
                    >
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
