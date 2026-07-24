import { createFileRoute, notFound } from "@tanstack/react-router";
import { SECTIONS } from "@/data/site";
import { SectionPage } from "@/components/site/SectionPage";
import { SiteHeader, SiteFooter, TopBar } from "@/components/site/SiteChrome";
import bccKinAsset from "@/assets/bcc_kin_0.jpg.asset.json";

export const Route = createFileRoute("/$section")({
  loader: ({ params }) => {
    const section = SECTIONS[params.section];
    if (!section) throw notFound();
    return { section };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Page introuvable — BCC" }, { name: "robots", content: "noindex" }] };
    }
    const { section } = loaderData;
    const title = `${section.label} — Banque Centrale du Congo`;
    return {
      meta: [
        { title },
        { name: "description", content: section.intro.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: section.intro.slice(0, 155) },
        { property: "og:image", content: bccKinAsset.url },
        { name: "twitter:image", content: bccKinAsset.url },
      ],
    };
  },
  component: SectionRoute,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-background">
      <div className="text-center">
        <div className="eyebrow mb-4">404</div>
        <h1 className="serif text-4xl text-ink">Rubrique introuvable</h1>
      </div>
    </div>
  ),
});

function SectionRoute() {
  const { section } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <SiteHeader />
      <SectionPage section={section} />
      <SiteFooter />
    </div>
  );
}
