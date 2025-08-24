export default function Footer(){
return (
<footer className="mt-20 border-t border-white/10 bg-base-800/60 backdrop-blur">
<div className="section py-10">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
  <p className="text-sm text-gray-400">© {new Date().getFullYear()} X-Corp. All rights reserved.</p>
  <div className="text-sm text-gray-400">Your Vision, We Make It True.</div>
</div>
<div className="mt-6 flex flex-wrap gap-6 text-sm text-brand-400 justify-center">
  <span className="font-semibold text-white/80 mr-2">Mail:</span>
  <a href="mailto:anishdahiya44@gmail.com" className="hover:underline">anishdahiya44@gmail.com</a>
  <span className="opacity-60">|</span>
  <a href="mailto:choudharynipun69@gmail.com" className="hover:underline">choudharynipun69@gmail.com</a>
</div>
</div>
</footer>
)
}