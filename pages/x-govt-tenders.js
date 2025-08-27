import Link from 'next/link';

export default function XGovtTenders() {
  return (
    <section className="section bg-gradient-live text-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-full h-full" style={{
          background: 'linear-gradient(135deg, #f59e42 0%, #9333ea 40%, #1e3a8a 80%, #22d3ee 100%)',
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
            <span className="block text-white">X-Govt Tenders</span>
            <span className="block relative">
              <span className="relative z-10 bg-gradient-to-br from-orange-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">India’s Smartest Tender Platform</span>
              <div className="absolute left-[2%] bottom-[-6px] rounded-full bg-gradient-to-r from-orange-400 via-blue-500 to-indigo-600 opacity-70" style={{height:'6px', width:'95%'}} />
            </span>
          </h1>
          <p className="text-xl text-orange-100/80 max-w-2xl mx-auto mt-4 font-light">
            Discover, monitor, and apply for government tenders across India—summarized, state-wise, and with direct lawyer connections. Get notified instantly for new tenders and never miss an opportunity.
          </p>
        </div>
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-orange-200/80 mb-4 font-light">
            <span className="font-semibold text-orange-400">X-Govt Tenders</span> brings all tenders from various government portals into one place, summarized and organized by state and category. No more searching multiple sites—find everything here.
          </p>
          <p className="text-lg text-orange-200/80 mb-4 font-light">
            Premium users get real-time monitoring, email notifications for new tenders, and access to a network of lawyers in every state to help with applications and compliance.
          </p>
          <p className="text-lg text-orange-200/80 mb-4 font-light">
            <span className="font-semibold text-orange-400">Features:</span> State-wise tender summaries, full India coverage, instant notifications, lawyer connections, premium access for advanced features.
          </p>
        </div>
        <div className="flex flex-col items-center mb-12">
          <Link href="/signup" className="btn bg-orange-500 text-black border-0 hover:bg-orange-700 transition shadow-lg mt-2">Get Premium Access</Link>
        </div>
        <div className="mt-10 w-full flex flex-col items-center min-h-[200px]">
          <div className="w-full max-w-4xl overflow-x-auto">
            <table className="w-full bg-white/20 backdrop-blur-md rounded-xl shadow-xl border border-orange-400/20 text-left text-base text-orange-900/90" style={{tableLayout:'auto'}}>
              <thead>
                <tr className="bg-orange-100/30">
                  <th className="px-6 py-4 font-bold">Tender Title</th>
                  <th className="px-6 py-4 font-bold">State</th>
                  <th className="px-6 py-4 font-bold">Deadline</th>
                  <th className="px-6 py-4 font-bold">Lawyer Connect</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-orange-100/20 transition-all">
                  <td className="px-6 py-4 break-all font-semibold">Construction of School Building</td>
                  <td className="px-6 py-4 break-all">Delhi</td>
                  <td className="px-6 py-4">2025-09-10</td>
                  <td className="px-6 py-4"><Link href="/connect-lawyer?state=Delhi" className="text-orange-500 hover:underline">Connect Lawyer</Link></td>
                </tr>
                <tr className="hover:bg-orange-100/20 transition-all">
                  <td className="px-6 py-4 break-all font-semibold">Road Repair Tender</td>
                  <td className="px-6 py-4 break-all">Maharashtra</td>
                  <td className="px-6 py-4">2025-09-15</td>
                  <td className="px-6 py-4"><Link href="/connect-lawyer?state=Maharashtra" className="text-orange-500 hover:underline">Connect Lawyer</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
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
