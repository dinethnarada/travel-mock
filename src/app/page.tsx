import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featuredDestinations = [
    {
      name: "Colombo",
      image: "/images/colombo.jpg",
      description: "Experience the vibrant capital city"
    },
    {
      name: "Galle",
      image: "/images/galle.jpg",
      description: "Explore the historic Dutch fort"
    },
    {
      name: "Ella",
      image: "/images/ella.jpg",
      description: "Discover scenic mountain views"
    }
  ];

  const tourCategories = [
    {
      name: "Adventure Tours",
      image: "/images/adventure.jpg",
      href: "/tours/adventure"
    },
    {
      name: "Cultural Tours",
      image: "/images/cultural.jpg",
      href: "/tours/cultural"
    },
    {
      name: "Beach Holidays",
      image: "/images/beach.jpg",
      href: "/tours/beach"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <Image
          src="/images/discover_paradise.jpg"
          alt="Discover Paradise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Paradise
          </h1>
          <p className="text-xl mb-8">Your journey begins with us</p>
          <Link
            href="/tours"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors"
          >
            Explore Tours
          </Link>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <div
                key={destination.name}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Categories */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore Tour Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group relative h-64 rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h3 className="text-2xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#ff6b6b] text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8">
            Contact us today and let us plan your perfect vacation
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#ff6b6b] px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
