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