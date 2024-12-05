// script.js

// Mendapatkan elemen tombol dan paragraf
const button = document.getElementById("changeColorButton");
const paragraph = document.getElementById("myParagraph");

// Menambahkan event listener untuk klik pada tombol
button.addEventListener("click", function() {
    // Mengubah warna teks paragraf menjadi biru
    paragraph.style.color = "blue";
});