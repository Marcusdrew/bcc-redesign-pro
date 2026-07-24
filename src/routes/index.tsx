import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.png.asset.json";
import bccKinAsset from "@/assets/bcc_kin_0.jpg.asset.json";
import wamesoAsset from "@/assets/wameso.jpg.asset.json";
import francAsset from "@/assets/montage_franc_congolais_calendrier_1.png.asset.json";
import tarifsAsset from "@/assets/tarifsetcondition.png.asset.json";
import { ArrowUpRight, ArrowDown, ArrowUp, Search, Menu, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Banque Centrale du Congo — Institution monétaire de la RDC" },
      { name: "description", content: "Cours de change, taux directeurs, politique monétaire et publications officielles de la Banque Centrale du Congo." },
      { property: "og:title", content: "Banque Centrale du Congo" },
      { property: "og:description", content: "Institution monétaire de la République Démocratique du Congo." },
      { property: "og:image", content: bccKinAsset.url },
      { name: "twitter:image", content: bccKinAsset.url },
    ],
  }),
  component: Home,
});

const nav = [
  { label: "La Banque", href: "#banque" },
  { label: "Opérations & Marchés", href: "#operations" },
  { label: "Hôtel des Monnaies", href: "#monnaies" },
  { label: "Intermédiaires Financiers", href: "#intermediaires" },
  { label: "Statistiques", href: "#stats" },
  { label: "Publications", href: "#publications" },
];

const rates = [
  { code: "USD", name: "Dollar US", value: "2 253,8500", delta: -0.02 },
  { code: "EUR", name: "Euro", value: "2 572,3611", delta: 0.14 },
  { code: "GBP", name: "Livre Sterling", value: "3 014,7041", delta: 0.21 },
  { code: "CHF", name: "Franc Suisse", value: "2 770,6343", delta: 0.18 },
  { code: "CAD", name: "Dollar Canadien", value: "1 600,1044", delta: -0.05 },
  { code: "ZAR", name: "Rand Sud-Africain", value: "137,2043", delta: -0.11 },
  { code: "JPY", name: "Yen Japonais", value: "13,8201", delta: -0.03 },
  { code: "CNY", name: "Yuan Chinois", value: "332,9114", delta: -0.07 },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Header />
      <Hero />
      <Ticker />
      <KeyIndicators />
      <Publications />
      <Governor />
      <Mission />
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <div className="hidden md:block border-b hairline bg-surface">
      <div className="container-x flex h-9 items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-6">
          <span>République Démocratique du Congo</span>
          <span className="hairline border-l h-3" />
          <span>Kinshasa · {new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-foreground transition-colors">FR</a>
          <span className="opacity-40">EN</span>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          <a href="#" className="hover:text-foreground transition-colors">Carrières</a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b hairline">
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-3 shrink-0">
          <img src={logoAsset.url} alt="Banque Centrale du Congo" className="h-11 w-auto" />
          <div className="hidden sm:block leading-tight">
            <div className="serif text-lg font-semibold text-ink">Banque Centrale du Congo</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Institution monétaire · RDC</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-ink-soft">
          {nav.map((n) => (
            <a key={n.label} href={n.href} className="relative py-1 hover:text-ink transition-colors after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-ink after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button aria-label="Recherche" className="grid place-items-center h-10 w-10 rounded-full hover:bg-muted transition-colors">
            <Search className="h-4 w-4" />
          </button>
          <button aria-label="Menu" className="lg:hidden grid place-items-center h-10 w-10 rounded-full hover:bg-muted transition-colors">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16 py-16 lg:py-24 items-center">
        <div className="lg:col-span-6 fade-up">
          <div className="eyebrow mb-6">— Rapport 2024 · Politique monétaire</div>
          <h1 className="serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-ink leading-[1.02]">
            Stabilité,<br />
            <span className="italic text-ink-soft">crédibilité,</span><br />
            confiance.
          </h1>
          <p className="mt-8 max-w-lg text-base md:text-lg text-ink-soft leading-relaxed">
            La Banque Centrale du Congo veille à la stabilité du Franc congolais,
            à la solidité du système financier et à la conduite d'une politique
            monétaire au service de l'économie nationale.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#publications" className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-ink transition-colors">
              Lire le rapport 2024
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#stats" className="inline-flex items-center gap-2 h-12 px-6 rounded-full border hairline text-sm font-medium text-ink hover:bg-muted transition-colors">
              Consulter les statistiques
            </a>
          </div>
          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            <Stat label="Taux directeur" value="13,50%" />
            <Stat label="Inflation annuelle" value="10,13%" />
            <Stat label="1 USD" value="2 253 CDF" />
          </dl>
        </div>
        <div className="lg:col-span-6 relative fade-up" style={{ animationDelay: "120ms" }}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img src={bccKinAsset.url} alt="Siège de la Banque Centrale du Congo, Kinshasa" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/25 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-primary-foreground">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] opacity-80">Siège</div>
                <div className="serif text-2xl font-medium">Boulevard Colonel Tshatshi, Kinshasa</div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block bg-background border hairline p-5 w-64 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
            <div className="eyebrow mb-2">Fondée en</div>
            <div className="serif text-4xl font-medium text-ink">1964</div>
            <p className="mt-2 text-xs text-muted-foreground">Autorité monétaire de la République Démocratique du Congo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</dt>
      <dd className="serif text-2xl md:text-3xl mt-1 text-ink">{value}</dd>
    </div>
  );
}

function Ticker() {
  const list = [...rates, ...rates];
  return (
    <section className="border-y hairline bg-surface overflow-hidden">
      <div className="container-x flex items-center gap-6 py-4">
        <div className="shrink-0 eyebrow">Cours indicatif · 19:19</div>
        <div className="flex-1 overflow-hidden relative">
          <div className="flex gap-10 marquee-track w-max">
            {list.map((r, i) => (
              <div key={i} className="flex items-center gap-3 text-sm whitespace-nowrap">
                <span className="font-semibold text-ink">{r.code}</span>
                <span className="text-ink-soft">{r.value} CDF</span>
                <span className={`inline-flex items-center gap-0.5 text-xs ${r.delta >= 0 ? "text-positive" : "text-negative"}`}>
                  {r.delta >= 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                  {Math.abs(r.delta).toFixed(2)}%
                </span>
                <span className="hairline h-3 border-l" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function KeyIndicators() {
  return (
    <section id="stats" className="py-24 border-b hairline">
      <div className="container-x">
        <div className="flex items-end justify-between gap-6 mb-14">
          <div>
            <div className="eyebrow mb-4">— Indicateurs clés</div>
            <h2 className="serif text-4xl md:text-5xl text-ink max-w-2xl leading-[1.05]">
              Une lecture claire de l'économie congolaise.
            </h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-1 text-sm text-ink hover:gap-2 transition-all">
            Tous les indicateurs <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-hairline border hairline">
          <IndicatorCard title="Cours de change" date="24 juillet 2026" rows={rates.slice(0, 5)} />
          <InflationCard />
          <RatesCard />
        </div>
      </div>
    </section>
  );
}

function IndicatorCard({ title, date, rows }: { title: string; date: string; rows: typeof rates }) {
  return (
    <div className="bg-background p-8">
      <div className="flex items-baseline justify-between mb-6">
        <h3 className="serif text-xl text-ink">{title}</h3>
        <span className="text-xs text-muted-foreground">{date}</span>
      </div>
      <ul className="divide-y hairline">
        {rows.map((r) => (
          <li key={r.code} className="flex items-center justify-between py-3 text-sm">
            <div>
              <div className="font-semibold text-ink tracking-wide">{r.code}</div>
              <div className="text-xs text-muted-foreground">{r.name}</div>
            </div>
            <div className="text-right">
              <div className="tabular-nums text-ink">{r.value}</div>
              <div className={`text-xs tabular-nums ${r.delta >= 0 ? "text-positive" : "text-negative"}`}>
                {r.delta >= 0 ? "+" : ""}{r.delta.toFixed(2)}%
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InflationCard() {
  const rows = [
    { label: "Hebdomadaire", value: "0,180" },
    { label: "Hebdo cumulé", value: "0,562" },
    { label: "Cumulé de l'année", value: "5,419" },
    { label: "Glissement annuel", value: "3,025" },
    { label: "Annualisé", value: "10,125" },
  ];
  return (
    <div className="bg-background p-8">
      <div className="flex items-baseline justify-between mb-6">
        <h3 className="serif text-xl text-ink">Taux d'inflation</h3>
        <span className="text-xs text-muted-foreground">18/07/2026</span>
      </div>
      <ul className="divide-y hairline">
        {rows.map((r) => (
          <li key={r.label} className="flex items-center justify-between py-3 text-sm">
            <span className="text-ink-soft">{r.label}</span>
            <span className="tabular-nums text-ink font-medium">{r.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RatesCard() {
  const rows = [
    { label: "Taux directeur", value: "13,50%", trend: "down" },
    { label: "Prêt marginal", value: "17,50%", trend: "down" },
    { label: "Interbancaire", value: "14,00%", trend: "down" },
    { label: "Bons BCC · 7 j", value: "11,79%", trend: "flat" },
    { label: "Bons BCC · 28 j", value: "13,00%", trend: "flat" },
  ];
  return (
    <div className="bg-background p-8">
      <div className="flex items-baseline justify-between mb-6">
        <h3 className="serif text-xl text-ink">Taux d'intérêt</h3>
        <span className="text-xs text-muted-foreground">15/07/2026</span>
      </div>
      <ul className="divide-y hairline">
        {rows.map((r) => (
          <li key={r.label} className="flex items-center justify-between py-3 text-sm">
            <span className="text-ink-soft">{r.label}</span>
            <span className="tabular-nums text-ink font-medium inline-flex items-center gap-1.5">
              {r.value}
              {r.trend === "down" && <ArrowDown className="h-3 w-3 text-negative" />}
              {r.trend === "flat" && <span className="h-px w-3 bg-muted-foreground" />}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Publications() {
  const items = [
    {
      tag: "Rapport",
      title: "Rapport sur la politique monétaire en 2024",
      desc: "Analyse annuelle des conditions monétaires, budgétaires et financières de la RDC.",
      img: francAsset.url,
      date: "Publication officielle",
    },
    {
      tag: "Réglementation",
      title: "Règlement n°001/25 modifiant la réglementation du change",
      desc: "Modification n°2 de la réglementation du change en République Démocratique du Congo.",
      img: bccKinAsset.url,
      date: "2025",
    },
    {
      tag: "Tarification",
      title: "Tarifs et conditions des opérations",
      desc: "Édition 2024 des tarifs applicables aux opérations bancaires et financières.",
      img: tarifsAsset.url,
      date: "Édition 2024",
    },
  ];
  return (
    <section id="publications" className="py-24 border-b hairline bg-surface">
      <div className="container-x">
        <div className="flex items-end justify-between gap-6 mb-14">
          <div>
            <div className="eyebrow mb-4">— Actualité & Publications</div>
            <h2 className="serif text-4xl md:text-5xl text-ink max-w-2xl leading-[1.05]">
              Les décisions et rapports les plus récents.
            </h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-1 text-sm text-ink hover:gap-2 transition-all">
            Toutes les publications <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((it) => (
            <article key={it.title} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden bg-muted mb-5">
                <img src={it.img} alt={it.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-3">
                <span className="text-ink font-semibold">{it.tag}</span>
                <span className="h-3 w-px bg-hairline" />
                <span>{it.date}</span>
              </div>
              <h3 className="serif text-xl text-ink leading-snug group-hover:underline underline-offset-4 decoration-1">
                {it.title}
              </h3>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">{it.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs text-ink font-medium">
                Lire <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Governor() {
  return (
    <section id="banque" className="py-24 border-b hairline">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            <img src={wamesoAsset.url} alt="André Wameso Nkualoloki, Gouverneur de la Banque Centrale du Congo" className="h-full w-full object-cover object-top" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="eyebrow mb-6">— Le Gouverneur</div>
          <h2 className="serif text-4xl md:text-5xl text-ink leading-[1.05]">
            André Wameso Nkualoloki
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
            Gouverneur de la Banque Centrale du Congo
          </p>
          <blockquote className="mt-10 serif text-2xl md:text-3xl text-ink-soft leading-snug italic border-l-2 border-gold pl-6">
            « Notre mission fondamentale est de préserver la stabilité des prix
            et de contribuer à la solidité d'un système financier au service du
            développement de notre pays. »
          </blockquote>
          <div className="mt-10 grid grid-cols-2 gap-8 max-w-xl">
            <div>
              <div className="eyebrow mb-2">Nomination</div>
              <div className="serif text-xl text-ink">Ordonnance présidentielle</div>
            </div>
            <div>
              <div className="eyebrow mb-2">Mandat</div>
              <div className="serif text-xl text-ink">Autorité monétaire</div>
            </div>
          </div>
          <a href="#" className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-ink hover:gap-3 transition-all">
            Lire le profil complet <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  const items = [
    { n: "01", t: "Politique monétaire", d: "Définir et mettre en œuvre la politique monétaire pour préserver la stabilité des prix." },
    { n: "02", t: "Émission fiduciaire", d: "Émettre le Franc congolais et gérer la circulation fiduciaire sur l'ensemble du territoire." },
    { n: "03", t: "Stabilité financière", d: "Assurer la supervision prudentielle des banques et intermédiaires financiers." },
    { n: "04", t: "Réserves de change", d: "Gérer les réserves officielles de change de la République." },
  ];
  return (
    <section id="operations" className="py-24 bg-ink text-primary-foreground">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <div className="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-60 mb-6">— Missions</div>
          <h2 className="serif text-4xl md:text-5xl leading-[1.05]">
            Quatre missions au service de l'économie de la République Démocratique du Congo.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {items.map((m) => (
            <div key={m.n} className="bg-ink p-8 min-h-[220px] flex flex-col">
              <div className="serif text-3xl opacity-40 mb-6">{m.n}</div>
              <h3 className="serif text-xl mb-3">{m.t}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{m.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { title: "La Banque", links: ["Historique", "Gouvernance", "Le Gouverneur", "Organigramme", "Textes de base"] },
    { title: "Opérations", links: ["Politique monétaire", "Marché des changes", "Réserves", "Réglementation", "Systèmes de paiement"] },
    { title: "Publications", links: ["Rapports annuels", "Bulletins statistiques", "Notes de conjoncture", "Études & recherche", "Communiqués"] },
    { title: "Ressources", links: ["Contact", "Carrières", "Marchés publics", "Presse", "Plan du site"] },
  ];
  return (
    <footer className="bg-background border-t hairline pt-20 pb-10">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 pb-16 border-b hairline">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img src={logoAsset.url} alt="BCC" className="h-12 w-auto" />
              <div>
                <div className="serif text-lg text-ink">Banque Centrale du Congo</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Depuis 1964</div>
              </div>
            </div>
            <p className="mt-6 text-sm text-ink-soft leading-relaxed max-w-sm">
              Boulevard Colonel Tshatshi, Kinshasa – Gombe,
              République Démocratique du Congo.
            </p>
            <p className="mt-3 text-sm text-ink-soft">+243 (0)81 000 00 00</p>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <div className="eyebrow mb-5">{c.title}</div>
              <ul className="space-y-3 text-sm">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-ink-soft hover:text-ink transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Banque Centrale du Congo. Tous droits réservés.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-ink transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-ink transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-ink transition-colors">Accessibilité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
