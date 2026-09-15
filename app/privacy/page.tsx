import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";

const LAST_UPDATED = "15 September 2026";
const CONTACT_EMAIL = "zull@floonic.com";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan Privasi Hifloo — bagaimana kami mengumpulkan, menggunakan, membagikan, menyimpan, dan melindungi data Anda pada aplikasi kasir, stok, dan HRIS Hifloo.",
  alternates: {
    canonical: "https://hifloo.com/privacy",
  },
  openGraph: {
    type: "article",
    url: "https://hifloo.com/privacy",
    title: "Kebijakan Privasi | Hifloo",
    description:
      "Bagaimana Hifloo mengumpulkan, menggunakan, dan melindungi data pengguna aplikasi POS & HRIS Hifloo.",
  },
};

type Section = {
  id: string;
  title: string;
  body: React.ReactNode;
};

const SECTIONS: Section[] = [
  {
    id: "pendahuluan",
    title: "1. Pendahuluan",
    body: (
      <>
        <p>
          Kebijakan Privasi ini menjelaskan bagaimana Hifloo (&ldquo;Hifloo&rdquo;,
          &ldquo;kami&rdquo;) mengumpulkan, menggunakan, membagikan, menyimpan,
          dan melindungi informasi Anda saat Anda menggunakan aplikasi Android
          Hifloo, dashboard web di{" "}
          <span className="font-medium text-slate-700">app.hifloo.com</span>, dan
          layanan terkait lainnya (secara bersama-sama disebut
          &ldquo;Layanan&rdquo;).
        </p>
        <p>
          Hifloo adalah sistem POS (kasir), manajemen stok, dan HRIS untuk pelaku
          usaha. Layanan ini ditujukan untuk penggunaan bisnis oleh pemilik
          usaha, pengelola, dan karyawan yang diberi akses oleh pemilik usaha.
        </p>
        <p>
          Dengan membuat akun atau menggunakan Layanan, Anda menyetujui praktik
          yang dijelaskan dalam Kebijakan Privasi ini. Jika Anda tidak setuju,
          mohon berhenti menggunakan Layanan.
        </p>
      </>
    ),
  },
  {
    id: "data-yang-dikumpulkan",
    title: "2. Data yang Kami Kumpulkan",
    body: (
      <>
        <p>Kami mengumpulkan jenis data berikut:</p>
        <h3>a. Data akun dan identitas</h3>
        <ul>
          <li>Nama lengkap, alamat email, dan nomor telepon.</li>
          <li>
            Nama usaha, alamat outlet, jenis usaha, dan peran Anda (pemilik,
            admin, kasir, atau karyawan).
          </li>
          <li>Kata sandi, yang selalu kami simpan dalam bentuk ter-hash.</li>
          <li>Foto profil, apabila Anda mengunggahnya.</li>
        </ul>

        <h3>b. Data bisnis yang Anda masukkan</h3>
        <ul>
          <li>
            Data produk, kategori, harga, stok, supplier, dan pembelian barang.
          </li>
          <li>
            Data transaksi penjualan: item, jumlah, diskon, metode pembayaran,
            waktu transaksi, dan struk.
          </li>
          <li>
            Data pelanggan yang Anda simpan sendiri (nama, nomor telepon, email,
            riwayat belanja, poin loyalitas).
          </li>
          <li>
            Data karyawan: identitas dasar, jadwal kerja, catatan absensi,
            lembur, keterlambatan, dan data terkait payroll.
          </li>
        </ul>

        <h3>c. Data lokasi</h3>
        <ul>
          <li>
            Aplikasi mengambil lokasi perangkat (GPS) <em>hanya pada saat</em>{" "}
            karyawan melakukan clock-in atau clock-out absensi, untuk memverifikasi
            kehadiran di lokasi outlet.
          </li>
          <li>
            Kami tidak melacak lokasi Anda di latar belakang dan tidak merekam
            pergerakan Anda di luar aksi absensi tersebut.
          </li>
        </ul>

        <h3>d. Data kamera dan file</h3>
        <ul>
          <li>
            Akses kamera digunakan untuk memindai barcode produk dan, jika fitur
            tersebut diaktifkan, mengambil foto selfie saat absensi serta foto
            produk.
          </li>
          <li>
            Akses penyimpanan/galeri digunakan untuk mengunggah gambar produk,
            logo usaha, serta menyimpan laporan yang Anda ekspor (PDF/Excel).
          </li>
          <li>
            Gambar hanya diambil saat Anda menekan tombol terkait. Kami tidak
            memindai isi galeri Anda.
          </li>
        </ul>

        <h3>e. Data perangkat dan penggunaan</h3>
        <ul>
          <li>
            Model perangkat, versi sistem operasi, versi aplikasi, pengenal
            perangkat, dan bahasa perangkat.
          </li>
          <li>
            Log teknis: alamat IP, waktu akses, halaman/fitur yang dibuka, dan
            laporan kerusakan (crash) untuk perbaikan bug dan keamanan.
          </li>
        </ul>

        <h3>f. Data pembayaran langganan</h3>
        <ul>
          <li>
            Riwayat paket berlangganan, status pembayaran, nominal, dan tanggal
            transaksi.
          </li>
          <li>
            Kami <span className="font-medium text-slate-700">tidak</span>{" "}
            menyimpan nomor kartu kredit/debit Anda. Pembayaran diproses oleh
            penyedia pembayaran pihak ketiga yang memiliki kebijakan privasi
            sendiri.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "penggunaan-data",
    title: "3. Bagaimana Kami Menggunakan Data",
    body: (
      <>
        <p>Kami menggunakan data yang dikumpulkan untuk:</p>
        <ul>
          <li>
            Menyediakan fungsi inti Layanan: memproses transaksi kasir,
            memperbarui stok, mencatat absensi, dan menghasilkan laporan.
          </li>
          <li>
            Membuat dan mengelola akun Anda, termasuk autentikasi dan pengaturan
            hak akses per pengguna.
          </li>
          <li>
            Menyinkronkan data antar perangkat dan antar cabang milik usaha Anda.
          </li>
          <li>
            Mengirim notifikasi operasional, misalnya peringatan stok menipis,
            ringkasan penjualan, dan pengingat langganan.
          </li>
          <li>
            Memberikan dukungan pelanggan dan menanggapi pertanyaan atau keluhan
            Anda.
          </li>
          <li>
            Meningkatkan kualitas produk melalui analisis penggunaan secara
            agregat, serta mendeteksi dan memperbaiki kerusakan.
          </li>
          <li>
            Menjaga keamanan Layanan, mencegah penyalahgunaan, penipuan, dan akses
            tidak sah.
          </li>
          <li>
            Memenuhi kewajiban hukum, perpajakan, dan akuntansi yang berlaku.
          </li>
        </ul>
        <p>
          Kami <span className="font-medium text-slate-700">tidak</span> menjual
          data pribadi Anda, dan kami{" "}
          <span className="font-medium text-slate-700">tidak</span> menggunakan
          data bisnis atau data pelanggan Anda untuk iklan pihak ketiga.
        </p>
      </>
    ),
  },
  {
    id: "dasar-hukum",
    title: "4. Dasar Pemrosesan Data",
    body: (
      <>
        <p>Kami memproses data Anda berdasarkan:</p>
        <ul>
          <li>
            <span className="font-medium text-slate-700">Pelaksanaan kontrak</span>{" "}
            — untuk menyediakan Layanan yang Anda daftarkan.
          </li>
          <li>
            <span className="font-medium text-slate-700">Persetujuan</span> —
            untuk akses lokasi, kamera, notifikasi, dan komunikasi pemasaran. Anda
            dapat menarik persetujuan kapan saja melalui pengaturan perangkat atau
            aplikasi.
          </li>
          <li>
            <span className="font-medium text-slate-700">Kepentingan sah</span> —
            untuk keamanan, pencegahan penipuan, dan peningkatan produk.
          </li>
          <li>
            <span className="font-medium text-slate-700">Kewajiban hukum</span> —
            bila diwajibkan oleh peraturan perundang-undangan yang berlaku.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "pembagian-data",
    title: "5. Pembagian Data kepada Pihak Ketiga",
    body: (
      <>
        <p>
          Kami hanya membagikan data seperlunya, kepada kategori penerima berikut:
        </p>
        <ul>
          <li>
            <span className="font-medium text-slate-700">Penyedia infrastruktur</span>{" "}
            — layanan hosting, basis data, dan penyimpanan cloud tempat data
            Layanan disimpan.
          </li>
          <li>
            <span className="font-medium text-slate-700">Penyedia pembayaran</span>{" "}
            — untuk memproses pembayaran langganan Anda.
          </li>
          <li>
            <span className="font-medium text-slate-700">
              Layanan analitik &amp; laporan kerusakan
            </span>{" "}
            — untuk memahami penggunaan fitur secara agregat dan memperbaiki bug.
          </li>
          <li>
            <span className="font-medium text-slate-700">
              Layanan pengiriman pesan
            </span>{" "}
            — email dan WhatsApp/SMS untuk notifikasi transaksional dan dukungan.
          </li>
          <li>
            <span className="font-medium text-slate-700">Aparat berwenang</span> —
            apabila diwajibkan oleh hukum, perintah pengadilan, atau untuk
            melindungi hak dan keselamatan pengguna.
          </li>
          <li>
            <span className="font-medium text-slate-700">Pengalihan usaha</span> —
            jika terjadi merger, akuisisi, atau penjualan aset, data dapat
            dialihkan dengan pemberitahuan kepada Anda sebelumnya.
          </li>
        </ul>
        <p>
          Seluruh pihak ketiga terikat kewajiban kerahasiaan dan hanya boleh
          memproses data sesuai instruksi kami.
        </p>
      </>
    ),
  },
  {
    id: "penyimpanan-keamanan",
    title: "6. Penyimpanan dan Keamanan Data",
    body: (
      <>
        <ul>
          <li>
            Data dikirim melalui koneksi terenkripsi (HTTPS/TLS) dan disimpan pada
            server dengan kontrol akses ketat.
          </li>
          <li>Kata sandi disimpan dalam bentuk hash, bukan teks biasa.</li>
          <li>
            Akses internal ke data produksi dibatasi hanya pada personel yang
            membutuhkannya untuk operasional dan dukungan.
          </li>
          <li>
            Aplikasi mendukung mode offline: sebagian data transaksi disimpan
            sementara di perangkat Anda dan disinkronkan ke server saat koneksi
            tersedia. Menghapus aplikasi akan menghapus data lokal yang belum
            tersinkron.
          </li>
        </ul>
        <p>
          Tidak ada sistem yang sepenuhnya bebas risiko. Jika terjadi insiden
          keamanan yang berdampak pada data pribadi Anda, kami akan memberitahukan
          Anda dan otoritas terkait sesuai ketentuan yang berlaku.
        </p>
      </>
    ),
  },
  {
    id: "retensi",
    title: "7. Jangka Waktu Penyimpanan",
    body: (
      <>
        <ul>
          <li>
            Data akun dan data bisnis disimpan selama akun Anda aktif dan selama
            dibutuhkan untuk menyediakan Layanan.
          </li>
          <li>
            Setelah akun dihapus, data akan dihapus atau dianonimkan dalam waktu{" "}
            <span className="font-medium text-slate-700">paling lama 30 hari</span>
            , kecuali data yang wajib kami simpan untuk keperluan hukum,
            perpajakan, atau penyelesaian sengketa.
          </li>
          <li>
            Salinan cadangan (backup) dapat bertahan hingga{" "}
            <span className="font-medium text-slate-700">90 hari</span> sebelum
            terhapus secara otomatis dari sistem cadangan kami.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "hak-pengguna",
    title: "8. Hak Anda atas Data",
    body: (
      <>
        <p>Anda berhak untuk:</p>
        <ul>
          <li>Mengakses dan memperoleh salinan data pribadi Anda.</li>
          <li>Memperbaiki data yang tidak akurat atau tidak lengkap.</li>
          <li>Meminta penghapusan akun dan data pribadi Anda.</li>
          <li>
            Membatasi atau menolak pemrosesan tertentu, termasuk menarik
            persetujuan akses lokasi, kamera, atau notifikasi.
          </li>
          <li>
            Mengekspor data bisnis Anda dalam format yang lazim (Excel/PDF)
            melalui fitur laporan di aplikasi.
          </li>
          <li>Menyampaikan keluhan kepada otoritas perlindungan data.</li>
        </ul>
        <p>
          Untuk menggunakan hak-hak ini, hubungi kami di{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Kami akan
          menanggapi paling lambat 30 hari kerja setelah permintaan terverifikasi.
        </p>
      </>
    ),
  },
  {
    id: "hapus-akun",
    title: "9. Penghapusan Akun dan Data",
    body: (
      <>
        <p>Anda dapat meminta penghapusan akun beserta data Anda dengan cara:</p>
        <ul>
          <li>
            Melalui aplikasi: menu{" "}
            <span className="font-medium text-slate-700">
              Pengaturan → Akun → Hapus Akun
            </span>
            ; atau
          </li>
          <li>
            Mengirim email ke{" "}
            <a href={`mailto:${CONTACT_EMAIL}?subject=Permintaan%20Hapus%20Akun%20Hifloo`}>
              {CONTACT_EMAIL}
            </a>{" "}
            dengan subjek &ldquo;Permintaan Hapus Akun&rdquo; dari alamat email
            yang terdaftar.
          </li>
        </ul>
        <p>
          Setelah permintaan diverifikasi, kami menghapus data akun, data bisnis,
          data pelanggan, dan data karyawan yang terkait dengan akun tersebut dalam
          waktu paling lama 30 hari, serta dari cadangan dalam waktu paling lama 90
          hari. Catatan transaksi pembayaran langganan dapat kami simpan lebih lama
          jika diwajibkan oleh peraturan perpajakan.
        </p>
      </>
    ),
  },
  {
    id: "data-karyawan-pelanggan",
    title: "10. Data Karyawan dan Pelanggan Anda",
    body: (
      <>
        <p>
          Jika Anda adalah pemilik usaha yang memasukkan data karyawan atau
          pelanggan ke dalam Hifloo, Anda bertindak sebagai pengendali data atas
          informasi tersebut dan Hifloo bertindak sebagai pemroses data atas nama
          Anda.
        </p>
        <p>Anda bertanggung jawab untuk:</p>
        <ul>
          <li>
            Memperoleh persetujuan yang sah dari karyawan dan pelanggan sebelum
            memasukkan data mereka.
          </li>
          <li>
            Memberi tahu mereka bahwa data diproses melalui Hifloo, termasuk
            penggunaan lokasi GPS untuk absensi.
          </li>
          <li>
            Memastikan penggunaan data tersebut mematuhi peraturan perlindungan
            data yang berlaku.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "anak",
    title: "11. Privasi Anak",
    body: (
      <p>
        Layanan ini ditujukan untuk penggunaan bisnis dan tidak diperuntukkan bagi
        anak di bawah 18 tahun. Kami tidak dengan sengaja mengumpulkan data pribadi
        anak. Jika kami mengetahui adanya data anak yang terkumpul tanpa
        persetujuan wali yang sah, data tersebut akan kami hapus.
      </p>
    ),
  },
  {
    id: "transfer-internasional",
    title: "12. Transfer Data Lintas Negara",
    body: (
      <p>
        Server dan penyedia infrastruktur kami dapat berlokasi di luar Indonesia.
        Apabila data Anda ditransfer ke luar negeri, kami memastikan penerapan
        perlindungan yang setara melalui perjanjian kontraktual dengan penyedia
        layanan terkait.
      </p>
    ),
  },
  {
    id: "perubahan",
    title: "13. Perubahan Kebijakan",
    body: (
      <p>
        Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Versi
        terbaru selalu tersedia di halaman ini dengan tanggal pembaruan yang
        diperbarui. Untuk perubahan yang bersifat material, kami akan memberi tahu
        Anda melalui email atau notifikasi di dalam aplikasi sebelum perubahan
        berlaku.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold font-script bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                hifloo
              </span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke beranda
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HEADER ── */}
      <header className="border-b border-slate-100 bg-gradient-to-b from-blue-50/60 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-700 bg-blue-50 ring-1 ring-blue-100 rounded-full px-3 py-1 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            LEGAL
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Kebijakan Privasi
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl">
            Kami menjelaskan secara terbuka data apa yang dikumpulkan aplikasi
            Hifloo, untuk apa data itu dipakai, dan bagaimana Anda bisa
            mengendalikannya.
          </p>
          <p className="text-sm text-slate-400 mt-4">
            Terakhir diperbarui: {LAST_UPDATED}
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid lg:grid-cols-[220px_1fr] gap-10">
          {/* Daftar isi */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Daftar isi
              </p>
              <nav className="space-y-2">
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-sm text-slate-500 hover:text-blue-600 transition-colors leading-snug"
                  >
                    {s.title}
                  </a>
                ))}
                <a
                  href="#kontak"
                  className="block text-sm text-slate-500 hover:text-blue-600 transition-colors leading-snug"
                >
                  14. Hubungi Kami
                </a>
              </nav>
            </div>
          </aside>

          {/* Isi kebijakan */}
          <div
            className="
              space-y-10
              [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-slate-900 [&_h3]:mt-6 [&_h3]:mb-2
              [&_p]:text-slate-600 [&_p]:leading-relaxed [&_p]:mb-4
              [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:mb-4
              [&_li]:text-slate-600 [&_li]:leading-relaxed
              [&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-blue-700
            "
          >
            {SECTIONS.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                  {s.title}
                </h2>
                {s.body}
              </section>
            ))}

            {/* Kontak */}
            <section id="kontak" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                14. Hubungi Kami
              </h2>
              <p>
                Jika Anda memiliki pertanyaan, keluhan, atau permintaan terkait
                data pribadi dan Kebijakan Privasi ini, silakan hubungi kami:
              </p>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6 space-y-3 not-prose">
                <p className="font-semibold text-slate-900">Hifloo</p>
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-sm text-blue-600 underline underline-offset-2 hover:text-blue-700"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-600">
                    +62 857 0547 7252
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-600">
                    Kubu Raya, Kalimantan Barat, Indonesia
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Hifloo. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link href="/" className="hover:text-slate-800 transition-colors">
              Beranda
            </Link>
            <Link
              href="/privacy"
              className="hover:text-slate-800 transition-colors"
            >
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
