# Soto Podo Seger'e — React + Vite

## Yang perlu disunting sebelum dipublikasikan
Buka `src/main.jsx`, lalu ubah nilai berikut:
- `WA_NUMBER`: nomor WhatsApp format internasional, misalnya `6281234567890`
- `MAPS_URL`: tautan Google Maps publik untuk lokasi usaha
- `MAPS_EMBED`: URL embed Google Maps (opsional)
- `ADDRESS`: alamat lengkap
- `HOURS`: hari dan jam operasional
- `menuItems`: nama, deskripsi, tag, dan harga menu asli

Harga awal sengaja memakai placeholder "Isi harga". Emoji makanan adalah ilustrasi sementara; ganti dengan foto makanan asli untuk hasil promosi yang lebih meyakinkan.

## Menjalankan di komputer
1. Install Node.js versi LTS dari https://nodejs.org/
2. Ekstrak ZIP ini.
3. Buka terminal di folder proyek.
4. Jalankan:
   npm install
   npm run dev
5. Buka URL lokal yang muncul di terminal.

## Publikasi gratis di GitHub Pages
1. Buat akun di https://github.com/ jika belum punya.
2. Buat repository baru dengan nama singkat, misalnya `soto-podo-segere`. Pilih Public.
3. Upload semua file proyek ke repository dan pastikan folder `.github/workflows/deploy.yml` ikut terunggah.
4. Buka Settings → Pages pada repository.
5. Pada Build and deployment, pilih Source: GitHub Actions.
6. Buka tab Actions dan tunggu workflow selesai dengan status hijau.
7. Alamat website biasanya `https://USERNAME.github.io/NAMA-REPOSITORY/`.

Jangan masukkan kata sandi, token, atau data pribadi ke file publik.
