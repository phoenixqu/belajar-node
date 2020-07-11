console.log('halo')    //variabel string 
console.log(typeof 'halo')   //untuk mengecek variabel string yg ditandai tanda petik satu atau dua

console.log(100)    //variabel number 
console.log(typeof 100)    //untuk mengecek variabel number

console.log(true)
console.log(1 + 1 ===2 )    //variabel boolean
console.log(typeof true)
console.log(typeof (1 + 1 ===2))    //untuk mengecek variabel boolean,apakah 1 + 1 = dua

const arr = [1, 1, "saya", true]
console.log(arr)    //variabel array adalah typedata yg bisa menampung typedata lain /mempunyai index yg dimulai dari angka 0
console.log(typeof arr)
console.log(arr[0])    //akan menghasilkan nilai 1
console.log(arr[2])    //akan menghasilkan nilai saya

const obj = {'key10': 1, 'key11': "saya", 'key21':true}
console.log(obj)
console.log(typeof obj)
console.log(obj['key11']) //akan menghasilkan "saya"