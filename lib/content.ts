/**
 * Seluruh naskah landing page ada di sini supaya bisa diubah tanpa
 * menyentuh markup. Nama ikon merujuk ke lucide-react, dipetakan di komponen.
 */

export const MASALAH = [
  {
    judul: "Stok di catatan dan stok di rak tidak sama",
    jawab:
      "Setiap kali ada penjualan, stoknya berkurang sendiri. Anda dikabari saat barang mulai menipis, bukan setelah pelanggan telanjur kecewa.",
  },
  {
    judul: "Rekap baru selesai jam sebelas malam",
    jawab:
      "Begitu toko tutup, laporan penjualan, laba, dan stok sudah jadi. Tinggal diunduh ke Excel atau PDF.",
  },
  {
    judul: "Absensi masih ditulis di buku",
    jawab:
      "Karyawan absen dari HP masing-masing, lokasinya ikut terekam. Lembur dan keterlambatan langsung terhitung sampai ke gaji.",
  },
  {
    judul: "Tiap cabang punya versi datanya sendiri",
    jawab:
      "Semua outlet masuk ke satu layar. Kiriman barang antar cabang tercatat, jadi tidak perlu telepon-teleponan untuk mencocokkan.",
  },
] as const;

export const FITUR = [
  {
    icon: "Zap",
    judul: "Kasir cepat, tetap jalan tanpa internet",
    desc: "Satu transaksi selesai dalam hitungan detik. Kalau koneksi putus, kasir tetap bisa melayani dan datanya tersimpan di perangkat.",
  },
  {
    icon: "Package",
    judul: "Stok bergerak sendiri",
    desc: "Penjualan, pembelian, dan retur langsung mengubah angka stok. Mau stok opname pun tidak perlu tutup toko.",
  },
  {
    icon: "BarChart3",
    judul: "Laporan siap kapan saja",
    desc: "Penjualan, laba rugi, keluar masuk stok, dan rekap karyawan. Bisa dibuka dari HP, bisa diunduh ke Excel atau PDF.",
  },
  {
    icon: "Users",
    judul: "Absensi dan payroll menyatu",
    desc: "Jam masuk, lembur, dan keterlambatan langsung dipakai menghitung gaji. Tidak ada yang perlu disalin ulang.",
  },
  {
    icon: "Building2",
    judul: "Banyak cabang, satu dashboard",
    desc: "Bandingkan penjualan antar outlet, pindahkan stok, dan lihat laporan gabungan dari satu layar.",
  },
  {
    icon: "FileText",
    judul: "Rapi saat diperiksa",
    desc: "Setiap transaksi ada jejaknya: siapa, kapan, dan apa yang diubah. Enak dipakai saat tutup buku atau urusan pajak.",
  },
] as const;

export const SOROTAN = [
  {
    id: "offline",
    label: "Mode offline",
    judul: "Internet mati, kasir jalan terus",
    paragraf:
      "Saat koneksi hilang, transaksi tetap tercatat di perangkat. Begitu internet datang lagi, semuanya terkirim ke server dengan sendirinya.",
    poin: [
      {
        judul: "Antrean tidak berhenti",
        desc: "Kasir tetap bisa memindai barang, memberi diskon, dan mencetak struk.",
      },
      {
        judul: "Sinkron otomatis",
        desc: "Transaksi yang sempat tertahan dikirim berurutan begitu koneksi pulih.",
      },
      {
        judul: "Tidak ada yang tertimpa",
        desc: "Setiap transaksi punya penanda sendiri, jadi tidak ada data yang dobel saat sinkron.",
      },
    ],
    visual: "offline",
  },
  {
    id: "absensi",
    label: "Absensi karyawan",
    judul: "Absen dari HP, rekapnya jadi sendiri",
    paragraf:
      "Karyawan tinggal buka aplikasi dan tekan absen masuk. Lokasinya terekam saat itu juga, dan rekap bulanan tidak perlu diketik ulang.",
    poin: [
      {
        judul: "Tanpa mesin absen",
        desc: "Cukup pakai HP karyawan. Bisa dikunci ke radius outlet, atau lewat scan QR.",
      },
      {
        judul: "Lembur terhitung",
        desc: "Keterlambatan dan jam lembur dihitung dari jadwal shift yang Anda tentukan.",
      },
      {
        judul: "Langsung ke gaji",
        desc: "Hasil rekapnya langsung dipakai menghitung gaji, lengkap dengan slip gaji digital.",
      },
    ],
    visual: "absensi",
  },
  {
    id: "cabang",
    label: "Multi cabang",
    judul: "Satu gudang pusat, semua cabang terlihat",
    paragraf:
      "Kirim barang dari gudang ke outlet, atau dari outlet ke outlet. Setiap perpindahan tercatat: siapa yang mengirim, siapa yang menerima.",
    poin: [
      {
        judul: "Stok terpisah per lokasi",
        desc: "Gudang dan toko punya angka stok sendiri-sendiri, dengan batas minimum masing-masing.",
      },
      {
        judul: "Serah terima tercatat",
        desc: "Barang dihitung saat dikirim dan saat diterima. Kalau ada selisih, langsung kelihatan.",
      },
      {
        judul: "Laporan gabungan",
        desc: "Omzet dan laba semua cabang dalam satu tampilan, atau dipisah per outlet.",
      },
    ],
    visual: "cabang",
  },
] as const;

export const UNTUK_SIAPA = [
  {
    icon: "Store",
    judul: "Toko retail & grosir",
    desc: "Ribuan jenis barang, barcode, harga grosir bertingkat, dan stok yang tetap cocok walau toko sedang ramai.",
  },
  {
    icon: "CookingPot",
    judul: "Kafe & restoran",
    desc: "Pesanan per meja, dapur langsung dapat pesanannya, dan bahan baku berkurang mengikuti resep.",
  },
  {
    icon: "Pill",
    judul: "Apotek & toko obat",
    desc: "Nomor batch, tanggal kedaluwarsa, dan pengingat sebelum obat lewat tanggalnya.",
  },
  {
    icon: "Scissors",
    judul: "Usaha jasa",
    desc: "Salon, bengkel, laundry. Daftar layanan, tarif per teknisi, dan jadwal karyawan jadi satu.",
  },
] as const;

export const LANGKAH = [
  {
    judul: "Buat akun",
    desc: "Isi nama usaha dan email. Tanpa kartu kredit, tanpa pasang aplikasi apa pun.",
  },
  {
    judul: "Masukkan barang dan karyawan",
    desc: "Tarik daftar barang dari Excel, atau mulai dari beberapa barang dulu. Akun kasir ditambah seperlunya.",
  },
  {
    judul: "Mulai berjualan",
    desc: "Transaksi pertama sudah masuk laporan hari itu juga. Sisanya jalan sendiri.",
  },
] as const;

export const PAKET = [
  {
    nama: "Gratis",
    desc: "Untuk satu outlet yang baru mulai merapikan catatan.",
    harga: { jenis: "gratis" as const, label: "Gratis", catatan: "Selamanya" },
    fitur: [
      "1 outlet, 1 akun kasir",
      "Kasir dan stok dasar",
      "Laporan penjualan harian",
      "Aplikasi Android dan dashboard web",
      "Dibantu lewat WhatsApp",
    ],
    cta: "Mulai gratis",
  },
  {
    nama: "Pro",
    desc: "Untuk usaha yang mulai berkembang dan butuh laporan lebih lengkap.",
    harga: {
      jenis: "berbayar" as const,
      nominal: "85.000",
      satuan: "/bulan",
      coret: "149.000",
      catatan: "Gratis 30 hari, tanpa kartu kredit",
    },
    sorot: true,
    label: "Paling banyak dipakai",
    fitur: [
      "Sampai 3 outlet",
      "Mode offline penuh",
      "Member dan poin loyalitas",
      "Supplier, pembelian, dan retur barang",
      "Diskon, promo, dan paket bundling",
      "Laporan lengkap (Excel & PDF)",
    ],
    cta: "Coba Pro 30 hari",
  },
  {
    nama: "Enterprise",
    desc: "Untuk usaha bercabang yang juga mengurus karyawan dan keuangan.",
    harga: { jenis: "custom" as const, label: "Custom", catatan: "Disesuaikan jumlah outlet" },
    fitur: [
      "Outlet tanpa batas",
      "Absensi, shift, dan penggajian",
      "Pembukuan dan jurnal keuangan",
      "CRM dan riwayat pelanggan",
      "Multi gudang dan transfer stok",
      "Didampingi sampai bisa jalan sendiri",
    ],
    cta: "Bicara dengan kami",
  },
] as const;

export const FAQ = [
  {
    q: "Apakah paket Gratis benar-benar gratis?",
    a: "Ya. Paket Gratis tidak ada batas waktunya dan tidak meminta kartu kredit. Yang dibatasi cuma kapasitasnya: satu outlet, satu akun kasir, dan laporan harian. Selama itu masih cukup, Anda tidak perlu bayar apa pun.",
  },
  {
    q: "Apa bedanya Pro dan Enterprise?",
    a: "Pro cocok kalau outlet Anda paling banyak tiga dan butuh fitur penjualan yang lengkap: member, supplier, promo, dan laporan yang lebih dalam. Enterprise dipakai kalau outlet sudah banyak dan Anda juga mengurus absensi, gaji, pembukuan, dan data pelanggan. Harganya menyesuaikan jumlah outlet dan fitur yang dipakai.",
  },
  {
    q: "Kasir tetap bisa dipakai saat internet mati?",
    a: "Bisa. Kalau koneksi hilang, aplikasi kasir menyimpan transaksinya di perangkat, lalu mengirim ke server begitu internet kembali. Struk tetap bisa dicetak selama itu.",
  },
  {
    q: "Bagaimana kalau saya sudah punya data di Excel?",
    a: "Daftar barang, harga, dan stok awal bisa ditarik langsung dari file Excel atau CSV. Kalau susunannya berantakan, kirim saja filenya lewat WhatsApp, nanti tim kami yang rapikan.",
  },
  {
    q: "Perangkat apa saja yang didukung?",
    a: "Dashboard-nya jalan di browser apa saja, entah dari komputer, tablet, atau HP. Aplikasi kasirnya ada untuk HP dan tablet Android. Versi iPhone masih kami kerjakan.",
  },
  {
    q: "Bagaimana data saya disimpan?",
    a: "Data disimpan di server cloud, dikirim lewat koneksi terenkripsi (HTTPS), dan dicadangkan otomatis tiap hari. Data tiap usaha terpisah satu sama lain. Kami tidak menjual atau membagikan data Anda ke pihak mana pun.",
  },
  {
    q: "Kalau nanti saya berhenti berlangganan, data saya hilang?",
    a: "Tidak hilang. Seluruh data transaksi dan barang bisa Anda unduh ke Excel kapan saja, termasuk sebelum berhenti. Akun yang berhenti berlangganan turun ke paket Gratis, bukan dihapus.",
  },
] as const;
