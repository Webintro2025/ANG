import React from 'react'
import Link from 'next/link'

const steps = [
	{
		id: 1,
		title: 'Consultation',
		desc: 'Tell us your vision. We listen, measure and advise solutions tailored to your space and budget.'
	},
	{
		id: 2,
		title: 'Design & Approvals',
		desc: 'We create detailed designs and layouts, share visuals and incorporate your feedback until it’s perfect.'
	},
	{
		id: 3,
		title: 'Execution & Handover',
		desc: 'Our team executes the plan with quality craftsmanship and delivers on time with a final walk-through.'
	}
]

export default function Sequence() {
	return (
		<section className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left intro */}
					<div>
						<h3 className="text-amber-600 font-semibold text-sm uppercase tracking-wider">How we work</h3>
						<h2 className="mt-4 text-3xl lg:text-4xl font-extrabold text-gray-900">3 Easy Steps to Transform Your Space</h2>
						<p className="mt-4 text-gray-600 max-w-xl">
							We make interior projects simple and transparent. From the first call to the final handover,
							our three-step process keeps you informed and confident every step of the way.
						</p>
						<div className="mt-6">
							<Link href="#contact" className="inline-block bg-amber-600 text-white px-6 py-3 rounded-md shadow hover:bg-amber-700">
								Get Started
							</Link>
						</div>
					</div>

					{/* Right steps */}
					<div className="space-y-8">
						{steps.map((s) => (
							<div key={s.id} className="relative bg-white border border-gray-100 rounded-xl p-8 shadow-sm overflow-hidden">
								{/* Big faint number */}
								<div className="pointer-events-none absolute right-6 top-1/2 transform -translate-y-1/2 text-7xl lg:text-8xl font-extrabold text-gray-100 leading-none select-none">
									{s.id}
								</div>

								<div className="relative">
									<div className="flex items-center justify-between">
										<h4 className="text-lg font-semibold text-gray-900">{s.title}</h4>
										<span className="inline-flex items-center text-amber-600 font-semibold">Step {s.id}</span>
									</div>
									<p className="mt-3 text-gray-600">{s.desc}</p>
									<div className="mt-4">
										<Link href="#" className="text-amber-600 font-medium hover:underline">Learn more →</Link>
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

