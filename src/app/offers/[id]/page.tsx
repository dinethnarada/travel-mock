'use client';

import { use } from "react";
import { useState } from "react";

// This would typically come from an API or database
const offerData = {
  id: 1,
  title: "Early Bird Summer Special",
  discount: "25% OFF",
  validUntil: "2025-05-31",
  image: "/images/offers/summer.jpg",
  description: "Book your summer vacation early and save 25% on selected destinations.",
  fullDescription: `Take advantage of our early bird summer special and save big on your dream vacation! 
  This exclusive offer includes premium accommodations, guided tours, and special perks for early bookers.
  
  Don't miss out on this limited-time offer to explore beautiful destinations at an unbeatable price.`,
  highlights: [
    "Valid for June-August tours",
    "Free airport transfer",
    "Complimentary welcome dinner",
    "Flexible booking options",
    "No hidden charges"
  ],
  terms: [
    "Booking must be made before May 31, 2025",
    "Subject to availability",
    "Cannot be combined with other offers",
    "Non-refundable deposit required",
    "Blackout dates may apply"
  ],
  code: "SUMMER25",
  eligibleTours: [
    {
      id: 1,
      name: "Cultural Heritage Tour",
      duration: "7 Days",
      originalPrice: "$1,299",
      discountedPrice: "$974"
    },
    {
      id: 2,
      name: "Beach Paradise",
      duration: "5 Days",
      originalPrice: "$999",
      discountedPrice: "$749"
    },
    {
      id: 3,
      name: "Mountain Adventure",
      duration: "6 Days",
      originalPrice: "$1,199",
      discountedPrice: "$899"
    }
  ]
};

export default function OfferDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = use(params);
  const [selectedTour, setSelectedTour] = useState<number | null>(null);
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const copyPromoCode = () => {
    navigator.clipboard.writeText(offerData.code);
    setShowCopyMessage(true);
    setTimeout(() => setShowCopyMessage(false), 2000);
  };

  return (
    <div className="py-12">
      <div className="container">
        {/* Hero Section */}
        <div className="relative h-[50vh] rounded-xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
            Offer Image Placeholder
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
            <div className="max-w-3xl">
              <div className="mb-4">
                <span className="bg-red-600 text-white px-4 py-2 rounded-full text-lg">
                  {offerData.discount}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{offerData.title}</h1>
              <p className="text-xl mb-4">{offerData.description}</p>
              <p className="text-lg">
                Valid until: {new Date(offerData.validUntil).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Offer Details */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Offer Details</h2>
              <p className="text-gray-600 whitespace-pre-line mb-6">
                {offerData.fullDescription}
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold mb-1">Promo Code:</h3>
                    <p className="text-2xl font-bold text-blue-600">{offerData.code}</p>
                  </div>
                  <button
                    onClick={copyPromoCode}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    {showCopyMessage ? "Copied!" : "Copy Code"}
                  </button>
                </div>
              </div>
            </section>

            {/* Highlights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Offer Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {offerData.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Eligible Tours */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Eligible Tours</h2>
              <div className="space-y-4">
                {offerData.eligibleTours.map((tour) => (
                  <div
                    key={tour.id}
                    className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => setSelectedTour(tour.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">{tour.name}</h3>
                        <p className="text-gray-600">{tour.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500 line-through">{tour.originalPrice}</p>
                        <p className="text-2xl font-bold text-blue-600">{tour.discountedPrice}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Booking Widget */}
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold mb-6">Book This Offer</h3>
              
              {/* Tour Selection */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Select Tour</label>
                <select
                  value={selectedTour || ""}
                  onChange={(e) => setSelectedTour(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Choose a tour</option>
                  {offerData.eligibleTours.map((tour) => (
                    <option key={tour.id} value={tour.id}>
                      {tour.name} - {tour.discountedPrice}
                    </option>
                  ))}
                </select>
              </div>

              {/* Terms and Conditions */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Terms & Conditions</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  {offerData.terms.map((term, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-gray-400">•</span>
                      <span>{term}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Book Now Button */}
              <button
                className={`w-full py-3 rounded ${
                  selectedTour
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!selectedTour}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
