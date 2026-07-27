import { Link } from "@tanstack/react-router";
import { Search, Menu, ArrowUpRight, ArrowDown, ArrowUp, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/logo.png.asset.json";
import { NAV } from "@/data/site";

export function TopBar() {
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
          <Link to="/media" className="hover:text-foreground transition-colors">Contact</Link>
          <a href="#" className="hover:text-foreground transition-colors">Carrières</a>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b hairline">
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logoAsset.url} alt="Banque Centrale du Congo" className="h-11 w-auto" />
          <div className="hidden sm:block leading-tight">
            <div className="serif text-lg font-semibold text-ink">Banque Centrale du Congo</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Institution monétaire · RDC</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-ink-soft">
          {NAV.map((n) => (
            <Link
              key={n.slug}
              to="/$section"
              params={{ section: n.slug }}
              activeProps={{ className: "text-ink" }}
              className="relative py-1 hover:text-ink transition-colors after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-ink after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button aria-label="Recherche" className="grid place-items-center h-10 w-10 rounded-full hover:bg-muted transition-colors">
            <Search className="h-4 w-4" />
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="lg:hidden grid place-items-center h-10 w-10 rounded-full hover:bg-muted transition-colors"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background">
          <div className="container-x flex h-20 items-center justify-between">
            <div className="serif text-lg text-ink">Menu</div>
            <button onClick={() => setOpen(false)} className="grid place-items-center h-10 w-10 rounded-full hover:bg-muted">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="container-x flex flex-col gap-1 pt-4 pb-10">
            {NAV.map((n) => (
              <Link
                key={n.slug}
                to="/$section"
                params={{ section: n.slug }}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 border-b hairline serif text-2xl text-ink"
              >
                {n.label}
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const cols = [
    { title: "La Banque", slug: "la-banque", links: ["Missions", "Historique", "Loi organique", "Dirigeants", "Organigramme"] },
    { title: "Opérations", slug: "operations-et-marches", links: ["Politique monétaire", "Opérations de change", "Réserve obligatoire", "Taux directeurs", "Réglementation"] },
    { title: "Publications", slug: "publications", links: ["Rapport politique monétaire", "Rapports annuels", "Condensé statistique", "Balance des paiements"] },
    { title: "Ressources", slug: "media", links: ["Actualités", "Communiqués", "Annonces", "Carrières"] },
  ];
  return (
    <footer className="bg-ink border-t border-white/10 pt-20 pb-10">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img src={logoAsset.url} alt="BCC" className="h-12 w-auto" />
              <div>
                <div className="serif text-lg text-white">Banque Centrale du Congo</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">Depuis 1964</div>
              </div>
            </div>
            <p className="mt-6 text-sm text-white/70 leading-relaxed max-w-sm">
              Boulevard Colonel Tshatshi, Kinshasa – Gombe, République Démocratique du Congo.
            </p>
            <p className="mt-3 text-sm text-white/70">+243 (0)81 000 00 00</p>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <Link to="/$section" params={{ section: c.slug }} className="text-[0.7rem] tracking-[0.18em] uppercase font-semibold mb-5 block text-white/80 hover:text-white transition-colors">{c.title}</Link>
              <ul className="space-y-3 text-sm mt-5">
                {c.links.map((l) => (
                  <li key={l}>
                    <Link to="/$section" params={{ section: c.slug }} className="text-white/70 hover:text-white transition-colors">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Banque Centrale du Congo. Tous droits réservés.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/70 hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Accessibilité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { ArrowUpRight, ArrowDown, ArrowUp, ChevronRight };
