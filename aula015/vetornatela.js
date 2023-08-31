let valores = [ 8, 1, 6, 3, 4, 9, 2]
console.log(valores)
/*
for (let pos = 0; pos < valores.length; pos ++) {
    
    console.log(`A posiçãp ${pos} tem o valor ${valores[pos]}`)
}
*/

//console.log(valores)

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

