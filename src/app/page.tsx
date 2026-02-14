import Link from "next/link";
import { ArrowRight, MapPin, Store, Wrench, Briefcase, Globe } from "lucide-react";

const categories = [
  { name: "Comida", emoji: "🍽️", icon: Store, href: "/explorar?category=comida", color: "bg-orange-100 hover:bg-orange-200" },
  { name: "Tiendas", emoji: "🏪", icon: Store, href: "/explorar?category=tienda", color: "bg-blue-100 hover:bg-blue-200" },
  { name: "Servicios", emoji: "🔧", icon: Wrench, href: "/explorar?category=servicios", color: "bg-purple-100 hover:bg-purple-200" },
  { name: "Chambas", emoji: "💼", icon: Briefcase, href: "/chambas", color: "bg-green-100 hover:bg-green-200" },
  { name: "En Línea", emoji: "🌐", icon: Globe, href: "/explorar?type=online", color: "bg-teal-100 hover:bg-teal-200" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="px-4 py-16 text-center md:py-24">
        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
          Tu negocio en el mapa.{" "}
          <span className="text-pulp-orange">Gratis.</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
          La plataforma del comercio hondureño. Conectá con clientes por WhatsApp, sin comisiones.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/registrar"
            className="inline-flex h-14 items-center gap-2 rounded-xl bg-pulp-orange px-8 text-lg font-semibold text-white transition-colors hover:bg-pulp-orange/90"
          >
            Registrá tu negocio gratis
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/explorar"
            className="inline-flex h-14 items-center gap-2 rounded-xl border-2 border-pulp-green px-8 text-lg font-semibold text-pulp-green transition-colors hover:bg-pulp-green/10"
          >
            <MapPin className="h-5 w-5" />
            Explorar negocios
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 md:text-3xl">
            ¿Qué estás buscando?
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className={`flex flex-col items-center gap-3 rounded-2xl p-6 transition-colors ${cat.color}`}
              >
                <span className="text-4xl">{cat.emoji}</span>
                <span className="text-base font-semibold text-gray-800">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map Preview */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 md:text-3xl">
            Negocios cerca de vos
          </h2>
          <div className="flex h-64 items-center justify-center rounded-2xl bg-gray-200 md:h-96">
            <div className="text-center">
              <MapPin className="mx-auto mb-2 h-12 w-12 text-gray-400" />
              <p className="text-lg text-gray-500">Mapa carga aquí</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pulp-green px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            ¿Tenés un negocio?
          </h2>
          <p className="mb-8 text-lg text-green-100">
            Unite a cientos de negocios hondureños que ya están en el mapa. Es gratis y sin comisiones.
          </p>
          <Link
            href="/registrar"
            className="inline-flex h-14 items-center gap-2 rounded-xl bg-white px-8 text-lg font-semibold text-pulp-green transition-colors hover:bg-gray-100"
          >
            Registrá tu negocio gratis
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
