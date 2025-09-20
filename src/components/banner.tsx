// components/Banner.tsx
export default function Banner({ title, subtitle, image }) {
  return (
    <section
      className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-lg md:text-xl">{subtitle}</p>
      </div>
    </section>
  );
}
