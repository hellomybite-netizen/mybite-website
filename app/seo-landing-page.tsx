import type { LandingPageData } from "./seo-landing-data";

const siteUrl = "https://mybite.id";
const whatsapp = "https://wa.me/6281333019049?text=Hi%20MyBite%2C%20I%27d%20like%20to%20discuss%20marketing%20to%20Indonesian%20communities%20abroad.";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const routes = {
  en: {
    service: "/en/services/indonesian-diaspora-marketing/",
    market: "/en/markets/malaysia/",
    work: "/en/work/gonilai-malaysia/",
    nav: ["Services", "Malaysia", "GoNilai"],
    menu: "Explore",
    language: "Bahasa Indonesia",
    talk: "Start a conversation",
    proof: "Selected organizations in MyBite’s existing portfolio",
    live: "Open live project",
    copyright: "All rights reserved.",
  },
  id: {
    service: "/id/layanan/pemasaran-diaspora-indonesia/",
    market: "/id/pasar/malaysia/",
    work: "/id/karya/gonilai-malaysia/",
    nav: ["Layanan", "Malaysia", "GoNilai"],
    menu: "Jelajahi",
    language: "English",
    talk: "Mulai percakapan",
    proof: "Pilihan organisasi dalam portofolio MyBite",
    live: "Buka proyek aktif",
    copyright: "Hak cipta dilindungi.",
  },
} as const;

const clients = [
  { name: "Telin Malaysia", logo: "/clients/telin-malaysia.png" },
  { name: "Telin Taiwan", logo: "/clients/telin-taiwan.png" },
  { name: "Telin Hong Kong", logo: "/clients/telin-hong-kong.png" },
  { name: "Bank BRI", logo: "/clients/bri.png" },
  { name: "Infinix", logo: "/clients/infinix.png" },
];

function absolute(path: string) {
  return path.startsWith("http") ? path : `${siteUrl}${path}`;
}

function schemaFor(page: LandingPageData) {
  const pageUrl = absolute(page.path);
  const content = page.key === "gonilai"
    ? {
        "@type": "Article",
        headline: page.heroTitle,
        description: page.description,
        mainEntityOfPage: pageUrl,
        dateModified: "2026-10-14",
        author: { "@id": `${siteUrl}/#organization` },
        publisher: { "@id": `${siteUrl}/#organization` },
        image: `${siteUrl}/gonilai-phone-mockup.png`,
      }
    : {
        "@type": "Service",
        name: page.heroTitle,
        description: page.description,
        url: pageUrl,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: page.key === "malaysia" ? { "@type": "Country", name: "Malaysia" } : "International",
        audience: { "@type": "Audience", audienceType: "Brands serving Indonesian communities abroad" },
      };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "MyBite",
        url: siteUrl,
        logo: `${siteUrl}/favicon.png`,
        description: "Digital marketing for brands serving Indonesian communities abroad.",
      },
      { ...content, "@id": `${pageUrl}#main` },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: page.breadcrumbHome, item: absolute(page.homePath) },
          { "@type": "ListItem", position: 2, name: page.breadcrumbParent },
          { "@type": "ListItem", position: 3, name: page.heroTitle, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

export default function SeoLandingPage({ page }: { page: LandingPageData }) {
  const t = routes[page.lang];
  const alternateLabel = t.language;
  const secondaryExternal = page.secondaryHref.startsWith("http");

  return (
    <main className={`landing landing-${page.key}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFor(page)).replace(/</g, "\\u003c") }}
      />

      <header className="site-header landing-header">
        <a className="brand" href={page.homePath} aria-label="MyBite home"><span>my</span>bite<span className="brand-dot">.</span></a>
        <nav className="landing-nav" aria-label={t.menu}>
          <a href={t.service}>{t.nav[0]}</a>
          <a href={t.market}>{t.nav[1]}</a>
          <a href={t.work}>{t.nav[2]}</a>
        </nav>
        <div className="header-actions">
          <a className="landing-language" href={page.alternatePath} hrefLang={page.lang === "en" ? "id" : "en"}>{alternateLabel}</a>
          <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">{t.talk}<span>↗</span></a>
        </div>
      </header>

      <section className="landing-hero">
        <div className="landing-orbit landing-orbit-one" aria-hidden="true"></div>
        <div className="landing-orbit landing-orbit-two" aria-hidden="true"></div>
        <div className="landing-hero-copy">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <a href={page.homePath}>{page.breadcrumbHome}</a><span>/</span><span>{page.breadcrumbParent}</span>
          </nav>
          <p className="eyebrow light"><i></i>{page.eyebrow}</p>
          <h1>{page.heroTitle}</h1>
          <p className="landing-hero-body">{page.heroBody}</p>
          <div className="hero-actions">
            <a className="button primary" href={whatsapp} target="_blank" rel="noreferrer">{page.primaryCta}<span>↗</span></a>
            <a className="text-link" href={page.secondaryHref} {...(secondaryExternal ? { target: "_blank", rel: "noreferrer" } : {})}>{page.secondaryCta}<span>↗</span></a>
          </div>
          <p className="landing-hero-note"><span className="pulse"></span>{page.heroNote}</p>
        </div>
        {page.image ? (
          <div className="landing-product-visual">
            <div className="landing-product-ring"></div>
            <img src={`${basePath}${page.image.src}`} alt={page.image.alt} />
            <span>{page.image.label}</span>
          </div>
        ) : (
          <div className="landing-hero-panel">
            <p>{page.signalTitle}</p>
            <ol>{page.signals.map((signal, index) => <li key={signal}><span>0{index + 1}</span>{signal}</li>)}</ol>
          </div>
        )}
      </section>

      <section className="landing-signal-bar" aria-label={page.signalTitle}>
        <strong>{page.signalTitle}</strong>
        <div>{page.signals.map((signal) => <span key={signal}>{signal}</span>)}</div>
      </section>

      <section className="landing-section landing-problem">
        <div className="landing-section-intro">
          <p className="eyebrow"><i></i>{page.problemEyebrow}</p>
          <h2>{page.problemTitle}</h2>
          <p>{page.problemBody}</p>
        </div>
        <div className="landing-card-grid landing-card-grid-three">
          {page.problemCards.map((card, index) => (
            <article className="landing-card" key={card.title}>
              <span className="landing-card-number">0{index + 1}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-mechanism">
        <div className="landing-mechanism-copy">
          <p className="eyebrow light"><i></i>{page.mechanismEyebrow}</p>
          <h2>{page.mechanismTitle}</h2>
          <p>{page.mechanismBody}</p>
        </div>
        <div className="landing-steps">
          {page.steps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <div><h3>{step.title}</h3><p>{step.body}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section landing-deliverables">
        <div className="landing-section-intro split">
          <div><p className="eyebrow"><i></i>{page.deliverablesEyebrow}</p><h2>{page.deliverablesTitle}</h2></div>
          <p>{page.deliverablesBody}</p>
        </div>
        <div className="landing-card-grid landing-card-grid-four">
          {page.deliverables.map((item) => (
            <article className="landing-card landing-deliverable" key={item.title}><span className="landing-mini-mark"></span><h3>{item.title}</h3><p>{item.body}</p></article>
          ))}
        </div>
      </section>

      <section className="landing-proof">
        <div className="landing-proof-copy">
          <p className="eyebrow light"><i></i>{page.proofEyebrow}</p>
          <h2>{page.proofTitle}</h2>
          <p>{page.proofBody}</p>
          <ul>{page.proofPoints.map((point) => <li key={point}><span>✓</span>{point}</li>)}</ul>
          {page.key === "gonilai" && <a className="proof-link" href="https://gonilai.mybite.id/" target="_blank" rel="noreferrer">{t.live}<span>↗</span></a>}
        </div>
        <div className="landing-client-panel">
          <p>{t.proof}</p>
          <div>{clients.map((client) => <span key={client.name}><img src={`${basePath}${client.logo}`} alt={`${client.name} logo`} loading="lazy" /></span>)}</div>
        </div>
      </section>

      <section className="landing-section landing-fit">
        <div className="landing-section-intro compact">
          <p className="eyebrow"><i></i>{page.fitEyebrow}</p>
          <h2>{page.fitTitle}</h2>
        </div>
        <div className="landing-fit-list">
          {page.fits.map((fit, index) => <div key={fit}><span>0{index + 1}</span><p>{fit}</p><b>↗</b></div>)}
        </div>
      </section>

      <section className="landing-faq">
        <div><p className="eyebrow"><i></i>{page.faqEyebrow}</p><h2>{page.faqTitle}</h2></div>
        <div className="landing-faq-list">
          {page.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}
        </div>
      </section>

      <section className="landing-section landing-related">
        <div className="landing-section-intro compact"><p className="eyebrow"><i></i>{page.relatedEyebrow}</p><h2>{page.relatedTitle}</h2></div>
        <div className="landing-related-grid">
          {page.related.map((link) => <a href={link.href} key={link.href}><span>MYBITE</span><h3>{link.label}</h3><p>{link.description}</p><b>Explore ↗</b></a>)}
        </div>
      </section>

      <section className="final-cta landing-final">
        <div className="final-orbit"></div>
        <p className="eyebrow light"><i></i>{page.finalEyebrow}</p>
        <h2>{page.finalTitle}</h2>
        <p>{page.finalBody}</p>
        <a className="button white" href={whatsapp} target="_blank" rel="noreferrer">{page.primaryCta}<span>↗</span></a>
      </section>

      <footer>
        <a className="brand footer-brand" href={page.homePath}><span>my</span>bite<span className="brand-dot">.</span></a>
        <p>{page.footer}</p>
        <div><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a className="footer-language" href={page.alternatePath} hrefLang={page.lang === "en" ? "id" : "en"}>{alternateLabel}</a></div>
        <small>© {new Date().getFullYear()} MyBite. {t.copyright}</small>
      </footer>
    </main>
  );
}
