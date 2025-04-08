import Link from "next/link";

const offers = [
  {
    id: 1,
    title: "Early Bird Summer Special",
    discount: "25% OFF",
    validUntil: "2025-05-31",
    image: "/images/offers/summer.jpg",
    description: "Book your summer vacation early and save 25% on selected destinations.",
    highlights: [
      "Valid for June-August tours",
      "Free airport transfer",
      "Complimentary welcome dinner"
    ],
    code: "SUMMER25"
  },
  {
    id: 2,
    title: "Honeymoon Package",
    discount: "Couple Special",
    validUntil: "2025-12-31",
    image: "/images/offers/honeymoon.jpg",
    description: "Special romantic package for newlyweds with luxury accommodations.",
    highlights: [
      "Luxury hotel upgrades",
      "Romantic dinner for two",
      "Couples spa treatment"
    ],
    code: "HONEY2025"
  },
  {
    id: 3,
    title: "Group Adventure Deal",
    discount: "15% OFF",
    validUntil: "2025-09-30",
    image: "/images/offers/group.jpg",
    description: "Special group rates for adventure tours. Perfect for friends and family.",
    highlights: [
      "Groups of 4 or more",
      "Free adventure gear rental",
      "Professional photographer included"
    ],
    code: "GROUP15"
  }
];

export default function OffersPage() {
  return (
    <div className="py-12">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Special Offers</h1>
          <p className="text-xl text-gray-600">
            Exclusive deals and discounts on our most popular tours and destinations
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="relative h-48">
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full z-10">
                  {offer.discount}
                </div>
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
                  Offer Image Placeholder
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {offer.highlights.map((highlight, index) => (
                      <li key={index} className="text-gray-600 flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 -mx-6 -mb-6 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">
                      Valid until: {new Date(offer.validUntil).toLocaleDateString()}
                    </div>
                    <div className="text-sm font-semibold text-blue-600">
                      Code: {offer.code}
                    </div>
                  </div>
                  
                  <Link
                    href={`/offers/${offer.id}`}
                    className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Exclusive Offers</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter and be the first to know about our special deals!
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
