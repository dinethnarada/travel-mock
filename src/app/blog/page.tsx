import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Hidden Beaches in Sri Lanka",
    excerpt: "Discover the most secluded and pristine beaches that Sri Lanka has to offer...",
    image: "/images/blog/beaches.jpg",
    author: "Sarah Johnson",
    date: "2025-04-01",
    category: "Destinations",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "A Food Lover's Guide to Local Cuisine",
    excerpt: "Explore the rich flavors and spices of traditional Sri Lankan dishes...",
    image: "/images/blog/food.jpg",
    author: "Mike Wilson",
    date: "2025-03-28",
    category: "Food & Culture",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Best Time to Visit Tea Plantations",
    excerpt: "Learn when to plan your visit to the beautiful tea estates in the hill country...",
    image: "/images/blog/tea.jpg",
    author: "John Smith",
    date: "2025-03-25",
    category: "Travel Tips",
    readTime: "6 min read"
  }
];

const categories = [
  "All",
  "Destinations",
  "Travel Tips",
  "Food & Culture",
  "Adventure",
  "Photography"
];

export default function BlogPage() {
  return (
    <div className="py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Travel Blog</h1>
          <p className="text-xl text-gray-600">
            Stories, tips, and guides from our travel experts
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <Image
                                          src={'/images/blog/featured.jpg'}
                                          alt={"featured"}
                                          fill
                                          className="object-cover"
                                        />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
              <div className="max-w-3xl">
                <div className="mb-4">
                  <span className="bg-blue-600 text-sm px-3 py-1 rounded-full">Featured</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Ultimate Guide to Planning Your Sri Lankan Adventure
                </h2>
                <div className="flex items-center gap-4 text-sm">
                  <span>By Travel Expert</span>
                  <span>•</span>
                  <span>April 5, 2025</span>
                  <span>•</span>
                  <span>10 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
              <Image
                                          src={post.image}
                                          alt={post.title}
                                          fill
                                          className="object-cover"
                                        />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-blue-600">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <Link href={`/blog/${post.id}`} className="hover:text-blue-600">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            Load More Posts
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Popular Posts */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6">Popular Posts</h2>
            <div className="space-y-6">
              {blogPosts.slice(0, 3).map((post) => (
                <div key={post.id} className="flex gap-4">
                  <div className="relative w-24 h-24 flex-shrink-0">
                        <Image
                                          src={post.image}
                                          alt={post.title}
                                          fill
                                          className="object-cover"
                                        />
                   
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      <Link href={`/blog/${post.id}`} className="hover:text-blue-600">
                        {post.title}
                      </Link>
                    </h3>
                    <div className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories and Tags */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center justify-between">
                    <span className="text-gray-600">{category}</span>
                    <span className="text-sm text-gray-500">12</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Popular Tags</h2>
              <div className="flex flex-wrap gap-2">
                {["Travel", "Adventure", "Food", "Culture", "Beach", "Mountains", "Tips", "Photography"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full hover:bg-blue-600 hover:text-white cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
