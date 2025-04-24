berat = float(input("Masukkan berat badan (kg): "))
tinggi_cm = float(input("Masukkan tinggi badan (cm): "))
tinggi = tinggi_cm / 100  # konversi cm ke meter

bmi = berat / (tinggi ** 2)
print(f"\nBMI Anda adalah: {bmi:.2f}")

if bmi < 18.5:
    print("Kategori: Berat badan kurang")
elif bmi < 25:
    print("Kategori: Berat badan normal")
elif bmi < 30:
    print("Kategori: Berat badan berlebih")
else:
    print("Kategori: Obesitas")
