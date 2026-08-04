import { Logo } from "@/components/Logo";
import Reveal from "@/components/Reveal";
import { FramedPhoto } from "@/components/FramedPhoto";

const IG_LINK = "https://instagram.com/ogbarbersclub";
const IG_DM_LINK = "https://ig.me/m/ogbarbersclub";
const MAPS_LINK = "https://www.google.com/maps/place/?q=place_id:ChIJKyqdM1CxvJURFYXXxiFVJ70";

const SERVICIOS = [
  {
    nombre: "Diseños",
    desc: "Mohicanos y diseños a mano alzada, para el que quiere algo que no ve en cualquier lado.",
    img: "/fotos/servicio-disenos.png",
  },
  {
    nombre: "Fades",
    desc: "Low fade, high fade, burst fade — con la textura bien resuelta, no solo la línea.",
    img: "/fotos/servicio-fades.png",
  },
  {
    nombre: "Corte clásico",
    desc: "Estilo italiano, prolijo y atemporal — el corte que nunca pasa de moda.",
    img: "/fotos/servicio-clasico.png",
  },
  {
    nombre: "Color",
    desc: "Decoloración y color, para el que se quiere animar a algo distinto.",
    img: "/fotos/servicio-color.png",
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
        <div className="hero-pattern" />
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
              Fades, diseños y cortes clásicos en Martínez. Por orden de llegada: venís, esperás tu momento y salís como querías.
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
                <div className="card h-full overflow-hidden">
                  <FramedPhoto src={s.img} alt={s.nombre} aspect="aspect-[4/5]" className="!border-0 !border-b" />
                  <div className="p-6">
                    <p className="font-display text-2xl">{s.nombre}</p>
                    <p className="mt-3 text-sm text-ink-500 leading-relaxed">{s.desc}</p>
                  </div>
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
            <div className="mt-10 flex flex-wrap gap-6">
              <a href={IG_DM_LINK} target="_blank" rel="noopener" className="cta-link">Instagram DM</a>
              <a href={MAPS_LINK} target="_blank" rel="noopener" className="cta-link">Cómo llegar →</a>
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
            Demo desarrollada por{" "}
            <a
              href="https://joaquinrao-web.vercel.app"
              target="_blank"
              rel="noopener"
              className="underline underline-offset-4 hover:text-ink-950 transition-colors"
            >
              Joaquin Rao
            </a>{" "}
            · 2026
          </p>
        </div>
      </footer>
    </main>
  );
}
