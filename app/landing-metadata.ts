import type { Metadata } from "next";
import type { LandingPageData } from "./seo-landing-data";

const siteUrl = "https://mybite.id";

export function buildLandingMetadata(page: LandingPageData): Metadata {
  const canonical = `${siteUrl}${page.path}`;
  const english = page.lang === "en" ? page.path : page.alternatePath;
  const indonesian = page.lang === "id" ? page.path : page.alternatePath;
  const image = page.key === "gonilai" ? "/gonilai-phone-mockup.png" : "/og.png";

  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: {
      canonical,
      languages: {
        en: `${siteUrl}${english}`,
        id: `${siteUrl}${indonesian}`,
        "x-default": `${siteUrl}${english}`,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      type: page.key === "gonilai" ? "article" : "website",
      url: canonical,
      locale: page.lang === "en" ? "en_US" : "id_ID",
      alternateLocale: [page.lang === "en" ? "id_ID" : "en_US"],
      images: [{ url: `${siteUrl}${image}`, alt: page.heroTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [`${siteUrl}${image}`],
    },
  };
}
