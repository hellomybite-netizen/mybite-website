import type { Metadata } from "next";
import type { Language } from "./localized-home";

const siteUrl = "https://mybite.id";

const localizedSeo = {
  en: {
    title: "Digital Marketing Agency for Indonesian Communities | MyBite",
    description:
      "MyBite is a digital marketing agency helping brands reach Indonesian communities abroad through localized content, digital advertising, and WhatsApp funnels.",
    path: "/en/",
    locale: "en_US",
    alternateLocale: "id_ID",
  },
  id: {
    title: "Agensi Digital Marketing untuk Diaspora Indonesia | MyBite",
    description:
      "MyBite adalah agensi digital marketing yang membantu brand menjangkau komunitas Indonesia di luar negeri melalui konten lokal, iklan digital, dan funnel WhatsApp.",
    path: "/id/",
    locale: "id_ID",
    alternateLocale: "en_US",
  },
} as const;

export function buildLocalizedMetadata(lang: Language): Metadata {
  const seo = localizedSeo[lang];
  const canonical = `${siteUrl}${seo.path}`;

  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: {
      canonical,
      languages: {
        en: `${siteUrl}/en/`,
        id: `${siteUrl}/id/`,
        "x-default": `${siteUrl}/en/`,
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
      url: canonical,
      locale: seo.locale,
      alternateLocale: [seo.alternateLocale],
      images: [
        {
          url: `${siteUrl}/og.png`,
          width: 1200,
          height: 630,
          alt: "MyBite — Local insight. Global growth.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`${siteUrl}/og.png`],
    },
  };
}
