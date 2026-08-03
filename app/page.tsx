"use client";

import { useEffect, useState } from "react";

const whatsapp = "https://wa.me/6281333019049?text=Hi%20MyBite%2C%20I%27d%20like%20to%20discuss%20marketing%20to%20Indonesian%20communities%20abroad.";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const clients = [
  { name: "Telin Malaysia", logo: `${basePath}/clients/telin-malaysia.png` },
  { name: "Telin Taiwan", logo: `${basePath}/clients/telin-taiwan.png` },
  { name: "Telin Hong Kong", logo: `${basePath}/clients/telin-hong-kong.png` },
  { name: "Bank BRI", logo: `${basePath}/clients/bri.png` },
  { name: "Infinix", logo: `${basePath}/clients/infinix.png` },
  { name: "Majo", logo: `${basePath}/clients/majo.svg` },
  { name: "Mitra Sukanda Djaya", logo: `${basePath}/clients/mitra-sukanda.png` },
  { name: "AAIIBS", logo: `${basePath}/clients/aaiibs.png` },
  { name: "Defix", logo: `${basePath}/clients/defix.svg` },
  { name: "Ilalang", logo: `${basePath}/clients/ilalang.png` },
];

const copy = {
  en: {
    nav: ["Expertise", "Industries", "Approach", "Work"],
    talk: "Start a conversation",
    eyebrow: "INDONESIAN MARKET EXPERTISE · GLOBAL REACH",
    hero: "Grow your brand among Indonesian communities abroad.",
    intro: "MyBite helps businesses connect with Indonesian migrant communities through culturally relevant content, responsible digital advertising, and conversion-focused funnels.",
    cta: "Talk to our team",
    explore: "Explore our approach",
    trust: "Built for brands that serve Indonesians across borders",
    clientsEyebrow: "TRUSTED EXPERIENCE",
    clientsTitle: "Brands we’ve worked with.",
    clientsBody: "Selected organizations featured in MyBite’s existing portfolio.",
    signal: "From awareness to WhatsApp conversion",
    imageCaption: "Connection starts with cultural relevance.",
    servicesEyebrow: "WHAT WE DO",
    servicesTitle: "Local insight. Measurable growth.",
    servicesIntro: "We turn cultural understanding into campaigns that feel familiar, earn trust, and move people to act.",
    services: [
      ["01", "Localized content", "Strategy and creative shaped around the language, culture, and everyday realities of Indonesian communities abroad."],
      ["02", "Digital advertising", "Targeted campaigns on authorized platforms—planned, tested, and optimized around meaningful business outcomes."],
      ["03", "WhatsApp funnels", "Simple conversion journeys that turn interest into qualified conversations with your sales or customer service team."],
    ],
    industriesEyebrow: "WHO WE HELP",
    industriesTitle: "For businesses serving life across borders.",
    industries: ["Remittance & financial services", "Cargo & logistics", "Travel & ticketing", "Telecommunications", "Training & education", "Everyday services for PMI"],
    approachEyebrow: "OUR APPROACH",
    approachTitle: "Relevance before reach.",
    approachBody: "Audience size means little without trust. We begin with the customer context, build messages that resonate, then use media and funnels to turn attention into action.",
    steps: [["01", "Understand", "Market, audience, and commercial goals"], ["02", "Localize", "Message, content, and campaign experience"], ["03", "Activate", "Media, testing, and WhatsApp conversion"], ["04", "Improve", "Insights, optimization, and reporting"]],
    privacyEyebrow: "RESPONSIBLE BY DESIGN",
    privacyTitle: "Your customer data stays yours.",
    privacyBody: "MyBite does not sell or share client customer databases. Every campaign is managed separately through authorized advertising platforms, client-approved assets, and appropriate data-access controls.",
    workEyebrow: "SELECTED EXPERIENCE",
    workTitle: "Grounded in real cross-border customer journeys.",
    workBody: "Our experience includes digital journeys designed for Indonesians living abroad—from discovery and education to assisted conversion.",
    caseTag: "CROSS-BORDER DIGITAL EXPERIENCE",
    caseTitle: "GoNilai",
    caseBody: "A digital purchase journey serving Indonesians in Malaysia, connecting everyday needs with a simple Messenger-led experience and local cash payment access.",
    caseLink: "View live project",
    finalEyebrow: "LET'S BUILD RELEVANCE",
    finalTitle: "Ready to grow with Indonesian communities abroad?",
    finalBody: "Tell us where you operate, who you want to reach, and what growth looks like for your business.",
    finalCta: "Chat with MyBite on WhatsApp",
    footer: "Digital marketing for brands serving Indonesian communities abroad.",
  },
  id: {
    nav: ["Keahlian", "Industri", "Pendekatan", "Karya"],
    talk: "Mulai percakapan",
    eyebrow: "KEAHLIAN PASAR INDONESIA · JANGKAUAN GLOBAL",
    hero: "Kembangkan brand Anda di komunitas Indonesia di luar negeri.",
    intro: "MyBite membantu bisnis terhubung dengan komunitas pekerja migran Indonesia melalui konten yang relevan, periklanan digital yang bertanggung jawab, dan funnel berorientasi konversi.",
    cta: "Hubungi tim kami",
    explore: "Lihat pendekatan kami",
    trust: "Untuk brand yang melayani orang Indonesia lintas negara",
    clientsEyebrow: "PENGALAMAN TEPERCAYA",
    clientsTitle: "Brand yang pernah bekerja bersama kami.",
    clientsBody: "Pilihan organisasi yang tercantum dalam portofolio MyBite.",
    signal: "Dari awareness hingga konversi WhatsApp",
    imageCaption: "Koneksi dimulai dari relevansi budaya.",
    servicesEyebrow: "YANG KAMI KERJAKAN",
    servicesTitle: "Wawasan lokal. Pertumbuhan terukur.",
    servicesIntro: "Kami mengubah pemahaman budaya menjadi kampanye yang terasa akrab, membangun kepercayaan, dan mendorong tindakan.",
    services: [
      ["01", "Konten terlokalisasi", "Strategi dan materi kreatif yang dibentuk berdasarkan bahasa, budaya, dan keseharian komunitas Indonesia di luar negeri."],
      ["02", "Periklanan digital", "Kampanye tertarget melalui platform resmi—direncanakan, diuji, dan dioptimalkan berdasarkan hasil bisnis yang berarti."],
      ["03", "Funnel WhatsApp", "Alur konversi sederhana yang mengubah minat menjadi percakapan berkualitas dengan tim penjualan atau layanan Anda."],
    ],
    industriesEyebrow: "SIAPA YANG KAMI BANTU",
    industriesTitle: "Untuk bisnis yang melayani kehidupan lintas negara.",
    industries: ["Remitansi & layanan finansial", "Cargo & logistik", "Travel & tiket", "Telekomunikasi", "Pelatihan & pendidikan", "Layanan sehari-hari untuk PMI"],
    approachEyebrow: "PENDEKATAN KAMI",
    approachTitle: "Relevansi sebelum jangkauan.",
    approachBody: "Besarnya audiens tidak berarti tanpa kepercayaan. Kami mulai dari konteks pelanggan, membangun pesan yang mengena, lalu menggunakan media dan funnel untuk mengubah perhatian menjadi tindakan.",
    steps: [["01", "Memahami", "Pasar, audiens, dan tujuan bisnis"], ["02", "Melokalkan", "Pesan, konten, dan pengalaman kampanye"], ["03", "Mengaktifkan", "Media, pengujian, dan konversi WhatsApp"], ["04", "Meningkatkan", "Insight, optimasi, dan pelaporan"]],
    privacyEyebrow: "BERTANGGUNG JAWAB SEJAK AWAL",
    privacyTitle: "Data pelanggan Anda tetap milik Anda.",
    privacyBody: "MyBite tidak menjual atau membagikan database pelanggan klien. Setiap kampanye dikelola secara terpisah melalui platform periklanan resmi, materi yang disetujui klien, dan kontrol akses data yang sesuai.",
    workEyebrow: "PENGALAMAN PILIHAN",
    workTitle: "Berpijak pada perjalanan pelanggan lintas negara yang nyata.",
    workBody: "Pengalaman kami mencakup perjalanan digital untuk orang Indonesia di luar negeri—dari penemuan dan edukasi hingga konversi terbantu.",
    caseTag: "PENGALAMAN DIGITAL LINTAS NEGARA",
    caseTitle: "GoNilai",
    caseBody: "Perjalanan pembelian digital untuk orang Indonesia di Malaysia, menghubungkan kebutuhan sehari-hari melalui pengalaman sederhana berbasis Messenger dan akses pembayaran tunai lokal.",
    caseLink: "Lihat proyek aktif",
    finalEyebrow: "MARI BANGUN RELEVANSI",
    finalTitle: "Siap bertumbuh bersama komunitas Indonesia di luar negeri?",
    finalBody: "Ceritakan lokasi bisnis, target audiens, dan arti pertumbuhan bagi bisnis Anda.",
    finalCta: "Chat dengan MyBite di WhatsApp",
    footer: "Digital marketing untuk brand yang melayani komunitas Indonesia di luar negeri.",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "id">("en");
  const [menu, setMenu] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="MyBite home"><span>my</span>bite<span className="brand-dot">.</span></a>
        <nav className={menu ? "nav open" : "nav"} aria-label="Main navigation">
          {t.nav.map((item, i) => <a key={item} onClick={() => setMenu(false)} href={`#${["expertise", "industries", "approach", "work"][i]}`}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <div className="language" aria-label="Language selector">
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button><span>/</span>
            <button className={lang === "id" ? "active" : ""} onClick={() => setLang("id")}>ID</button>
          </div>
          <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">{t.talk}<span>↗</span></a>
          <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle menu" aria-expanded={menu}><span></span><span></span></button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one"></div><div className="hero-orbit orbit-two"></div>
        <div className="hero-image" aria-hidden="true">
          <img src={`${basePath}/mybite-community-hero.png`} alt="" />
          <div className="image-caption"><span>01</span><p>{t.imageCaption}</p></div>
        </div>
        <div className="hero-content">
          <p className="eyebrow light"><i></i>{t.eyebrow}</p>
          <h1>{t.hero}</h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href={whatsapp} target="_blank" rel="noreferrer">{t.cta}<span>↗</span></a>
            <a className="text-link" href="#approach">{t.explore}<span>↓</span></a>
          </div>
        </div>
        <div className="hero-note"><span className="pulse"></span><p>{t.signal}</p></div>
      </section>

      <section className="trust-strip"><p>{t.trust}</p><div className="marquee"><span>Malaysia</span><b>•</b><span>Taiwan</span><b>•</b><span>Hong Kong</span><b>•</b><span>Singapore</span><b>•</b><span>Beyond</span></div></section>

      <section className="client-section" id="clients" aria-labelledby="client-title">
        <div className="client-heading">
          <p className="eyebrow"><i></i>{t.clientsEyebrow}</p>
          <h2 id="client-title">{t.clientsTitle}</h2>
          <p>{t.clientsBody}</p>
        </div>
        <div className="client-grid">
          {clients.map((client) => (
            <div className="client-logo" key={client.name} title={client.name}>
              <img src={client.logo} alt={`${client.name} logo`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="section services" id="expertise">
        <div className="section-head"><p className="eyebrow"><i></i>{t.servicesEyebrow}</p><h2>{t.servicesTitle}</h2><p>{t.servicesIntro}</p></div>
        <div className="service-grid">{t.services.map(([number, title, body]) => <article className="service-card" key={number}><span className="number">{number}</span><div className="service-icon"><span></span><span></span></div><h3>{title}</h3><p>{body}</p><a href={whatsapp} target="_blank" rel="noreferrer" aria-label={`${title} - contact MyBite`}>↗</a></article>)}</div>
      </section>

      <section className="industries" id="industries">
        <div className="industries-copy"><p className="eyebrow light"><i></i>{t.industriesEyebrow}</p><h2>{t.industriesTitle}</h2></div>
        <div className="industry-list">{t.industries.map((item, i) => <div className="industry" key={item}><span>0{i + 1}</span><p>{item}</p><b>↗</b></div>)}</div>
      </section>

      <section className="section approach" id="approach">
        <div className="approach-intro"><p className="eyebrow"><i></i>{t.approachEyebrow}</p><h2>{t.approachTitle}</h2><p>{t.approachBody}</p></div>
        <div className="steps">{t.steps.map(([number, title, body]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
      </section>

      <section className="privacy">
        <div className="privacy-mark"><div className="shield"><span>✓</span></div></div>
        <div className="privacy-copy"><p className="eyebrow light"><i></i>{t.privacyEyebrow}</p><h2>{t.privacyTitle}</h2><p>{t.privacyBody}</p></div>
      </section>

      <section className="section work" id="work">
        <div className="work-head"><div><p className="eyebrow"><i></i>{t.workEyebrow}</p><h2>{t.workTitle}</h2></div><p>{t.workBody}</p></div>
        <article className="case-study">
          <div className="case-visual"><img className="gonilai-phone" src={`${basePath}/gonilai-phone-mockup.png`} alt="GoNilai mobile purchase experience" loading="lazy" /><div className="case-ring"></div><span className="case-asset-label">GoNilai · Mobile experience</span></div>
          <div className="case-copy"><p className="case-tag">{t.caseTag}</p><h3>{t.caseTitle}</h3><p>{t.caseBody}</p><a href="https://gonilai.mybite.id/" target="_blank" rel="noreferrer">{t.caseLink}<span>↗</span></a></div>
        </article>
      </section>

      <section className="final-cta">
        <div className="final-orbit"></div><p className="eyebrow light"><i></i>{t.finalEyebrow}</p><h2>{t.finalTitle}</h2><p>{t.finalBody}</p><a className="button white" href={whatsapp} target="_blank" rel="noreferrer">{t.finalCta}<span>↗</span></a>
      </section>

      <footer><a className="brand footer-brand" href="#top"><span>my</span>bite<span className="brand-dot">.</span></a><p>{t.footer}</p><div><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><button onClick={() => setLang(lang === "en" ? "id" : "en")}>{lang === "en" ? "Bahasa Indonesia" : "English"}</button></div><small>© {new Date().getFullYear()} MyBite. All rights reserved.</small></footer>
    </main>
  );
}
