import Head from 'next/head';
import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, scale: 0.98, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.1, type: 'spring', duration: 1 } }
};

export default function Explore() {
  return (
    <section className="section bg-white text-black min-h-screen relative overflow-hidden">
      <Head>
        <title>Explore More | X-Connect</title>
        <meta name="description" content="Discover more about X-Connect and its features." />
      </Head>
      <div className="container mx-auto py-16 px-6 relative z-10">
        {/* Hero Section */}
        <motion.div variants={heroVariants} initial="hidden" animate="visible" className="z-10 text-center mx-auto" style={{textShadow:'0 2px 38px #1e293b20, 0 4px 64px #e0e7ef99'}}>
          <div className="flex flex-col items-center mb-4">
            <span className="inline-block animate-bounce-slow rounded-full border-4 border-blue-300/80 bg-blue-400/80 p-2 shadow-lg mb-4">
              <svg width="36" height="36" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="currentColor"/></svg>
            </span>
            <h1 className="text-5xl sm:text-[4.2rem] font-extrabold leading-tight tracking-tight mb-2 text-blue-900 drop-shadow-lg">
              <span className="block">Explore More.</span>
              <span className="block">Discover Effortlessly.</span>
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
