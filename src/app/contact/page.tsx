'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    tourType: 'cultural',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      tourType: 'cultural',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="py-12">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong className="block">Address:</strong>
                  Colombo,
                  Sri Lanka
                </p>
                <p>
                  <strong className="block">Phone:</strong>
                  +94 (078) 869-5286
                </p>
                <p>
                  <strong className="block">Email:</strong>
                  contact@tech-lumina.com
                </p>
                <p>
                  <strong className="block">Working Hours:</strong>
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Quick Contact</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="tourType" className="block text-gray-700 mb-1">Interested In</label>
                  <select
                    id="tourType"
                    name="tourType"
                    value={formData.tourType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="cultural">Cultural Tours</option>
                    <option value="adventure">Adventure Tours</option>
                    <option value="beach">Beach Tours</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#ff6b6b] text-white rounded hover:bg-[#f03e3e]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="aspect-w-16 aspect-h-9">
              {/* Add your map component or embed here */}
              <div className="w-full h-64 bg-gray-300 rounded flex items-center justify-center">
                Map will be displayed here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
