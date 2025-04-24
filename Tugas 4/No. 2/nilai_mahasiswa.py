# Data mahasiswa
mahasiswa = [
    {"nama": "Yohanna", "nim": "122140010", "nilai_uts": 95, "nilai_uas": 90, "nilai_tugas": 98},
    {"nama": "Nadya", "nim": "122140022", "nilai_uts": 80, "nilai_uas": 78, "nilai_tugas": 57},
    {"nama": "Wina", "nim": "122140121", "nilai_uts": 85, "nilai_uas": 90, "nilai_tugas": 88},
    {"nama": "Tinu", "nim": "122140212", "nilai_uts": 50, "nilai_uas": 55, "nilai_tugas": 58},
    {"nama": "Slayur",  "nim": "122140213", "nilai_uts": 40, "nilai_uas": 45, "nilai_tugas": 50}
]

# Hitung nilai akhir dan tentukan grade
for m in mahasiswa:
    nilai_akhir = (0.3 * m["nilai_uts"]) + (0.4 * m["nilai_uas"]) + (0.3 * m["nilai_tugas"])
    m["nilai_akhir"] = round(nilai_akhir, 2)
    
    if nilai_akhir >= 80:
        m["grade"] = "A"
    elif nilai_akhir >= 70:
        m["grade"] = "B"
    elif nilai_akhir >= 60:
        m["grade"] = "C"
    elif nilai_akhir >= 50:
        m["grade"] = "D"
    else:
        m["grade"] = "E"

# Tampilkan dalam format tabel
print(f"{'Nama':<10} {'NIM':<10} {'UTS':<5} {'UAS':<5} {'Tugas':<6} {'Akhir':<7} {'Grade':<5}")
print("-" * 55)
for m in mahasiswa:
    print(f"{m['nama']:<10} {m['nim']:<10} {m['nilai_uts']:<5} {m['nilai_uas']:<5} {m['nilai_tugas']:<6} {m['nilai_akhir']:<7} {m['grade']:<5}")

# Cari nilai tertinggi dan terendah
nilai_tertinggi = max(mahasiswa, key=lambda m: m["nilai_akhir"])
nilai_terendah = min(mahasiswa, key=lambda m: m["nilai_akhir"])

print("\nMahasiswa dengan nilai tertinggi:")
print(f"{nilai_tertinggi['nama']} ({nilai_tertinggi['nim']}) - Nilai Akhir: {nilai_tertinggi['nilai_akhir']} - Grade: {nilai_tertinggi['grade']}")

print("\nMahasiswa dengan nilai terendah:")
print(f"{nilai_terendah['nama']} ({nilai_terendah['nim']}) - Nilai Akhir: {nilai_terendah['nilai_akhir']} - Grade: {nilai_terendah['grade']}")
