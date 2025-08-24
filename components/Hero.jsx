import { motion } from 'framer-motion'
import Link from 'next/link'


export default function Hero(){
return (
<section className="relative min-h-[88vh] flex items-center justify-center text-center bg-gradient-to-b from-base-900 via-brand-400/30 to-base-900 overflow-hidden">
  <div className="relative z-10 px-4 w-full flex justify-center">
    <motion.div 
      initial={{opacity:0, y:30}} 
      animate={{opacity:1, y:0}} 
      transition={{duration:0.7}} 
      className="max-w-2xl w-full bg-white/90 bg-opacity-90 shadow-2xl rounded-3xl px-8 py-14 flex flex-col items-center"
      style={{backdropFilter:'saturate(160%) blur(10px)'}}
    >
      {/* Brand logo/icon animated */}
      <motion.img src="/logo.svg" alt="X-Corp Logo" initial={{ scale:0.8, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration: 0.7, bounce: 0.4 }} className="w-16 h-16 mb-6 animate-pulse"/>
      {/* Animated headline */}
      <h1 className="h1 text-gray-900 font-extrabold text-center">
        X‑Corp: <span className="text-brand-500 animate-pulse">Innovate. Build. Launch.</span>
      </h1>
      <span className="block h-1 w-28 mx-auto mt-4 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 rounded-full animate-gradient-x" />
      <p className="mt-8 text-lg text-gray-700 font-medium">
        We design, engineer and launch <span className="font-bold text-brand-500">world-class products</span>.<br />
        Strategy, design systems, full‑stack engineering & more.
      </p>
      {/* Animated CTA buttons */}
      <div className="mt-10 flex items-center justify-center gap-6">
        <Link href="/product" className="btn bg-brand-500 text-black hover:bg-brand-600 animate-pulse hover:scale-105">Explore Products</Link>
        <Link href="/about" className="btn-ghost border border-brand-500 text-brand-500 hover:bg-brand-600/10 hover:text-black">Start a Project</Link>
      </div>
      <div className="mt-12 text-xs text-gray-700 bg-brand-100/70 px-4 py-2 inline-block rounded-full shadow tracking-wide">
        Trusted by founders and teams in India & beyond
      </div>
    </motion.div>
  </div>
</section>
)
}