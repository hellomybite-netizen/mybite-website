import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsightPage from "../../../../insight-page";
import { getInsight, insightArticles } from "../../../../insights-data";

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return {};

  const canonical = `https://mybite.id/en/insights/${article.slug}/`;
  return {
    title: { absolute: article.seoTitle },
    description: article.description,
    alternates: { canonical },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: canonical,
      publishedTime: "2026-10-16",
      modifiedTime: "2026-10-16",
      images: [{ url: "https://mybite.id/og.png", alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: ["https://mybite.id/og.png"],
    },
  };
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();

  return <InsightPage article={article} />;
}
