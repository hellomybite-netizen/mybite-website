import { buildLandingMetadata } from "../../../../landing-metadata";
import { landingPages } from "../../../../seo-landing-data";
import SeoLandingPage from "../../../../seo-landing-page";

const page = landingPages.en.diaspora;
export const metadata = buildLandingMetadata(page);

export default function IndonesianDiasporaMarketingPage() {
  return <SeoLandingPage page={page} />;
}
