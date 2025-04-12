document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 Script Terhubung!");

  const form = document.getElementById("form");
  const namaInput = document.getElementById("nama");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const btnDaftar = document.getElementById("btn-daftar");
  const btnTampilDaftar = document.getElementById("btn-tampil-daftar");
  const suksesMsg = document.getElementById("sukses-msg");
  const gagalMsg = document.getElementById("gagal-msg");
  const daftarPengguna = document.getElementById("daftar-pengguna");
  const btnHapus = document.getElementById("btn-hapus");
  const detailPengguna = document.getElementById("detail-pengguna");
  const detailNama = document.getElementById("detail-nama");
  const detailEmail = document.getElementById("detail-email");

  function fadeOut(element) {
    let opacity = 1;
    const interval = setInterval(() => {
      if (opacity <= 0) {
        clearInterval(interval);
        element.style.display = "none";
      } else {
        opacity -= 0.05;
        element.style.opacity = opacity;
      }
    }, 100);
  }

  function validateInput() {
    let valid = true;

    if (namaInput.value.trim().length < 3) {
      document.getElementById("error-nama").textContent =
        "❌ Nama minimal 3 karakter!";
      valid = false;
    } else {
      document.getElementById("error-nama").textContent = "";
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      document.getElementById("error-email").textContent =
        "❌ Email tidak valid!";
      valid = false;
    } else {
      document.getElementById("error-email").textContent = "";
    }

    let password = passwordInput.value.trim();
    let hanyaAngka = /^[0-9]+$/.test(password);
    let hanyaHuruf = /^[a-zA-Z]+$/.test(password);

    if (password.length < 8) {
      document.getElementById("error-password").textContent =
        "❌ Password minimal 8 karakter!";
      valid = false;
    } else if (hanyaAngka || hanyaHuruf) {
      document.getElementById("error-password").textContent =
        "❌ Password harus mengandung huruf dan angka!";
      valid = false;
    } else {
      document.getElementById("error-password").textContent = "";
    }

    return valid;
  }

  function simpanKeLocalStorage(nama, email) {
    let pengguna = JSON.parse(localStorage.getItem("pengguna")) || [];
    pengguna.push({ nama, email });
    localStorage.setItem("pengguna", JSON.stringify(pengguna));
  }

  function tampilkanPengguna() {
    daftarPengguna.innerHTML = "";
    let pengguna = JSON.parse(localStorage.getItem("pengguna")) || [];

    if (pengguna.length === 0) {
      daftarPengguna.innerHTML = "<p>📭 Tidak ada pengguna terdaftar.</p>";
      btnHapus.style.display = "none";
    } else {
      btnHapus.style.display = "block";

      pengguna.forEach((user, index) => {
        let btn = document.createElement("button");
        btn.textContent = `👤 ${user.nama}`;
        btn.style.margin = "5px";
        btn.addEventListener("click", function () {
          tampilkanDetailPengguna(user);
        });

        daftarPengguna.appendChild(btn);
      });
    }
  }

  function tampilkanDetailPengguna(user) {
    detailNama.textContent = `Nama: ${user.nama}`;
    detailEmail.textContent = `Email: ${user.email}`;
    detailPengguna.style.display = "block";
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateInput()) {
      let nama = namaInput.value.trim();
      let email = emailInput.value.trim();

      simpanKeLocalStorage(nama, email);
      suksesMsg.style.display = "block";
      suksesMsg.style.opacity = "1";
      gagalMsg.style.display = "none";
      form.reset();

      setTimeout(() => fadeOut(suksesMsg), 3000);

      tampilkanPengguna();
    } else {
      gagalMsg.style.display = "block";
      gagalMsg.style.opacity = "1";
      suksesMsg.style.display = "none";
      setTimeout(() => fadeOut(gagalMsg), 3000);
    }
  });

  btnTampilDaftar.addEventListener("click", function () {
    daftarPengguna.style.display =
      daftarPengguna.style.display === "none" ? "block" : "none";
    tampilkanPengguna();
  });

  btnHapus.addEventListener("click", function () {
    localStorage.removeItem("pengguna");
    tampilkanPengguna();
    detailPengguna.style.display = "none";
  });

  tampilkanPengguna();
});
