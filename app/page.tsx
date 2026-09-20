import DaftarDialog from "@/components/daftar-dialog";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import {
  Audiences,
  Faq,
  Features,
  FinalCta,
  Hero,
  Highlights,
  Pricing,
  Problems,
  Steps,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="konten">
        <Hero />
        <Problems />
        <Features />
        <Highlights />
        <Audiences />
        <Steps />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <DaftarDialog />
    </>
  );
}
