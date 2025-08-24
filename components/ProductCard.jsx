export default function ProductCard({ name, desc, price }){
return (
<div className="card hover:shadow-glow transition">
<h3 className="text-lg font-semibold">{name}</h3>
<p className="mt-2 muted">{desc}</p>
<div className="mt-4 flex items-center justify-between">
<span className="font-semibold text-brand-500">{price}</span>
<button className="btn" type="button">Learn more</button>
</div>
</div>
)
}