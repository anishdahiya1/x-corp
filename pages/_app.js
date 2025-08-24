import '@/styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export default function MyApp({ Component, pageProps }){
useEffect(()=>{ document.documentElement.classList.add('dark') }, [])
return (
<>
<Head>
<title>X-Corp — Your Vision, We Make It True</title>
<meta name="description" content="X-Corp turns bold ideas into beautiful products. Your vision, we make it true." />
<meta property="og:title" content="X-Corp" />
<meta property="og:description" content="Your Vision, We Make It True." />
<meta property="og:image" content="/og-image.png" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#050508" />
</Head>
<div>
  {/* Animated site-wide BG */}
  <div className="fixed inset-0 -z-20 overflow-hidden">
    {/* Brand color gradient swirl */}
    <div className="absolute top-[-15%] left-[-15%] w-[120vw] h-[90vh] animate-spin-slow" style={{filter: 'blur(100px)'}}>
      <div className="w-full h-full rounded-full bg-gradient-to-tr from-brand-400 via-fuchsia-400 to-brand-600 opacity-25" />
    </div>
    {/* Blue orb */}
    <div className="absolute bottom-[-10%] right-[-20%] w-[60vw] h-[50vh] animate-pulse" style={{filter: 'blur(56px)'}}>
      <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-sky-400 opacity-20" />
    </div>
    {/* Geometric SVG grid */}
    <svg className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid2" width="44" height="44" patternUnits="userSpaceOnUse">
          <path d="M 44 0 L 0 0 0 44" fill="none" stroke="#fff" strokeWidth="1.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid2)" />
    </svg>
  </div>
  <Navbar />
  <main>
    <Component {...pageProps} />
  </main>
  <Footer />
</div>
</>
)
}