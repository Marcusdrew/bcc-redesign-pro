import { Link } from "@tanstack/react-router";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import bccKinAsset from "@/assets/bcc_kin_0.jpg.asset.json";
import francAsset from "@/assets/montage_franc_congolais_calendrier_1.png.asset.json";
import tarifsAsset from "@/assets/tarifsetcondition.png.asset.json";
import wamesoAsset from "@/assets/wameso.jpg.asset.json";
import type { Section, Subsection } from "@/data/site";
import { NAV } from "@/data/site";

const HEROES: Record<string, string> = {
  bcc: bccKinAsset.url,
  franc: francAsset.url,
  tarifs: tarifsAsset.url,
  wameso: wamesoAsset.url,
};

export function SectionPage({ section }: { section: Section }) {
  const heroUrl = HEROES[section.hero] ?? HEROES.bcc;
  return (
    <>
      <SectionHero section={section} heroUrl={heroUrl} />
      <SubNav section={section} />
      <div className="container-x grid lg:grid-cols-12 gap-12 py-16 lg:py-24">
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-32">
            <div className="eyebrow mb-4">Sur cette page</div>
            <ul className="space-y-2 text-sm">
              {section.subsections.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`#${s.slug}`}
                    className="block py-1.5 text-ink-soft hover:text-ink border-l-2 border-transparent hover:border-ink pl-3 transition-all"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-10 pt-6 border-t hairline">
              <div className="eyebrow mb-3">Autres rubriques</div>
              <ul className="space-y-2 text-sm">
                {NAV.filter((n) => n.slug !== section.slug).slice(0, 5).map((n) => (
                  <li key={n.slug}>
                    <Link to="/$section" params={{ section: n.slug }} className="text-ink-soft hover:text-ink flex items-center gap-1 group">
                      {n.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <div className="lg:col-span-9 space-y-20">
          {section.subsections.map((sub, i) => (
            <SubsectionBlock key={sub.slug} sub={sub} index={i} />
          ))}
        </div>
      </div>
    </>
  );
}

function SectionHero({ section, heroUrl }: { section: Section; heroUrl: string }) {
  return (
    <section className="relative bg-background border-b hairline">
      <div className="container-x grid lg:grid-cols-12 gap-10 py-16 lg:py-20 items-end">
        <div className="lg:col-span-7">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
            <Link to="/" className="hover:text-ink">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-ink">{section.label}</span>
          </nav>
          <div className="eyebrow mb-4">— {section.eyebrow}</div>
          <h1 className="serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-ink leading-[1.02]">
            {section.label}
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-ink-soft leading-relaxed">
            {section.intro}
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[4/3] overflow-hidden rounded-sm">
            <img src={heroUrl} alt={section.label} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SubNav({ section }: { section: Section }) {
  return (
    <div className="sticky top-20 z-30 bg-surface/95 backdrop-blur border-b hairline">
      <div className="container-x flex items-center gap-1 overflow-x-auto py-3 no-scrollbar text-sm">
        <span className="eyebrow shrink-0 mr-3">Sommaire —</span>
        {section.subsections.map((s) => (
          <a
            key={s.slug}
            href={`#${s.slug}`}
            className="shrink-0 px-3 py-1.5 rounded-full text-ink-soft hover:text-ink hover:bg-background transition-colors whitespace-nowrap"
          >
            {s.title}
          </a>
        ))}
      </div>
    </div>
  );
}

function SubsectionBlock({ sub, index }: { sub: Subsection; index: number }) {
  return (
    <section id={sub.slug} className="scroll-mt-40 fade-up" style={{ animationDelay: `${index * 60}ms` }}>
      <div className="flex items-baseline gap-4 mb-6">
        <span className="serif text-2xl text-muted-foreground/50 tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2 className="serif text-3xl md:text-4xl text-ink leading-tight">{sub.title}</h2>
      </div>
      {sub.lead && (
        <p className="text-lg text-ink-soft leading-relaxed max-w-3xl mb-6">{sub.lead}</p>
      )}
      {sub.body?.map((p, i) => (
        <p key={i} className="text-base text-ink-soft leading-relaxed max-w-3xl mb-4">
          {p}
        </p>
      ))}
      {sub.bullets && (
        <ul className="mt-4 grid md:grid-cols-2 gap-x-8 gap-y-3 max-w-4xl">
          {sub.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-ink-soft leading-relaxed">
              <span className="mt-2 h-1 w-3 bg-gold shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {sub.table && (
        <div className="mt-6 border hairline overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr>
                {sub.table.head.map((h) => (
                  <th key={h} className="text-left px-5 py-3 eyebrow">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sub.table.rows.map((row, i) => (
                <tr key={i} className="border-t hairline">
                  {row.map((cell, j) => (
                    <td key={j} className={`px-5 py-3 ${j === row.length - 1 ? "tabular-nums text-ink font-medium text-right" : "text-ink-soft"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
