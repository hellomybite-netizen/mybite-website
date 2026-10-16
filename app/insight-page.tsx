import type { InsightArticle } from "./insights-data";
import { insightArticles } from "./insights-data";

const siteUrl = "https://mybite.id";
const whatsapp = "https://wa.me/6281333019049?text=Hi%20MyBite%2C%20I%27d%20like%20to%20discuss%20marketing%20to%20Indonesian%20communities%20abroad.";

function articleSchema(article: InsightArticle) {
  const url = `${siteUrl}/en/insights/${article.slug}/`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "MyBite",
        url: siteUrl,
        logo: `${siteUrl}/favicon.png`,
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: article.title,
        description: article.description,
        datePublished: "2026-10-16",
        dateModified: "2026-10-16",
        mainEntityOfPage: url,
        author: { "@id": `${siteUrl}/#organization` },
        publisher: { "@id": `${siteUrl}/#organization` },
        image: `${siteUrl}/og.png`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/en/` },
          { "@type": "ListItem", position: 2, name: "Insights", item: `${siteUrl}/en/insights/` },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
    ],
  };
}

export default function InsightPage({ article }: { article: InsightArticle }) {
  const related = insightArticles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <main className="insight-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(article)).replace(/</g, "\\u003c") }}
      />

      <header className="site-header landing-header">
        <a className="brand" href="/en/" aria-label="MyBite home"><span>my</span>bite<span className="brand-dot">.</span></a>
        <nav className="landing-nav" aria-label="Explore">
          <a href="/en/services/indonesian-diaspora-marketing/">Services</a>
          <a href="/en/markets/malaysia/">Malaysia</a>
          <a href="/en/insights/">Insights</a>
        </nav>
        <div className="header-actions">
          <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">Start a conversation<span>↗</span></a>
        </div>
      </header>

      <article>
        <header className="insight-hero">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <a href="/en/">Home</a><span>/</span><a href="/en/insights/">Insights</a>
          </nav>
          <p className="eyebrow light"><i></i>{article.eyebrow}</p>
          <h1>{article.title}</h1>
          <p>{article.intro}</p>
          <div className="insight-meta"><span>MyBite</span><span>16 October 2026</span><span>{article.readTime}</span></div>
        </header>

        <div className="insight-layout">
          <aside className="insight-aside">
            <p>In this article</p>
            <ol>{article.sections.map((section, index) => <li key={section.heading}><a href={`#section-${index + 1}`}>{section.heading}</a></li>)}</ol>
          </aside>

          <div className="insight-body">
            <p className="insight-lead">
              MyBite is a <a href={article.primaryLink.href}>{article.primaryLink.label}</a> connecting market context, localized content, responsible digital advertising, and practical conversion journeys.
            </p>

            {article.sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.heading}>
                <span className="insight-section-number">0{index + 1}</span>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}

            <section className="insight-takeaway">
              <p className="eyebrow"><i></i>KEY TAKEAWAY</p>
              <h2>A useful next step</h2>
              <p>{article.takeaway}</p>
              <p>Explore MyBite’s <a href={article.secondaryLink.href}>{article.secondaryLink.label}</a> to see how these principles can become a practical campaign plan.</p>
            </section>
          </div>
        </div>
      </article>

      <section className="insight-related">
        <div><p className="eyebrow"><i></i>RELATED INSIGHTS</p><h2>Continue exploring.</h2></div>
        <div className="insight-related-grid">
          {related.map((item) => <a href={`/en/insights/${item.slug}/`} key={item.slug}><span>{item.eyebrow}</span><h3>{item.title}</h3><p>{item.description}</p><b>Read article ↗</b></a>)}
        </div>
      </section>

      <section className="final-cta landing-final">
        <div className="final-orbit"></div>
        <p className="eyebrow light"><i></i>START WITH CONTEXT</p>
        <h2>Ready to reach Indonesian communities abroad?</h2>
        <p>Tell us where you operate, who you want to reach, and what growth looks like for your business.</p>
        <a className="button white" href={whatsapp} target="_blank" rel="noreferrer">Talk to MyBite<span>↗</span></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="/en/"><span>my</span>bite<span className="brand-dot">.</span></a>
        <p>Digital marketing agency for brands serving Indonesian communities abroad.</p>
        <div><a href="/en/insights/">Insights</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div>
        <small>© {new Date().getFullYear()} MyBite. All rights reserved.</small>
      </footer>
    </main>
  );
}
