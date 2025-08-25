import { useState } from 'react';
import Link from 'next/link';

const productIcons = [
  // VisionOS UI Kit icon
  <svg key="icon1" width="34" height="34" viewBox="0 0 34 34" fill="none"><rect width="34" height="34" rx="8" fill="#22d3ee" opacity="0.14"/><path d="M8 17h18" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round"/><circle cx="17" cy="17" r="5.5" stroke="#22d3ee" strokeWidth="2.5"/></svg>,
  // Analytics icon
  <svg key="icon2" width="34" height="34" viewBox="0 0 34 34" fill="none"><rect width="34" height="34" rx="8" fill="#22d3ee" opacity="0.14"/><rect x="9" y="18" width="3" height="7" rx="1.5" fill="#22d3ee"/><rect x="15.5" y="12" width="3" height="13" rx="1.5" fill="#22d3ee"/><rect x="22" y="15" width="3" height="10" rx="1.5" fill="#22d3ee"/></svg>,
  // LaunchKit icon
  <svg key="icon3" width="34" height="34" viewBox="0 0 34 34" fill="none"><rect width="34" height="34" rx="8" fill="#22d3ee" opacity="0.14"/><path d="M17 24V10" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round"/><path d="M11 17l6-6 6 6" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  // X-connect icon
  <svg key="icon4" width="34" height="34" viewBox="0 0 34 34" fill="none"><rect width="34" height="34" rx="8" fill="#22d3ee" opacity="0.14"/><path d="M12 17h10" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round"/><circle cx="17" cy="17" r="5.5" stroke="#22d3ee" strokeWidth="2.5"/></svg>
];

const items = [
  { name: 'X-connect', desc: 'Provides contact info and emails for any domain you enter.', price: '₹5,999', badge: 'New' },
];

export default function Products() {
  const [hovered, setHovered] = useState(-1);
  return (
    <section className="section">
      <h1 className="h2">Products</h1>
      <p className="mt-2 muted">Tooling and templates that help you ship faster.</p>

      <div className="mt-8 grid sm:grid-cols-1 gap-7">
        {items.map((p, i) => (
          <div
            key={i}
            className={`card relative group transition-all duration-300"${hovered===i?' ring-2 ring-brand-500/50 scale-[1.03] shadow-glow':''}`}
            style={{ minHeight: 230, cursor: 'pointer' }}
            onMouseEnter={()=>setHovered(i)}
            onMouseLeave={()=>setHovered(-1)}
          >
            <div className="flex items-center gap-3 mb-1">
              <span>{productIcons[i]}</span>
              <span className="ml-auto text-xs px-3 py-1 rounded-full bg-brand-50/80 text-brand-700 font-semibold uppercase tracking-wide shadow-sm animate-fadein">{p.badge}</span>
            </div>
            <h3 className="text-lg font-semibold mt-1 text-brand-100 drop-shadow">
              {p.name}
            </h3>
            <p className="mt-2 muted text-base min-h-[44px]">{p.desc}</p>
            <div className="mt-6 flex items-center justify-between">
              <span className="font-bold text-lg text-brand-500 drop-shadow">{p.price}</span>
              <Link href="/x-connect">
                <button className="btn" type="button">Learn more</button>
              </Link>
            </div>
          </div>
        ))}
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
