export type InsightSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type InsightArticle = {
  slug: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  readTime: string;
  primaryLink: { label: string; href: string };
  secondaryLink: { label: string; href: string };
  sections: InsightSection[];
  takeaway: string;
};

export const insightArticles: InsightArticle[] = [
  {
    slug: "choosing-digital-marketing-agency-indonesian-communities-abroad",
    eyebrow: "AGENCY STRATEGY",
    title: "What to Expect from a Digital Marketing Agency for Indonesian Communities Abroad",
    seoTitle: "Choosing a Diaspora Digital Marketing Agency | MyBite",
    description:
      "A practical guide to choosing a digital marketing agency for Indonesian communities abroad, from audience definition and localization to conversion and reporting.",
    intro:
      "Reaching Indonesians outside Indonesia is not simply a matter of translating a domestic campaign and changing the location target. The audience is shaped by a different daily environment, local payment habits, work schedules, media behavior, and levels of trust. A capable agency should connect those realities to one clear customer journey.",
    readTime: "7 min read",
    primaryLink: {
      label: "digital marketing agency for Indonesian communities abroad",
      href: "/en/",
    },
    secondaryLink: {
      label: "Indonesian diaspora marketing service",
      href: "/en/services/indonesian-diaspora-marketing/",
    },
    sections: [
      {
        heading: "Start with a specific community, not a broad diaspora label",
        paragraphs: [
          "“Indonesians abroad” is useful as a category, but it is too broad to guide a campaign. Indonesians in Malaysia, Taiwan, Hong Kong, and Singapore live within different languages, regulations, routines, and buying environments. Even within one country, a professional audience, a migrant worker community, and a family decision-maker may respond to very different messages.",
          "The first responsibility of an agency is therefore definition. It should clarify who the campaign is for, where that group is located, what need brings them into the market, and what could stop them from acting. Media targeting only becomes useful after this customer context is clear.",
        ],
        bullets: [
          "Destination country and priority locations",
          "Customer situation and immediate need",
          "Language preference and confidence level",
          "Trust, payment, and service barriers",
        ],
      },
      {
        heading: "Connect localization to the commercial offer",
        paragraphs: [
          "Good localization is not decoration. It affects how the offer is explained, which proof is credible, when the message appears, and what the customer is expected to do next. Bahasa Indonesia may create familiarity, but the surrounding experience still needs to make sense in the destination country.",
          "An agency should review the proposition as a complete system: pricing and currency, eligibility, delivery coverage, customer support, payment options, and the handoff after a lead responds. A locally relevant advertisement cannot compensate for a confusing or inaccessible next step.",
        ],
      },
      {
        heading: "Plan media and conversion as one journey",
        paragraphs: [
          "Campaigns often separate creative work, media buying, landing pages, and sales follow-up. For diaspora audiences, that separation creates unnecessary friction. The customer may discover the brand on social media, compare the offer on a mobile page, and ask a final question through WhatsApp before deciding.",
          "The agency should assign a role to every stage. Creative earns attention, the landing page creates clarity, and the conversation channel helps the customer complete the next step. The goal is not to push everyone toward the same action; it is to design the shortest credible path for the audience and offer.",
        ],
        bullets: [
          "Awareness: introduce a relevant problem and proposition",
          "Consideration: explain the offer, process, and proof",
          "Conversion: provide a practical action or assisted conversation",
          "Learning: use campaign and conversation signals to improve the path",
        ],
      },
      {
        heading: "Choose an agency by operating discipline, not promises",
        paragraphs: [
          "A responsible agency will not guarantee a commercial result before it understands the market, offer, and sales process. It should instead explain how it will form a hypothesis, test the strongest variables, protect account ownership, and report meaningful progress.",
          "Ask who owns the advertising accounts, how customer information is handled, how creative approvals work, and what happens when the early signal is weak. Clear operating rules are especially important when campaigns cross borders and involve several teams.",
        ],
      },
    ],
    takeaway:
      "The right agency brings market context, localized communication, responsible media activation, and a practical conversion journey into one plan. That combination matters more than a long list of disconnected channel services.",
  },
  {
    slug: "localization-indonesian-diaspora-marketing",
    eyebrow: "LOCALIZATION",
    title: "Indonesian Diaspora Marketing: Why Localization Goes Beyond Translation",
    seoTitle: "Indonesian Diaspora Marketing & Localization | MyBite",
    description:
      "Learn how audience context, destination-country realities, trust signals, and conversion design make diaspora marketing more effective than direct translation.",
    intro:
      "Translation answers what the words mean. Localization answers whether the entire message feels appropriate, credible, and useful in the customer’s current situation. For Indonesian communities abroad, that distinction can determine whether a campaign earns attention or feels disconnected from daily life.",
    readTime: "6 min read",
    primaryLink: {
      label: "marketing agency for Indonesian communities abroad",
      href: "/en/",
    },
    secondaryLink: {
      label: "localized Indonesian diaspora marketing",
      href: "/en/services/indonesian-diaspora-marketing/",
    },
    sections: [
      {
        heading: "Language is only the visible layer",
        paragraphs: [
          "A sentence can be grammatically correct and still feel wrong. The tone may be too formal, the example may assume life in Indonesia, or the call to action may ignore how the audience actually buys in the destination country. The strongest copy reflects the customer’s setting without turning culture into a stereotype.",
          "Begin with the situation behind the search or scroll. Someone sending money home, arranging cargo, buying a ticket, or topping up a family member’s phone is not only completing a transaction. They may be balancing urgency, responsibility, trust, and limited time. Those factors should shape the message before a writer chooses the words.",
        ],
      },
      {
        heading: "Localize the offer, not just the advertisement",
        paragraphs: [
          "Customers judge a campaign through the complete offer. Currency, payment access, delivery area, operating hours, support language, and required documents can all affect confidence. If the advertisement feels local but the process does not, trust falls at the moment it matters most.",
          "A localization review should follow the customer from first impression to completion. This exposes practical gaps early and helps the campaign promise only what the business can deliver consistently.",
        ],
        bullets: [
          "Use destination-appropriate currency and service information",
          "Explain eligibility, coverage, and limitations clearly",
          "Match support availability to the audience’s routine",
          "Make payment and fulfillment steps easy to verify",
        ],
      },
      {
        heading: "Build trust with recognizable details",
        paragraphs: [
          "Trust does not require exaggerated cultural references. It often comes from smaller signals: familiar language, a clear local contact path, transparent pricing, relevant proof, and a process the customer can understand on a phone.",
          "Creative teams should test which details reduce uncertainty. One audience may need proof of delivery, while another needs to see payment methods or customer support. The answer should come from the buying barrier, not from a generic checklist of cultural symbols.",
        ],
      },
      {
        heading: "Create a repeatable localization workflow",
        paragraphs: [
          "Localization improves when it becomes a process rather than a final copy check. Give local context a place in the brief, review the offer before producing assets, and include customer-facing teams in campaign learning.",
          "After launch, compare ad responses with landing-page behavior and recurring questions in sales conversations. These signals show whether the message is attracting the right people and whether the next step is clear enough.",
        ],
        bullets: [
          "Document the audience situation and buying barrier",
          "Review the offer for destination-country fit",
          "Develop message and creative hypotheses",
          "Learn from both media data and customer conversations",
        ],
      },
    ],
    takeaway:
      "Translation makes a message readable. Localization makes the proposition believable and actionable. For diaspora campaigns, the second outcome is the one that creates commercial value.",
  },
  {
    slug: "whatsapp-funnel-indonesian-audiences-abroad",
    eyebrow: "WHATSAPP CONVERSION",
    title: "How to Build a WhatsApp Funnel for Indonesian Audiences Abroad",
    seoTitle: "WhatsApp Funnels for Indonesian Audiences Abroad | MyBite",
    description:
      "A practical framework for turning localized campaigns into qualified WhatsApp conversations with clear intent, handoffs, and measurement.",
    intro:
      "WhatsApp can make a cross-border customer journey feel more familiar, but adding a chat button is not the same as building a funnel. A useful WhatsApp journey prepares the customer before the click, gives the conversation a clear starting point, and helps the receiving team move the inquiry forward.",
    readTime: "7 min read",
    primaryLink: {
      label: "digital marketing partner for Indonesian audiences abroad",
      href: "/en/",
    },
    secondaryLink: {
      label: "diaspora marketing and WhatsApp conversion service",
      href: "/en/services/indonesian-diaspora-marketing/",
    },
    sections: [
      {
        heading: "Define the job of the conversation",
        paragraphs: [
          "Before designing ads or messages, decide what a successful conversation should achieve. It might confirm eligibility, recommend a product, arrange a quotation, answer a payment question, or schedule a call. One conversation should have one primary job.",
          "This definition affects everything upstream. The campaign can pre-qualify the audience, the landing page can answer common questions, and the opening message can carry the information the service team needs.",
        ],
        bullets: [
          "What does the customer need to know before starting?",
          "What information should the opening message include?",
          "Who receives the conversation and during which hours?",
          "What next step marks a qualified inquiry?",
        ],
      },
      {
        heading: "Prepare intent before the WhatsApp click",
        paragraphs: [
          "Sending cold traffic directly into chat can produce vague messages and slow conversations. The advertisement or landing page should first explain the audience, offer, essential conditions, and expected next step. This helps customers decide whether the service fits before contacting the team.",
          "A pre-filled message can then preserve context. Instead of a generic “Hi,” it can mention the service or market the customer selected. Keep it editable and simple; the purpose is to reduce effort, not force the customer into a rigid script.",
        ],
      },
      {
        heading: "Design the human handoff",
        paragraphs: [
          "A campaign cannot compensate for an unclear response process. The receiving team should know the campaign promise, the intended audience, and the questions needed to guide the customer. Response quality is part of the conversion experience.",
          "Build a short conversation guide rather than a robotic script. Include a welcome, a small number of qualifying questions, approved answers to common concerns, and a clear route to the next action. Escalation rules should be defined for questions that require specialist support.",
        ],
        bullets: [
          "Acknowledge the customer’s stated need",
          "Ask only for information needed at that stage",
          "Explain the next action and expected timing",
          "Record recurring questions for campaign improvement",
        ],
      },
      {
        heading: "Measure more than chat starts",
        paragraphs: [
          "A click to WhatsApp shows intent, but it does not confirm lead quality or commercial value. Track the stages after the click: conversations received, qualified inquiries, quotations or applications, completed actions, and reasons for drop-off.",
          "Use aggregated operational feedback where possible and avoid sending unnecessary customer details between systems. The goal is to understand which audience and message produce useful conversations while keeping data access limited to the people and platforms that need it.",
        ],
      },
    ],
    takeaway:
      "A WhatsApp funnel works when campaign context, customer preparation, human response, and measurement are designed together. The chat button is only the doorway.",
  },
  {
    slug: "marketing-to-indonesians-in-malaysia",
    eyebrow: "MALAYSIA MARKET",
    title: "Marketing to Indonesians in Malaysia: A Practical Guide for Brands",
    seoTitle: "Marketing to Indonesians in Malaysia | MyBite",
    description:
      "Plan relevant campaigns for Indonesians in Malaysia by connecting audience context, localized messaging, mobile journeys, and assisted conversion.",
    intro:
      "Malaysia is close to Indonesia geographically and linguistically, but that similarity can create false confidence. A campaign built for customers in Indonesia cannot simply be copied across the border. The audience is living within Malaysian systems, prices, schedules, media environments, and service expectations.",
    readTime: "7 min read",
    primaryLink: {
      label: "digital marketing agency for Indonesian communities",
      href: "/en/",
    },
    secondaryLink: {
      label: "marketing to Indonesians in Malaysia",
      href: "/en/markets/malaysia/",
    },
    sections: [
      {
        heading: "Choose the segment before choosing the channel",
        paragraphs: [
          "Indonesians in Malaysia are not one uniform audience. Location, occupation, family responsibilities, digital confidence, and access to financial services can change both the need and the response path. A campaign should identify the customer situation it is designed to serve.",
          "This prevents broad targeting from becoming the strategy. Channel choice should follow the audience definition: where the customer is likely to discover the offer, what information they need, and which action is practical at that moment.",
        ],
        bullets: [
          "Priority location and customer context",
          "Immediate problem or buying occasion",
          "Available payment and support options",
          "Most practical conversion or assistance path",
        ],
      },
      {
        heading: "Use Indonesian language within a Malaysian reality",
        paragraphs: [
          "Bahasa Indonesia can improve clarity and familiarity, especially when the product is being considered for personal or family needs. But the surrounding information must still reflect Malaysia. Currency, store references, delivery coverage, working hours, and customer support should be locally accurate.",
          "Avoid relying on slang or cultural symbols as shortcuts to relevance. A clear explanation of the offer and a credible next step will usually do more work than decorative familiarity.",
        ],
      },
      {
        heading: "Make the mobile journey easy to complete",
        paragraphs: [
          "Campaign traffic is often mobile and interrupted. The page should state who the offer is for, the main benefit, essential requirements, and the next action without forcing the visitor to search for basic information.",
          "For offers that need explanation or reassurance, WhatsApp or Messenger can support the journey. The assisted path still needs operational design: a prepared opening message, an informed response team, and clear follow-up.",
        ],
        bullets: [
          "Lead with the customer situation and practical value",
          "Show local conditions before the call to action",
          "Reduce form fields and unnecessary navigation",
          "Offer assistance where self-service is likely to stall",
        ],
      },
      {
        heading: "Learn from both campaign and service signals",
        paragraphs: [
          "Media metrics show which creative earns attention, but customer questions reveal where understanding breaks down. Combine both sources when improving the campaign. Repeated questions may indicate missing information, while many clicks with few qualified conversations may signal weak targeting or an unclear offer.",
          "Review the customer journey regularly with marketing, sales, and service teams. This keeps optimization connected to commercial reality rather than isolated platform numbers.",
        ],
      },
    ],
    takeaway:
      "Marketing to Indonesians in Malaysia works best when Indonesian-language relevance and Malaysian operating context are planned together. The campaign should feel familiar and function locally.",
  },
  {
    slug: "measuring-digital-campaigns-indonesian-communities-abroad",
    eyebrow: "MEASUREMENT",
    title: "How to Measure Digital Campaigns for Indonesian Communities Abroad",
    seoTitle: "Measuring Indonesian Diaspora Campaigns | MyBite",
    description:
      "A measurement framework for diaspora campaigns covering attention, qualified conversations, commercial outcomes, learning, and responsible data access.",
    intro:
      "Diaspora campaigns often span advertising platforms, landing pages, messaging apps, and offline service teams. A useful measurement plan connects those stages without pretending that every customer action can or should be tracked as one perfect sequence.",
    readTime: "6 min read",
    primaryLink: {
      label: "digital marketing agency serving Indonesian communities abroad",
      href: "/en/",
    },
    secondaryLink: {
      label: "Indonesian diaspora campaign strategy",
      href: "/en/services/indonesian-diaspora-marketing/",
    },
    sections: [
      {
        heading: "Begin with the business decision",
        paragraphs: [
          "Measurement should help a team decide what to continue, change, or stop. Start by writing the commercial objective and the customer action that indicates progress. This creates a hierarchy of metrics instead of a dashboard where every number appears equally important.",
          "For an awareness campaign, useful signals may include qualified reach, message recall proxies, and branded interest. For a lead journey, the priority may be qualified conversations, completed applications, or revenue. The campaign type determines the scorecard.",
        ],
      },
      {
        heading: "Measure the journey in layers",
        paragraphs: [
          "No single metric explains a cross-border customer journey. Organize measurement by stage so the team can see where performance changes and what kind of action is required.",
          "Platform metrics are useful for diagnosing delivery and creative response. Website and conversation outcomes are stronger indicators of customer progress. Commercial records confirm whether the marketing activity created value.",
        ],
        bullets: [
          "Delivery: reach, frequency, impressions, and media cost",
          "Response: clicks, landing-page engagement, and message starts",
          "Quality: qualified inquiries and relevant customer segments",
          "Outcome: completed applications, purchases, or agreed business value",
        ],
      },
      {
        heading: "Add context to every comparison",
        paragraphs: [
          "Country, audience segment, offer, creative, device, and response process can all change the result. Compare like with like wherever possible. A lower cost per click is not automatically better if those clicks produce weaker conversations.",
          "Keep a short campaign learning log alongside the dashboard. Record what changed, why it changed, and what happened next. This prevents teams from repeating tests or drawing conclusions from several simultaneous changes.",
        ],
      },
      {
        heading: "Protect customer data while learning",
        paragraphs: [
          "Measurement does not require collecting every available detail. Decide which information is necessary for campaign decisions, limit access, and use aggregated reporting when individual data is not needed. Advertising, analytics, and customer-service accounts should remain under clear ownership and approved access.",
          "When a campaign hands customers to WhatsApp or another service channel, agree on how outcomes will be summarized back to marketing. The team can learn from qualified-conversation counts and recurring barriers without circulating personal conversation details unnecessarily.",
        ],
        bullets: [
          "Collect only data connected to a defined purpose",
          "Keep client accounts and customer information under client control",
          "Restrict access by role and remove access when it is no longer needed",
          "Report patterns and outcomes instead of unnecessary personal detail",
        ],
      },
    ],
    takeaway:
      "Good measurement turns scattered campaign activity into decisions. It connects media signals, customer behavior, operational feedback, and business outcomes while keeping data access proportionate.",
  },
];

export function getInsight(slug: string) {
  return insightArticles.find((article) => article.slug === slug);
}
