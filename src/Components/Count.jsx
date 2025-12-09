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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left heading */}
          <div>
            <p className="text-amber-500 text-sm font-medium uppercase tracking-wider">Quality of work</p>
            <h2 className="mt-4 text-3xl lg:text-4xl font-extrabold text-white max-w-xl">Milestones that we proudly accomplished &amp; lead us forward.</h2>
          </div>

          {/* Right stats grid */}
          <div>
            <div className="grid grid-cols-2 gap-6 text-center max-w-lg ml-auto">
              {stats.map((s, idx)=> (
                <div key={s.id} className="py-6 border border-white/10 rounded-lg">
                  <div className="text-3xl lg:text-4xl font-extrabold text-amber-400">{counts[idx]}{s.suffix}</div>
                  <div className="mt-2 text-sm text-gray-200">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
