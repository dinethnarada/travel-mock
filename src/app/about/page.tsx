import Link from "next/link";
import Image from 'next/image';

export default function AboutPage() {
  const stats = [
    { label: "Years of Experience", value: "10+" },
    { label: "Happy Travelers", value: "5000+" },
    { label: "Destinations", value: "50+" },
    { label: "Local Guides", value: "25+" },
  ];

  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "/images/team/john.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Tour Director",
      image: "/images/team/sarah.jpg",
    },
    {
      name: "Mike Wilson",
      role: "Travel Consultant",
      image: "/images/team/mike.jpg",
    },
  ];

  return (
    <div className="py-12">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About TravelMock</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in creating unforgettable travel experiences. We specialize in 
            crafting unique journeys that combine adventure, culture, and comfort.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-[#ff6b6b] mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2015, TravelMock has grown from a small local tour operator to 
              one of the leading travel companies in the region. Our passion for travel 
              and commitment to excellence has helped thousands of travelers create 
              lasting memories.
            </p>
            <p className="text-gray-600 mb-6">
              We believe in sustainable tourism and work closely with local communities 
              to ensure our tours benefit both travelers and destinations.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-[#ff6b6b] text-white rounded hover:bg-[#f03e3e]"
            >
              Get in Touch
            </Link>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/images/about-us.jpg"
              alt="About Us"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Our Team */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
