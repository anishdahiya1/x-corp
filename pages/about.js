import { useState } from 'react';

export default function About() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'anishdahiya44@gmail.com',
          subject: `New message from ${form.name}`,
          text: `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`,
        }),
      });
      setSent(true);
      setTimeout(() => setSent(false), 3500);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  return (
    <section className="section">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h1 className="h2 flex items-center gap-2">
            <svg width={30} height={30} viewBox="0 0 28 28"><rect width="28" height="28" rx="7" fill="#22d3ee" opacity="0.16"/><path d="M7 10c0-1.657 1.79-3 4-3s4 1.343 4 3-1.79 3-4 3-4-1.343-4-3Zm7 10v-2c0-1.657-1.343-3-3-3H7v5a1 1 0 0 0 1 1h3v-1Zm2 0h3a1 1 0 0 0 1-1v-5h-3c-1.657 0-3 1.343-3 3v2Z" fill="#22d3ee"/></svg>
            About X-Corp
          </h1>
          <p className="mt-3 muted text-lg">
            We are a tight, senior team delivering <b className="text-brand-500">premium digital experiences</b> for founders and enterprises. Strategy → Design → Engineering → Growth.
          </p>

          <div className="mt-7 card shadow-glow">
            <h3 className="text-lg font-bold mb-1 flex items-center gap-2">
              <svg width={20} height={20} viewBox="0 0 20 20"><rect width="20" height="20" rx="5" fill="#22d3ee" opacity="0.16"/><path d="M5 7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V7Z" stroke="#22d3ee"/></svg>
              Contact
            </h3>
            <p className="mt-1 muted">Have a project in mind? Drop us a line.</p>

            <form onSubmit={onSubmit} className="mt-4 grid gap-3">
              <input
                required
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 shadow-sm"
              />
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="Email"
                className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 shadow-sm"
              />
              <textarea
                required
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Tell us about your vision…"
                rows={5}
                className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 shadow-sm"
              />
              <button className="btn" type="submit">
                <span className="mr-1.5" style={{display: 'inline-flex',verticalAlign:'middle'}}>
                  <svg width={18} height={18} fill="#0891b2" viewBox="0 0 18 18"><path d="M2 14l11-5-11-5v10zm0 0l11-5-11-5v10zm0 0v-10l11 5-11 5z"/></svg>
                </span>
                Send Message
              </button>
              {sent && (
                <div className="flex items-center gap-2 mt-2 animate-fadein">
                  <svg width="18" height="18" viewBox="0 0 18 18"><circle cx="9" cy="9" r="9" fill="#10b981" opacity=".2"/><path d="M5 9.5l2.5 2 5-5" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round"/></svg>
                  <p className="text-sm text-green-400">Thanks! Your message has been sent successfully.</p>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="card shadow-glow flex flex-col gap-7">
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <svg width={20} height={20} viewBox="0 0 20 20"><rect width="20" height="20" rx="5" fill="#22d3ee" opacity="0.16"/><path d="M11 4v6a1 1 0 0 1-2 0V4m-2 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7v-1Z" stroke="#22d3ee"/></svg>
              Why X-Corp
            </h3>
            <ul className="space-y-3 text-gray-200 list-disc list-inside ml-3">
              <li>Design-first approach with measurable outcomes</li>
              <li>Senior full-stack team, shipping mindset</li>
              <li>Transparent timelines and weekly demos</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-1">
              <svg width={18} height={18} viewBox="0 0 18 18"><rect width="18" height="18" rx="4" fill="#22d3ee" opacity="0.16"/><path d="M4 9h10m-5-5v10" stroke="#22d3ee"/></svg>
              Reach us
            </h3>
            <p className="muted mt-1 text-base flex items-center gap-3">
              <svg width={17} height={17} fill="#0891b2" viewBox="0 0 17 17"><path d="M2 3a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3zm12 0H3v5.764c.647.7 2.408 2.236 5.006 2.236C11.591 11 13.35 9.464 14 8.764V3z"/></svg>
              <span>Email: <a href="mailto:hello@x-corp.example" className="text-brand-500 hover:underline">hello@x-corp.example</a></span> • <span>New Delhi, India</span>
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-fadein { animation: fadein 0.7s ease; }
        @keyframes fadein { from { opacity: 0; transform: translateY(-12%);} to { opacity: 1; transform: none; } }
      `}</style>
    </section>
  );
}
