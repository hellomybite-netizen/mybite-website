import { buildLandingMetadata } from "../../../../landing-metadata";
import { landingPages } from "../../../../seo-landing-data";
import SeoLandingPage from "../../../../seo-landing-page";

const page = landingPages.id.malaysia;
export const metadata = buildLandingMetadata(page);

export default function PasarMalaysiaPage() {
  return <SeoLandingPage page={page} />;
}
