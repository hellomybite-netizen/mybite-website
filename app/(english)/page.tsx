import LocalizedHome from "../localized-home";
import { buildLocalizedMetadata } from "../seo";

export const metadata = buildLocalizedMetadata("en");

export default function Home() {
  return <LocalizedHome lang="en" />;
}
