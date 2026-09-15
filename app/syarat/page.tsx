import type { Metadata } from "next";

import LegalShell, { type LegalSection } from "@/components/legal-shell";
import { SITE } from "@/lib/site";

const DIPERBARUI = "15 September 2026";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description:
    "Syarat dan Ketentuan penggunaan Hifloo — hak dan kewajiban pengguna, paket berlangganan, pembayaran, kepemilikan data, serta batasan tanggung jawab.",
  alternates: { canonical: `${SITE.url}/syarat` },
  openGraph: {
    type: "article",
    url: `${SITE.url}/syarat`,
    title: "Syarat & Ketentuan | Hifloo",
    description: "Ketentuan penggunaan layanan Hifloo untuk pelaku usaha.",
  },
};

const SECTIONS: LegalSection[] = [
  {
    id: "penerimaan",
    title: "1. Penerimaan Ketentuan",
    body: (
      <>
        <p>
          Syarat &amp; Ketentuan ini mengatur penggunaan aplikasi Hifloo, dashboard web di{" "}
          <strong>app.hifloo.com</strong>, serta layanan terkait lainnya (selanjutnya disebut
          &ldquo;Layanan&rdquo;).
        </p>
        <p>
          Dengan membuat akun atau menggunakan Layanan, Anda menyatakan telah membaca, memahami, dan
          menyetujui ketentuan ini. Jika Anda tidak setuju, mohon tidak menggunakan Layanan.
        </p>
        <p>
          Jika Anda menggunakan Layanan atas nama badan usaha, Anda menyatakan berwenang mengikat
          badan usaha tersebut pada ketentuan ini.
        </p>
      </>
    ),
  },
  {
    id: "akun",
    title: "2. Akun dan Keamanannya",
    body: (
      <>
        <p>
          Anda wajib memberikan data yang benar saat mendaftar dan memperbaruinya bila berubah.
          Pemilik akun bertanggung jawab atas seluruh aktivitas yang terjadi di dalam akunnya,
          termasuk aktivitas akun karyawan yang ia buat.
        </p>
        <ul>
          <li>Jaga kerahasiaan kata sandi dan jangan membagikannya.</li>
          <li>Berikan tingkat akses secukupnya kepada setiap karyawan.</li>
          <li>
            Segera beri tahu kami di <a href={`mailto:${SITE.email}`}>{SITE.email}</a> bila Anda
            menduga ada penggunaan akun tanpa izin.
          </li>
        </ul>
        <p>Usia minimum pengguna adalah 18 tahun atau sudah cakap hukum menurut hukum Indonesia.</p>
      </>
    ),
  },
  {
    id: "penggunaan",
    title: "3. Penggunaan yang Diperbolehkan",
    body: (
      <>
        <p>Layanan disediakan untuk keperluan operasional usaha Anda. Anda setuju untuk tidak:</p>
        <ul>
          <li>Menggunakan Layanan untuk kegiatan yang melanggar hukum Republik Indonesia.</li>
          <li>Mencoba mengakses data usaha lain, atau menembus pembatasan keamanan sistem.</li>
          <li>
            Menyalin, menjual kembali, menyewakan, atau merekayasa balik bagian mana pun dari
            Layanan tanpa persetujuan tertulis kami.
          </li>
          <li>
            Mengirim beban permintaan yang tidak wajar sehingga mengganggu kenyamanan pengguna lain.
          </li>
          <li>Mengunggah program berbahaya atau konten yang melanggar hak pihak ketiga.</li>
        </ul>
        <p>
          Kami dapat menangguhkan akun yang melanggar ketentuan ini, dengan pemberitahuan lebih dulu
          bila keadaan memungkinkan.
        </p>
      </>
    ),
  },
  {
    id: "paket",
    title: "4. Paket, Masa Uji Coba, dan Perubahan Harga",
    body: (
      <>
        <p>
          Paket Gratis tersedia tanpa batas waktu dengan kapasitas yang terbatas sebagaimana
          tercantum di halaman harga. Paket berbayar memiliki masa uji coba 30 hari tanpa memerlukan
          kartu kredit.
        </p>
        <p>
          Setelah masa uji coba berakhir dan tidak ada pembayaran, akun otomatis turun ke paket
          Gratis. Data Anda tidak dihapus, tetapi fitur di luar paket Gratis berhenti dapat diakses.
        </p>
        <p>
          Kami dapat mengubah harga atau isi paket. Perubahan diberitahukan paling lambat 30 hari
          sebelum berlaku, dan tidak mengubah tagihan periode yang sedang berjalan.
        </p>
      </>
    ),
  },
  {
    id: "pembayaran",
    title: "5. Pembayaran dan Pengembalian Dana",
    body: (
      <>
        <p>
          Biaya berlangganan ditagih di muka untuk setiap periode, dalam Rupiah, dan sudah termasuk
          pajak yang berlaku kecuali dinyatakan lain.
        </p>
        <ul>
          <li>Keterlambatan pembayaran dapat menyebabkan penangguhan akses ke fitur berbayar.</li>
          <li>
            Pembatalan berlaku pada akhir periode berjalan. Anda tetap dapat memakai fitur berbayar
            sampai periode itu habis.
          </li>
          <li>
            Biaya periode yang sudah berjalan tidak dikembalikan, kecuali terjadi kegagalan Layanan
            yang berkepanjangan dari sisi kami.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data",
    title: "6. Kepemilikan Data",
    body: (
      <>
        <p>
          <strong>Data usaha Anda tetap milik Anda.</strong> Kami hanya memprosesnya untuk
          menjalankan Layanan, sebagaimana dijelaskan dalam{" "}
          <a href="/privacy">Kebijakan Privasi</a>.
        </p>
        <p>
          Anda dapat mengekspor data transaksi, barang, dan karyawan dalam format yang dapat dibaca
          umum (Excel atau CSV) kapan saja selama akun aktif. Setelah akun ditutup atas permintaan
          Anda, data dihapus sesuai jangka waktu pada Kebijakan Privasi.
        </p>
        <p>
          Perangkat lunak, tampilan antarmuka, dan merek Hifloo tetap menjadi milik kami. Berlangganan
          memberi Anda hak pakai, bukan hak milik.
        </p>
      </>
    ),
  },
  {
    id: "ketersediaan",
    title: "7. Ketersediaan Layanan",
    body: (
      <>
        <p>
          Kami berupaya menjaga Layanan tetap dapat diakses, namun tidak menjanjikan bebas gangguan.
          Pemeliharaan terjadwal diumumkan lebih dulu jika berpotensi mengganggu.
        </p>
        <p>
          Fitur mode offline pada aplikasi kasir memungkinkan transaksi tetap tercatat saat koneksi
          terputus, dan dikirim ke server ketika koneksi kembali tersedia.
        </p>
        <p>
          Kami dapat mengubah, menambah, atau menghentikan suatu fitur. Penghentian fitur penting
          diberitahukan paling lambat 30 hari sebelumnya.
        </p>
      </>
    ),
  },
  {
    id: "tanggung-jawab",
    title: "8. Batasan Tanggung Jawab",
    body: (
      <>
        <p>
          Layanan disediakan sebagaimana adanya. Hifloo adalah alat bantu pencatatan; keputusan
          usaha, kewajiban perpajakan, dan kepatuhan terhadap peraturan tetap menjadi tanggung jawab
          Anda.
        </p>
        <p>
          Sejauh diizinkan hukum yang berlaku, tanggung jawab kami atas kerugian yang timbul dari
          penggunaan Layanan dibatasi paling banyak sebesar biaya berlangganan yang Anda bayarkan
          dalam 6 bulan terakhir.
        </p>
        <p>
          Kami menyarankan Anda tetap menyimpan salinan data penting secara berkala melalui fitur
          ekspor.
        </p>
      </>
    ),
  },
  {
    id: "penghentian",
    title: "9. Penghentian",
    body: (
      <>
        <p>
          Anda dapat berhenti berlangganan atau menutup akun kapan saja melalui dashboard atau dengan
          menghubungi kami.
        </p>
        <p>
          Kami dapat menangguhkan atau menutup akun bila terjadi pelanggaran ketentuan ini,
          penyalahgunaan Layanan, atau tunggakan pembayaran. Kecuali dalam kasus penyalahgunaan
          berat, kami memberi kesempatan untuk memperbaiki lebih dulu.
        </p>
      </>
    ),
  },
  {
    id: "perubahan",
    title: "10. Perubahan Ketentuan",
    body: (
      <>
        <p>
          Ketentuan ini dapat diperbarui sewaktu-waktu. Perubahan yang berdampak besar akan
          diberitahukan lewat email atau pemberitahuan di dalam aplikasi paling lambat 30 hari
          sebelum berlaku.
        </p>
        <p>
          Melanjutkan penggunaan Layanan setelah perubahan berlaku berarti Anda menyetujui ketentuan
          yang diperbarui.
        </p>
      </>
    ),
  },
  {
    id: "hukum",
    title: "11. Hukum yang Berlaku",
    body: (
      <>
        <p>
          Ketentuan ini tunduk pada hukum Republik Indonesia. Perselisihan diupayakan diselesaikan
          secara musyawarah terlebih dahulu. Bila tidak tercapai, penyelesaian dilakukan melalui
          pengadilan yang berwenang di Indonesia.
        </p>
      </>
    ),
  },
  {
    id: "kontak",
    title: "12. Hubungi Kami",
    body: (
      <>
        <p>Pertanyaan mengenai ketentuan ini dapat disampaikan melalui:</p>
        <ul>
          <li>
            Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </li>
          <li>
            WhatsApp:{" "}
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
              {SITE.phone}
            </a>
          </li>
          <li>Alamat: {SITE.address}</li>
        </ul>
      </>
    ),
  },
];

export default function SyaratPage() {
  return (
    <LegalShell
      judul="Syarat & Ketentuan"
      ringkasan="Hak dan kewajiban yang berlaku saat Anda menggunakan Hifloo, ditulis sejelas mungkin tanpa bahasa berbelit."
      diperbarui={DIPERBARUI}
      sections={SECTIONS}
    />
  );
}
