// console.log('pesan')
/* 
    Variable Dalam Javascript
    - String
    - Number
    - Boolean
    - Array     |sama aja
    - Object    |sama aja cuman ada perbedaan
    - null
*/

/* 
    => Tipe Data String 
        adalah tipedata berupa karakter / kalimat. ciri2 variable bertipe String yaitu terdapat tanda petik 1('') / 2("") / (``)
    => Tipe Data Number
        adalah tipedata berupa angka "yg dapat dilakukan perhitungan matematika", bisa berupa bilangan asli maupun desimal
    => Tipe data Boolean
        adalah tipedata yg hanya berisi nilai true / false
    => Tipe Data Array
        adalah tipe data yg menghimpun beberapa tipedata lain bahkan tipe data array yg lain
*/

// penyimpanan variabel / inisiasi variable
/* 
    menggunakan keyword
    - "const" => [konstanta] digunakan untuk tipedata yg tidak akan pernah di manipulasi
    - "let/var" => diguankan untuk tipedata yg akan di manipulasi
*/

// contoh: variable String
console.log('Halo') // kata Halo diapit tanda petik 1, mengindikasikan bahwa kata halo bertipe data string.
console.log(typeof 'Halo') // typeof digunakan untuk mengecek "tipe data" dari sebuah variable

// contoh: variable Number
console.log(100) // 100 merupakan tipedata Number krn tidak ada tanda petik yg mengapit diantara.
console.log(typeof 100) // >> Number

// contoh: variable Boolean
console.log(true) // true merupakan tipedata boolean
console.log(1 + 2 === 2) // false
console.log(typeof true)
console.log(typeof (1+1 === 2))

// Contoh: variable array
const arr = [1, 1, "saya", true]
console.log(arr) // array mempunyai index / urutan dimulai dari 0
console.log(typeof arr)
console.log(arr[0]) // akan menghasilkan nilai 1
console.log(arr[2]) // akan menghasilkan nilai "saya"

// contoh: variable object
const obj = {'key10': 1, 'key11': "saya", 'key21': true}
console.log(obj)
console.log(typeof obj)
console.log(obj['key11']) // akan menghasilkan "saya"