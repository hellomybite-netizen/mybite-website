import type { Language } from "./localized-home";

export type LandingKey = "diaspora" | "malaysia" | "gonilai";

type LinkItem = { label: string; href: string; description: string };
type ContentCard = { title: string; body: string };
type Step = { number: string; title: string; body: string };
type Faq = { question: string; answer: string };

export type LandingPageData = {
  lang: Language;
  key: LandingKey;
  path: string;
  alternatePath: string;
  homePath: string;
  breadcrumbHome: string;
  breadcrumbParent: string;
  eyebrow: string;
  title: string;
  description: string;
  heroTitle: string;
  heroBody: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryHref: string;
  heroNote: string;
  signalTitle: string;
  signals: string[];
  problemEyebrow: string;
  problemTitle: string;
  problemBody: string;
  problemCards: ContentCard[];
  mechanismEyebrow: string;
  mechanismTitle: string;
  mechanismBody: string;
  steps: Step[];
  deliverablesEyebrow: string;
  deliverablesTitle: string;
  deliverablesBody: string;
  deliverables: ContentCard[];
  proofEyebrow: string;
  proofTitle: string;
  proofBody: string;
  proofPoints: string[];
  fitEyebrow: string;
  fitTitle: string;
  fits: string[];
  faqEyebrow: string;
  faqTitle: string;
  faqs: Faq[];
  relatedEyebrow: string;
  relatedTitle: string;
  related: LinkItem[];
  finalEyebrow: string;
  finalTitle: string;
  finalBody: string;
  footer: string;
  image?: { src: string; alt: string; label: string };
};

const enLinks = {
  service: {
    label: "Indonesian diaspora marketing",
    href: "/en/services/indonesian-diaspora-marketing/",
    description: "See the complete strategy, content, media, and WhatsApp conversion service.",
  },
  malaysia: {
    label: "Indonesians in Malaysia",
    href: "/en/markets/malaysia/",
    description: "Explore a market-specific approach for reaching Indonesian communities in Malaysia.",
  },
  gonilai: {
    label: "GoNilai Malaysia case study",
    href: "/en/work/gonilai-malaysia/",
    description: "See how a cross-border purchase journey was shaped for Indonesians in Malaysia.",
  },
};

const idLinks = {
  service: {
    label: "Pemasaran diaspora Indonesia",
    href: "/id/layanan/pemasaran-diaspora-indonesia/",
    description: "Pelajari layanan strategi, konten, media, dan konversi WhatsApp secara menyeluruh.",
  },
  malaysia: {
    label: "Komunitas Indonesia di Malaysia",
    href: "/id/pasar/malaysia/",
    description: "Lihat pendekatan khusus pasar untuk menjangkau komunitas Indonesia di Malaysia.",
  },
  gonilai: {
    label: "Studi kasus GoNilai Malaysia",
    href: "/id/karya/gonilai-malaysia/",
    description: "Lihat bagaimana perjalanan pembelian lintas negara dirancang untuk orang Indonesia di Malaysia.",
  },
};

const englishBase = {
  lang: "en" as const,
  homePath: "/en/",
  breadcrumbHome: "Home",
  primaryCta: "Discuss your market",
  faqEyebrow: "COMMON QUESTIONS",
  faqTitle: "Before we start.",
  relatedEyebrow: "KEEP EXPLORING",
  relatedTitle: "Build the full picture.",
  finalEyebrow: "START WITH CONTEXT",
  finalTitle: "Tell us who you need to reach—and where.",
  finalBody: "Share your market, audience, and commercial goal. We’ll help you identify the clearest next step.",
  footer: "Digital marketing for brands serving Indonesian communities abroad.",
};

const indonesianBase = {
  lang: "id" as const,
  homePath: "/id/",
  breadcrumbHome: "Beranda",
  primaryCta: "Diskusikan pasar Anda",
  faqEyebrow: "PERTANYAAN UMUM",
  faqTitle: "Sebelum kita mulai.",
  relatedEyebrow: "PELAJARI SELANJUTNYA",
  relatedTitle: "Lihat gambaran lengkapnya.",
  finalEyebrow: "MULAI DARI KONTEKS",
  finalTitle: "Ceritakan siapa yang ingin Anda jangkau—dan di mana.",
  finalBody: "Bagikan target pasar, audiens, dan tujuan bisnis Anda. Kami akan membantu menentukan langkah berikutnya yang paling jelas.",
  footer: "Digital marketing untuk brand yang melayani komunitas Indonesia di luar negeri.",
};

export const landingPages: Record<Language, Record<LandingKey, LandingPageData>> = {
  en: {
    diaspora: {
      ...englishBase,
      key: "diaspora",
      path: enLinks.service.href,
      alternatePath: idLinks.service.href,
      breadcrumbParent: "Services",
      eyebrow: "INDONESIAN DIASPORA MARKETING",
      title: "Indonesian Diaspora Marketing Agency | MyBite",
      description: "Reach Indonesian communities abroad with localized content, responsible digital advertising, and WhatsApp conversion journeys built around each market.",
      heroTitle: "Turn cross-border reach into local relevance.",
      heroBody: "MyBite helps brands reach Indonesian communities abroad with messaging that respects how people speak, choose, and buy in each destination market.",
      secondaryCta: "See our Malaysia approach",
      secondaryHref: enLinks.malaysia.href,
      heroNote: "Strategy · Localized content · Media · WhatsApp funnels",
      signalTitle: "Built around the customer journey",
      signals: ["Culturally relevant messaging", "Country-specific campaign planning", "Clear paths to conversation"],
      problemEyebrow: "THE CROSS-BORDER GAP",
      problemTitle: "Being visible is not the same as feeling relevant.",
      problemBody: "Indonesian communities abroad share a language, but their daily context changes by country, job, access to payment, and the people they trust. A campaign copied from Indonesia can reach the right location and still miss the person.",
      problemCards: [
        { title: "Generic translation", body: "Words may be correct while the offer, tone, and references still feel disconnected from local reality." },
        { title: "Media without context", body: "Location and language targeting need a clear audience hypothesis, creative testing, and responsible platform use." },
        { title: "Friction after the click", body: "Interest disappears when the next step is unclear, unfamiliar, or too difficult on a mobile phone." },
      ],
      mechanismEyebrow: "THE MYBITE APPROACH",
      mechanismTitle: "Relevance before reach.",
      mechanismBody: "We connect audience insight, localized creative, authorized media, and assisted conversion into one journey. Each layer has a purpose: earn attention, build confidence, and make the next action simple.",
      steps: [
        { number: "01", title: "Understand", body: "Define the market, audience segment, customer need, and commercial goal." },
        { number: "02", title: "Localize", body: "Shape the message and creative around language, culture, and destination context." },
        { number: "03", title: "Activate", body: "Run responsible campaigns on relevant platforms and guide demand toward a clear action." },
        { number: "04", title: "Improve", body: "Review useful signals, test the strongest variables, and refine the journey." },
      ],
      deliverablesEyebrow: "WHAT WE CAN BUILD",
      deliverablesTitle: "A connected growth system—not isolated posts.",
      deliverablesBody: "The exact scope depends on your market and goal. Engagements can combine the following workstreams into one practical plan.",
      deliverables: [
        { title: "Audience and market strategy", body: "Audience definition, customer context, message priorities, channel roles, and measurement plan." },
        { title: "Localized campaign content", body: "Indonesian-language copy and creative direction adapted to the destination market and buying moment." },
        { title: "Digital advertising", body: "Campaign planning, setup, testing, and optimization through authorized advertising platforms." },
        { title: "WhatsApp conversion journeys", body: "Clear handoffs from ad or landing page to a qualified conversation with sales or support." },
      ],
      proofEyebrow: "CROSS-BORDER EXPERIENCE",
      proofTitle: "Designed around real customer journeys.",
      proofBody: "MyBite’s existing portfolio includes organizations serving Indonesians across Malaysia, Taiwan, and Hong Kong. GoNilai shows how this thinking can extend from discovery to an accessible purchase path.",
      proofPoints: ["Experience across multiple destination markets", "Indonesian-language customer context", "Client-approved assets and separate data access"],
      fitEyebrow: "WHO THIS IS FOR",
      fitTitle: "For services that travel with people.",
      fits: ["Remittance and financial services", "Cargo and logistics", "Travel and ticketing", "Telecommunications", "Training and education", "Everyday services for Indonesian migrant workers"],
      faqs: [
        { question: "Which countries can MyBite support?", answer: "Our existing experience includes Malaysia, Taiwan, and Hong Kong. We start every new country with market and audience discovery before recommending channels or creative." },
        { question: "Do you only create Indonesian-language content?", answer: "No. Language is one part of localization. We plan the message, offer, creative context, channel role, and conversion path around the audience you want to reach." },
        { question: "Can you help turn ads into WhatsApp conversations?", answer: "Yes. We can design a clear journey from campaign or landing page into WhatsApp, including message framing and the handoff to your team." },
        { question: "How do you handle customer data?", answer: "MyBite does not sell or share client customer databases. Campaigns use authorized platforms, client-approved assets, and appropriate access controls." },
      ],
      related: [enLinks.malaysia, enLinks.gonilai],
    },
    malaysia: {
      ...englishBase,
      key: "malaysia",
      path: enLinks.malaysia.href,
      alternatePath: idLinks.malaysia.href,
      breadcrumbParent: "Markets",
      eyebrow: "MALAYSIA MARKET",
      title: "Marketing to Indonesians in Malaysia | MyBite",
      description: "Reach Indonesian communities in Malaysia with localized campaigns, responsible digital advertising, and practical WhatsApp conversion journeys.",
      heroTitle: "Reach Indonesians in Malaysia with a message that fits their reality.",
      heroBody: "MyBite helps brands translate a broad market opportunity into a focused customer journey—from relevant discovery to a practical conversation or purchase path.",
      secondaryCta: "View the GoNilai case study",
      secondaryHref: enLinks.gonilai.href,
      heroNote: "Malaysia focus · Indonesian-language context · Mobile-first conversion",
      signalTitle: "A market-specific approach",
      signals: ["Audience segments before targeting", "Indonesian message, Malaysian context", "Mobile and assisted conversion"],
      problemEyebrow: "WHY LOCAL CONTEXT MATTERS",
      problemTitle: "One country can contain many customer realities.",
      problemBody: "Indonesians in Malaysia are not a single media audience. Their needs, working conditions, payment access, location, and level of digital confidence can differ. Effective marketing begins by deciding exactly who the campaign is for.",
      problemCards: [
        { title: "The offer must travel", body: "Price, payment, fulfillment, customer support, and trust signals must make sense in Malaysia—not only in Indonesia." },
        { title: "The message must feel familiar", body: "Bahasa Indonesia can create clarity, but the strongest message also reflects the audience’s current situation and priorities." },
        { title: "The next step must be practical", body: "Mobile-first pages, familiar conversations, and accessible payment or assistance reduce avoidable hesitation." },
      ],
      mechanismEyebrow: "FROM MARKET TO JOURNEY",
      mechanismTitle: "Plan the customer path before buying attention.",
      mechanismBody: "We map the audience, need, message, media role, and response flow as one system. That gives every campaign a job beyond impressions: help the right person move to the next useful step.",
      steps: [
        { number: "01", title: "Choose the segment", body: "Clarify location, customer situation, need state, and buying barriers." },
        { number: "02", title: "Frame the value", body: "Connect the offer to a real priority using clear Indonesian-language communication." },
        { number: "03", title: "Create the response path", body: "Align ads, landing experience, Messenger or WhatsApp, and the operational handoff." },
        { number: "04", title: "Learn from behavior", body: "Use campaign and conversation signals to improve the message and journey." },
      ],
      deliverablesEyebrow: "MALAYSIA CAMPAIGN SCOPE",
      deliverablesTitle: "The pieces needed to move from interest to action.",
      deliverablesBody: "We shape the scope around your business model, customer segment, and operational readiness in Malaysia.",
      deliverables: [
        { title: "Market and audience definition", body: "Prioritized segments, need states, trust barriers, and a clear campaign hypothesis." },
        { title: "Localized campaign concept", body: "Message architecture and creative direction designed for Indonesians living in Malaysia." },
        { title: "Media activation", body: "Responsible campaign setup, testing, optimization, and reporting on relevant platforms." },
        { title: "Conversion experience", body: "A mobile-first path into Messenger, WhatsApp, or another client-approved action." },
      ],
      proofEyebrow: "EXPERIENCE IN PRACTICE",
      proofTitle: "GoNilai: a journey designed for access.",
      proofBody: "GoNilai connects Indonesians in Malaysia with everyday digital needs through a simple Messenger-led journey and local cash payment access. It demonstrates how message, interface, assistance, and payment context work together.",
      proofPoints: ["Mobile-first experience", "Messenger-led assistance", "Local cash payment access"],
      fitEyebrow: "RELEVANT BUSINESS MODELS",
      fitTitle: "For brands serving everyday cross-border needs.",
      fits: ["Remittance and financial access", "Prepaid, data, and telecommunications", "Cargo and delivery", "Travel and transport", "Training and skills", "Consumer and worker services"],
      faqs: [
        { question: "Can you target all Indonesians in Malaysia?", answer: "We recommend starting with a defined segment rather than treating every Indonesian in Malaysia as one audience. The right scope depends on the need, geography, offer, and conversion path." },
        { question: "Should the campaign be in Indonesian or Malay?", answer: "That depends on the segment and goal. For an Indonesian community audience, Bahasa Indonesia can improve clarity and familiarity, while the wider customer context still needs to reflect Malaysia." },
        { question: "Can MyBite manage the full funnel?", answer: "We can connect localized content, paid media, a landing experience, and WhatsApp or Messenger handoff. Your sales and operational process should be aligned before launch." },
        { question: "Do you guarantee campaign results?", answer: "No responsible agency can guarantee a commercial result before testing. We agree on objectives, track useful signals, and improve the strongest strategic variables over time." },
      ],
      related: [enLinks.service, enLinks.gonilai],
    },
    gonilai: {
      ...englishBase,
      key: "gonilai",
      path: enLinks.gonilai.href,
      alternatePath: idLinks.gonilai.href,
      breadcrumbParent: "Work",
      eyebrow: "GONILAI · MALAYSIA",
      title: "GoNilai Malaysia Case Study | MyBite",
      description: "See how GoNilai created a simple Messenger-led digital purchase journey with local cash payment access for Indonesians in Malaysia.",
      heroTitle: "A simpler digital purchase journey for Indonesians in Malaysia.",
      heroBody: "GoNilai connects everyday digital needs with a mobile-first, Messenger-led experience and local cash payment access—reducing the gap between interest and completion.",
      secondaryCta: "View the live project",
      secondaryHref: "https://gonilai.my/",
      heroNote: "Customer journey · Mobile experience · Assisted conversion",
      signalTitle: "The project at a glance",
      signals: ["Audience: Indonesians in Malaysia", "Journey: Messenger-led", "Access: Local cash payment"],
      image: { src: "/gonilai-phone-mockup.png", alt: "GoNilai mobile purchase experience", label: "GoNilai · Mobile experience" },
      problemEyebrow: "THE CUSTOMER CHALLENGE",
      problemTitle: "Digital convenience depends on the whole journey.",
      problemBody: "A useful offer can still be difficult to complete when discovery, guidance, payment access, and customer confidence do not connect. GoNilai was shaped around this practical gap for Indonesians living in Malaysia.",
      problemCards: [
        { title: "Discovery", body: "The proposition needs to be immediately understandable in the customer’s language and context." },
        { title: "Guidance", body: "A conversational path can help customers move forward when a self-serve interface alone is not enough." },
        { title: "Access", body: "The purchase flow must account for the payment options customers can realistically use." },
      ],
      mechanismEyebrow: "THE EXPERIENCE DESIGN",
      mechanismTitle: "Connect the message, conversation, and payment moment.",
      mechanismBody: "The project brings together customer-facing communication and an assisted purchase path. The goal is not more interface—it is a clearer route from a need to a completed action.",
      steps: [
        { number: "01", title: "Recognize the need", body: "Present everyday digital products in a clear, relevant customer context." },
        { number: "02", title: "Enter Messenger", body: "Move the customer into a familiar, guided conversation flow." },
        { number: "03", title: "Choose and confirm", body: "Help the customer identify the required product and next action." },
        { number: "04", title: "Complete with local access", body: "Support a purchase path that includes local cash payment access." },
      ],
      deliverablesEyebrow: "WHAT THE PROJECT DEMONSTRATES",
      deliverablesTitle: "Conversion is an experience, not a button.",
      deliverablesBody: "GoNilai is a practical example of how MyBite thinks about cross-border customer journeys. Published performance metrics are not used here; the focus is the design and delivery model visible in the live experience.",
      deliverables: [
        { title: "Audience-specific proposition", body: "A clear service context for Indonesians living in Malaysia." },
        { title: "Mobile-first presentation", body: "An experience shaped for the device customers are most likely to use." },
        { title: "Conversational assistance", body: "Messenger becomes part of the journey instead of a disconnected support channel." },
        { title: "Practical payment access", body: "The final step reflects real-world access, including local cash payment." },
      ],
      proofEyebrow: "THE OUTCOME",
      proofTitle: "A coherent route from discovery to purchase.",
      proofBody: "The result is a connected digital experience: customers can understand the offer, enter a guided conversation, and move toward a payment method designed for their local situation.",
      proofPoints: ["Clear cross-border proposition", "Guided customer journey", "Operationally relevant payment path"],
      fitEyebrow: "APPLYING THE PRINCIPLE",
      fitTitle: "Useful for journeys that need trust and assistance.",
      fits: ["Financial and remittance services", "Telecommunications and prepaid products", "Travel and ticketing", "Cargo and logistics", "Training enrollment", "Other assisted mobile purchases"],
      faqs: [
        { question: "What is GoNilai?", answer: "GoNilai is a digital purchase journey serving Indonesians in Malaysia. It connects everyday digital needs with a Messenger-led experience and local cash payment access." },
        { question: "What did MyBite focus on?", answer: "This case study focuses on the customer journey: relevant communication, a mobile-first experience, conversational assistance, and an accessible payment path." },
        { question: "Are performance results published?", answer: "No verified campaign or revenue metrics are published on this page. The case study intentionally focuses on the experience design and visible delivery model." },
        { question: "Can MyBite build a similar journey?", answer: "We can assess whether a localized, assisted conversion journey fits your audience and operations. The recommended solution will depend on your market, offer, and available payment and support processes." },
      ],
      related: [enLinks.service, enLinks.malaysia],
    },
  },
  id: {
    diaspora: {
      ...indonesianBase,
      key: "diaspora",
      path: idLinks.service.href,
      alternatePath: enLinks.service.href,
      breadcrumbParent: "Layanan",
      eyebrow: "PEMASARAN DIASPORA INDONESIA",
      title: "Agensi Pemasaran Diaspora Indonesia | MyBite",
      description: "Jangkau komunitas Indonesia di luar negeri melalui konten terlokalisasi, periklanan digital yang bertanggung jawab, dan alur konversi WhatsApp.",
      heroTitle: "Ubah jangkauan lintas negara menjadi relevansi lokal.",
      heroBody: "MyBite membantu brand menjangkau komunitas Indonesia di luar negeri dengan pesan yang memahami cara mereka berbicara, memilih, dan membeli di setiap negara tujuan.",
      secondaryCta: "Lihat pendekatan Malaysia",
      secondaryHref: idLinks.malaysia.href,
      heroNote: "Strategi · Konten lokal · Media · Funnel WhatsApp",
      signalTitle: "Dibangun mengikuti perjalanan pelanggan",
      signals: ["Pesan yang relevan secara budaya", "Rencana kampanye per negara", "Jalur percakapan yang jelas"],
      problemEyebrow: "CELAH LINTAS NEGARA",
      problemTitle: "Terlihat belum tentu terasa relevan.",
      problemBody: "Komunitas Indonesia di luar negeri menggunakan bahasa yang sama, tetapi keseharian mereka berubah menurut negara, pekerjaan, akses pembayaran, dan sumber kepercayaan. Kampanye dari Indonesia bisa menjangkau lokasi yang benar tetapi tetap luput memahami orangnya.",
      problemCards: [
        { title: "Terjemahan generik", body: "Kata-katanya mungkin benar, tetapi penawaran, nada, dan referensinya belum tentu sesuai dengan realitas lokal." },
        { title: "Media tanpa konteks", body: "Target lokasi dan bahasa memerlukan hipotesis audiens, pengujian kreatif, dan penggunaan platform yang bertanggung jawab." },
        { title: "Hambatan setelah klik", body: "Minat mudah hilang bila langkah berikutnya tidak jelas, tidak familier, atau sulit dilakukan melalui ponsel." },
      ],
      mechanismEyebrow: "PENDEKATAN MYBITE",
      mechanismTitle: "Relevansi sebelum jangkauan.",
      mechanismBody: "Kami menghubungkan wawasan audiens, materi kreatif lokal, media resmi, dan konversi terbantu dalam satu perjalanan. Setiap lapisan memiliki tujuan: menarik perhatian, membangun keyakinan, dan memudahkan tindakan berikutnya.",
      steps: [
        { number: "01", title: "Memahami", body: "Menentukan pasar, segmen audiens, kebutuhan pelanggan, dan tujuan bisnis." },
        { number: "02", title: "Melokalkan", body: "Membentuk pesan dan kreatif berdasarkan bahasa, budaya, serta konteks negara tujuan." },
        { number: "03", title: "Mengaktifkan", body: "Menjalankan kampanye bertanggung jawab dan mengarahkan permintaan ke tindakan yang jelas." },
        { number: "04", title: "Meningkatkan", body: "Membaca sinyal yang berguna, menguji variabel utama, dan menyempurnakan perjalanan." },
      ],
      deliverablesEyebrow: "YANG DAPAT KAMI BANGUN",
      deliverablesTitle: "Sistem pertumbuhan yang terhubung—bukan postingan terpisah.",
      deliverablesBody: "Ruang lingkup disesuaikan dengan pasar dan tujuan Anda. Pekerjaan berikut dapat dirangkai menjadi satu rencana praktis.",
      deliverables: [
        { title: "Strategi audiens dan pasar", body: "Definisi audiens, konteks pelanggan, prioritas pesan, peran kanal, dan rencana pengukuran." },
        { title: "Konten kampanye terlokalisasi", body: "Copy berbahasa Indonesia dan arahan kreatif yang disesuaikan dengan negara tujuan serta momen pembelian." },
        { title: "Periklanan digital", body: "Perencanaan, penyiapan, pengujian, dan optimasi melalui platform periklanan resmi." },
        { title: "Perjalanan konversi WhatsApp", body: "Peralihan yang jelas dari iklan atau landing page menuju percakapan berkualitas dengan tim Anda." },
      ],
      proofEyebrow: "PENGALAMAN LINTAS NEGARA",
      proofTitle: "Dirancang dari perjalanan pelanggan yang nyata.",
      proofBody: "Portofolio MyBite mencakup organisasi yang melayani orang Indonesia di Malaysia, Taiwan, dan Hong Kong. GoNilai menunjukkan bagaimana pendekatan ini dapat bergerak dari penemuan hingga jalur pembelian yang mudah diakses.",
      proofPoints: ["Pengalaman di beberapa negara tujuan", "Konteks pelanggan berbahasa Indonesia", "Materi disetujui klien dan akses data terpisah"],
      fitEyebrow: "UNTUK SIAPA",
      fitTitle: "Untuk layanan yang ikut bergerak bersama manusia.",
      fits: ["Remitansi dan layanan finansial", "Cargo dan logistik", "Travel dan tiket", "Telekomunikasi", "Pelatihan dan pendidikan", "Layanan sehari-hari untuk pekerja migran Indonesia"],
      faqs: [
        { question: "Negara mana yang dapat didukung MyBite?", answer: "Pengalaman kami saat ini mencakup Malaysia, Taiwan, dan Hong Kong. Untuk negara baru, kami memulai dengan pemahaman pasar dan audiens sebelum merekomendasikan kanal atau kreatif." },
        { question: "Apakah MyBite hanya membuat konten berbahasa Indonesia?", answer: "Tidak. Bahasa hanya satu bagian dari lokalisasi. Kami merencanakan pesan, penawaran, konteks kreatif, peran kanal, dan alur konversi berdasarkan audiens Anda." },
        { question: "Bisakah iklan diarahkan menjadi percakapan WhatsApp?", answer: "Bisa. Kami dapat merancang perjalanan dari kampanye atau landing page menuju WhatsApp, termasuk kerangka pesan dan proses serah-terima ke tim Anda." },
        { question: "Bagaimana MyBite menangani data pelanggan?", answer: "MyBite tidak menjual atau membagikan database pelanggan klien. Kampanye menggunakan platform resmi, materi yang disetujui klien, dan kontrol akses yang sesuai." },
      ],
      related: [idLinks.malaysia, idLinks.gonilai],
    },
    malaysia: {
      ...indonesianBase,
      key: "malaysia",
      path: idLinks.malaysia.href,
      alternatePath: enLinks.malaysia.href,
      breadcrumbParent: "Pasar",
      eyebrow: "PASAR MALAYSIA",
      title: "Pemasaran untuk Komunitas Indonesia di Malaysia | MyBite",
      description: "Jangkau komunitas Indonesia di Malaysia melalui kampanye lokal, periklanan digital yang bertanggung jawab, dan alur konversi WhatsApp yang praktis.",
      heroTitle: "Jangkau orang Indonesia di Malaysia dengan pesan yang sesuai realitas mereka.",
      heroBody: "MyBite membantu brand mengubah peluang pasar yang luas menjadi perjalanan pelanggan yang terarah—dari penemuan yang relevan hingga percakapan atau pembelian yang praktis.",
      secondaryCta: "Lihat studi kasus GoNilai",
      secondaryHref: idLinks.gonilai.href,
      heroNote: "Fokus Malaysia · Konteks Indonesia · Konversi mobile-first",
      signalTitle: "Pendekatan khusus pasar",
      signals: ["Segmen audiens sebelum targeting", "Pesan Indonesia, konteks Malaysia", "Konversi mobile dan terbantu"],
      problemEyebrow: "MENGAPA KONTEKS LOKAL PENTING",
      problemTitle: "Satu negara dapat memuat banyak realitas pelanggan.",
      problemBody: "Orang Indonesia di Malaysia bukan satu audiens media yang seragam. Kebutuhan, kondisi kerja, akses pembayaran, lokasi, dan kepercayaan diri digital dapat berbeda. Pemasaran yang efektif dimulai dengan menentukan secara tepat untuk siapa kampanye dibuat.",
      problemCards: [
        { title: "Penawaran harus ikut berpindah", body: "Harga, pembayaran, pemenuhan, dukungan pelanggan, dan sinyal kepercayaan perlu masuk akal di Malaysia." },
        { title: "Pesan harus terasa akrab", body: "Bahasa Indonesia dapat memberi kejelasan, tetapi pesan terbaik juga mencerminkan keadaan dan prioritas audiens saat ini." },
        { title: "Langkah berikutnya harus praktis", body: "Halaman mobile-first, percakapan yang familier, serta pembayaran atau bantuan yang mudah mengurangi keraguan." },
      ],
      mechanismEyebrow: "DARI PASAR KE PERJALANAN",
      mechanismTitle: "Rencanakan perjalanan pelanggan sebelum membeli perhatian.",
      mechanismBody: "Kami memetakan audiens, kebutuhan, pesan, peran media, dan alur respons sebagai satu sistem. Dengan begitu, kampanye tidak berhenti pada impresi: ia membantu orang yang tepat menuju langkah berguna berikutnya.",
      steps: [
        { number: "01", title: "Pilih segmen", body: "Perjelas lokasi, situasi pelanggan, kebutuhan, dan hambatan pembelian." },
        { number: "02", title: "Bingkai nilai", body: "Hubungkan penawaran dengan prioritas nyata melalui komunikasi berbahasa Indonesia yang jelas." },
        { number: "03", title: "Bangun jalur respons", body: "Selaraskan iklan, landing page, Messenger atau WhatsApp, dan proses operasional." },
        { number: "04", title: "Belajar dari perilaku", body: "Gunakan sinyal kampanye dan percakapan untuk memperbaiki pesan serta perjalanan." },
      ],
      deliverablesEyebrow: "RUANG LINGKUP KAMPANYE MALAYSIA",
      deliverablesTitle: "Komponen untuk bergerak dari minat menuju tindakan.",
      deliverablesBody: "Kami membentuk ruang lingkup sesuai model bisnis, segmen pelanggan, dan kesiapan operasional Anda di Malaysia.",
      deliverables: [
        { title: "Definisi pasar dan audiens", body: "Segmen prioritas, kebutuhan, hambatan kepercayaan, dan hipotesis kampanye yang jelas." },
        { title: "Konsep kampanye lokal", body: "Arsitektur pesan dan arahan kreatif untuk orang Indonesia yang tinggal di Malaysia." },
        { title: "Aktivasi media", body: "Penyiapan kampanye, pengujian, optimasi, dan pelaporan secara bertanggung jawab." },
        { title: "Pengalaman konversi", body: "Jalur mobile-first menuju Messenger, WhatsApp, atau tindakan lain yang disetujui klien." },
      ],
      proofEyebrow: "PENGALAMAN DALAM PRAKTIK",
      proofTitle: "GoNilai: perjalanan yang dirancang untuk akses.",
      proofBody: "GoNilai menghubungkan orang Indonesia di Malaysia dengan kebutuhan digital sehari-hari melalui alur berbasis Messenger dan akses pembayaran tunai lokal. Proyek ini menunjukkan bagaimana pesan, antarmuka, bantuan, dan konteks pembayaran bekerja bersama.",
      proofPoints: ["Pengalaman mobile-first", "Bantuan melalui Messenger", "Akses pembayaran tunai lokal"],
      fitEyebrow: "MODEL BISNIS YANG RELEVAN",
      fitTitle: "Untuk brand yang melayani kebutuhan lintas negara sehari-hari.",
      fits: ["Remitansi dan akses finansial", "Prabayar, data, dan telekomunikasi", "Cargo dan pengiriman", "Travel dan transportasi", "Pelatihan dan keterampilan", "Layanan konsumen dan pekerja"],
      faqs: [
        { question: "Bisakah menargetkan semua orang Indonesia di Malaysia?", answer: "Kami menyarankan memulai dari segmen yang jelas, bukan menganggap semua orang Indonesia di Malaysia sebagai satu audiens. Ruang lingkup yang tepat bergantung pada kebutuhan, lokasi, penawaran, dan alur konversi." },
        { question: "Sebaiknya kampanye memakai Bahasa Indonesia atau Melayu?", answer: "Jawabannya bergantung pada segmen dan tujuan. Untuk audiens komunitas Indonesia, Bahasa Indonesia dapat meningkatkan kejelasan dan kedekatan, sementara konteks pelanggan tetap perlu mencerminkan Malaysia." },
        { question: "Bisakah MyBite mengelola seluruh funnel?", answer: "Kami dapat menghubungkan konten lokal, media berbayar, landing page, dan serah-terima ke WhatsApp atau Messenger. Proses penjualan dan operasional Anda perlu diselaraskan sebelum peluncuran." },
        { question: "Apakah hasil kampanye dijamin?", answer: "Tidak ada agensi bertanggung jawab yang dapat menjamin hasil bisnis sebelum pengujian. Kami menyepakati tujuan, mengukur sinyal yang berguna, lalu memperbaiki variabel strategis utama." },
      ],
      related: [idLinks.service, idLinks.gonilai],
    },
    gonilai: {
      ...indonesianBase,
      key: "gonilai",
      path: idLinks.gonilai.href,
      alternatePath: enLinks.gonilai.href,
      breadcrumbParent: "Karya",
      eyebrow: "GONILAI · MALAYSIA",
      title: "Studi Kasus GoNilai Malaysia | MyBite",
      description: "Lihat bagaimana GoNilai membangun perjalanan pembelian digital berbasis Messenger dan akses pembayaran tunai lokal untuk orang Indonesia di Malaysia.",
      heroTitle: "Perjalanan pembelian digital yang lebih sederhana untuk orang Indonesia di Malaysia.",
      heroBody: "GoNilai menghubungkan kebutuhan digital sehari-hari melalui pengalaman mobile-first berbasis Messenger dan akses pembayaran tunai lokal—mengurangi jarak antara minat dan penyelesaian.",
      secondaryCta: "Lihat proyek aktif",
      secondaryHref: "https://gonilai.my/",
      heroNote: "Perjalanan pelanggan · Mobile experience · Konversi terbantu",
      signalTitle: "Ringkasan proyek",
      signals: ["Audiens: Orang Indonesia di Malaysia", "Perjalanan: Berbasis Messenger", "Akses: Pembayaran tunai lokal"],
      image: { src: "/gonilai-phone-mockup.png", alt: "Pengalaman pembelian mobile GoNilai", label: "GoNilai · Mobile experience" },
      problemEyebrow: "TANTANGAN PELANGGAN",
      problemTitle: "Kemudahan digital bergantung pada seluruh perjalanan.",
      problemBody: "Penawaran yang berguna tetap sulit diselesaikan bila penemuan, panduan, akses pembayaran, dan keyakinan pelanggan tidak terhubung. GoNilai dibentuk untuk menjawab celah praktis ini bagi orang Indonesia yang tinggal di Malaysia.",
      problemCards: [
        { title: "Penemuan", body: "Proposisi perlu langsung dipahami dalam bahasa dan konteks pelanggan." },
        { title: "Panduan", body: "Percakapan terbimbing membantu pelanggan bergerak ketika antarmuka mandiri saja belum cukup." },
        { title: "Akses", body: "Alur pembelian perlu memperhitungkan cara pembayaran yang benar-benar dapat digunakan pelanggan." },
      ],
      mechanismEyebrow: "DESAIN PENGALAMAN",
      mechanismTitle: "Hubungkan pesan, percakapan, dan momen pembayaran.",
      mechanismBody: "Proyek ini menyatukan komunikasi pelanggan dengan jalur pembelian terbantu. Tujuannya bukan menambah antarmuka, melainkan memperjelas rute dari kebutuhan menuju tindakan selesai.",
      steps: [
        { number: "01", title: "Kenali kebutuhan", body: "Tampilkan produk digital sehari-hari dalam konteks pelanggan yang jelas dan relevan." },
        { number: "02", title: "Masuk ke Messenger", body: "Arahkan pelanggan ke alur percakapan yang familier dan terbimbing." },
        { number: "03", title: "Pilih dan konfirmasi", body: "Bantu pelanggan menentukan produk yang dibutuhkan dan tindakan selanjutnya." },
        { number: "04", title: "Selesaikan dengan akses lokal", body: "Dukung jalur pembelian yang mencakup akses pembayaran tunai lokal." },
      ],
      deliverablesEyebrow: "YANG DITUNJUKKAN PROYEK INI",
      deliverablesTitle: "Konversi adalah pengalaman, bukan sekadar tombol.",
      deliverablesBody: "GoNilai menjadi contoh praktis cara MyBite memikirkan perjalanan pelanggan lintas negara. Metrik performa yang belum dipublikasikan tidak digunakan; fokusnya adalah desain dan model layanan yang terlihat pada pengalaman aktif.",
      deliverables: [
        { title: "Proposisi khusus audiens", body: "Konteks layanan yang jelas untuk orang Indonesia yang tinggal di Malaysia." },
        { title: "Presentasi mobile-first", body: "Pengalaman yang dibentuk untuk perangkat yang paling mungkin digunakan pelanggan." },
        { title: "Bantuan percakapan", body: "Messenger menjadi bagian dari perjalanan, bukan kanal dukungan yang terpisah." },
        { title: "Akses pembayaran praktis", body: "Langkah akhir mencerminkan akses nyata, termasuk pembayaran tunai lokal." },
      ],
      proofEyebrow: "HASIL PENGALAMAN",
      proofTitle: "Rute yang menyatu dari penemuan menuju pembelian.",
      proofBody: "Hasilnya adalah pengalaman digital yang terhubung: pelanggan dapat memahami penawaran, memasuki percakapan terbimbing, dan bergerak menuju metode pembayaran yang sesuai situasi lokal mereka.",
      proofPoints: ["Proposisi lintas negara yang jelas", "Perjalanan pelanggan terbimbing", "Jalur pembayaran yang relevan secara operasional"],
      fitEyebrow: "MENERAPKAN PRINSIPNYA",
      fitTitle: "Berguna untuk perjalanan yang memerlukan kepercayaan dan bantuan.",
      fits: ["Layanan finansial dan remitansi", "Telekomunikasi dan produk prabayar", "Travel dan tiket", "Cargo dan logistik", "Pendaftaran pelatihan", "Pembelian mobile terbantu lainnya"],
      faqs: [
        { question: "Apa itu GoNilai?", answer: "GoNilai adalah perjalanan pembelian digital untuk orang Indonesia di Malaysia. Proyek ini menghubungkan kebutuhan digital sehari-hari melalui pengalaman berbasis Messenger dan akses pembayaran tunai lokal." },
        { question: "Apa fokus pekerjaan MyBite?", answer: "Studi kasus ini berfokus pada perjalanan pelanggan: komunikasi yang relevan, pengalaman mobile-first, bantuan percakapan, dan jalur pembayaran yang mudah diakses." },
        { question: "Apakah hasil performa dipublikasikan?", answer: "Tidak ada metrik kampanye atau pendapatan terverifikasi yang dipublikasikan di halaman ini. Studi kasus sengaja berfokus pada desain pengalaman dan model layanan yang terlihat." },
        { question: "Bisakah MyBite membuat perjalanan serupa?", answer: "Kami dapat menilai apakah perjalanan konversi lokal dan terbantu cocok untuk audiens serta operasional Anda. Solusi yang disarankan bergantung pada pasar, penawaran, pembayaran, dan proses dukungan yang tersedia." },
      ],
      related: [idLinks.service, idLinks.malaysia],
    },
  },
};
