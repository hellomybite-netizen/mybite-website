import { buildLandingMetadata } from "../../../../landing-metadata";
import { landingPages } from "../../../../seo-landing-data";
import SeoLandingPage from "../../../../seo-landing-page";

const page = landingPages.en.malaysia;
export const metadata = buildLandingMetadata(page);

export default function MalaysiaMarketPage() {
  return <SeoLandingPage page={page} />;
}
