import { useState } from 'react';
import Link from 'next/link';

const productIcons = [
  // VisionOS UI Kit icon
  <span><svg key="icon1" width="34" height="34" viewBox="0 0 34 34" fill="none"><rect width="34" height="34" rx="8" fill="#22d3ee" opacity="0.14"/><path d="M8 17h18" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round"/><circle cx="17" cy="17" r="5.5" stroke="#22d3ee" strokeWidth="2.5"/></svg></span>,
  // Analytics icon
  <span><svg key="icon2" width="34" height="34" viewBox="0 0 34 34" fill="none"><rect width="34" height="34" rx="8" fill="#22d3ee" opacity="0.14"/><rect x="9" y="18" width="3" height="7" rx="1.5" fill="#22d3ee"/><rect x="15.5" y="12" width="3" height="13" rx="1.5" fill="#22d3ee"/><rect x="22" y="15" width="3" height="10" rx="1.5" fill="#22d3ee"/></svg></span>,
  // LaunchKit icon
  <span><svg key="icon3" width="34" height="34" viewBox="0 0 34 34" fill="none"><rect width="34" height="34" rx="8" fill="#22d3ee" opacity="0.14"/><path d="M17 24V10" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round"/><path d="M11 17l6-6 6 6" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>,
  // X-connect icon
  <span><svg key="icon4" width="34" height="34" viewBox="0 0 34 34" fill="none"><rect width="34" height="34" rx="8" fill="#22d3ee" opacity="0.14"/><path d="M12 17h10" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round"/><circle cx="17" cy="17" r="5.5" stroke="#22d3ee" strokeWidth="2.5"/></svg></span>,
  // X-Employed icon
  <span><svg key="icon5" width="34" height="34" viewBox="0 0 34 34" fill="none"><rect width="34" height="34" rx="8" fill="#06b6d4" opacity="0.14"/><path d="M17 10v14" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round"/><circle cx="17" cy="17" r="5.5" stroke="#06b6d4" strokeWidth="2.5"/><path d="M12 17h10" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round"/></svg></span>,
  // X-Deals icon
  <span><svg key="icon6" width="34" height="34" viewBox="0 0 34 34" fill="none"><rect width="34" height="34" rx="8" fill="#f59e42" opacity="0.14"/><path d="M10 24l7-14 7 14" stroke="#f59e42" strokeWidth="2.5" strokeLinecap="round"/><circle cx="17" cy="17" r="5.5" stroke="#f59e42" strokeWidth="2.5"/></svg></span>
];

const items = [
  { name: 'X-connect', desc: 'Provides contact info and emails for any domain you enter.', price: '₹5,999', badge: 'New', link: '/x-connect', iconIdx: 3 },
  { name: 'X-Employed', desc: 'Find jobs and connect with the right companies and people. Search for roles, locations, or companies.', price: 'Free', badge: 'Beta', link: '/x-employed', iconIdx: 4 },
  { name: 'X-Deals', desc: 'Compare products and get the best price, links, and info. Find the best deals in the market for anything you search.', price: 'Free', badge: 'New', link: '/x-deals', iconIdx: 5 },
];

export default function Products() {
  const [hovered, setHovered] = useState(-1);
  return (
    <section className="section">
      <div className="text-center mb-8">
        <h1 className="h2 text-4xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-fuchsia-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">X-Corp Products</h1>
        <p className="text-xl font-semibold text-white/90 mb-2">Empowering you to connect, discover, and save—faster than ever.</p>
        <p className="mt-2 muted text-lg text-white/70">Tooling and templates that help you ship faster and smarter.</p>
      </div>

      <div className="mt-8 grid sm:grid-cols-1 gap-7">
        {items.map((p, i) => {
          // Color accent and gradient per product
          let cardGradient = '';
          if (p.name === 'X-connect') cardGradient = 'from-fuchsia-100/40 via-fuchsia-400/10 to-blue-100/10';
          else if (p.name === 'X-Employed') cardGradient = 'from-cyan-100/40 via-cyan-400/10 to-indigo-100/10';
          else if (p.name === 'X-Deals') cardGradient = 'from-orange-100/40 via-orange-400/10 to-pink-100/10';
          else cardGradient = 'from-white/20 via-gray-100/10 to-white/10';
          return (
            <div
              key={i}
              className={`card relative group transition-all duration-300 ${hovered===i?' ring-2 ring-brand-500/50 scale-[1.03] shadow-glow':''} bg-gradient-to-br ${cardGradient} backdrop-blur-md shadow-xl`}
              style={{ minHeight: 230, cursor: 'pointer' }}
              onMouseEnter={()=>setHovered(i)}
              onMouseLeave={()=>setHovered(-1)}
            >
              <div className="flex items-center gap-3 mb-1">
                <span>{productIcons[p.iconIdx]}</span>
                <span className="ml-auto text-xs px-3 py-1 rounded-full bg-brand-50/80 text-brand-700 font-semibold uppercase tracking-wide shadow-sm animate-fadein">{p.badge}</span>
              </div>
              <h3 className="text-lg font-semibold mt-1 drop-shadow bg-gradient-to-r from-fuchsia-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent">
                {p.name}
              </h3>
              <p className="mt-2 muted text-base min-h-[44px] text-white/90">{p.desc}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="font-bold text-lg drop-shadow bg-gradient-to-r from-fuchsia-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent">{p.price}</span>
                <Link href={p.link}>
                  <button className="btn" type="button">Learn more</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <p className="text-lg text-gray-500">Many more exciting products launching soon!</p>
      </div>

      <style jsx>{`
        .animate-fadein { animation: fadein 0.7s ease-in; }
        @keyframes fadein { from { opacity: 0; transform: translateY(-10%);} to { opacity: 1; transform: none; } }
      `}</style>
    </section>
  );
}
