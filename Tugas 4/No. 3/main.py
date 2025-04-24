# main.py

# Mengimpor modul math_operations dengan dua cara
import math_operations as mo
from math_operations import celsius_ke_fahrenheit, celsius_ke_kelvin

# Menggunakan fungsi dari modul math_operations
print("Menghitung Luas dan Keliling Persegi:")
sisi = 5
print(f"Luas Persegi: {mo.luas_persegi(sisi)}")
print(f"Keliling Persegi: {mo.keliling_persegi(sisi)}")

print("\nMenghitung Luas dan Keliling Persegi Panjang:")
panjang, lebar = 6, 4
print(f"Luas Persegi Panjang: {mo.luas_persegi_panjang(panjang, lebar)}")
print(f"Keliling Persegi Panjang: {mo.keliling_persegi_panjang(panjang, lebar)}")

print("\nMenghitung Luas dan Keliling Lingkaran:")
radius = 7
print(f"Luas Lingkaran: {mo.luas_lingkaran(radius)}")
print(f"Keliling Lingkaran: {mo.keliling_lingkaran(radius)}")

print("\nKonversi Suhu:")
celsius = 25
print(f"{celsius}°C = {celsius_ke_fahrenheit(celsius)}°F")
print(f"{celsius}°C = {celsius_ke_kelvin(celsius)}K")
