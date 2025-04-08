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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMjY2ODg2PUBAQDw8QD4+RkZGTU1NXV1dXV1dXV1dXV3/2wBDAQUXFx4aHh8eHx9AQEA9PV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
                  className="inline-block px-4 py-2 bg-[#ff6b6b] text-white rounded hover:bg-[#f03e3e]"
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
