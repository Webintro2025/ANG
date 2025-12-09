"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const products = [
   {
	   id: 1,
	   title: 'Melamine Crockery Products',
	   desc: 'A complete range of durable melamine crockery designed for daily use in homes, restaurants, and catering services.',
	   image: '/Kitchen Crockery.png'
   },
   {
	   id: 2,
	   title: 'Melamine Crockery',
	   desc: 'Premium-quality melamine crockery with superior finish, stain resistance, and long-lasting performance.',
	   image: '/Unbreakable Melamine Crockery.png'
   },
   {
	   id: 3,
	   title: 'Kitchen Full Plates',
	   desc: 'Stylish and sturdy full-size plates ideal for everyday meals and special occasions.',
	   image: '/Melamine Kitchen Full Plate.png'
   },
   {
	   id: 4,
	   title: 'Melamine Thali',
	   desc: 'Traditional and contemporary thalis with multiple compartments, perfect for complete Indian meals.',
	   image: '/Compartment Plates.png'
   },
   {
	   id: 5,
	   title: 'Melamine Bowls',
	   desc: 'Multi-purpose bowls suitable for serving curries, gravies, snacks, and desserts.',
	   image: '/Melamine Bowl Set.png'
   },
   {
	   id: 6,
	   title: 'Veg Bowl',
	   desc: 'Deep and convenient bowls specially crafted for serving vegetables and side dishes.',
	   image: '/Soup Bowl.png'
   },
   {
	   id: 7,
	   title: 'Dinner Sets',
	   desc: 'Beautifully coordinated melamine dinner sets that elevate family dining and gifting.',
	   image: '/Dinner Ware Set.png'
   },
   {
	   id: 8,
	   title: 'Lid Donga',
	   desc: 'Insulated-style serving dongas with lids to keep food fresh and presentable for longer.',
	   image: '/Melamine Lid Donga.png'
   },
   {
	   id: 9,
	   title: 'Serving Spoon',
	   desc: 'Ergonomically designed serving spoons that complement our melamine serveware collection.',
	   image: '/Melamine Serving Spoon.png'
   },
   {
	   id: 10,
	   title: 'Serving Tray',
	   desc: 'Strong and lightweight serving trays ideal for tea, snacks, and full meal service.',
	   image: '/Melamine Serving Tray.png'
   }
]

export default function Services() {
		const sliderRef = useRef(null)
		const [currentIndex, setCurrentIndex] = useState(0)

		useEffect(() => {
			const container = sliderRef.current
			if (!container) return

			const cardWidth = container.firstChild ? container.firstChild.getBoundingClientRect().width + 24 : 0 // 24 = gap-6
			if (!cardWidth) return

			const visibleCount = 4
			const maxIndex = Math.max(0, products.length - visibleCount)

			const interval = setInterval(() => {
				setCurrentIndex((prev) => {
					const nextIndex = prev >= maxIndex ? 0 : prev + 1
					container.scrollTo({
						left: nextIndex * cardWidth,
						behavior: 'smooth'
					})
					return nextIndex
				})
			}, 3000)

			return () => clearInterval(interval)
		}, [])

	return (
		<section className="py-16 bg-gray-100">
			<div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
				<p className="text-amber-600 text-sm font-medium uppercase tracking-wider">Our Products</p>
				<h2 className="mt-4 text-3xl lg:text-4xl font-extrabold text-gray-900">Explore Our Melamine Product Range</h2>
				<p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
					Discover a complete range of melamine kitchenware crafted for durability, everyday comfort, and professional use.
				</p>

				<div className="mt-12 overflow-hidden">
					<div
						ref={sliderRef}
						className="flex gap-6 overflow-x-hidden pb-4 snap-x snap-mandatory scrollbar-hide"
						style={{scrollSnapType: 'x mandatory'}}
					>
						{products.map((p) => (
							<div
								key={p.id}
								className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] xl:min-w-[340px] bg-white rounded shadow-sm overflow-hidden snap-start"
							>
								<div className="relative w-full aspect-4/3">
									{p.image ? (
										<Image src={p.image} alt={p.title} fill className="object-cover" />
									) : null}
								</div>

								<div className="p-6 text-left">
									<h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
									<p className="mt-3 text-sm text-gray-600">{p.desc}</p>
									<div className="mt-4">
										<Link href="/contact" className="text-sm font-semibold text-amber-600 hover:underline">
											Enquire Now 
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

