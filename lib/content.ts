/**
 * Seluruh naskah landing page ada di sini supaya bisa diubah tanpa
 * menyentuh markup. Nama ikon merujuk ke lucide-react, dipetakan di komponen.
 */

export const PROBLEMS = [
  {
    title: "Stok di catatan dan stok di rak tidak sama",
    answer:
      "Setiap kali ada penjualan, stoknya berkurang sendiri. Anda dikabari saat barang mulai menipis, bukan setelah pelanggan telanjur kecewa.",
  },
  {
    title: "Rekap baru selesai jam sebelas malam",
    answer:
      "Begitu toko tutup, laporan penjualan, laba, dan stok sudah jadi. Tinggal diunduh ke Excel atau PDF.",
  },
  {
    title: "Absensi masih ditulis di buku",
    answer:
      "Karyawan absen dari HP masing-masing, lokasinya ikut terekam. Lembur dan keterlambatan langsung terhitung sampai ke gaji.",
  },
  {
    title: "Tiap cabang punya versi datanya sendiri",
    answer:
      "Semua outlet masuk ke satu layar. Kiriman barang antar cabang tercatat, jadi tidak perlu telepon-teleponan untuk mencocokkan.",
  },
] as const;

export const FEATURES = [
  {
    icon: "Zap",
    title: "Kasir cepat, tetap jalan tanpa internet",
    description:
      "Satu transaksi selesai dalam hitungan detik. Kalau koneksi putus, kasir tetap bisa melayani dan datanya tersimpan di perangkat.",
  },
  {
    icon: "Package",
    title: "Stok bergerak sendiri",
    description:
      "Penjualan, pembelian, dan retur langsung mengubah angka stok. Mau stok opname pun tidak perlu tutup toko.",
  },
  {
    icon: "BarChart3",
    title: "Laporan siap kapan saja",
    description:
      "Penjualan, laba rugi, keluar masuk stok, dan rekap karyawan. Bisa dibuka dari HP, bisa diunduh ke Excel atau PDF.",
  },
  {
    icon: "Users",
    title: "Absensi dan payroll menyatu",
    description:
      "Jam masuk, lembur, dan keterlambatan langsung dipakai menghitung gaji. Tidak ada yang perlu disalin ulang.",
  },
  {
    icon: "Building2",
    title: "Banyak cabang, satu dashboard",
    description:
      "Bandingkan penjualan antar outlet, pindahkan stok, dan lihat laporan gabungan dari satu layar.",
  },
  {
    icon: "FileText",
    title: "Rapi saat diperiksa",
    description:
      "Setiap transaksi ada jejaknya: siapa, kapan, dan apa yang diubah. Enak dipakai saat tutup buku atau urusan pajak.",
  },
] as const;

export const HIGHLIGHTS = [
  {
    id: "offline",
    label: "Mode offline",
    title: "Internet mati, kasir jalan terus",
    paragraph:
      "Saat koneksi hilang, transaksi tetap tercatat di perangkat. Begitu internet datang lagi, semuanya terkirim ke server dengan sendirinya.",
    points: [
      {
        title: "Antrean tidak berhenti",
        description:
          "Kasir tetap bisa memindai barang, memberi diskon, dan mencetak struk.",
      },
      {
        title: "Sinkron otomatis",
        description:
          "Transaksi yang sempat tertahan dikirim berurutan begitu koneksi pulih.",
      },
      {
        title: "Tidak ada yang tertimpa",
        description:
          "Setiap transaksi punya penanda sendiri, jadi tidak ada data yang dobel saat sinkron.",
      },
    ],
    visual: "offline",
  },
  {
    id: "absensi",
    label: "Absensi karyawan",
    title: "Absen dari HP, rekapnya jadi sendiri",
    paragraph:
      "Karyawan tinggal buka aplikasi dan tekan absen masuk. Lokasinya terekam saat itu juga, dan rekap bulanan tidak perlu diketik ulang.",
    points: [
      {
        title: "Tanpa mesin absen",
        description:
          "Cukup pakai HP karyawan. Bisa dikunci ke radius outlet, atau lewat scan QR.",
      },
      {
        title: "Lembur terhitung",
        description:
          "Keterlambatan dan jam lembur dihitung dari jadwal shift yang Anda tentukan.",
      },
      {
        title: "Langsung ke gaji",
        description:
          "Hasil rekapnya langsung dipakai menghitung gaji, lengkap dengan slip gaji digital.",
      },
    ],
    visual: "absensi",
  },
  {
    id: "cabang",
    label: "Multi cabang",
    title: "Satu gudang pusat, semua cabang terlihat",
    paragraph:
      "Kirim barang dari gudang ke outlet, atau dari outlet ke outlet. Setiap perpindahan tercatat: siapa yang mengirim, siapa yang menerima.",
    points: [
      {
        title: "Stok terpisah per lokasi",
        description:
          "Gudang dan toko punya angka stok sendiri-sendiri, dengan batas minimum masing-masing.",
      },
      {
        title: "Serah terima tercatat",
        description:
          "Barang dihitung saat dikirim dan saat diterima. Kalau ada selisih, langsung kelihatan.",
      },
      {
        title: "Laporan gabungan",
        description:
          "Omzet dan laba semua cabang dalam satu tampilan, atau dipisah per outlet.",
      },
    ],
    visual: "cabang",
  },
] as const;

export const AUDIENCES = [
  {
    icon: "Store",
    title: "Toko retail & grosir",
    description:
      "Ribuan jenis barang, barcode, harga grosir bertingkat, dan stok yang tetap cocok walau toko sedang ramai.",
  },
  {
    icon: "CookingPot",
    title: "Kafe & restoran",
    description:
      "Pesanan per meja, dapur langsung dapat pesanannya, dan bahan baku berkurang mengikuti resep.",
  },
  {
    icon: "Pill",
    title: "Apotek & toko obat",
    description:
      "Nomor batch, tanggal kedaluwarsa, dan pengingat sebelum obat lewat tanggalnya.",
  },
  {
    icon: "Scissors",
    title: "Usaha jasa",
    description:
      "Salon, bengkel, laundry. Daftar layanan, tarif per teknisi, dan jadwal karyawan jadi satu.",
  },
] as const;

export const STEPS = [
  {
    title: "Buat akun",
    description:
      "Isi nama usaha dan email. Tanpa kartu kredit, tanpa pasang aplikasi apa pun.",
  },
  {
    title: "Masukkan barang dan karyawan",
    description:
      "Tarik daftar barang dari Excel, atau mulai dari beberapa barang dulu. Akun kasir ditambah seperlunya.",
  },
  {
    title: "Mulai berjualan",
    description:
      "Transaksi pertama sudah masuk laporan hari itu juga. Sisanya jalan sendiri.",
  },
] as const;

export const PLANS = [
  {
    name: "Super Basic",
    description: "Untuk satu outlet yang baru mulai merapikan catatan.",
    price: { type: "free" as const, label: "Gratis", note: "Selamanya" },
    features: [
      "1 outlet, 1 terminal kasir",
      "Maksimal 1.000 transaksi per bulan",
      "Laporan penjualan harian",
      "Aplikasi kasir Android",
    ],
    cta: "Mulai gratis",
  },
  {
    name: "Basic",
    description:
      "Untuk outlet yang ramai dan mulai mengurus pelanggan serta karyawan.",
    price: {
      type: "paid" as const,
      amount: "85.000",
      unit: "/bulan",
      strikethrough: "149.000",
      note: "Gratis 30 hari, tanpa kartu kredit",
    },
    highlighted: true,
    label: "Paling banyak dipakai",
    badge: "Siap jualan",
    features: [
      "1 outlet, 2 terminal kasir",
      "Transaksi tanpa batas",
      "Laporan penjualan harian",

      "Diskon dan promo",
      "Inventori dan stok",
    ],
    cta: "Coba Basic 30 hari",
  },
  {
    name: "Pro",
    description:
      "Untuk usaha dengan beberapa outlet yang butuh laporan lebih dalam.",
    price: {
      type: "paid" as const,
      amount: "149.000",
      unit: "/bulan",
      note: "Gratis 30 hari, tanpa kartu kredit",
    },
    features: [
      "Sampai 3 outlet, 2 terminal kasir per outlet",
      "Semua fitur Basic",
      "Laporan lengkap",
      "Manajemen karyawan",
      "CRM dan data pelanggan",
    ],
    cta: "Coba Pro 30 hari",
  },
  {
    name: "Enterprise",
    description:
      "Untuk usaha bercabang yang butuh semua modul dalam satu sistem.",
    price: {
      type: "custom" as const,
      label: "Custom",
      note: "Disesuaikan jumlah outlet",
    },
    features: [
      "Semua fitur, outlet tanpa batas",
      "Gudang dan transfer stok",
      "Pengadaan dan pembelian ke supplier",
      "Layar dapur (KDS) dan stok bahan baku",
      "Keuangan dan pembukuan",
      "Didampingi sampai bisa jalan sendiri",
    ],
    cta: "Bicara dengan kami",
  },
] as const;

export const FAQ = [
  {
    q: "Apakah paket Super Basic benar-benar gratis?",
    a: "Ya. Paket Super Basic tidak ada batas waktunya dan tidak meminta kartu kredit. Yang dibatasi cuma kapasitasnya: satu outlet, satu terminal kasir, maksimal 1.000 transaksi per bulan, dan laporan harian. Selama itu masih cukup, Anda tidak perlu bayar apa pun.",
  },
  {
    q: "Apa bedanya Basic, Pro, dan Enterprise?",
    a: "Basic untuk satu outlet dengan dua terminal kasir: transaksi tanpa batas, laporan penjualan harian, CRM, promo, inventori, dan manajemen karyawan. Pro menambah sampai tiga outlet dan laporan lengkap. Enterprise membuka semua modul, termasuk layar dapur (KDS), gudang, pengadaan, stok bahan baku, dan keuangan. Harga Enterprise menyesuaikan jumlah outlet dan fitur yang dipakai.",
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
    a: "Tidak hilang. Seluruh data transaksi dan barang bisa Anda unduh ke Excel kapan saja, termasuk sebelum berhenti. Akun yang berhenti berlangganan turun ke paket Super Basic yang gratis, bukan dihapus.",
  },
] as const;
