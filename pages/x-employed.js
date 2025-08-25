import { useState } from 'react';

export default function XEmployed() {
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
          job: 'Data Scientist',
          company: 'Tech Innovators',
          location: 'Delhi',
          requirements: 'Python, ML, 2+ years exp.',
          link: '#'
        },
        {
          job: 'ML Engineer',
          company: 'AI Labs',
          location: 'Delhi',
          requirements: 'TensorFlow, Deep Learning, 3+ years exp.',
          link: '#'
        }
      ]);
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="section bg-gradient-live text-white min-h-screen relative overflow-hidden">
      {/* Sci-fi Animated Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-full h-full" style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #9333ea 80%, #f43f5e 100%)',
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
            <span className="block text-white">X-Employed</span>
            <span className="block relative">
              <span className="relative z-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Empowering Your Career Journey</span>
              <div className="absolute left-[2%] bottom-[-6px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 opacity-70" style={{height:'6px', width:'95%'}} />
            </span>
          </h1>
          <p className="text-xl text-cyan-100/80 max-w-2xl mx-auto mt-4 font-light">
            Welcome to <span className="font-semibold text-cyan-400">X-Employed</span>, your gateway to the future of employment. Discover opportunities, connect with visionary companies, and unlock your potential in a world driven by innovation.
          </p>
        </div>
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-cyan-200/80 mb-4 font-light">
            <span className="font-semibold text-cyan-400">X-Employed</span> leverages advanced technology to match you with the right jobs and the right people. Whether you’re searching for your first role or your next big challenge, our platform is designed to help you succeed in the fast-evolving tech landscape.
          </p>
          <p className="text-lg text-cyan-200/80 mb-4 font-light">
            Simply enter your desired job title, skills, or location in the search bar below. Instantly explore a curated list of opportunities, company profiles, and requirements—all in a sleek, futuristic interface.
          </p>
          <p className="text-lg text-cyan-200/80 mb-4 font-light">
            <span className="font-semibold text-cyan-400">Our Mission:</span> To connect talent with opportunity, making the job search process seamless, transparent, and inspiring for everyone.
          </p>
        </div>
        <div className="flex flex-col items-center mb-12">
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="e.g. data science jobs in delhi"
            className="w-full max-w-lg px-5 py-3 rounded-xl bg-white/20 text-white placeholder:text-cyan-200/60 border border-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 backdrop-blur-md shadow-lg"
            style={{fontSize:'1.15rem'}}
          />
          <button
            onClick={handleSearch}
            className="mt-4 px-7 py-3 rounded-xl bg-cyan-500/80 hover:bg-cyan-600/90 text-white font-semibold shadow-lg transition-all duration-200"
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
              <span className="px-6 py-4 rounded-xl bg-white/30 text-cyan-700 font-semibold shadow-lg backdrop-blur-md animate-pulse">Searching...</span>
            </div>
          )}
          {!loading && results && results.length > 0 && (
            <div className="w-full max-w-4xl overflow-x-auto">
              <table className="w-full bg-white/20 backdrop-blur-md rounded-xl shadow-xl border border-cyan-400/20 text-left text-base text-cyan-900/90" style={{tableLayout:'auto'}}>
                <thead>
                  <tr className="bg-cyan-100/30">
                    <th className="px-6 py-4 font-bold">Job</th>
                    <th className="px-6 py-4 font-bold">Company</th>
                    <th className="px-6 py-4 font-bold">Location</th>
                    <th className="px-6 py-4 font-bold">Requirements</th>
                    <th className="px-6 py-4 font-bold">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((r, idx) => (
                    <tr key={idx} className="hover:bg-cyan-100/20 transition-all">
                      <td className="px-6 py-4 break-all font-semibold">{r.job}</td>
                      <td className="px-6 py-4 break-all">{r.company}</td>
                      <td className="px-6 py-4">{r.location}</td>
                      <td className="px-6 py-4">{r.requirements}</td>
                      <td className="px-6 py-4"><a href={r.link} className="text-cyan-500 hover:underline">View</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {!loading && results && results.length === 0 && (
            <div className="w-full max-w-2xl mt-8">
              <div className="px-6 py-5 rounded-xl bg-white/20 text-cyan-700/80 font-medium shadow-lg backdrop-blur-md text-center">
                <span>No jobs found for your search.</span>
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
