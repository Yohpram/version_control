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

// Fungsi untuk menghitung statistik
function hitungStatistik(array) {
    var min = Math.min.apply(null, array);
    var max = Math.max.apply(null, array);
    var total = array.reduce(function(a, b) {
        return a + b;
    }, 0);
    var rataRata = array.length === 0 ? 0 : total / array.length;

    return {
        min: min,
        max: max,
        total: total,
        rataRata: rataRata
    };
}

// Menghitung statistik untuk kedua array
var statistikGenap = hitungStatistik(nilaiGenap);
var statistikGanjil = hitungStatistik(nilaiGanjil);

// Membandingkan statistik
if (statistikGenap.min > statistikGanjil.min) {
    console.log("Min lebih besar pada array Genap");
} else if (statistikGenap.min < statistikGanjil.min) {
    console.log("Min lebih besar pada array Ganjil");
} else {
    console.log("Min memiliki nilai yang sama pada kedua array");
}

if (statistikGenap.max > statistikGanjil.max) {
    console.log("Max lebih besar pada array Genap");
} else if (statistikGenap.max < statistikGanjil.max) {
    console.log("Max lebih besar pada array Ganjil");
} else {
    console.log("Max memiliki nilai yang sama pada kedua array");
}

if (statistikGenap.total === statistikGanjil.total) {
    console.log("Total memiliki nilai yang sama pada kedua array");
} else {
    console.log("Total berbeda pada kedua array");
}

if (statistikGenap.rataRata > statistikGanjil.rataRata) {
    console.log("Rata-rata lebih besar pada array Genap");
} else if (statistikGenap.rataRata < statistikGanjil.rataRata) {
    console.log("Rata-rata lebih besar pada array Ganjil");
} else {
    console.log("Rata-rata memiliki nilai yang sama pada kedua array");
}