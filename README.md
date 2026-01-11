Smart LMS - Sistem Manajemen Pembelajaran Adaptif
Deskripsi Proyek
Smart LMS adalah platform pembelajaran digital yang dirancang khusus untuk siswa Sekolah Menengah Pertama (SMP). Sistem ini mengintegrasikan materi pembelajaran video dan teks dengan mekanisme evaluasi berupa kuis. Fitur utama dari aplikasi ini adalah implementasi algoritma rekomendasi Collaborative Filtering yang berfungsi untuk memberikan saran materi pembelajaran secara personal kepada pengguna berdasarkan riwayat nilai kuis dan aktivitas belajar mereka.

Fitur Utama
Sistem Otentikasi: Layanan pendaftaran dan masuk akun bagi siswa untuk menjaga integritas data personal.

Dashboard Personal: Panel utama yang menampilkan sapaan pengguna, progres belajar, dan section khusus rekomendasi materi adaptif.

Perpustakaan Materi: Daftar materi yang terorganisir berdasarkan kategori mata pelajaran (Matematika, IPA, Bahasa) dan tingkatan kelas.

Detail Materi Interaktif: Halaman pembelajaran yang menyediakan pemutar video, rangkuman teks, serta daftar putar materi terkait.

Sistem Kuis: Mekanisme evaluasi untuk mengukur pemahaman siswa terhadap materi yang telah dipelajari.

Leaderboard: Papan peringkat kelas yang menampilkan akumulasi XP (Experience Points) untuk meningkatkan motivasi belajar.

Profil Siswa: Statistik detail mengenai pencapaian belajar, total XP, materi yang telah diselesaikan, dan minat belajar.

Arsitektur Teknologi
Proyek ini dibangun menggunakan teknologi modern untuk memastikan performa yang cepat dan tampilan yang responsif:

Framework: React (Vite)

Styling: Tailwind CSS (Pendekatan Brutalist/Saweria Style)

Routing: React Router DOM

Icons: FontAwesome dan React Icons

Metodologi Desain: Mobile-First Approach

Struktur Komponen
Aplikasi ini menggunakan struktur komponen yang terpisah untuk memudahkan pemeliharaan kode:

Sidebar: Navigasi utama yang menetap di sisi kiri layar.

Layout: Pembungkus global untuk memastikan konsistensi tampilan antar halaman.

CardMateri: Komponen modular untuk menampilkan ringkasan materi di berbagai halaman.

Instalasi dan Penggunaan
Clone repositori ini ke komputer lokal.

Buka terminal dan jalankan perintah npm install untuk mengunduh semua dependensi.

Jalankan aplikasi dengan perintah npm run dev.

Akses aplikasi melalui browser pada alamat yang tertera di terminal (biasanya localhost:5173).

Tujuan Pengembangan
Proyek ini dikembangkan sebagai bagian dari tugas akhir (Skripsi) untuk mendemonstrasikan bagaimana sistem rekomendasi dapat diimplementasikan dalam media pembelajaran digital guna membantu siswa menemukan materi yang relevan dengan kemampuan dan minat mereka.