import Image from "next/image";
import { Logo } from "@/components/Logo";
import Reveal from "@/components/Reveal";
import { FramedPhoto } from "@/components/FramedPhoto";

const IG_LINK = "https://instagram.com/ogbarbersclub";
const IG_DM_LINK = "https://ig.me/m/ogbarbersclub";

const SERVICIOS = [
  {
    nombre: "Fades",
    desc: "Low fade, high fade, burst fade — con la textura bien resuelta, no solo la línea.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M6 4 L6 20 M6 4 C10 4 14 8 14 12 C14 16 10 20 6 20" stroke="#080808" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 8 L18 16" stroke="#080808" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    nombre: "Diseños",
    desc: "Mohicanos y diseños a mano alzada, para el que quiere algo que no ve en cualquier lado.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M12 3 L15 10 L22 11 L17 16 L18 22 L12 19 L6 22 L7 16 L2 11 L9 10 Z" stroke="#080808" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    nombre: "Corte clásico",
    desc: "Estilo italiano, prolijo y atemporal — el corte que nunca pasa de moda.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <circle cx="6" cy="6" r="2.4" stroke="#080808" strokeWidth="1.5" />
        <circle cx="6" cy="18" r="2.4" stroke="#080808" strokeWidth="1.5" />
        <path d="M8 7.3L20 17.2M8 16.7L20 6.8" stroke="#080808" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    nombre: "Barba",
    desc: "Perfilado y arreglo de barba con navaja, a juego con el corte.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M4 6 C4 6 6 4 12 4 C18 4 20 6 20 6 L19 14 C19 18 15 21 12 21 C9 21 5 18 5 14 Z" stroke="#080808" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    nombre: "Color",
    desc: "Decoloración y color, para el que se quiere animar a algo distinto.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M12 3 C8 7 5 11 5 14.5 C5 18.6 8.1 21 12 21 C15.9 21 19 18.6 19 14.5 C19 11 16 7 12 3 Z" stroke="#080808" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8.5 14.5 C8.5 16.7 10 18 12 18" stroke="#080808" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const EQUIPO = [
  { nombre: "Rodrigo", handle: "rodrigo7luna", img: "/fotos/rodrigo.png" },
  { nombre: "Valentín", handle: "valentincarrizo_", img: "/fotos/valentin.png" },
];

export default function Home() {
  return (
    <main>
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-ink-50/90 backdrop-blur-sm border-b hairline">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Logo size={38} />
          <div className="hidden md:flex items-center gap-8 eyebrow">
            <a href="#servicios" className="hover:opacity-60 transition-opacity">Servicios</a>
            <a href="#equipo" className="hover:opacity-60 transition-opacity">Equipo</a>
            <a href="#ubicacion" className="hover:opacity-60 transition-opacity">Ubicación</a>
          </div>
          <a href={IG_DM_LINK} target="_blank" rel="noopener" className="cta-solid !py-3 !px-6 !text-xs">
            Escribinos
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-44 pb-28 overflow-hidden">
        <div className="hero-photo-layer">
          <Image src="/fotos/hero.jpg" alt="" aria-hidden fill priority sizes="100vw" className="hero-photo" />
        </div>
        <div className="hero-veil" />
        <div className="max-w-5xl mx-auto px-6 lg:px-10 relative">
          <Reveal>
            <p className="eyebrow mb-6">Barbería · Martínez, San Isidro</p>
            <div className="hero-title-wrapper">
              <div aria-hidden="true" className="hero-title-outline font-display text-6xl lg:text-8xl leading-[0.9]">
                OG Barber&apos;s<br />Club
              </div>
              <h1 className="hero-title-solid font-display text-6xl lg:text-8xl leading-[0.9]">
                OG Barber&apos;s<br />Club
              </h1>
            </div>
            <span className="rule" />
            <p className="mt-8 text-ink-600 text-lg max-w-xl">
              Fades, diseños y cortes clásicos. Por orden de llegada — pero ahora podés ver la fila antes de salir de tu casa.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-lg tracking-widest">★★★★★</span>
              <span className="text-sm text-ink-500">4.9 en Google</span>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={IG_DM_LINK} target="_blank" rel="noopener" className="cta-solid">
                Escribinos
              </a>
              <a href="#servicios" className="cta-outline">
                Ver servicios
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* SERVICIOS */}
      <section id="servicios" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow mb-4">01 — Servicios</p>
            <h2 className="font-display text-4xl lg:text-6xl max-w-lg">
              Cortes de verdad
            </h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.nombre} delay={i * 80}>
                <div className="card h-full p-7">
                  {s.icon}
                  <p className="font-display text-2xl mt-5">{s.nombre}</p>
                  <p className="mt-3 text-sm text-ink-500 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-400 italic">Consultanos precios por Instagram.</p>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* EQUIPO */}
      <section id="equipo" className="py-28 bg-ink-950 text-ink-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow !text-ink-300 mb-4">02 — Equipo</p>
            <h2 className="font-display text-4xl lg:text-6xl max-w-lg">
              La familia OG
            </h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 gap-16 max-w-3xl mx-auto">
            {EQUIPO.map((m, i) => (
              <Reveal key={m.handle} delay={i * 80} className="text-center">
                <FramedPhoto src={m.img} alt={m.nombre} aspect="aspect-[4/5]" className="!border-ink-50/15" />
                <p className="font-display text-2xl mt-5">{m.nombre}</p>
                <a
                  href={`https://instagram.com/${m.handle}`}
                  target="_blank"
                  rel="noopener"
                  className="text-sm text-ink-300 hover:text-ink-50 transition-colors"
                >
                  @{m.handle}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* RESEÑAS */}
      <section className="py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <p className="eyebrow mb-6">03 — Reseñas</p>
            <span className="text-3xl tracking-widest">★★★★★</span>
            <h2 className="font-display text-4xl lg:text-5xl mt-4">4.9 en Google</h2>
            <p className="mt-6 text-ink-500 max-w-md mx-auto">
              Clientes reales destacan la atención, el ambiente y el trato del equipo.
            </p>
            <a
              href="https://www.google.com/maps/place/?q=place_id:ChIJKyqdM1CxvJURFYXXxiFVJ70"
              target="_blank"
              rel="noopener"
              className="cta-link inline-block mt-8"
            >
              Ver reseñas en Google Maps →
            </a>
          </Reveal>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* UBICACIÓN */}
      <section id="ubicacion" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-4">04 — Ubicación</p>
            <h2 className="font-display text-4xl lg:text-6xl leading-tight">
              Martínez
            </h2>
            <span className="rule" />
            <ul className="mt-10 space-y-6">
              <li className="pb-5 border-b hairline">
                <p className="text-ink-950">Juncal 6</p>
                <p className="text-sm text-ink-500 mt-1">Martínez, Buenos Aires</p>
              </li>
              <li className="pb-5 border-b hairline">
                <p className="text-ink-950">Martes a sábado, 10 a 20 hs</p>
                <p className="text-sm text-ink-500 mt-1">Lunes y domingo cerrado · por orden de llegada</p>
              </li>
            </ul>
            <div className="mt-10 flex gap-6">
              <a href={IG_DM_LINK} target="_blank" rel="noopener" className="cta-link">Instagram DM</a>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={200}>
            <div className="aspect-[5/4] overflow-hidden border hairline">
              <iframe
                src="https://www.google.com/maps?q=Juncal+6+Martinez+Buenos+Aires&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CIERRE */}
      <section className="py-32 bg-ink-950 text-ink-50 relative overflow-hidden">
        <Reveal className="relative max-w-2xl mx-auto px-6 text-center">
          <p className="eyebrow !text-ink-300 mb-6">05 — Sumate</p>
          <h2 className="font-display text-5xl lg:text-7xl leading-tight">
            Bienvenido a<br />la familia
          </h2>
          <div className="flex justify-center mt-8"><span className="rule !bg-ink-50" /></div>
          <p className="mt-10 text-ink-300 max-w-md mx-auto text-lg">
            Por orden de llegada, como siempre. Escribinos por Instagram.
          </p>
          <a href={IG_DM_LINK} target="_blank" rel="noopener" className="cta-solid mt-12 !bg-ink-50 !text-ink-950 !px-12 !py-5">
            Escribinos por Instagram
          </a>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t hairline pt-20 pb-10 bg-ink-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-12">
          <div>
            <Logo size={40} />
            <p className="mt-6 text-ink-500 leading-relaxed">
              Barbería en Martínez, San Isidro.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-5">Contacto</p>
            <a href={IG_LINK} target="_blank" rel="noopener" className="block text-ink-500 hover:text-ink-950 transition-colors">Instagram</a>
            <a href={IG_DM_LINK} target="_blank" rel="noopener" className="block text-ink-500 hover:text-ink-950 transition-colors mt-1">Enviar mensaje</a>
          </div>
          <div>
            <p className="eyebrow mb-5">Ubicación</p>
            <p className="text-ink-950">Juncal 6</p>
            <p className="text-ink-500">Martínez, Buenos Aires</p>
          </div>
        </div>
        <div className="mt-16 pt-10 border-t hairline">
          <p className="text-center text-[11px] text-ink-400 max-w-2xl mx-auto leading-relaxed px-6">
            Este sitio es un proyecto de demostración técnica desarrollado de forma independiente.
            No es el sitio oficial de OG Barber&apos;s Club ni mantiene relación comercial con el establecimiento.
          </p>
          <p className="text-center text-[10px] mt-5 eyebrow">
            Demo desarrollada por Joaquin Rao · 2026
          </p>
        </div>
      </footer>
    </main>
  );
}
