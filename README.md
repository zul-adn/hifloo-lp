# Landing page Hifloo

Situs pemasaran Hifloo — sistem kasir, stok, dan karyawan untuk UMKM Indonesia.
Dibangun dengan Next.js App Router, Tailwind CSS, dan TypeScript.

## Menjalankan

```bash
npm install
cp .env.example .env.local   # lalu isi nilainya
npm run dev                  # http://localhost:3000
```

Perintah lain: `npm run build`, `npm start`, `npm run lint`.

## Variabel lingkungan

Lihat `.env.example`. Yang perlu diperhatikan: `N8N_WEBHOOK_URL` dan `N8N_API_KEY`
**tidak** memakai awalan `NEXT_PUBLIC_`. Keduanya hanya dibaca di server oleh
`app/api/daftar/route.ts`. Formulir pendaftaran di browser memanggil `/api/daftar`,
bukan webhook n8n secara langsung, supaya kunci API tidak pernah terkirim ke pengunjung.

Kalau `N8N_WEBHOOK_URL` belum diisi, formulir akan membalas 503 dan menampilkan
pesan kegagalan yang umum.

## Susunan berkas

```
app/
  layout.tsx            metadata, JSON-LD, font, Google Analytics opsional
  page.tsx              beranda — hanya menyusun bagian-bagiannya
  globals.css           token warna, gerak, dan kelas bersama
  opengraph-image.tsx   gambar pratinjau media sosial, dibuat saat build
  icon.tsx              favicon, dibuat saat build
  api/daftar/route.ts   perantara formulir pendaftaran ke n8n
  privacy/              Kebijakan Privasi (URL dipakai Google Play Console)
  syarat/               Syarat & Ketentuan
components/
  sections.tsx          seluruh bagian beranda (Server Component)
  mockup.tsx            cuplikan antarmuka produk, digambar dengan HTML
  site-header.tsx       header + menu mobile
  site-footer.tsx       footer
  daftar-dialog.tsx     formulir pendaftaran, memakai <dialog> bawaan
  daftar-button.tsx     tombol pembuka formulir
  reveal.tsx            animasi muncul saat masuk viewport
  legal-shell.tsx       kerangka halaman hukum
lib/
  content.ts            SELURUH naskah halaman — ubah di sini
  site.ts               alamat, kontak, dan tautan
```

## Catatan

- **Naskah**: semua teks beranda ada di `lib/content.ts`. Daftar FAQ di berkas itu
  juga dipakai untuk structured data `FAQPage`, jadi keduanya tidak bisa berbeda.
- **Tanpa gambar dari luar**: cuplikan produk digambar sebagai HTML. Tidak ada
  permintaan ke domain lain, tidak ada pergeseran tata letak saat memuat.
- **Header keamanan** diatur di `next.config.js` (CSP, HSTS, X-Frame-Options, dll).
  CSP memakai `'unsafe-inline'` untuk skrip karena halaman ini dibuat statis;
  memakai nonce akan memaksa setiap halaman dirender ulang per permintaan.
- **Klaim**: jangan menambahkan angka pengguna, rating, atau testimoni yang belum
  terverifikasi. Rating palsu di structured data berisiko kena sanksi Google.
