import MentionsLegalesModal from "./components/MentionsLegalesModal";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* ── NAVIGATION ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#1E3A5F] tracking-tight">
              Novae<span className="text-[#2D6A9F]">Mobility</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <a href="#solutions" className="hover:text-[#1E3A5F] transition-colors">Nos solutions</a>
            <a href="#clients" className="hover:text-[#1E3A5F] transition-colors">Clients</a>
            <a href="#pourquoi" className="hover:text-[#1E3A5F] transition-colors">Pourquoi nous</a>
            <a href="#contact" className="hover:text-[#1E3A5F] transition-colors">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-[#1E3A5F] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#162C48] transition-colors"
          >
            Demander un rdv
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-[#F7F8FA] to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E8F0FE] text-[#1E3A5F] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-[#2D6A9F] rounded-full"></span>
              Pensé pour les pros · Développé en France
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A2E] leading-tight mb-6">
              Des solutions digitales pour les{" "}
              <span className="text-[#1E3A5F]">professionnels de l'automobile</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
              Novae Mobility conçoit et développe des solutions innovantes pour
              accompagner les acteurs de l'automobile dans la gestion, la
              conformité et l'optimisation de leurs activités.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#162C48] transition-colors shadow-md shadow-[#1E3A5F]/20"
              >
                Demander un rdv
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-[#1E3A5F] font-semibold px-6 py-3 rounded-xl border border-[#E2E8F0] hover:border-[#1E3A5F]/30 hover:bg-[#F7F8FA] transition-colors"
              >
                Nous contacter
              </a>
            </div>
          </div>

          {/* Visual side */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F] to-[#2D6A9F] rounded-3xl opacity-10"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-[#1E3A5F] to-[#2D6A9F] rounded-2xl opacity-8"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
                <div className="text-7xl">🚗</div>
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-[#1E3A5F]">Novae</div>
                  <div className="text-2xl font-extrabold text-[#2D6A9F]">Mobility</div>
                </div>
                <div className="flex items-center gap-2 bg-white border border-[#E2E8F0] rounded-full px-4 py-1.5 shadow-sm">
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stat bar */}
        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "100%", label: "Made in France" },
            { value: "B2B", label: "Dédié aux professionnels" },
            { value: "API", label: "Intégration facile" },
            { value: "RGPD", label: "Données sécurisées" },
          ].map((stat) => (
            <div
              key={stat.value}
              className="bg-white border border-[#E2E8F0] rounded-xl px-6 py-5 text-center shadow-sm"
            >
              <div className="text-2xl font-extrabold text-[#1E3A5F] mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── NOS SOLUTIONS ── */}
      <section id="solutions" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#E8F0FE] text-[#1E3A5F] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
              Nos solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] mb-4">
              Outils dédiés aux professionnels de l'automobile
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Conçus pour répondre aux enjeux du terrain, nos outils s'intègrent
              facilement dans vos environnements existants.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🗂️",
                title: "Démarches administratives",
                desc: "Gestion et sécurisation des démarches administratives liées aux véhicules et aux transactions. Réduisez les erreurs et accélérez vos processus.",
              },
              {
                icon: "🔍",
                title: "Données véhicules",
                desc: "Vérification et traitement fiable des données véhicules. Accédez à des informations précises pour chaque dossier.",
              },
              {
                icon: "⚙️",
                title: "Optimisation des processus",
                desc: "Rationalisez vos flux métier de bout en bout. Automatisez les tâches répétitives et concentrez-vous sur la valeur ajoutée.",
              },
              {
                icon: "✅",
                title: "Conformité réglementaire",
                desc: "Gain de temps, fiabilité et conformité réglementaire garantis. Restez à jour avec les exigences légales françaises et européennes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-[#F7F8FA] border border-[#E2E8F0] rounded-2xl p-7 hover:border-[#1E3A5F]/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 bg-white border border-[#E2E8F0] rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:border-[#1E3A5F]/20 transition-colors shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── À QUI S'ADRESSENT NOS SOLUTIONS ── */}
      <section id="clients" className="py-24 px-6 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#E8F0FE] text-[#1E3A5F] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
              Nos clients
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] mb-4">
              À qui s'adressent nos solutions ?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Une offre pensée pour tous les acteurs de l'écosystème automobile professionnel.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: "🏢", label: "Concessionnaires automobiles" },
              { icon: "🔧", label: "Garages & agents indépendants" },
              { icon: "🌍", label: "Import / Export automobile" },
              { icon: "🏎️", label: "Sociétés de services automobiles" },
              { icon: "💻", label: "Éditeurs de logiciels & plateformes" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:shadow-md hover:border-[#1E3A5F]/20 transition-all duration-200"
              >
                <div className="text-3xl">{item.icon}</div>
                <p className="text-sm font-semibold text-[#1A1A2E] leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI NOVAE MOBILITY ── */}
      <section id="pourquoi" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block bg-[#E8F0FE] text-[#1E3A5F] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
              Pourquoi nous
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] mb-6">
              Pourquoi Novae Mobility ?
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Nous combinons l'expertise métier automobile avec une approche
              technologique rigoureuse pour vous offrir des solutions fiables,
              conformes et performantes.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#162C48] transition-colors"
            >
              En savoir plus
            </a>
          </div>

          <div className="grid gap-4">
            {[
              { icon: "🧠", title: "Expertise métier automobile", desc: "Une connaissance approfondie des besoins terrain des professionnels." },
              { icon: "🔐", title: "Sécurité & conformité des données", desc: "RGPD, hébergement sécurisé et traçabilité des données garantis." },
              { icon: "⚡", title: "Simple, rapide et efficace", desc: "Des interfaces pensées pour gagner du temps, pas en perdre." },
              { icon: "🤝", title: "Accompagnement professionnel", desc: "Un support dédié et une équipe à l'écoute de vos enjeux métier." },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-[#F7F8FA] border border-[#E2E8F0] rounded-xl p-5"
              >
                <div className="text-2xl mt-0.5 flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="font-bold text-[#1A1A2E] text-sm mb-0.5">{item.title}</div>
                  <div className="text-gray-400 text-sm leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION ── */}
      <section className="py-20 px-6 bg-[#1E3A5F]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/10 text-white/70 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
            Notre vision
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
            Un écosystème automobile plus fluide et plus efficace
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Faciliter le quotidien des professionnels de l'automobile grâce à des
            solutions fiables, modernes et orientées performance, au service d'un
            écosystème automobile plus fluide et plus efficace.
          </p>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-6 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <div>
            <span className="inline-block bg-[#E8F0FE] text-[#1E3A5F] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] mb-4">
              Parlons de votre projet
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Vous êtes un professionnel de l'automobile et souhaitez en savoir
              plus sur nos solutions ? Contactez-nous dès maintenant pour une
              demande d'information ou de démonstration.
            </p>
            <div className="flex flex-col gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#E8F0FE] rounded-lg flex items-center justify-center text-base">📧</div>
                <span>Réponse sous 24h ouvrées</span>
              </div>
          
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#E8F0FE] rounded-lg flex items-center justify-center text-base">🎯</div>
                <span>Démonstration personnalisée disponible</span>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1A1A2E] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-lg tracking-tight">
              Novae<span className="text-[#2D6A9F]">Mobility</span>
            </span>
            <span className="text-white/20">·</span>
            <MentionsLegalesModal />
          </div>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="#solutions" className="hover:text-white/70 transition-colors">Solutions</a>
            <a href="#contact" className="hover:text-white/70 transition-colors">Contact</a>
            <span>© {new Date().getFullYear()} Novae Mobility</span>
            <span className="flex items-center gap-1">🇫🇷 France</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
