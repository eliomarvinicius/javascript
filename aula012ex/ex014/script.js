function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    hora = data.getHours()

    var hora = 3
    
    if(hora >= 0 && hora < 12) {
        //Bom dia
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
        img.src = 'manha.png'
        document.body.style.backgroundColor = '#B78E61'
    } else if (hora >=12 && hora <=18) {
        //Boa tarde
        msg.innerHTML = `Agora são ${hora} horas. Boa tarde!`
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#BB7969'
    } else {
        //Boa noite
        msg.innerHTML = `Agora são ${hora} horas. Boa noite!`
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#043465'
    }
}
//tarde #BB7969
//manha #F0D6BD
//noite #043465



