import LocalizedHome from "../../localized-home";
import { buildLocalizedMetadata } from "../../seo";

export const metadata = buildLocalizedMetadata("id");

export default function IndonesianHome() {
  return <LocalizedHome lang="id" />;
}
