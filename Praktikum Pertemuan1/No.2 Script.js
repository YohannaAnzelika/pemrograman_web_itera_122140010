// Mendeklarasikan variabel dengan var, let, dan const
var nama = "Hanna";
let usia = 21;
const TAHUN_LAHIR = 2003;

// Menampilkan output ke konsol
console.log("Nama: " + nama);
console.log("Usia: " + usia);
console.log("Tahun Lahir: " + TAHUN_LAHIR);

// Menampilkan output ke halaman HTML
document.getElementById("result").innerHTML = `
  <p>Nama: <strong>${nama}</strong></p>
  <p>Usia: <strong>${usia}</strong></p>
  <p>Tahun Lahir: <strong>${TAHUN_LAHIR}</strong></p>
`;

// Struktur kondisional
let nilai = 100;
let grade = "";

// If-else if-else
if (nilai >= 90) {
  grade = "A";
} else if (nilai >= 80) {
  grade = "B";
} else if (nilai >= 70) {
  grade = "C";
} else if (nilai >= 60) {
  grade = "D";
} else {
  grade = "E";
}

console.log("Nilai: " + nilai + ", Grade: " + grade);

// Menambahkan hasil ke HTML
document.getElementById("result").innerHTML += `
  <hr>
  <p>Nilai: <strong>${nilai}</strong></p>
  <p>Grade: <strong>${grade}</strong></p>
`;

// Ternary operator
let status = nilai >= 60 ? "Lulus" : "Tidak Lulus";
console.log("Status: " + status);

document.getElementById("result").innerHTML += `
  <p>Status: <strong>${status}</strong></p>
`;

// Switch case
let hari = new Date().getDay();
let namaHari = "";

switch (hari) {
  case 0:
    namaHari = "Minggu";
    break;
  case 1:
    namaHari = "Senin";
    break;
  case 2:
    namaHari = "Selasa";
    break;
  case 3:
    namaHari = "Rabu";
    break;
  case 4:
    namaHari = "Kamis";
    break;
  case 5:
    namaHari = "Jumat";
    break;
  case 6:
    namaHari = "Sabtu";
    break;
  default:
    namaHari = "Hari tidak valid";
}

console.log("Hari ini adalah: " + namaHari);

document.getElementById("result").innerHTML += `
  <p>Hari ini adalah: <strong>${namaHari}</strong></p>
`;

// For loop
let nilaiSiswa = [70, 98, 88, 100, 98];
let total = 0;

document.getElementById("result").innerHTML += `
  <hr>
  <b><h3>Daftar Nilai Siswa:</h3></b>
  <ul id="daftar-nilai"></ul>
  <p id="rata-rata"></p>
`;

for (let i = 0; i < nilaiSiswa.length; i++) {
  total += nilaiSiswa[i];
  document.getElementById("daftar-nilai").innerHTML += `
      <li>Siswa ${i + 1}: ${nilaiSiswa[i]}</li>
    `;
}

let rataRata = total / nilaiSiswa.length;
document.getElementById("rata-rata").innerHTML = `
  Rata-rata nilai: <strong>${rataRata.toFixed(2)}</strong>
`;

// While loop
document.getElementById("result").innerHTML += `
  <h3>Countdown:</h3>
  <div id="countdown"></div>
`;

let hitungMundur = 5;
while (hitungMundur > 0) {
  document.getElementById("countdown").innerHTML += `
      <span class="inline-block bg-blue-100 px-2 py-1 m-1 rounded">${hitungMundur}</span>
    `;
  hitungMundur--;
}

// For...of loop (ES6)
document.getElementById("result").innerHTML += `
  <h3>Nilai dengan for...of:</h3>
  <div id="nilai-of" class="flex flex-wrap gap-2"></div>
`;

for (let nilai of nilaiSiswa) {
  let statusNilai = nilai >= 80 ? "text-green-600" : "text-red-600";
  document.getElementById("nilai-of").innerHTML += `
      <span class="inline-block bg-gray-100 px-3 py-1 rounded ${statusNilai}">${nilai}</span>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
  // Event handler untuk tombol sapa
  document.getElementById("sapa-button").addEventListener("click", function () {
    const nama = document.getElementById("nama-input").value;
    if (nama.trim() === "") {
      document.getElementById(
        "sapa-output"
      ).innerHTML = `<p class="text-red-500">Silakan masukkan nama Anda terlebih dahulu!</p>`;
    } else {
      document.getElementById(
        "sapa-output"
      ).innerHTML = `<p class="text-green-500">Halo, ${nama}! Selamat belajar JavaScript!</p>`;
    }
  });

  // Event handler untuk tombol operasi matematika
  function hitungKalkulator(angka1, angka2, operasi) {
    let hasil = 0;
    switch (operasi) {
      case "tambah":
        hasil = angka1 + angka2;
        break;
      case "kurang":
        hasil = angka1 - angka2;
        break;
      case "kali":
        hasil = angka1 * angka2;
        break;
      case "bagi":
        if (angka2 === 0) {
          return "Error: Pembagian dengan nol tidak diperbolehkan";
        }
        hasil = angka1 / angka2;
        break;
      case "pangkat":
        hasil = Math.pow(angka1, angka2);
        break;
      case "akar":
        if (angka1 < 0) {
          return "Error: Tidak bisa menghitung akar dari angka negatif";
        }
        hasil = Math.sqrt(angka1);
        break;
      case "modulus":
        hasil = angka1 % angka2;
        break;
      default:
        return "Operasi tidak valid";
    }
    return hasil;
  }

  const operasi = [
    "tambah",
    "kurang",
    "kali",
    "bagi",
    "pangkat",
    "akar",
    "modulus",
  ];
  operasi.forEach((op) => {
    document.getElementById(`btn-${op}`).addEventListener("click", function () {
      const angka1 = parseFloat(document.getElementById("angka1").value);
      const angka2 = parseFloat(document.getElementById("angka2").value);

      if (isNaN(angka1) || (op !== "akar" && isNaN(angka2))) {
        document.getElementById(
          "hasil-kalkulator"
        ).innerHTML = `<p class="text-red-500">Masukkan angka yang valid!</p>`;
      } else {
        const hasil = hitungKalkulator(angka1, angka2, op);
        let simbol =
          op === "tambah"
            ? "+"
            : op === "kurang"
            ? "-"
            : op === "kali"
            ? "×"
            : op === "bagi"
            ? "÷"
            : op === "pangkat"
            ? "^"
            : op === "akar"
            ? "√"
            : "%";

        document.getElementById("hasil-kalkulator").innerHTML = `<p>Hasil: ${
          op === "akar"
            ? `√${angka1} = ${hasil}`
            : `${angka1} ${simbol} ${angka2} = ${hasil}`
        }</p>`;
      }
    });
  });
});
