var agorah = new Date()
        var agoram = new Date()
        var hora = agorah.getHours()
        var min = agoram.getMinutes()
        document.getElementById('hora').innerText = `Agora são ${hora}:${min} horas`
        if (hora < 12 && hora >= 5){
            document.body.style.backgroundColor = '#CFBE8F'
            document.getElementById('imagem').style.background = 'black url(imagens/dia.jpg) center center no-repeat fixed'
            document.getElementById('imagem').style.backgroundSize = 'cover'
        }
        else if (hora >= 12 && hora < 18){
            document.body.style.backgroundColor = '#A57662'
            document.getElementById('imagem').style.background = 'black url(imagens/tarde.jpg) center center no-repeat fixed'
            document.getElementById('imagem').style.backgroundSize = 'cover'
        }
        else{
            document.body.style.backgroundColor = '#4A4C4C'
            document.getElementById('imagem').style.background = 'black url(imagens/noite.jpg) center center no-repeat fixed'
            document.getElementById('imagem').style.backgroundSize = 'cover'
        }