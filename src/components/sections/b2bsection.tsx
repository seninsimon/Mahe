'use client'

import React from 'react'

const B2BSection = () => {
    return (
        <section className="bg-white py-16 px-6 md:px-12 playfair">
            <div className="max-w-6xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    MAHÈ for Business
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Specialty coffee. Craft bakes. Fine cacao.
                    From the subcontinent. For all.
                    Partner with us to bring MAHÈ quality to your customers.
                </p>

                {/* Client Logos */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mt-12">
                    <img src="https://bluetokaicoffee.com/cdn/shop/files/logo-footer.png?v=1688108473&width=190" alt="Client 1" className="h-12 mx-auto opacity-80" />
                    <img src="https://www.starbucks.in/assets/icon/logo.png" alt="Client 2" className="h-12 mx-auto opacity-80" />
                    <img src="https://cdn.tajhotels.com/images/ocl5w36p/prod5/4eeaf5b2669e2f360ea72bed30fbc7cbdfb3a2a4-67x59.png" alt="Client 3" className="h-12 mx-auto opacity-80" />
                    <img src="https://www.olivebarandkitchen.com/img/logo.png" alt="Client 4" className="h-12 mx-auto opacity-80" />
                </div>

                {/* Testimonial */}
                <div className="mt-16 bg-white border border-gray-300 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
                    <p className="text-lg text-gray-700 italic leading-relaxed">
                        “Partnering with MAHÈ has elevated our café experience.
                        Their coffee and bakes consistently receive glowing feedback from our customers.”
                    </p>
                    <div className="mt-6">
                        <p className="font-semibold text-gray-900">Rahul Mehta</p>
                        <p className="text-sm text-gray-500">Founder, BrewHouse Café</p>
                    </div>
                </div>

                {/* Trust-building element */}
                <div className="mt-16">
                    <p className="text-gray-700 text-lg mb-4">
                        Trusted by cafés, restaurants, and boutique stores across India.
                    </p>
                    <button className="bg-[#8e4921] text-white px-6 py-3 rounded-full hover:bg-[#6f3615] transition">
                        Partner With MAHÈ
                    </button>
                </div>
            </div>
        </section>
    )
}

export default B2BSection
