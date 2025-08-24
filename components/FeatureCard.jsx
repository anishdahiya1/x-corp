import { motion } from 'framer-motion'

export default function FeatureCard({ title, desc }){
return (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="rounded-2xl border border-brand-600 shadow-xl bg-base-800/95 p-6 hover:shadow-glow hover:border-brand-400 transition-all min-h-[170px] flex flex-col justify-center text-left"
  >
    <h3 className="text-lg font-bold text-brand-400 drop-shadow">{title}</h3>
    <p className="mt-2 text-gray-100 leading-relaxed">{desc}</p>
  </motion.div>
)
}