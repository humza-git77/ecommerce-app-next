export default function ProductsSection({ title, items }) {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((p) => (
          <div key={p.id} className="border p-4 rounded shadow hover:shadow-lg">
            <img src={p.image} alt={p.name} className="w-full h-32 object-cover" />
            <h3 className="mt-2 text-lg">{p.name}</h3>
            <p className="text-gray-700">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}