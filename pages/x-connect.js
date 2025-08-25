import { useState } from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

export default function XConnect() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    const apiUrl = `/api/proxy?domain=${encodeURIComponent(searchQuery)}`;
    try {
      setLoading(true);
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.email_sources) {
        setSearchResults(data.email_sources);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
    setLoading(false);
  };

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.98, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.1, type: 'spring', duration: 1 } }
  };

  return (
    <section className="section bg-gradient-live text-white min-h-screen relative overflow-hidden">
      {/* Enhanced Animated Background Effect */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1.1 }} 
        transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #1e3a8a, #9333ea, #f43f5e)', filter: 'blur(100px)' }}
      />
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 0.6, y: 0 }} 
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1), rgba(0,0,0,0))', filter: 'blur(80px)' }}
      />

      <div className="container mx-auto py-16 px-6 relative z-10">
        {/* Hero Section */}
        <motion.div variants={heroVariants} initial="hidden" animate="visible" className="z-10 text-center mx-auto" style={{textShadow:'0 2px 38px #38e8ff60, 0 4px 64px #e0f2fe99'}}>
          <div className="flex flex-col items-center mb-4">
            <span className="inline-block animate-bounce-slow rounded-full border-4 border-fuchsia-300/80 bg-fuchsia-400/80 p-2 shadow-lg mb-4">
              <svg width="36" height="36" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="currentColor"/></svg>
            </span>
            <h1 className="text-5xl sm:text-[4.2rem] font-extrabold leading-tight tracking-tight mb-2 drop-shadow-[0_6px_30px_rgba(0,0,0,0.60)]">
              <span className="block text-white">Revolutionize Networking.</span>
              <span className="block text-white">Discover Effortlessly.</span>
              <span className="block relative">
                <span className="relative z-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Connect with X‑Connect.</span>
                <motion.div initial={{width:0}} animate={{width:'95%'}} transition={{duration:1.2, delay:0.5}} style={{height:'6px'}}
                  className="absolute left-[2%] bottom-[-6px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 opacity-70" />
              </span>
            </h1>
          </div>
        </motion.div>

        {/* Search Section */}
        <div className="flex flex-col items-center mb-16">
          <input
            type="text"
            className="w-full max-w-lg px-6 py-3 rounded-xl bg-white/20 text-white border border-cyan-400/30 focus:outline-none focus:ring-4 focus:ring-cyan-500/40 text-lg shadow-lg font-mono backdrop-blur-md"
            placeholder="Enter domain name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{fontSize:'1.15rem'}}
          />
          <button
            onClick={handleSearch}
            className="mt-4 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:scale-105 transition shadow-lg hover:shadow-xl font-sans"
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

        {/* Search Results Section */}
        <div className="mt-10 w-full flex flex-col items-center min-h-[200px]">
          {loading && (
            <div className="flex items-center justify-center w-full h-32">
              <span className="px-6 py-4 rounded-xl bg-white/30 text-cyan-700 font-semibold shadow-lg backdrop-blur-md animate-pulse">Searching...</span>
            </div>
          )}
          {!loading && searchResults && searchResults.length > 0 && (
            <div className="w-full max-w-4xl overflow-x-auto">
              <table className="w-full bg-white/20 backdrop-blur-md rounded-xl shadow-xl border border-cyan-400/20 text-left text-base text-cyan-900/90" style={{tableLayout:'auto'}}>
                <thead>
                  <tr className="bg-cyan-100/30">
                    <th className="px-6 py-4 font-bold">Email</th>
                    <th className="px-6 py-4 font-bold">Source(s)</th>
                    <th className="px-6 py-4 font-bold">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResults.map((result, idx) => (
                    <tr key={idx} className="hover:bg-cyan-100/20 transition-all">
                      <td className="px-6 py-4 break-all font-mono">{result.email || '-'}</td>
                      <td className="px-6 py-4 break-all">
                        {result.sources && result.sources.length > 0 ? (
                          <ul className="list-disc pl-4">
                            {result.sources.map((source, sidx) => (
                              <li key={sidx}>
                                <a href={source} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">{source}</a>
                              </li>
                            ))}
                          </ul>
                        ) : '-'}
                      </td>
                      <td className="px-6 py-4">{result.type || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {!loading && searchResults && searchResults.length === 0 && (
            <div className="w-full max-w-2xl mt-8">
              <div className="px-6 py-5 rounded-xl bg-white/20 text-cyan-700/80 font-medium shadow-lg backdrop-blur-md text-center">
                <span>No professional contacts found for this domain.</span>
              </div>
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-4 tracking-wide bg-gradient-to-br from-cyan-400 to-blue-600 bg-clip-text text-transparent font-serif"
            >
              Why Choose X-Connect?
            </motion.h2>
            <p className="text-lg mb-4 leading-relaxed text-gray-300 font-light">
              <span className="font-semibold text-cyan-400">X-Connect</span> is your ultimate tool for discovering contact information and emails for any domain or company. Empower your networking and outreach with precision and ease.
            </p>
            <p className="text-lg mb-4 leading-relaxed text-gray-300 font-light">
              Whether you're looking to connect with potential clients, partners, or industry leaders, <span className="font-semibold text-cyan-400">X-Connect</span> provides the tools you need to make meaningful connections. Simply enter the domain or company name, and let <span className="font-semibold text-cyan-400">X-Connect</span> do the rest.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.93 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.7 }} 
            className="rounded-[2.25rem] border-4 border-cyan-400 bg-gradient-to-br from-cyan-400/40 via-blue-400/15 to-blue-200/20 text-cyan-900 shadow-2xl flex flex-col items-center gap-8 px-12 py-12"
          >
            <h3 className="text-4xl font-extrabold mb-3 drop-shadow-lg font-serif text-cyan-400">Ready to revolutionize your networking?</h3>
            <p className="text-xl text-cyan-200 mb-7 font-light">Discover emails and contact information for any domain or company with ease.</p>
            <a href="/explore" className="btn bg-gradient-to-tr from-blue-400 via-cyan-400 to-cyan-600 text-white border-0 hover:scale-110 transition mt-1 font-sans">Explore More</a>
          </motion.div>
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
