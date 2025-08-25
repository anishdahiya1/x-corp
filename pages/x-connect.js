import { useState } from 'react';

export default function XConnect() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Placeholder for search functionality
    console.log(`Searching for: ${searchQuery}`);
  };

  return (
    <section className="section bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
      <div className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-cyan-400 drop-shadow-lg">X-Connect</h1>
        <p className="text-lg text-center mb-12 text-gray-300">
          Discover contact information and emails for any domain you enter. Your gateway to seamless connections.
        </p>

        <div className="flex justify-center items-center mb-12">
          <input
            type="text"
            className="w-full max-w-md px-4 py-2 rounded-lg bg-gray-800 text-white border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter domain name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="ml-4 px-6 py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="text-center">
          <p className="text-gray-400">Results will appear here once the search functionality is implemented.</p>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient-to-r {
          background: linear-gradient(to right, #1a202c, #2d3748, #1a202c);
        }
      `}</style>
    </section>
  );
}
