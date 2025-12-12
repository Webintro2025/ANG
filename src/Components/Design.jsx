"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Design() {
	return (
		<div className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">

				{/* Top: Designed by desires */}
				<div className="grid lg:grid-cols-2 gap-10 items-center">
					<div className="relative">
										{/* Image Slider Start */}
										<div className="w-full  rounded-lg overflow-hidden shadow-lg relative">
												{/* Slider logic */}
												{(() => {
													const images = [
														'/why.jpg',
														'/w3.avif',
														'/w4.jpg',
														'/w2.avif',
														'/w5.jpg',
													];
													const [current, setCurrent] = React.useState(0);
													const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
													const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
													React.useEffect(() => {
														const interval = setInterval(() => {
															setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
														}, 3500); // 3.5 seconds
														return () => clearInterval(interval);
													}, [images.length]);
													return (
														<>
															<Image src={images[current]} alt="kitchen" width={900} height={800} className="w-full h-[728px] object-cover transition-all duration-500" />
															{/* Left Button */}
															<button onClick={prev} aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow text-black">
																&#8592;
															</button>
															{/* Right Button */}
															<button onClick={next} aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow text-black">
																&#8594;
															</button>
															{/* Dots */}
															<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
																{images.map((_, i) => (
																	<span key={i} className={`w-2 h-2 rounded-full ${i === current ? 'bg-amber-600' : 'bg-gray-300'} inline-block`}></span>
																))}
															</div>
														</>
													);
												})()}
										</div>
										{/* Image Slider End */}

						{/* Circular badge */}

					</div>

								<div>
									<p className="text-amber-600 text-sm font-medium uppercase tracking-wider">What We Do</p>
									<h3 className="mt-4 text-3xl lg:text-4xl font-extrabold text-gray-900">At A.N.G Enterprises, we focus on delivering:</h3>
									<div className="mt-6 text-gray-700 space-y-6 max-w-xl">
										<div>
											<h4 className="font-semibold">High-Quality Melamine Products</h4>
											<p className="text-sm text-gray-600">We manufacture a wide range of melamine crockery including plates, bowls, thalis, dinner sets, donga sets, and morecrafted using the best raw materials sourced from trusted suppliers.</p>
										</div>

										<div>
											<h4 className="font-semibold">Custom & Bulk Orders</h4>
											<p className="text-sm text-gray-600">We offer customized packaging, bulk quantities, and product variety to match the needs of retailers, wholesalers, and distributors.</p>
										</div>

										<div>
											<h4 className="font-semibold">Safe & Reliable Production</h4>
											<p className="text-sm text-gray-600">Our advanced manufacturing facility and highly technical machines allow us to produce kitchenware in multiple designs, sizes, and finishes while maintaining strict quality standards.</p>
										</div>

										<div>
											<h4 className="font-semibold">Pan-India Supply</h4>
											<p className="text-sm text-gray-600">With a strong storage and distribution system, we ensure timely and damage-free delivery across India.</p>
										</div>
									</div>
									<div className="mt-8">
										<Link href="/contact" className="inline-flex items-center bg-amber-600 text-white px-6 py-3 rounded-full shadow hover:bg-amber-700">
											Contact Us
										</Link>
									</div>
								</div>
				</div>

				{/* Testimonials block */}
				<div className="grid lg:grid-cols-2 gap-10 items-center">
								<div>
									<p className="text-amber-600 text-sm font-medium uppercase tracking-wider">Why We Are Unique</p>
									<h3 className="mt-4 text-3xl lg:text-4xl font-extrabold text-gray-900">Why A.N.G Enterprises Stands Apart</h3>
									<div className="mt-6 text-gray-700 space-y-6 max-w-xl">
										<div>
											<h4 className="font-semibold">36+ Years of Trust</h4>
											<p className="text-sm text-gray-600">Since 1989, we have built a strong reputation for dependability and quality.</p>
										</div>

										<div>
											<h4 className="font-semibold">Premium Quality at Affordable Prices</h4>
											<p className="text-sm text-gray-600">We use high-grade raw materials and efficient manufacturing processes to deliver durable products at minimal pricing.</p>
										</div>

										<div>
											<h4 className="font-semibold">Strict Quality Checks</h4>
											<p className="text-sm text-gray-600">Every product goes through proper testing to ensure high strength, finish, and long-lasting performance.</p>
										</div>

										<div>
											<h4 className="font-semibold">Customer-First Approach</h4>
											<p className="text-sm text-gray-600">Our team maintains long-term relationships with clients by understanding their needs and providing quick, reliable service.</p>
										</div>

										<div>
											<h4 className="font-semibold">Wide Product Range</h4>
											<p className="text-sm text-gray-600">From melamine full plates to bowls, thalis, dinner sets, and dongaswe offer all essential kitchenware under one roof.</p>
										</div>

										<div>
											<h4 className="font-semibold">Smooth Payment &amp; Delivery</h4>
											<p className="text-sm text-gray-600">Offering multiple payment options (Cash, UPI, Cheque, DD, Credit Card) and shipment by road to ensure convenience and quick service.</p>
										</div>
									</div>
									<div className="mt-8">
										<Link href="/contact" className="inline-flex items-center bg-amber-600 text-white px-6 py-3 rounded-full shadow hover:bg-amber-700">
											Request a Quote
										</Link>
									</div>
								</div>

					<div>
																<div className="w-full  rounded-lg overflow-hidden shadow-lg relative">
												{/* Slider logic */}
												{(() => {
													const images = [
														'/unique.jpeg',
														'/u2.png',
														'/u3.png',
														'/u4.png',
													];
													const [current, setCurrent] = React.useState(0);
													const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
													const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
													React.useEffect(() => {
														const interval = setInterval(() => {
															setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
														}, 3500); // 3.5 seconds
														return () => clearInterval(interval);
													}, [images.length]);
													return (
														<>
															<Image src={images[current]} alt="kitchen" width={900} height={800} className="w-full h-[728px] object-cover transition-all duration-500" />
															{/* Left Button */}
															<button onClick={prev} aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow text-black">
																&#8592;
															</button>
															{/* Right Button */}
															<button onClick={next} aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow text-black">
																&#8594;
															</button>
															{/* Dots */}
															<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
																{images.map((_, i) => (
																	<span key={i} className={`w-2 h-2 rounded-full ${i === current ? 'bg-amber-600' : 'bg-gray-300'} inline-block`}></span>
																))}
															</div>
														</>
													);
												})()}
										</div>
					</div>
				</div>

			</div>
		</div>
	)
}

