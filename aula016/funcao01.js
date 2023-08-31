

function parimpar(n) {
    if (n%2 == 0) {
        return 'Par' 
    } else {
        return 'Impár'
    }
}

let res = parimpar(11)

console.log(`O número é ${res}`)