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
		
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
					{/* Left promo text */}
					<div className="pr-0 lg:pr-8 mb-8 lg:mb-0">
						<p className="text-amber-500 text-sm font-medium uppercase tracking-wide">Gallery</p>
						<h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold">Ensuring a safe experience from design to installation</h2>
						<p className="mt-4 text-gray-300 max-w-lg">We're following all protocols to ensure your safety and vaccination drives are underway to ensure our employees are ready to meet you safely.</p>

						<div className="mt-8">
							<Link href="#" className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-full shadow hover:opacity-95">
								More Photos
								<svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</Link>
						</div>
					</div>

					{/* Right slideshow card - responsive */}
					<div className="relative flex justify-center lg:justify-end">
						<div className="w-full max-w-[400px] sm:max-w-[500px] rounded shadow-lg overflow-hidden bg-gray-900">
							{/* Responsive image area */}
							<div className="relative w-full h-[260px] sm:h-[350px] md:h-[400px] lg:h-[500px] mx-auto">
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

