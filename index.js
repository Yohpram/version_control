var nilaiAcak = [];

// Mengisi array dengan 100 nilai acak antara 1 hingga 50
for (var i = 0; i < 100; i++) {
    nilaiAcak.push(Math.floor(Math.random() * 50) + 1);
}

console.log(nilaiAcak);

