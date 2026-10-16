import type { Metadata } from "next";
import { insightArticles } from "../../../insights-data";

export const metadata: Metadata = {
  title: { absolute: "Digital Marketing Insights for Indonesian Communities | MyBite" },
  description: "Practical insights on digital marketing, localization, WhatsApp funnels, and campaign measurement for brands serving Indonesian communities abroad.",
  alternates: { canonical: "https://mybite.id/en/insights/" },
  openGraph: {
    title: "Digital Marketing Insights for Indonesian Communities | MyBite",
    description: "Practical strategy for brands serving Indonesian communities abroad.",
    type: "website",
    url: "https://mybite.id/en/insights/",
    images: [{ url: "https://mybite.id/og.png", alt: "MyBite digital marketing insights" }],
  },
};

export default function InsightsIndex() {
  return (
    <main className="insights-index">
      <header className="site-header landing-header">
        <a className="brand" href="/en/" aria-label="MyBite home"><span>my</span>bite<span className="brand-dot">.</span></a>
        <nav className="landing-nav" aria-label="Explore"><a href="/en/services/indonesian-diaspora-marketing/">Services</a><a href="/en/markets/malaysia/">Malaysia</a><a href="/en/work/gonilai-malaysia/">Work</a></nav>
        <a className="landing-language" href="/id/" hrefLang="id">Bahasa Indonesia</a>
      </header>

      <section className="insights-index-hero">
        <p className="eyebrow light"><i></i>MYBITE INSIGHTS</p>
        <h1>Practical thinking for marketing to Indonesian communities abroad.</h1>
        <p>Strategy, localization, media, and conversion guidance for brands building relevance across borders.</p>
      </section>

      <section className="insights-list">
        <div className="insights-list-intro"><p className="eyebrow"><i></i>LATEST ARTICLES</p><h2>Start with customer context.</h2></div>
        <div className="insights-grid">
          {insightArticles.map((article, index) => (
            <a href={`/en/insights/${article.slug}/`} key={article.slug}>
              <span>0{index + 1} · {article.eyebrow}</span>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <b>{article.readTime} · Read article ↗</b>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="/en/"><span>my</span>bite<span className="brand-dot">.</span></a>
        <p>Digital marketing agency for brands serving Indonesian communities abroad.</p>
        <div><a href="/en/">Home</a><a href="/en/services/indonesian-diaspora-marketing/">Services</a></div>
        <small>© {new Date().getFullYear()} MyBite. All rights reserved.</small>
      </footer>
    </main>
  );
}
