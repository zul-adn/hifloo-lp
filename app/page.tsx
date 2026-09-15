import DaftarDialog from "@/components/daftar-dialog";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import {
  AjakanAkhir,
  Fitur,
  Harga,
  Hero,
  Langkah,
  Masalah,
  Sorotan,
  TanyaJawab,
  UntukSiapa,
} from "@/components/sections";

export default function Beranda() {
  return (
    <>
      <SiteHeader />
      <main id="konten">
        <Hero />
        <Masalah />
        <Fitur />
        <Sorotan />
        <UntukSiapa />
        <Langkah />
        <Harga />
        <TanyaJawab />
        <AjakanAkhir />
      </main>
      <SiteFooter />
      <DaftarDialog />
    </>
  );
}
