# Home Management App

Aplikasi manajemen rumah komprehensif yang dibangun dengan Next.js untuk membantu pengguna mengelola berbagai aspek rumah tangga dalam satu tempat.

## Fitur

- **Kontrol Rumah Pintar**: Kelola perangkat yang terhubung, pantau penggunaan energi, dan kontrol otomatisasi rumah
- **Kalender**: Lacak acara keluarga, janji temu, dan tanggal penting
- **Daftar Tugas**: Atur tugas dan pantau pekerjaan rumah tangga
- **Pelacak Pengeluaran**: Pantau pengeluaran rumah tangga dan kelola anggaran Anda
- **Perencana Makanan**: Rencanakan makanan mingguan dan kelola daftar belanjaan
- **Manajemen Inventaris**: Lacak barang-barang dan persediaan rumah tangga

## Teknologi yang Digunakan

- **Next.js 15**: Framework React untuk membangun aplikasi web
- **React 19**: Library JavaScript untuk membangun antarmuka pengguna
- **TypeScript**: JavaScript bertyped untuk kualitas kode yang lebih baik
- **Tailwind CSS**: Framework CSS utility-first
- **Radix UI**: Komponen tanpa gaya, dapat diakses untuk membangun antarmuka web berkualitas tinggi
- **Zod**: Validasi skema yang mengutamakan TypeScript
- **React Hook Form**: Formulir dengan validasi yang mudah digunakan
- **Recharts**: Library charting yang dapat dikomposisi untuk visualisasi data
- **Lucide React**: Ikon yang indah & konsisten

## Memulai

### Prasyarat

- Node.js 18.0 atau lebih baru
- pnpm (direkomendasikan) atau npm

### Instalasi

1. Clone repositori:

   ```bash
   git clone https://github.com/ahyrnsrlh/home-management-app.git
   cd home-management-app
   ```

2. Instal dependensi:

   ```bash
   pnpm install
   # atau
   npm install
   ```

3. Mulai server pengembangan:

   ```bash
   pnpm dev
   # atau
   npm run dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat aplikasi.

## Membangun untuk Produksi

```bash
pnpm build
# atau
npm run build
```

## Deployment

Setelah membangun, Anda dapat memulai server produksi:

```bash
pnpm start
# atau
npm start
```

## Struktur Proyek

- `app/`: Halaman dan layout aplikasi Next.js
- `components/`: Komponen React yang dapat digunakan kembali
- `hooks/`: Custom React hooks
- `lib/`: Utilitas dan fungsi bersama
- `public/`: Aset statis
- `styles/`: Gaya global dan konfigurasi Tailwind

## Kontribusi

Kontribusi sangat diterima! Silakan ajukan Pull Request.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - lihat file LICENSE untuk detailnya.
