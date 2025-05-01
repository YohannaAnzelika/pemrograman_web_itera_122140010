from abc import ABC, abstractmethod

# Abstract class untuk semua item di perpustakaan
# Kelas ini menjadi dasar untuk semua jenis item yang ada di perpustakaan seperti buku dan majalah
class LibraryItem(ABC):
    def __init__(self, item_id, title):
        """
        Konstruktor untuk inisialisasi item perpustakaan.
        :param item_id: ID unik untuk item
        :param title: Judul item
        """
        self._item_id = item_id  # protected attribute
        self._title = title

    @abstractmethod
    def display_info(self):
        """
        Method abstrak untuk menampilkan informasi item.
        Harus diimplementasikan oleh subclass seperti Book atau Magazine.
        """
        pass

    @property
    def title(self):
        """Property untuk mengakses judul item"""
        return self._title

    @property
    def item_id(self):
        """Property untuk mengakses ID item"""
        return self._item_id


# Subclass Book yang mewarisi dari LibraryItem
# Kelas ini merepresentasikan item buku di perpustakaan
class Book(LibraryItem):
    def __init__(self, item_id, title, author):
        """
        Konstruktor untuk inisialisasi buku.
        :param item_id: ID unik untuk buku
        :param title: Judul buku
        :param author: Penulis buku
        """
        super().__init__(item_id, title)
        self.__author = author  # private attribute

    def display_info(self):
        """
        Menampilkan informasi tentang buku.
        Mengimplementasikan method abstrak dari LibraryItem.
        """
        print(f"[Book] ID: {self.item_id}, Title: {self.title}, Author: {self.__author}")


# Subclass Magazine yang mewarisi dari LibraryItem
# Kelas ini merepresentasikan item majalah di perpustakaan
class Magazine(LibraryItem):
    def __init__(self, item_id, title, issue_number):
        """
        Konstruktor untuk inisialisasi majalah.
        :param item_id: ID unik untuk majalah
        :param title: Judul majalah
        :param issue_number: Nomor edisi majalah
        """
        super().__init__(item_id, title)
        self.__issue_number = issue_number  # private attribute

    def display_info(self):
        """
        Menampilkan informasi tentang majalah.
        Mengimplementasikan method abstrak dari LibraryItem.
        """
        print(f"[Magazine] ID: {self.item_id}, Title: {self.title}, Issue: {self.__issue_number}")


# Class Library untuk menyimpan dan mengelola item
# Kelas ini bertanggung jawab untuk menyimpan koleksi item dan melakukan operasi seperti menambah, mencari, menampilkan, dan menghapus item
class Library:
    def __init__(self):
        """Konstruktor untuk inisialisasi koleksi perpustakaan sebagai list kosong"""
        self._collection = []

    def add_item(self, item):
        """
        Menambahkan item ke dalam koleksi perpustakaan.
        :param item: Objek yang merupakan subclass dari LibraryItem (misalnya Book atau Magazine)
        """
        if isinstance(item, LibraryItem):
            if not any(existing_item.item_id == item.item_id for existing_item in self._collection):
                self._collection.append(item)
                print(f"Item '{item.title}' berhasil ditambahkan.")
            else:
                print(f"Item dengan ID {item.item_id} sudah ada.")
        else:
            print("Item tidak valid!")

    def remove_item(self, item_id):
        """
        Menghapus item dari koleksi berdasarkan ID.
        :param item_id: ID item yang akan dihapus
        """
        for item in self._collection:
            if item.item_id == item_id:
                self._collection.remove(item)
                print(f"Item dengan ID {item_id} telah dihapus.")
                return
        print(f"Item dengan ID {item_id} tidak ditemukan.")

    def show_all_items(self):
        """
        Menampilkan semua item yang ada di koleksi perpustakaan.
        Menggunakan polymorphism untuk memanggil method display_info() dari setiap item.
        """
        if not self._collection:
            print("Perpustakaan kosong.")
            return
        print("\nDaftar Item di Perpustakaan:")
        for item in self._collection:
            item.display_info()

    def search_item(self, keyword):
        """
        Mencari item berdasarkan judul atau ID.
        :param keyword: Kata kunci yang akan dicari, bisa berupa judul atau ID item
        """
        print(f"\nHasil pencarian untuk '{keyword}':")
        found = False
        for item in self._collection:
            if keyword.lower() in item.title.lower() or keyword == str(item.item_id):
                item.display_info()
                found = True
        if not found:
            print("Item tidak ditemukan.")


# Contoh penggunaan sistem
if __name__ == "__main__":
    # Inisialisasi objek Library
    library = Library()

    # Menambahkan beberapa item ke perpustakaan
    book1 = Book("B001", "Belajar Python", "Andi")
    mag1 = Magazine("M001", "Majalah IT", 15)
    book2 = Book("B002", "Dasar OOP", "Sita")
    
    # Menambahkan item ke perpustakaan
    library.add_item(book1)
    library.add_item(mag1)
    library.add_item(book2)

    # Menampilkan semua item yang ada di perpustakaan
    library.show_all_items()

    # Mencari item berdasarkan kata kunci
    library.search_item("Python")  # Mencari berdasarkan judul
    library.search_item("M001")    # Mencari berdasarkan ID
    library.search_item("TidakAda")  # Mencari item yang tidak ada

    # Menghapus item dengan ID tertentu
    library.remove_item("B001")
    library.remove_item("M002")  # Item yang tidak ada di perpustakaan
    library.show_all_items()
