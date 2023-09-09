var nilaiAcak = [];

// Mengisi array dengan 100 nilai acak antara 1 hingga 50
for (var i = 0; i < 100; i++) {
    nilaiAcak.push(Math.floor(Math.random() * 50) + 1);
}

// variabel nilai ganjil dan genap
var nilaiGenap = [];
var nilaiGanjil = [];

// Memisahkan nilai genap dan ganjil ke dalam dua array berbeda
for (var i = 0; i < nilaiAcak.length; i++) {
    if (i % 2 === 0) {
        nilaiGenap.push(nilaiAcak[i]);
    } else {
        nilaiGanjil.push(nilaiAcak[i]);
    }
}

// Menampilkan dua array hasil
console.log("Array Genap : " + nilaiGenap);
console.log("Array Ganjil : " + nilaiGanjil);

// Fungsi untuk menghitung nilai minimum (min)
function hitungMin(array) {
    return Math.min.apply(null, array);
}

// Fungsi untuk menghitung nilai maksimum (max)
function hitungMax(array) {
    return Math.max.apply(null, array);
}

// Fungsi untuk menghitung total (sum)
function hitungTotal(array) {
    return array.reduce(function(a, b) {
        return a + b;
    }, 0);
}

// Fungsi untuk menghitung rata-rata (average)
function hitungRataRata(array) {
    if (array.length === 0) {
        return 0;
    }
    return hitungTotal(array) / array.length;
}

// Menghitung statistik untuk array nilaiGenap
var minGenap = hitungMin(nilaiGenap);
var maxGenap = hitungMax(nilaiGenap);
var totalGenap = hitungTotal(nilaiGenap);
var rataRataGenap = hitungRataRata(nilaiGenap);

// Menghitung statistik untuk array nilaiGanjil
var minGanjil = hitungMin(nilaiGanjil);
var maxGanjil = hitungMax(nilaiGanjil);
var totalGanjil = hitungTotal(nilaiGanjil);
var rataRataGanjil = hitungRataRata(nilaiGanjil);

// Menampilkan hasil statistik
console.log("Statistik Nilai Genap:");
console.log("Min: " + minGenap);
console.log("Max: " + maxGenap);
console.log("Total: " + totalGenap);
console.log("Rata-rata: " + rataRataGenap);

console.log("Statistik Nilai Ganjil:");
console.log("Min: " + minGanjil);
console.log("Max: " + maxGanjil);
console.log("Total: " + totalGanjil);
console.log("Rata-rata: " + rataRataGanjil);
