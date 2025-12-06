"use client"
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false)
	const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
	const pathname = usePathname()

	return (
		<>
			<div className="fixed top-0 left-0 right-0 z-50">
				{/* Top slim contact bar */}
				<div className="bg-black border-b">
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex items-center justify-between text-xs text-white h-8">
						<div className="flex items-center gap-6">
							<span>📞 9278927107</span>
							<span>✉️ ang.enterprises1989@gmail.com</span>
						</div>
						<div className="hidden sm:flex items-center text-xs text-white">
							<span>GST : 07BANPG8059B1ZO</span>
						</div>
					</div>
				</div>
			</div>
				<header className="border-b bg-[#D0D0D0]">
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex items-center justify-between h-20">
					{/* Left: Logo */}
					<div >
						<Link href="/" className="inline-flex items-center gap-9">
							{/* Responsive logo: smaller on mobile, larger on desktop */}
							{/* Mobile: narrower but taller; sm/md keep larger sizes */}
							<div className="relative w-16 h-10 pr-24 sm:w-28 sm:h-12 md:w-36 md:h-16">
								<Image
									src="/loooo.jpeg"
									alt="Kitchor"
									fill
									className="object-contain"
								/>
								
							</div>
					
						</Link>
					</div>


					<nav className="hidden md:flex md:flex-1 md:justify-center">
						<ul className="flex gap-8 text-sm font-medium text-gray-700 items-center">
							<li>
								<Link href="/" className={`inline-flex items-center gap-2 ${pathname === '/' ? 'text-[#D2AD65]' : ''}`}>Home</Link>
							</li>
							<li>
								<Link href="/about" className={`hover:text-gray-900 ${pathname === '/about' ? 'text-[#D2AD65]' : ''}`}>About us</Link>
							</li>
							{/* Products with hover dropdown (desktop) - JS controlled open/close with delay */}
							<li className="relative" onMouseEnter={() => {}}>
								<ProductsDropdown active={pathname && pathname.startsWith('/product')} />
							</li>
							<li>
								<Link href="/contact" className={`hover:text-gray-900 ${pathname === '/contact' ? 'text-[#D2AD65]' : ''}`}>Contact us</Link>
							</li>
						</ul>
					</nav>


					<div className="flex items-center gap-4 flex-1 justify-end">
						<a
							href="https://wa.me/919278927107"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 bg-[#D2AD65] hover:bg-[#D2AD65] text-white font-medium text-sm px-4 py-2 rounded-full"
							aria-label="Contact us on WhatsApp: +91 9278927107"
						>
														{/* WhatsApp icon (correct orientation) */}
														<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 32 32" fill="currentColor">
															<path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.13 2.484 7.23L4 29l7.012-2.293A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.917c-2.13 0-4.21-.627-5.98-1.81l-.426-.267-4.164 1.36 1.36-4.055-.277-.418C6.627 19.21 6 17.13 6 15c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.09-7.13c-.278-.14-1.64-.81-1.893-.902-.253-.093-.437-.14-.62.14-.184.278-.713.902-.873 1.087-.16.185-.322.208-.6.07-.278-.14-1.175-.433-2.237-1.38-.827-.736-1.386-1.644-1.55-1.922-.163-.278-.017-.428.123-.567.127-.126.278-.322.417-.483.14-.16.185-.278.278-.463.093-.185.047-.347-.023-.486-.07-.139-.62-1.497-.85-2.05-.224-.54-.453-.467-.62-.476-.16-.007-.347-.009-.533-.009-.185 0-.486.07-.74.347-.253.278-.963.944-.963 2.3 0 1.356.987 2.667 1.125 2.853.139.185 1.94 2.97 4.74 4.05.663.273 1.18.436 1.584.558.665.212 1.27.182 1.747.11.533-.08 1.64-.67 1.874-1.317.233-.647.233-1.202.163-1.317-.07-.115-.255-.185-.533-.324z" />
														</svg>
							<span>WhatsApp</span>
						</a>

						{/* Mobile menu button (kept for small-screen nav) */}
						{/* Mobile menu button */}
						<button
							aria-label={mobileOpen ? "Close menu" : "Open menu"}
							onClick={() => setMobileOpen(!mobileOpen)}
							className="md:hidden p-2 rounded hover:bg-gray-100"
						>
							{mobileOpen ? (
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							) : (
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>
				</header>
			</div>

			{/* Mobile menu panel (only on small screens). Desktop remains unchanged */}
			<div className={`md:hidden fixed inset-x-0 top-28 z-40 transform transition-transform duration-200 ${mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-2/4 opacity-0 pointer-events-none'}`}>
				<div className="bg-white shadow-lg mx-4 rounded-lg ring-1 ring-black/5 overflow-hidden">
					<div className="px-4 py-4">
						<nav>
							<ul className="flex flex-col gap-2 text-gray-800">
								<li>
									<Link href="/" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50">Home</Link>
								</li>
								<li>
									{/* Mobile Products collapsible */}
									<button
										onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
										className="w-full flex items-center justify-between px-3 py-2 rounded hover:bg-gray-50"
										aria-expanded={mobileProductsOpen}
									>
										<span>Products</span>
										<svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transform transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
										</svg>
									</button>

									<div className={`${mobileProductsOpen ? 'block' : 'hidden'} mt-2 pl-3 border-l border-gray-100`}> 
										<ul className="flex flex-col gap-1">
											<li><Link href="/product/melamine-crockery-products" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">Melamine Crockery Products</Link></li>
											<li><Link href="/product/melamine-crockery" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">Melamine Crockery</Link></li>
											<li><Link href="/product/kitchen-full-plates" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">Kitchen Full Plates</Link></li>
											<li><Link href="/product/melamine-thali" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">Melamine Thali</Link></li>
											<li><Link href="/product/melamine-bowls" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">Melamine Bowls</Link></li>
											<li><Link href="/product/veg-bowl" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">Veg Bowl</Link></li>
											<li><Link href="/product/dinner-sets" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">Dinner Sets</Link></li>
											<li><Link href="/product/lid-donga" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">Lid Donga</Link></li>
											<li><Link href="/product/serving-spoon" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">Serving Spoon</Link></li>
											<li><Link href="/product/serving-tray" onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }} className="block px-3 py-2 rounded hover:bg-gray-50">Serving Tray</Link></li>
										</ul>
									</div>
								</li>
								<li>
									<Link href="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50">About us</Link>
								</li>
								<li>
									<Link href="/contact" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50">Contact us</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>

			{/* spacer to offset fixed header height (top bar h-8 + header h-20 = 28) */}
			<div className="h-28" aria-hidden="true" />
		</>
	)
}


function ProductsDropdown({ active }){
	const [open, setOpen] = useState(false)
	const timeoutRef = useRef(null)

	useEffect(()=>{
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current)
		}
	}, [])

	function handleEnter(){
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
			timeoutRef.current = null
		}
		setOpen(true)
	}

	function handleLeave(){
		// hide after 2 seconds
		if (timeoutRef.current) clearTimeout(timeoutRef.current)
		timeoutRef.current = setTimeout(()=> setOpen(false), 300)
	}

	return (
		<div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
			<span className={`inline-flex items-center cursor-pointer ${active ? 'text-[#D2AD65]' : ''}`}>Products</span>
			<div className={`absolute left-1/2 transform -translate-x-1/2 mt-3 w-[720px] lg:w-[820px] bg-white text-gray-800 rounded-xl shadow-lg ring-1 ring-black/5 transition-all duration-200 ${open ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-1'}`}>
						<div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
							<Link href="/product/melamine-crockery-products" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">Melamine Crockery Products</Link>
							<Link href="/product/melamine-crockery" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">Melamine Crockery</Link>
							<Link href="/product/kitchen-full-plates" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">Kitchen Full Plates</Link>
							<Link href="/product/melamine-thali" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">Melamine Thali</Link>
							<Link href="/product/melamine-bowls" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">Melamine Bowls</Link>
							<Link href="/product/veg-bowl" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">Veg Bowl</Link>
							<Link href="/product/dinner-sets" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">Dinner Sets</Link>
							<Link href="/product/lid-donga" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">Lid Donga</Link>
							<Link href="/product/serving-spoon" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">Serving Spoon</Link>
							<Link href="/product/serving-tray" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors duration-150">Serving Tray</Link>
						</div>
			</div>
		</div>
	)
}

