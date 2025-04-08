import Image from "next/image";
import Link from "next/link";

const tours = [
  {
    id: 1,
    name: "Cultural Heritage Tour",
    category: "cultural",
    duration: "7 Days",
    price: "From $999",
    image: "/images/cultural.jpg",
    description: "Explore the rich cultural heritage of ancient temples and historical sites.",
  },
  {
    id: 2,
    name: "Adventure Trek",
    category: "adventure",
    duration: "5 Days",
    price: "From $799",
    image: "/images/adventure.jpg",
    description: "Experience thrilling mountain treks and outdoor adventures.",
  },
  {
    id: 3,
    name: "Beach Paradise",
    category: "beach",
    duration: "6 Days",
    price: "From $899",
    image: "/images/beach.jpg",
    description: "Relax on pristine beaches and enjoy water sports activities.",
  },
  // Add more tours as needed
];

export default function ToursPage() {
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-8">Our Tours</h1>
        
        {/* Tour Categories */}
        <div className="flex justify-center gap-4 mb-12">
          <Link href="/tours/cultural" className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">
            Cultural Tours
          </Link>
          <Link href="/tours/adventure" className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">
            Adventure Tours
          </Link>
          <Link href="/tours/beach" className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">
            Beach Tours
          </Link>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{tour.name}</h3>
                  <span className="text-blue-600 font-semibold">{tour.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{tour.duration}</span>
                  <Link
                    href={`/tours/${tour.id}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
