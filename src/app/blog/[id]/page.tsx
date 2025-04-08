import Image from "next/image";
import Link from "next/link";

// This would typically come from an API or database
const blogPostData = {
  id: 1,
  title: "Top 10 Hidden Beaches in Sri Lanka",
  excerpt: "Discover the most secluded and pristine beaches that Sri Lanka has to offer...",
  content: `Sri Lanka's coastline is dotted with countless beautiful beaches, but some of the most spectacular ones are hidden away from the usual tourist trails. In this guide, we'll take you through ten of the most stunning secret beaches that will make your trip unforgettable.

Each of these beaches offers something unique, from perfect surfing waves to tranquil swimming spots, and from sunset viewing points to wildlife watching opportunities.

1. Jungle Beach, Unawatuna
Hidden behind thick jungle foliage, this small but beautiful beach offers crystal clear waters perfect for snorkeling. The journey to reach it is part of the adventure, involving a short hike through lush greenery.

2. Hiriketiya Beach, Dikwella
A horseshoe-shaped bay that's becoming increasingly popular with surfers, but still maintains its laid-back charm. The beach is surrounded by palm trees and offers both surfing waves on one side and calm waters for swimming on the other.

[Continue with more beaches...]`,
  image: "/images/blog/beaches.jpg",
  author: {
    name: "Sarah Johnson",
    role: "Travel Expert",
    image: "/images/team/sarah.jpg",
    bio: "Sarah has been exploring Sri Lanka for over 5 years and specializes in discovering hidden gems across the island."
  },
  date: "2025-04-01",
  category: "Destinations",
  readTime: "5 min read",
  tags: ["beaches", "hidden gems", "travel tips", "nature"],
  relatedPosts: [
    {
      id: 2,
      title: "Best Time to Visit Sri Lankan Beaches",
      excerpt: "Plan your beach vacation with our comprehensive seasonal guide...",
      image: "/images/blog/seasons.jpg",
      date: "2025-03-28"
    },
    {
      id: 3,
      title: "Ultimate Beach Photography Guide",
      excerpt: "Learn how to capture stunning beach photos with these pro tips...",
      image: "/images/blog/photography.jpg",
      date: "2025-03-25"
    }
  ]
};

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <div className="py-12">
      <div className="container">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {blogPostData.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{blogPostData.title}</h1>
          <div className="flex items-center gap-4 text-gray-600 mb-8">
            <span>{new Date(blogPostData.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{blogPostData.readTime}</span>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
              Blog Post Image Placeholder
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-600 mb-8">{blogPostData.excerpt}</p>
              <div className="whitespace-pre-line text-gray-600">{blogPostData.content}</div>
            </article>

            {/* Tags */}
            <div className="mt-8 mb-12">
              <div className="flex flex-wrap gap-2">
                {blogPostData.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tags/${tag}`}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="border-t border-gray-200 pt-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 text-xs">
                    Author
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{blogPostData.author.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{blogPostData.author.role}</p>
                  <p className="text-gray-600">{blogPostData.author.bio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Related Posts */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6">Related Posts</h2>
              <div className="space-y-6">
                {blogPostData.relatedPosts.map((post) => (
                  <div key={post.id} className="group">
                    <Link href={`/blog/${post.id}`}>
                      <div className="relative h-48 rounded overflow-hidden mb-4">
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
                          Related Post Image
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-blue-600">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
                      <span className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-blue-50 rounded-lg p-6 mt-6">
              <h2 className="text-xl font-bold mb-4">Subscribe to Our Blog</h2>
              <p className="text-gray-600 mb-4">
                Get the latest travel tips and stories delivered to your inbox.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
