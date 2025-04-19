# 📚 Aplikasi Manajemen Buku Pribadi

Aplikasi web berbasis React untuk mencatat, mengelola, dan melacak koleksi buku pribadi secara efisien. Dirancang dengan antarmuka yang sederhana dan responsif, serta mendukung fitur CRUD, filter status, pencarian, statistik, dark mode, dan penyimpanan lokal melalui `localStorage`.

---

# 🧾 Deskripsi Singkat

Dengan aplikasi ini, kita bisa:

- ✍️ Menambahkan buku baru dengan judul, penulis, dan status bacaan
- 📝 Mengedit dan menghapus data buku
- 🔍 Menyaring buku berdasarkan status: _Belum Dibaca_, _Sedang Dibaca_, _Sudah Dibaca_
- 🔎 Mencari buku berdasarkan judul atau penulis
- 📊 Melihat statistik total dan distribusi status bacaan
- 🌙 Mengaktifkan mode gelap untuk kenyamanan mata
- 💾 Menyimpan data secara persisten menggunakan `localStorage`

---

# ✨ Fitur Utama

| Fitur                   | Deskripsi                                                    |
| ----------------------- | ------------------------------------------------------------ |
| ➕ Tambah Buku          | Tambahkan buku baru ke daftar koleksi                        |
| ✏️ Edit & 🗑️ Hapus Buku | Ubah atau hapus informasi buku yang ada                      |
| 🎯 Filter Status        | Tampilkan hanya buku sesuai status bacaan                    |
| 🔍 Pencarian Real-time  | Cari berdasarkan judul atau penulis secara langsung          |
| 📈 Statistik Buku       | Lihat jumlah total buku dan status baca secara visual        |
| 🌗 Mode Gelap           | Tampilan nyaman di malam hari atau kondisi minim cahaya      |
| 🧠 Context API & Hooks  | Manajemen state global dan logika reusable yang terorganisir |
| 🚦 Routing Halaman      | Navigasi antar halaman menggunakan React Router              |
| ✅ Pengujian Komponen   | Unit test dengan React Testing Library                       |

---

# 📸 Screenshot Antarmuka

# 💡 Mode Terang

![Light Mode](/screenshots/Light-Mode1.png)
![Light Mode](/screenshots/Light-Mode2.png)
![Light Mode](/screenshots/Light-Mode-Stats.png)

# 🌙 Mode Gelap

![Dark Mode](./screenshots/Dark-Mode1.png)
![Dark Mode](./screenshots/Dark-Mode2.png)
![Dark Mode](./screenshots/Dark-Mode-Stats.png)

> _Pastikan gambar tersedia di folder `screenshots/`._

---

# ⚙️ Cara Instalasi & Menjalankan

# 1. Clone Repository

````bash
git clone https://github.com/username/book-app.git
cd book-app

2. Install Dependencies
Pastikan sudah menginstal Node.js dan npm. Kemudian jalankan:

```bash
npm install

3. Menjalankan Aplikasi

```bash
npm start
Aplikasi akan otomatis terbuka di browser pada alamat:

```arduino
http://localhost:3000

# 🧪 Menjalankan Testing
Untuk menjalankan unit test:

```bash
npm test

# 🛠️ Teknologi yang Digunakan

| Teknologi              | Keterangan                                                                 |
|------------------------|----------------------------------------------------------------------------|
| ⚛️ React               | Framework utama untuk membangun antarmuka pengguna                         |
| 🧭 React Router        | Navigasi antar halaman (Home & Statistik)                                  |
| 🌐 Context API         | Manajemen state global (daftar buku dan tema dark mode)                    |
| 🪝 Custom Hooks        | Memisahkan logika reusable (pengelolaan buku & mode gelap)                 |
| 🎨 Tailwind CSS        | Styling responsif dan efisien dengan pendekatan utility-first              |
| 💾 localStorage        | Penyimpanan data buku secara lokal di browser secara persisten             |
| 🧪 React Testing Library | Pengujian unit & integrasi komponen                                       |

---

# 💡 Penjelasan Fitur React

| Fitur React           | Penjelasan                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| 🔁 React Router       | Mengatur navigasi antar halaman (Home & Statistik)                          |
| 🌐 Context API        | Menyediakan state global untuk daftar buku dan dark mode                    |
| 🪝 Custom Hook        | Memisahkan logika untuk pengelolaan buku dan tema                           |
| 🧾 Controlled Forms   | Mengelola input form (judul, penulis, status) menggunakan state             |
| 🔄 Conditional Rendering | Menampilkan elemen berdasarkan kondisi (misalnya saat daftar buku kosong) |
| ⚙️ useEffect          | Sinkronisasi data ke `localStorage` secara otomatis saat terjadi perubahan  |

---

# 📁 Struktur Folder (Simplified)

```bash
src/
├── components/      # Komponen UI seperti BookForm, BookList, BookItem, Filter, dsb
├── context/         # Context dan custom hook (BookContext, ThemeContext, useBooks)
├── pages/           # Halaman utama: Home.jsx dan Stats.jsx
├── App.jsx          # Komponen utama & routing
├── index.jsx        # Entry point React
└── styles/          # File konfigurasi Tailwind (jika digunakan)

# 👨‍💻 Kontributor

Yohanna Anzelika Sitepu — 122140010
Pengembang Aplikasi Manajemen Buku Pribadi

#📄 Lisensi
Proyek ini bersifat open-source dan dapat digunakan bebas untuk pembelajaran maupun pengembangan pribadi.
````
