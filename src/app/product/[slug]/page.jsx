import Image from "next/image";
import { getServiceBySlug } from "@/ServicesDeatils";
import GetInTouch from "@/Components/GetInTouch";
import Maps from "@/Components/Maps";

export default function ProductPage({ params }) {
	const { slug } = params;
	const data = getServiceBySlug(slug);

	if (!data) {
		return (
			<div className="max-w-4xl mx-auto py-10">
				<h1 className="text-2xl font-bold">No data found for this service.</h1>
			</div>
		);
	}

	const items = Array.isArray(data) ? data : data.products || [];

	return (
		<div className="max-w-5xl mx-auto py-10">
			<h1 className="text-3xl font-bold mb-6">
				{slug.replace(/-/g, " ")}
			</h1>

			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{items.map((item, index) => (
					<div
						key={index}
						className="border rounded-lg p-4 shadow-sm bg-white text-left"
					>
							{item.images && (
								<div className="mb-3 flex justify-center">
									<Image
										src={`/${item.images}`}
										alt={item.name}
										width={300}
										height={300}
										className="w-full h-auto max-w-[300px] rounded-md object-contain"
									/>
								</div>
							)}

						<h2 className="text-xl font-semibold mb-2">{item.name}</h2>

						{"price" in item && (
							<p className="text-sm text-gray-700">
								<span className="font-medium">Price:</span> {item.price}
							</p>
						)}

						{"moq" in item && (
							<p className="text-sm text-gray-700">
								<span className="font-medium">MOQ:</span> {item.moq}
							</p>
						)}

						{"material" in item && (
							<p className="text-sm text-gray-700">
								<span className="font-medium">Material:</span> {item.material}
							</p>
						)}

						{"details" in item && (
							<p className="text-sm text-gray-700 mt-2">{item.details}</p>
						)}
					</div>
				))}
			</div>

			<div className="mt-12">
				<GetInTouch />
			</div>

			<div className="mt-8">
				<Maps />
			</div>
		</div>
	);
}

