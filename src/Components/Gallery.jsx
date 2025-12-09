"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Gallery(){
	// Slides mapped to services in `Services.jsx` (Smart care, Kitchen Planner, Home check, Kitchen Design)
	const slides = [
		"/1.avif",
		"/2.avif",
		"/3.avif",
		"/4.avif",
		"/5.avif",
		"/6.avif",
	]

	const [index, setIndex] = useState(0)

	useEffect(() => {
		if (!slides.length) return
		const id = setInterval(() => {
			setIndex(i => (i + 1) % slides.length)
		}, 3500)
		return () => clearInterval(id)
	}, [])

	const prev = () => setIndex(i => (i - 1 + slides.length) % slides.length)
	const next = () => setIndex(i => (i + 1) % slides.length)

	return (
		<section className="relative bg-gray-900 text-white">
			{/* Fixed background image */}
		
			<div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
					{/* Left promo text */}
					<div className="pr-0 md:pr-4 lg:pr-8 mb-6 md:mb-8 lg:mb-0">
						<p className="text-amber-500 text-sm font-medium uppercase tracking-wide">ANG Enterprises </p>
						<h2 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-extrabold">Our Melamine Kitchenware Gallery</h2>
						<p className="mt-4 text-gray-300 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-sm md:text-base">Explore our premium range of melamine crockery, dinner sets, bowls, thalis, and more. Every product is crafted for durability, style, and everyday comfort. Browse the gallery to see our latest designs and bestsellers.</p>
						<p className="mt-2 text-gray-300 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-sm md:text-base">From elegant dinner sets to practical serving trays, our collection is designed to meet the needs of modern homes, restaurants, and catering businesses. We pride ourselves on quality, innovation, and customer satisfaction.</p>
						<p className="mt-2 text-gray-300 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-sm md:text-base">Discover why thousands of families and professionals trust A.N.G Enterprises for their kitchenware needs. Our products are ISO-certified, available in a wide range of colors and styles, and backed by dedicated support.</p>
					</div>

					{/* Right slideshow card - responsive */}
					<div className="relative flex justify-center lg:justify-end">
						<div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] rounded shadow-lg overflow-hidden bg-gray-900">
							{/* Responsive image area */}
							<div className="relative w-full h-[160px] sm:h-[220px] md:h-[300px] lg:h-[400px] xl:h-[500px] mx-auto">
								{slides.map((src, i) => (
									<div key={src} className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
										<Image
											src={src}
											alt={`slide-${i}`}
											fill
											className="object-contain"
											priority={i===0}
											sizes="(max-width: 640px) 260px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 500px"
										/>
									</div>
								))}

								{/* Controls - show arrows only on md and up, swipe for mobile */}
								<div className="hidden md:block">
									<button aria-label="Previous" onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center">
										<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6"/></svg>
									</button>
									<button aria-label="Next" onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center">
										<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6"/></svg>
									</button>
								</div>

								{/* Mobile swipe events */}
								<div className="md:hidden absolute inset-0 z-20" onTouchStart={e => e.target.dataset.startX = e.touches[0].clientX} onTouchEnd={e => {
									const startX = Number(e.target.dataset.startX)
									const endX = e.changedTouches[0].clientX
									if (startX && Math.abs(endX - startX) > 40) {
										if (endX < startX) next()
										else prev()
									}
								}} />

								{/* Dots */}
								<div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
									{slides.map((_, i) => (
										<button key={i} aria-label={`Go to slide ${i+1}`} onClick={() => setIndex(i)} className={`w-2 h-2 rounded-full ${i===index ? 'bg-amber-400' : 'bg-white/60'}`}></button>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

