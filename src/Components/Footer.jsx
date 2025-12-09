import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#0b1115] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left: Logo + address */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-20 h-16 rounded flex items-center justify-center">
               <img src="/logoooo.jpg" alt="" />
              </div>
              <div>
                <div className="text-white font-semibold">A.N.G Enterprises</div>
                <div className="text-sm text-gray-400">Design · Build · Deliver</div>
              </div>
            </div>

            <div className="text-sm text-gray-300 space-y-1">
              <div>📍 I-142, Sector-3, Bawana Industrial Area, DSIIDC, New Delhi-110039</div>
              <div>📞 9278927107</div>
              <div>✉️ ang.enterprises1989@gmail.com</div>
              <div>GST: 07BANPG8059B1ZO</div>
            </div>
          </div>

          {/* Center: Quick links */}
          <div className="flex flex-col">
            <h5 className="text-white font-semibold mb-3">Quick Links</h5>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact us</a></li>
            </ul>
          </div>

          {/* Right: Products list */}
          <div>
            <h5 className="text-white font-semibold    mb-3">Products</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400">
              <div className="space-y-1">
                <a href="/product/melamine-crockery-products" className="block hover:text-white">Melamine Crockery Products</a>
                <a href="/product/melamine-crockery" className="block hover:text-white">Melamine Crockery</a>
                <a href="/product/kitchen-full-plates" className="block hover:text-white">Kitchen Full Plates</a>
                <a href="/product/melamine-thali" className="block hover:text-white">Melamine Thali</a>
                <a href="/product/melamine-bowls" className="block hover:text-white">Melamine Bowls</a>
              </div>

              <div className="space-y-1">
                <a href="/product/veg-bowl" className="block hover:text-white">Veg Bowl</a>
                <a href="/product/dinner-sets" className="block hover:text-white">Dinner Sets</a>
                <a href="/product/lid-donga" className="block hover:text-white">Lid Donga</a>
                <a href="/product/serving-spoon" className="block hover:text-white">Serving Spoon</a>
                <a href="/product/serving-tray" className="block hover:text-white">Serving Tray</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <div className="text-sm text-gray-400">© {new Date().getFullYear()} S.K. Interiors. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
