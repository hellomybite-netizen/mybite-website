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
  ];
}
