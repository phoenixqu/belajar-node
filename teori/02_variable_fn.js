const x = "hello" // type: String
// const x = 123 // Number
// fungsi bawaan tergantung dari tipe data tersebut
console.log(x.length) // mencari panjang karakter dari variable

const s = "Please locate where 'locate' occurs!"
console.log(s.search('locate')) // indexof menghitung posisi dari string mulai dari urutan 0 bukan 1

/* 
 - variable(String) : "saya adalah seorang programer handal"
 ? : temukan lokasi kata "seorang" dari variable tsb : (qlue: indexOf)
 ? : temukan panjang karakter dari variable tsb. (qlue: length)
 ? : potong isi dari variable tsb  menjadi "programer" (clue: slice)
*/
const h = "saya adalah seorang programer handal"
console.log(h.indexOf("seorang"))

console.log(h.length)

console.log(h.slice(20, 29))