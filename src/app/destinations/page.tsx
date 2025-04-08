import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    id: 1,
    name: "Colombo",
    region: "Western Province",
    image: "/images/colombo.jpg",
    description: "Experience the vibrant capital city with its modern attractions and colonial architecture.",
    highlights: ["Galle Face Green", "National Museum", "Gangaramaya Temple"],
  },
  {
    id: 2,
    name: "Galle",
    region: "Southern Province",
    image: "/images/galle.jpg",
    description: "Explore the historic Dutch fort and colonial charm of this coastal city.",
    highlights: ["Galle Fort", "Maritime Museum", "Japanese Peace Pagoda"],
  },
  {
    id: 3,
    name: "Ella",
    region: "Uva Province",
    image: "/images/ella.jpg",
    description: "Discover scenic mountain views and tea plantations in this hill country paradise.",
    highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Ella Rock"],
  },
  // Add more destinations as needed
];

export default function DestinationsPage() {
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-8">Popular Destinations</h1>
        
        {/* Search and Filter (can be enhanced later) */}
        <div className="max-w-xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search destinations..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-1">{destination.name}</h3>
                  <p className="text-gray-500">{destination.region}</p>
                </div>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Highlights:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {destination.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/destinations/${destination.id}`}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Explore More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
