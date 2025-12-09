import React from 'react'
import GetInTouch from '@/Components/GetInTouch'
import Image from 'next/image'
import Maps from '@/Components/Maps'

export default function ContactPage(){
  return (
    <main>
      <section className="relative h-[360px] lg:h-[420px]">
        <Image src="/aboutimage.jpg" alt="Contact hero" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <p className="text-amber-400 uppercase tracking-wider text-sm">Contact Us</p>
            <h1 className="mt-4 text-3xl lg:text-5xl font-extrabold">Get in touch with A.N.G Enterprises</h1>
          </div>
        </div>
      </section>

      <GetInTouch />
      <Maps />
    </main>
  )
}
