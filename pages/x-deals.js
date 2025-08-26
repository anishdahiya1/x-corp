import { useState } from 'react';

export default function XDeals() {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  // Placeholder search handler
  const handleSearch = async () => {
    setLoading(true);
    setTimeout(() => {
      // Simulated results
      setResults([
        {
          name: 'Apple iPhone 15 64GB',
          price: '₹74,999',
          store: 'Amazon',
          link: 'https://amazon.in/apple-iphone-15-64gb',
          info: 'Brand new, 1 year warranty, free delivery.'
        },
        {
          name: 'Apple iPhone 15 64GB',
          price: '₹73,499',
          store: 'Flipkart',
          link: 'https://flipkart.com/apple-iphone-15-64gb',
          info: 'Brand new, 1 year warranty, exchange offer available.'
        }
      ]);
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="section bg-gradient-live text-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-full h-full" style={{
          background: 'linear-gradient(135deg, #f59e42 0%, #f43f5e 40%, #9333ea 80%, #1e3a8a 100%)',
          filter: 'blur(100px)',
          opacity: 0.7,
          position: 'absolute',
          inset: 0
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(80px)',
          opacity: 0.5
        }} />
      </div>
      <div className="container mx-auto py-16 px-6 relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-[0_6px_30px_rgba(0,0,0,0.60)]">
            <span className="block text-white">X-Deals</span>
            <span className="block relative">
              <span className="relative z-10 bg-gradient-to-br from-orange-400 via-pink-500 to-indigo-600 bg-clip-text text-transparent">Find the Best Deals Instantly</span>
              <div className="absolute left-[2%] bottom-[-6px] rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-indigo-600 opacity-70" style={{height:'6px', width:'95%'}} />
            </span>
          </h1>
          <p className="text-xl text-orange-100/80 max-w-2xl mx-auto mt-4 font-light">
            Enter any product name and instantly compare prices, stores, and offers. X-Deals helps you get the best price and info for anything you want to buy.
          </p>
        </div>
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-orange-200/80 mb-4 font-light">
            <span className="font-semibold text-orange-400">X-Deals</span> scans top stores and platforms to find the best deals for you. Save money, time, and effort with a single search.
          </p>
          <p className="text-lg text-orange-200/80 mb-4 font-light">
            Just type your desired product below and discover the lowest prices, trusted sellers, and exclusive offers—all in a sleek, futuristic interface.
          </p>
        </div>
        <div className="flex flex-col items-center mb-12">
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="e.g. apple 15 64 gb"
            className="w-full max-w-lg px-5 py-3 rounded-xl bg-white/20 text-white placeholder:text-orange-200/60 border border-orange-400/30 focus:outline-none focus:ring-2 focus:ring-orange-400/40 backdrop-blur-md shadow-lg"
            style={{fontSize:'1.15rem'}}
          />
          <button
            onClick={handleSearch}
            className="mt-4 px-7 py-3 rounded-xl bg-orange-500/80 hover:bg-orange-600/90 text-white font-semibold shadow-lg transition-all duration-200"
            style={{fontSize:'1.1rem'}}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin" width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="4" opacity="0.2"/><path d="M22 12c0-5.523-4.477-10-10-10" stroke="#fff" strokeWidth="4" strokeLinecap="round"/></svg>
                Loading...
              </span>
            ) : 'Search'}
          </button>
        </div>
        <div className="mt-10 w-full flex flex-col items-center min-h-[200px]">
          {loading && (
            <div className="flex items-center justify-center w-full h-32">
              <span className="px-6 py-4 rounded-xl bg-white/30 text-orange-700 font-semibold shadow-lg backdrop-blur-md animate-pulse">Searching...</span>
            </div>
          )}
          {!loading && results && results.length > 0 && (
            <div className="w-full max-w-4xl overflow-x-auto">
              <table className="w-full bg-white/20 backdrop-blur-md rounded-xl shadow-xl border border-orange-400/20 text-left text-base text-orange-900/90" style={{tableLayout:'auto'}}>
                <thead>
                  <tr className="bg-orange-100/30">
                    <th className="px-6 py-4 font-bold">Product</th>
                    <th className="px-6 py-4 font-bold">Price</th>
                    <th className="px-6 py-4 font-bold">Store</th>
                    <th className="px-6 py-4 font-bold">Info</th>
                    <th className="px-6 py-4 font-bold">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((r, idx) => (
                    <tr key={idx} className="hover:bg-orange-100/20 transition-all">
                      <td className="px-6 py-4 break-all font-semibold">{r.name}</td>
                      <td className="px-6 py-4 break-all">{r.price}</td>
                      <td className="px-6 py-4">{r.store}</td>
                      <td className="px-6 py-4">{r.info}</td>
                      <td className="px-6 py-4"><a href={r.link} className="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">View</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {!loading && results && results.length === 0 && (
            <div className="w-full max-w-2xl mt-8">
              <div className="px-6 py-5 rounded-xl bg-white/20 text-orange-700/80 font-medium shadow-lg backdrop-blur-md text-center">
                <span>No deals found for your search.</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .bg-gradient-live {
          animation: gradientShift 10s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
