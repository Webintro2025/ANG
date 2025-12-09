"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const stats = [
  { id: 1, value: 500, label: 'Customer', suffix: '+' },
  { id: 2, value: 450, label: 'Satisfaction Client', suffix: '+' },
  { id: 3, value: 300, label: 'No of Product', suffix: '+' },
  { id: 4, value: 350, label: 'Review', suffix: '+' }
]

export default function Count(){
  // animate each stat to its own target value
  const duration = 2000 // ms

  const [counts, setCounts] = useState(stats.map(()=>0))

  useEffect(()=>{
    let start = null
    const initial = 0
    const raf = (timestamp)=>{
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const next = stats.map((s, idx)=>{
        const value = s.value;
        return Math.floor(initial + (value - initial) * progress)
      })
      setCounts(next)
      if (progress < 1) requestAnimationFrame(raf)
    }
    const id = requestAnimationFrame(raf)
    return ()=> cancelAnimationFrame(id)
  }, [])

  return (
    <section className="relative">
      {/* Background image: pick an existing image from public/ for visual */}
      <div className="absolute inset-0">
        <div className="w-full h-full fixed top-0 left-0 -z-10">
          <Image src="/aaaaa.jpg" alt="background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gray-900/60" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-10 sm:py-16 md:py-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left heading */}
          <div>
            <p className="text-amber-500 text-xs sm:text-sm font-medium uppercase tracking-wider">Our Achievements</p>
            <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white max-w-xl">Delivering Excellence in Melamine Kitchenware </h2>
            <p className="mt-3 text-gray-200 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl text-xs sm:text-sm md:text-base">We are proud to serve thousands of satisfied customers with our high-quality, innovative, and stylish melamine products. Our commitment to quality and customer satisfaction drives us forward every day.</p>
          </div>

          {/* Right stats grid */}
          <div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ml-auto">
              {stats.map((s, idx)=> (
                <div key={s.id} className="py-4 sm:py-5 md:py-6 border border-white/10 rounded-lg">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-amber-400">{counts[idx]}{s.suffix}</div>
                  <div className="mt-2 text-xs sm:text-sm md:text-base text-gray-200">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
