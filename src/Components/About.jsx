import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Tall image */}
          <div className="md:col-span-1 lg:col-span-5 flex justify-center lg:justify-start">
            <div className="w-[260px] md:w-[340px] lg:w-[520px] xl:w-[620px]">
              <div className="relative aspect-3/5 w-full overflow-hidden">
                <Image src="/about.png" alt="kitchen" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="md:col-span-1 lg:col-span-7 relative">
            <div className="max-w-3xl">
              <p className="text-amber-500 uppercase tracking-wider text-xs mb-3">
                About A.N.G Enterprises
              </p>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-6">
                Trusted Melamine Kitchenware Since 1989
              </h2>


              <p className="text-gray-700 mb-4">
                Established in 1989, A.N.G Enterprises is one of India’s trusted manufacturers, wholesalers, and traders of premium-quality melamine kitchenware. With over three decades of experience, we specialize in crafting durable, stylish, and user-friendly products including Lid Donga, Dinner Sets, Melamine Crockery, Bowls, Kitchen Plates, Serving Trays, Food Thalis, and a wide range of household essentials.
              </p>

              <p className="text-gray-700 mb-4">
                Guided by our founder Mr. Nitin Goyal, we have steadily grown into a reliable name in the kitchenware industry. Our products are known for their excellent finish, long life, and practical designs, making them suitable for homes, restaurants, caterers, and commercial kitchens.
              </p>

              <p className="text-gray-700 mb-4 hidden lg:block">
                <strong>Why Choose Us?</strong><br />
                <ul className="list-disc ml-6 mt-2 mb-2">
                  <li>ISO-certified manufacturing processes</li>
                  <li>Wide range of designs, colors, and sizes</li>
                  <li>Custom branding and bulk orders available</li>
                  <li>Fast delivery across India</li>
                  <li>Competitive pricing and transparent deals</li>
                  <li>Dedicated after-sales support</li>
                </ul>
              </p>

              <p className="text-gray-700 mb-4 hidden lg:block">
                <strong>Our Mission</strong><br />
                To deliver innovative, safe, and affordable kitchenware that enhances everyday living for families and businesses alike.
              </p>

              <p className="text-gray-700 mb-4 hidden lg:block">
                <strong>Our Vision</strong><br />
                To be the leading provider of melamine kitchenware in India, known for quality, reliability, and customer-centric service.
              </p>

              <p className="text-gray-700 mb-6 hidden lg:block">
                We operate from Delhi with a dedicated team of professionals who ensure that every product reflects our commitment to quality, affordability, and customer satisfaction. Connect with us to experience the best in melamine kitchenware.
              </p>

              <div className="mt-6">
                <a
                  href="/contact"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-md"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
