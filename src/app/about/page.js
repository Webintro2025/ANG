import React from 'react'
import About from '@/Components/About'
import Image from 'next/image'
import Design from '@/Components/Design'
import Sequence from '@/Components/Sequence'
import Count from '@/Components/Count'

export default function AboutPage(){
  return (
    <main>
      <section className="relative h-[360px] lg:h-[420px]">
        <Image src="/5.avif" alt="About hero" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <p className="text-amber-400 uppercase tracking-wider text-sm">About Us</p>
            <h1 className="mt-4 text-3xl lg:text-5xl font-extrabold">About A.N.G Enterprises</h1>
          </div>
        </div>
      </section>

      <About />
      <Design />
            <Count />


    </main>
  )
}

