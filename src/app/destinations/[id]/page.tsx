'use client';

import { use } from "react";
import Link from "next/link";

// This would typically come from an API or database
const destinationData = {
  id: 1,
  name: "Galle",
  region: "Southern Province",
  image: "/images/galle.jpg",
  description: "Explore the historic Dutch fort and colonial charm of this coastal city.",
  fullDescription: `Galle is a city on the southwest coast of Sri Lanka. It's known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century. Stone sea walls, expanded by the Dutch, encircle car-free streets with architecture reflecting Portuguese, Dutch and British rule.

Notable buildings include the 18th-century Dutch Reformed Church. Galle Lighthouse stands on the fort's southeast tip. Sandy beaches line the coast near Galle.`,
  highlights: [
    "Galle Fort - UNESCO World Heritage site",
    "Dutch Reformed Church",
    "Maritime Museum",
    "Japanese Peace Pagoda",
    "Traditional Stilt Fishermen"
  ],
  activities: [
    {
      name: "Historical Walking Tour",
      duration: "2-3 hours",
      description: "Explore the fort's colonial architecture and history"
    },
    {
      name: "Sunset at Flag Rock",
      duration: "1 hour",
      description: "Watch the sun set over the Indian Ocean"
    },
    {
      name: "Local Market Visit",
      duration: "2 hours",
      description: "Experience local life and fresh produce"
    }
  ],
  bestTimeToVisit: "November to April",
  howToReach: {
    byAir: "Nearest airport is Mattala Rajapaksa International Airport (HRI)",
    byTrain: "Regular trains from Colombo Fort to Galle Railway Station",
    byRoad: "2-3 hours drive from Colombo via Southern Expressway"
  },
  nearbyAttractions: [
    {
      name: "Unawatuna Beach",
      distance: "6 km",
      description: "Popular beach known for swimming and snorkeling"
    },
    {
      name: "Jungle Beach",
      distance: "8 km",
      description: "Secluded beach perfect for relaxation"
    }
  ],
  images: [
    "/images/destinations/galle1.jpg",
    "/images/destinations/galle2.jpg",
    "/images/destinations/galle3.jpg",
    "/images/destinations/galle4.jpg"
  ]
};

export default function DestinationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = use(params);
  return (
    <div className="py-12">
      <div className="container">
        {/* Hero Section */}
        <div className="relative h-[70vh] rounded-xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
            Destination Image Placeholder
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-4">{destinationData.name}</h1>
              <p className="text-xl">{destinationData.region}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">About {destinationData.name}</h2>
              <p className="text-gray-600 whitespace-pre-line">{destinationData.fullDescription}</p>
            </section>

            {/* Highlights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destinationData.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Activities */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Things to Do</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {destinationData.activities.map((activity, index) => (
                  <div key={index} className="bg-white rounded-lg shadow p-6">
                    <h3 className="font-semibold mb-2">{activity.name}</h3>
                    <p className="text-gray-600 mb-2">{activity.description}</p>
                    <span className="text-sm text-gray-500">Duration: {activity.duration}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {destinationData.images.map((image, index) => (
                  <div key={index} className="relative h-48 bg-gray-200 rounded">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      Image {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Best Time to Visit */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Best Time to Visit</h3>
              <p className="text-gray-600">{destinationData.bestTimeToVisit}</p>
            </div>

            {/* How to Reach */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">How to Reach</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">By Air</h4>
                  <p className="text-gray-600">{destinationData.howToReach.byAir}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">By Train</h4>
                  <p className="text-gray-600">{destinationData.howToReach.byTrain}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">By Road</h4>
                  <p className="text-gray-600">{destinationData.howToReach.byRoad}</p>
                </div>
              </div>
            </div>

            {/* Nearby Attractions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Nearby Attractions</h3>
              <div className="space-y-4">
                {destinationData.nearbyAttractions.map((attraction, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-1">{attraction.name}</h4>
                    <p className="text-gray-600 mb-1">{attraction.description}</p>
                    <span className="text-sm text-gray-500">Distance: {attraction.distance}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-6">
              <Link
                href="/tours"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded hover:bg-blue-700"
              >
                Explore Tours in {destinationData.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
