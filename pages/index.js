import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import FeatureCard from '@/components/FeatureCard';
import { useEffect } from 'react';

const features = [
  { title: 'Supernatural Speed', desc: 'Launch at the speed of thought—zero-to-app in days, not months.' },
  { title: 'Impossible UX/UI', desc: 'Visual storytelling, glass, neon, morphing gradients. Your product, unforgettable.' },
  { title: 'Engineering Magic', desc: 'AI, cloud, mobile—scalable, fun, blazing fast.' }
];

const testimonial = {
  quote: '“There is no limit to X-Corp’s imagination—our launch felt futuristic, viral, and fun. Everything works, and everyone talks about the design.”',
  author: '— N. Sethi, Founder, Synfuse'
};

const heroVariants = {
  hidden: { opacity: 0, scale: 0.98, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.1, type: 'spring', duration: 1 } }
};

export default function Home() {
  // Fancy glowing border on mouse move
  useEffect(() => {
    const handle = e => {
      const root = document.documentElement;
      root.style.setProperty('--mouse-x', `${e.clientX}px`);
      root.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <>
      <Head>
        <title>X-Corp | Launch Like Magic</title>
        <meta name="description" content="Build, ship, and grow a mind-blowing product—fast and with flair." />
      </Head>
      {/* Animated Impactful Background */}
      <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none">
        {/* Multicolor swirling morph blob */}
        <motion.div 
          initial={{ scale: 0.7, rotate: 0 }} 
          animate={{ scale: 1.2, rotate: 360 }} 
          transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
          className="absolute top-[-25%] left-[-10%] w-[110vw] h-[96vh] opacity-90" 
          style={{ filter: 'blur(120px)' }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-fuchsia-400 via-brand-500 to-yellow-400" />
        </motion.div>
        {/* Neon Aurora swash */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 0.55, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 2, type: 'spring' }}
          className="absolute top-12 right-[-25vw] w-[120vw] h-[32vh] rotate-[8deg] opacity-40"
          style={{ filter: 'blur(95px)' }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-brand-400 to-indigo-500" />
        </motion.div>
        {/* SVG squiggle divider, lower screen */}
        <svg className="absolute left-0 bottom-[-10px] w-full h-36 opacity-50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 Q200 55 500 18 T1200 45 L1440 180 0 180Z" fill="url(#logoWave)" />
          <defs>
            <linearGradient id="logoWave" x1="0" y1="30" x2="1440" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38e8ff" />
              <stop offset="1" stopColor="#f472b6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* 3D / Glass / Glow Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[92vh] text-white py-14 px-2 overflow-hidden">
        <motion.div variants={heroVariants} initial="hidden" animate="visible" className="z-10 text-center mx-auto" style={{textShadow:'0 2px 38px #38e8ff60, 0 4px 64px #e0f2fe99'}}>
          <div className="flex flex-col items-center mb-4">
            <span className="inline-block animate-bounce-slow rounded-full border-4 border-fuchsia-300/80 bg-fuchsia-400/80 p-2 shadow-lg mb-4">
              <svg width="36" height="36" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="currentColor"/></svg>
            </span>
            <h1 className="text-5xl sm:text-[4.2rem] font-extrabold leading-tight tracking-tight mb-2 drop-shadow-[0_6px_30px_rgba(0,0,0,0.60)]">
              <span className="block text-white">Build Big.</span>
              <span className="block text-white">Build Fast.</span>
              <span className="block relative">
                <span className="relative z-10 bg-gradient-to-br from-brand-400 via-yellow-200 to-brand-600 bg-clip-text text-transparent">Build with X‑Corp.</span>
                <motion.div initial={{width:0}} animate={{width:'95%'}} transition={{duration:1.2, delay:0.5}} style={{height:'6px'}}
                  className="absolute left-[2%] bottom-[-6px] rounded-full bg-gradient-to-r from-brand-400 via-yellow-200 to-brand-600 opacity-70" />
              </span>
            </h1>
            <p className="mt-7 text-xl max-w-2xl text-white/95 leading-relaxed">From napkin sketch to <span className='text-brand-400'>world-scale app</span>—<span className='text-yellow-300 font-semibold'>strategy</span>, <span className='text-pink-300'>UI</span>, and <span className='text-fuchsia-200'>full-stack engineering</span> on demand.</p>
            <div className="mt-11 flex flex-wrap gap-6 justify-center">
              <Link href="/about" className="btn bg-gradient-to-tr from-brand-400 via-fuchsia-400 to-yellow-300 text-black shadow-xl shadow-yellow-100 hover:scale-110 transition-transform duration-150">Start Your Project</Link>
              <Link href="/product" className="btn-ghost border-2 border-fuchsia-400 text-fuchsia-200 hover:bg-fuchsia-500/10 hover:scale-105 transition-transform duration-150">See Our Work</Link>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Wavy divider to Features */}
      <svg className="w-full h-20 -mb-2" fill="none"><path d="M0 32 Q360 40 740 16 Q1120 -8 1440 8 V80 H0Z" fill="url(#featwave)" /><defs><linearGradient id="featwave" x1="0" y1="0" x2="1440" y2="50" gradientUnits="userSpaceOnUse"><stop stopColor="#0ea5b7" /><stop offset="1" stopColor="#f472b6" /></linearGradient></defs></svg>
      {/* Features Section */}
      <section className="section relative z-10">
        <motion.h2 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="h2 text-center text-brand-400 drop-shadow-lg">
          Why Build With Us?</motion.h2>
        <p className="muted text-center mt-3 max-w-2xl mx-auto text-lg text-white/70">Build, ship, and grow anything—from audacious SaaS to playful microtools.</p>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-9">
          {features.map((f, i) => (
            <motion.div key={i} whileHover={{scale:1.04,rotate:[0,2,-2,0]}} initial={{opacity:0,scale:0.93}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.55,delay:i*0.08}} className="rounded-3xl border-2 border-brand-400 bg-white/10 hover:bg-white/20 p-7 shadow-xl cursor-pointer backdrop-blur-md transition-all min-h-[185px] flex flex-col justify-center text-left group">
              <FeatureCard title={f.title} desc={f.desc} />
              <span className="block mt-6 ml-1 w-16 h-1 rounded-full bg-gradient-to-r from-fuchsia-400 via-brand-400 to-yellow-200 group-hover:w-28 transition-all"/>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Squiggle divider to next */}
      <svg className="w-full h-16 -mb-1 opacity-60" fill="none"><path d="M0 16 Q380 48 580 0 T1440 13 V64 H0Z" fill="url(#prodwave)" /><defs><linearGradient id="prodwave" x1="0" y1="0" x2="1440" y2="50" gradientUnits="userSpaceOnUse"><stop stopColor="#f472b6" /><stop offset="1" stopColor="#0ea5b7" /></linearGradient></defs></svg>
      {/* Product Showcase */}
      <section className="section flex flex-col lg:flex-row gap-14 items-center relative z-10">
        <div className="flex-1 space-y-6 bg-gradient-to-br from-fuchsia-100/25 via-brand-200/15 to-brand-700/10 rounded-3xl p-10 shadow-2xl relative">
          <motion.h3 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="h2 text-brand-500 drop-shadow-lg mb-2">LaunchpadX — Next-Level Starter</motion.h3>
          <p className="text-xl text-white/95 max-w-xl leading-relaxed">Deploy <span className='text-fuchsia-400 font-bold'>LaunchpadX</span> and have billing, multi-tenant, analytics, and delight baked in. The fastest way to go from zero to product launch—and never look plain.</p>
          <Link href="/product" className="btn bg-brand-500 text-black border-0 hover:bg-brand-700 transition shadow-lg mt-4">Explore LaunchpadX</Link>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="flex-1 flex justify-center items-center">
          <img src="/logo.svg" alt="LaunchpadX demo" className="w-64 h-64 md:w-80 md:h-80 rounded-[2.25rem] border-4 border-brand-400 shadow-glow bg-black/60 p-10 object-contain hover:scale-105 transition-transform duration-200" />
        </motion.div>
      </section>
      {/* Curvy divider before testimonial */}
      <svg className="w-full h-20 -mb-2" fill="none"><path d="M0 22 Q450 60 850 4 T1440 36 V80 H0Z" fill="url(#testiwave)" /><defs><linearGradient id="testiwave" x1="0" y1="0" x2="1440" y2="50" gradientUnits="userSpaceOnUse"><stop stopColor="#38e8ff" /><stop offset="1" stopColor="#0ea5b7" /></linearGradient></defs></svg>
      {/* Testimonial Section */}
      <section className="section flex flex-col items-center py-20 sm:py-24 relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.93 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl rounded-3xl border-2 border-brand-400 bg-black/60 p-11 shadow-2xl relative">
          <div className="absolute -top-9 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-fuchsia-400 via-yellow-300/70 to-brand-400 blur-2xl rounded-full" />
          <blockquote className="text-2xl text-brand-400 font-semibold italic z-10 relative drop-shadow-lg mb-3">{testimonial.quote}</blockquote>
          <div className="mt-8 text-white/70 text-right">{testimonial.author}</div>
        </motion.div>
      </section>
      {/* Big animated CTA bottom strip with gradient border*/}
      <section className="section pt-0 pb-16">
        <motion.div initial={{opacity:0,scale:0.93}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.7}} className="rounded-[2.25rem] border-4 border-brand-200 bg-gradient-to-br from-brand-400/40 via-fuchsia-400/15 to-yellow-200/20 text-brand-900 shadow-2xl flex flex-col lg:flex-row items-center gap-8 px-12 py-12">
          <div className="flex-1">
            <h3 className="text-4xl font-extrabold mb-3 drop-shadow-lg">Ready to build the impossible?</h3>
            <p className="text-xl text-brand-900/80 mb-7">We help innovators, dreamers, and troublemakers launch world-class experiences—insanely fast.</p>
            <a href="tel:+919817593007" className="btn bg-gradient-to-tr from-yellow-200 via-fuchsia-400 to-brand-400 text-black border-0 hover:scale-110 transition mt-1">Book Your Magic Call</a>
          </div>
          <div className="flex items-center justify-center">
            <img src="/logo.svg" alt="X-Corp" className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-brand-400 shadow-glow bg-white/80 p-3" />
          </div>
        </motion.div>
      </section>
    </>
  );
}
