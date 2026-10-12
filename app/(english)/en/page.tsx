import LocalizedHome from "../../localized-home";
import { buildLocalizedMetadata } from "../../seo";

export const metadata = buildLocalizedMetadata("en");

export default function EnglishHome() {
  return <LocalizedHome lang="en" />;
}
