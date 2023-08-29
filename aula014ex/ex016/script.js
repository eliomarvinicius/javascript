function contar(){
    var txtini = window.document.getElementById('txtini')
    var txtfim = window.document.getElementById('txtfim')
    var txtpas = window.document.getElementById('txtpas')
    var res = window.document.querySelector('div#res')

    if (txtini.value.length == 0 || txtfim.value.length == 0 || txtpas.value.length == 0) {
        res.innerHTML = `Impossível contar!`
        //window.alert('[ERRO]Valores Inválidos')
    } else {
        var ini = Number(txtini.value)
        var fim = Number(txtfim.value)
        var pas = Number(txtpas.value)
        if (pas <= 0) {
            window.alert `Passo inválido! Considerando PASSO 1`
            pas = 1
        }

        res.innerHTML = 'contando:'
        if (ini < fim) {
        for (var c = ini;c <= fim;c += pas ) {
             res.innerHTML += `${c} \u{1F449}`   
        }
    } else {
        for(let c = ini; c >= fim; c -= p) {
            res.innerHTML += `${c} \u{1F449}`

            } 
        }
        res.innerHTML += `\u{1F3C1}` 
    }
}