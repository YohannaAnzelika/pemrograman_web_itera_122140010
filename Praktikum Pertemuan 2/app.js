// Menampilkan jam real-time
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("clock").textContent = `${h}.${m}.${s}`;
}
setInterval(updateClock, 1000);
updateClock();

// Notifikasi
function showNotification(message, type = "success") {
  const notif = document.getElementById("notification");
  notif.textContent = message;
  notif.className = `notification ${type} show`;

  notif.style.top = "20px";
  notif.style.opacity = "1";

  setTimeout(() => {
    notif.style.opacity = "0";
    notif.style.top = "0px";
    notif.classList.remove("show");
  }, 3000);
}

// Simpan rencana harian ke localStorage
function savePlan() {
  const date = document.getElementById("scheduleDate").value;
  const time = document.getElementById("scheduleTime").value;
  const todo = document.getElementById("todoInput").value;
  const note = document.getElementById("noteInput").value;

  if (!date || !time || !todo || !note) {
    showNotification("Mohon lengkapi semua kolom sebelum menyimpan!", "error");
    return;
  }

  const timestamp = new Date().toISOString();
  const fullSchedule = `${date} - ${time}`;

  const newPlan = {
    schedule: fullSchedule,
    todo,
    note,
    timestamp,
    done: false,
  };

  const existing = JSON.parse(localStorage.getItem("studentPlans")) || [];
  existing.push(newPlan);
  localStorage.setItem("studentPlans", JSON.stringify(existing));

  renderPlans();

  // Reset input
  document.getElementById("scheduleDate").value = "";
  document.getElementById("scheduleTime").value = "";
  document.getElementById("todoInput").value = "";
  document.getElementById("noteInput").value = "";

  showNotification("Rencana harian berhasil disimpan! 🎉", "success");
}

// Tampilkan semua rencana
function renderPlans() {
  const plans = JSON.parse(localStorage.getItem("studentPlans")) || [];
  const container = document.getElementById("lastDataDisplay");
  container.innerHTML = "";

  plans.forEach((plan, index) => {
    const div = document.createElement("div");
    div.className = "plan" + (plan.done ? " done" : "");
    div.innerHTML = `
      <p><strong>Jadwal:</strong> ${plan.schedule || "-"}</p>
      <p><strong>Tugas:</strong> ${plan.todo || "-"}</p>
      <p><strong>Catatan:</strong> ${plan.note || "-"}</p>
      <p><em>${new Date(plan.timestamp).toLocaleString()}</em></p>
      <div class="actions">
        <button onclick="toggleDone(${index})">${
      plan.done ? "↩️ Batal" : "✅ Selesai"
    }</button>
        <button onclick="deletePlan(${index})">🗑️ Hapus</button>
      </div>
    `;
    container.appendChild(div);
  });
}

// Tandai selesai atau belum
function toggleDone(index) {
  const plans = JSON.parse(localStorage.getItem("studentPlans")) || [];
  plans[index].done = !plans[index].done;
  localStorage.setItem("studentPlans", JSON.stringify(plans));
  renderPlans();
}

// Hapus rencana
function deletePlan(index) {
  const plans = JSON.parse(localStorage.getItem("studentPlans")) || [];
  plans.splice(index, 1);
  localStorage.setItem("studentPlans", JSON.stringify(plans));
  renderPlans();
}

// Mode gelap
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Export PDF
function exportToPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const plans = JSON.parse(localStorage.getItem("studentPlans")) || [];

  doc.setFontSize(16);
  doc.text("Student Dashboard - Rencana Harian", 10, 10);

  let y = 20;
  plans.forEach((plan, i) => {
    doc.setFontSize(12);
    doc.text(`• Jadwal: ${plan.schedule || "-"}`, 10, y);
    doc.text(`  Tugas: ${plan.todo || "-"}`, 10, y + 6);
    doc.text(`  Catatan: ${plan.note || "-"}`, 10, y + 12);
    y += 22;
    if (y > 280) {
      doc.addPage();
      y = 20;
    }
  });

  doc.save("student-plans.pdf");
}

// Quote harian
function showDailyQuote() {
  const quotes = [
    "Tetap semangat, kamu pasti bisa! 💪",
    "Setiap hari adalah kesempatan baru untuk belajar 📚",
    "Jangan menyerah, hasil tak akan mengkhianati usaha ✨",
    "Percayalah pada dirimu sendiri 🙌",
    "Langkah kecil hari ini akan jadi kemajuan besar besok 🚀",
    "Kamu hebat dan berharga. Jangan lupa itu 💖",
    "Puji Tuhan untuk hari baru ini 🙏",
  ];
  const today = new Date().getDate();
  const quote = quotes[today % quotes.length];
  document.getElementById("dailyQuote").textContent = quote;
}

// Tampilkan/sembunyikan daftar tugas
function toggleTaskList() {
  const container = document.getElementById("lastDataDisplay");
  const toggleBtn = document.getElementById("toggleTaskBtn");

  if (container.style.display === "none" || container.style.display === "") {
    container.style.display = "block";
    toggleBtn.textContent = "📋 Sembunyikan Tugas";
  } else {
    container.style.display = "none";
    toggleBtn.textContent = "📋 Tampilkan Semua Tugas";
  }
}

// Saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  renderPlans();
  showDailyQuote();
  document.getElementById("lastDataDisplay").style.display = "none";
  document
    .getElementById("toggleTaskBtn")
    .addEventListener("click", toggleTaskList);
});
