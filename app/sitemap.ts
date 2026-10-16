import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mybite.id/en/",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://mybite.id/id/",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://mybite.id/en/services/indonesian-diaspora-marketing/",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://mybite.id/id/layanan/pemasaran-diaspora-indonesia/",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://mybite.id/en/markets/malaysia/",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://mybite.id/id/pasar/malaysia/",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://mybite.id/en/work/gonilai-malaysia/",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://mybite.id/id/karya/gonilai-malaysia/",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://mybite.id/en/insights/",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://mybite.id/en/insights/choosing-digital-marketing-agency-indonesian-communities-abroad/",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://mybite.id/en/insights/localization-indonesian-diaspora-marketing/",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://mybite.id/en/insights/whatsapp-funnel-indonesian-audiences-abroad/",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://mybite.id/en/insights/marketing-to-indonesians-in-malaysia/",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://mybite.id/en/insights/measuring-digital-campaigns-indonesian-communities-abroad/",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
