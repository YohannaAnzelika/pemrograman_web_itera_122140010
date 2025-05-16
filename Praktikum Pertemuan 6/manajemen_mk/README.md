# Aplikasi Manajemen Mata Kuliah

Aplikasi ini adalah project praktikum Pemrograman Web menggunakan **Python** dan **framework Pyramid**. Aplikasi ini menyediakan fitur CRUD (Create, Read, Update, Delete) untuk data mata kuliah.

## 📦 Fitur
- Menambahkan matakuliah baru
- Menampilkan semua matakuliah
- Mengedit data matakuliah
- Menghapus data matakuliah

## 🧰 Teknologi
- Python 3
- Pyramid Framework
- SQLAlchemy (ORM)
- SQLite (Database)

## 🚀 Cara Menjalankan Aplikasi

1. **Clone repo / buka folder:**

   ```bash
   cd manajemen_mk

2. **Install dependency:**

    pip install -r requirements.txt

3. **Inisialisasi database:**

    python init_db.py

4. **Jalankan server:**

    pserve development.ini --reload

5. **Akses di browser:**

    Buka http://localhost:6543

## 📁 Struktur Folder

manajemen_mk/
├── __init__.py
├── models.py
├── routes.py
├── views.py
├── README.md

## 🔁 Dokumentasi Endpoint API
Endpoint	         Method	            Deskripsi
/matakuliah	          GET	      Ambil semua data matakuliah
/matakuliah	          POST	      Tambah data matakuliah baru
/matakuliah/{id}	  PUT	      Update data matakuliah tertentu
/matakuliah/{id}     DELETE       Hapus data matakuliah tertentu

## 📝 Contoh Request JSON (POST/PUT)

    {
  "nama": "Pemrograman Web",
  "kode": "IF184302",
  "sks": 3
}

## ❌ Error Handling

    404 Not Found jika ID tidak ditemukan saat PUT atau DELETE.
    Semua response diberikan dalam format JSON.

## 👩‍💻 Author
    Yohanna Anzelika Sitepu
    NIM: 122140010
    Mata Kuliah: Praktikum Pemrograman Web
    Pertemuan: 6
    Institut Teknologi Sumatera (ITERA).

    