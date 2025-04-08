'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// This would typically come from an API or database
const tourData = {
  id: 1,
  name: "Cultural Heritage Tour",
  category: "cultural",
  duration: "7 Days",
  price: "From $999",
  image: "/images/cultural.jpg",
  description: "Explore the rich cultural heritage of ancient temples and historical sites.",
  fullDescription: `Experience the vibrant culture and ancient heritage of Sri Lanka on this comprehensive 7-day tour. Visit UNESCO World Heritage sites, explore ancient temples, and immerse yourself in local traditions.

This carefully crafted itinerary combines cultural exploration with comfortable accommodations and authentic experiences.`,
  highlights: [
    "Visit to Sigiriya Rock Fortress",
    "Ancient city of Polonnaruwa",
    "Temple of the Sacred Tooth Relic",
    "Traditional cultural dance show",
    "Local craft workshops"
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival & Colombo City Tour",
      description: "Airport pickup and welcome dinner. Afternoon city tour of Colombo."
    },
    {
      day: 2,
      title: "Sigiriya & Dambulla",
      description: "Visit the ancient rock fortress and cave temples."
    },
    {
      day: 3,
      title: "Polonnaruwa",
      description: "Explore the medieval capital and its archaeological treasures."
    }
    // Add more days...
  ],
  included: [
    "Airport transfers",
    "Accommodation in 4-star hotels",
    "Daily breakfast and dinner",
    "English-speaking guide",
    "All entrance fees",
    "Transportation in air-conditioned vehicle"
  ],
  excluded: [
    "International flights",
    "Visa fees",
    "Personal expenses",
    "Travel insurance"
  ],
  images: [
    "/images/tours/cultural1.jpg",
    "/images/tours/cultural2.jpg",
    "/images/tours/cultural3.jpg"
  ]
};

export default function TourDetailPage({ params }: { params: { id: string } }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [guests, setGuests] = useState(2);

  return (
    <div className="py-12">
      <div className="container">
        {/* Hero Section */}
        <div className="relative h-[60vh] rounded-xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
            Tour Image Placeholder
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">{tourData.name}</h1>
              <div className="flex items-center gap-6">
                <span>{tourData.duration}</span>
                <span>•</span>
                <span>{tourData.category}</span>
                <span>•</span>
                <span>{tourData.price}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-600 whitespace-pre-line">{tourData.fullDescription}</p>
            </section>

            {/* Highlights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Tour Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tourData.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
              <div className="space-y-6">
                {tourData.itinerary.map((day) => (
                  <div key={day.day} className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold mb-2">
                      Day {day.day}: {day.title}
                    </h3>
                    <p className="text-gray-600">{day.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tourData.images.map((image, index) => (
                  <div key={index} className="relative h-48 bg-gray-200 rounded">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      Image {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h3 className="text-2xl font-bold mb-6">{tourData.price}</h3>
              
              {/* Date Selection */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Select Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Guests */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Number of Guests</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="px-3 py-1 border border-gray-300 rounded"
                  >
                    -
                  </button>
                  <span className="w-12 text-center">{guests}</span>
                  <button
                    onClick={() => setGuests(guests + 1)}
                    className="px-3 py-1 border border-gray-300 rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Included/Excluded */}
              <div className="mb-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Included:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tourData.included.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Not Included:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tourData.excluded.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-red-500">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Book Now Button */}
              <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
