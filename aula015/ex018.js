var num = [7, 8, 3, 4, 2]
num.push(1)
num.sort()
console.log(num[pos])
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
var pos = 0
for (var pos = 0; pos < num.length; pos++ ) {
    console.log(`O vetor num é ${num[pos]}`)
}

let dex = num.indexOf(8)
if (dex == -1) {
    console.log(`o valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${dex}`)
}


