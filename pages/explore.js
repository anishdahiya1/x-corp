import Head from 'next/head';
import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, scale: 0.98, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.1, type: 'spring', duration: 1 } }
};

export default function Explore() {
  return (
    <section className="section bg-gradient-live text-white min-h-screen relative overflow-hidden">
      {/* Animated Impactful Background */}
      <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none">
        {/* Multicolor swirling morph blob */}
        <motion.div 
          initial={{ scale: 0.7, rotate: 0 }} 
          animate={{ scale: 1.2, rotate: 360 }} 
          transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
          className="absolute top-0 left-0 w-full h-full opacity-90" 
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

      <Head>
        <title>Explore More | X-Connect</title>
        <meta name="description" content="Discover more about X-Connect and its features." />
      </Head>

      <div className="container mx-auto py-16 px-6 relative z-10">
        {/* Hero Section */}
        <motion.div variants={heroVariants} initial="hidden" animate="visible" className="z-10 text-center mx-auto" style={{textShadow:'0 2px 38px #38e8ff60, 0 4px 64px #e0f2fe99'}}>
          <div className="flex flex-col items-center mb-4">
            <span className="inline-block animate-bounce-slow rounded-full border-4 border-fuchsia-300/80 bg-fuchsia-400/80 p-2 shadow-lg mb-4">
              <svg width="36" height="36" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="currentColor"/></svg>
            </span>
            <h1 className="text-5xl sm:text-[4.2rem] font-extrabold leading-tight tracking-tight mb-2 drop-shadow-[0_6px_30px_rgba(0,0,0,0.60)]">
              <span className="block text-white">Explore More.</span>
              <span className="block text-white">Discover Effortlessly.</span>
              <span className="block relative">
                <span className="relative z-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Connect with X‑Connect.</span>
                <motion.div initial={{width:0}} animate={{width:'95%'}} transition={{duration:1.2, delay:0.5}} style={{height:'6px'}}
                  className="absolute left-[2%] bottom-[-6px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 opacity-70" />
              </span>
            </h1>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="mt-12 space-y-8">
          <motion.p 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed text-gray-300 font-light"
          >
            X-Connect is designed to empower businesses and individuals by providing seamless access to contact information and emails for any domain or company. Whether you're looking to expand your network, reach out to potential clients, or connect with industry leaders, X-Connect is your ultimate solution.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed text-gray-300 font-light"
          >
            Our platform leverages cutting-edge technology to ensure accuracy and efficiency, making it easier than ever to find the information you need. With X-Connect, you can save time, streamline your outreach efforts, and focus on building meaningful connections.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed text-gray-300 font-light"
          >
            Stay tuned for exciting updates and new features that will further enhance your networking experience. At X-Connect, we're committed to helping you achieve your goals and unlock new opportunities.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
