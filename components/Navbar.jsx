import Link from 'next/link'
import Image from 'next/image'


export default function Navbar(){
return (
<header className="sticky top-0 z-50 border-b border-brand-500/40 bg-base-900/70 shadow-2xl backdrop-blur-md">
<nav className="container mx-auto px-4 py-3 flex items-center justify-between">
<Link href="/" className="flex items-center gap-3">
<Image src="/logo.svg" alt="X-Corp" width={34} height={34} priority />
<span className="text-lg sm:text-xl font-semibold tracking-tight">X-Corp</span>
</Link>
<div className="flex items-center gap-2">
<Link href="/" className="btn-ghost">Home</Link>
<Link href="/products" className="btn-ghost">Products</Link>
<Link href="/about" className="btn">About & Contact</Link>
</div>
</nav>
</header>
)
}