import { buildLandingMetadata } from "../../../../landing-metadata";
import { landingPages } from "../../../../seo-landing-data";
import SeoLandingPage from "../../../../seo-landing-page";

const page = landingPages.en.gonilai;
export const metadata = buildLandingMetadata(page);

export default function GoNilaiCaseStudyPage() {
  return <SeoLandingPage page={page} />;
}
