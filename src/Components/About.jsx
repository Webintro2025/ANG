import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left: Content half */}
          <div className="w-full md:w-1/2 flex items-center">
            <div className="max-w-3xl w-full">
              <p className="text-amber-500 uppercase tracking-wider text-xs mb-3">About A.N.G Enterprises</p>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-6">Trusted Melamine Kitchenware Since 1989</h2>
              <p className="text-gray-700 mb-4">Established in 1989, A.N.G Enterprises is one of India’s trusted manufacturers, wholesalers, and traders of premium-quality melamine kitchenware. With over three decades of experience, we specialize in crafting durable, stylish, and user-friendly products including Lid Donga, Dinner Sets, Melamine Crockery, Bowls, Kitchen Plates, Serving Trays, Food Thalis, and a wide range of household essentials.</p>
              <p className="text-gray-700 mb-4">Guided by our founder Mr. Nitin Goyal, we have steadily grown into a reliable name in the kitchenware industry. Our products are known for their excellent finish, long life, and practical designs, making them suitable for homes, restaurants, caterers, and commercial kitchens.</p>
            </div>

          </div>
          <div  className="w-[500px] h-[500px] relative">
            <img src="/about1.avif" alt="kitchen" fill className="object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-110"/>
          </div>

        </div>
        {/* Separate section: image left, content right */}
        <div className="flex flex-col md:flex-row gap-8 items-center mt-16">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="w-[500px] h-[500px] relative">
              <Image src="/aboutimage.jpg" alt="kitchen" fill className="object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-110" />
            </div>
          </div>
          {/* Right: Content */}
          <div className="w-full md:w-1/2 flex items-center">
            <div className="max-w-3xl w-full">
              <div className="mb-4">
                <strong className="block mb-2">Why Choose Us?</strong>
                <ul className="list-disc ml-6 mt-2 mb-2 text-gray-700">
                  <li>ISO-certified manufacturing processes</li>
                  <li>Wide range of designs, colors, and sizes</li>
                  <li>Custom branding and bulk orders available</li>
                  <li>Fast delivery across India</li>
                  <li>Competitive pricing and transparent deals</li>
                  <li>Dedicated after-sales support</li>
                </ul>
              </div>
              <div className="mb-4">
                <strong className="block mb-2">Our Mission</strong>
                <p className="text-gray-700">To deliver innovative, safe, and affordable kitchenware that enhances everyday living for families and businesses alike.</p>
              </div>
              <div className="mb-4">
                <strong className="block mb-2">Our Vision</strong>
                <p className="text-gray-700">To be the leading provider of melamine kitchenware in India, known for quality, reliability, and customer-centric service.</p>
              </div>
              <div className="mb-6">
                <p className="text-gray-700">We operate from Delhi with a dedicated team of professionals who ensure that every product reflects our commitment to quality, affordability, and customer satisfaction. Connect with us to experience the best in melamine kitchenware.</p>
              </div>
              <div className="mt-6">
                <a href="/contact" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-md">Get in Touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
