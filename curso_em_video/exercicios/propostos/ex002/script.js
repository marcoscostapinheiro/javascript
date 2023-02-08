function ident(){
    document.getElementById('conteudo').style.height = '350px'
    document.getElementById('res').style.position = 'absolute'
    document.getElementById('res').style.top = '70%'
    document.getElementById('res').style.left = '50%'
    document.getElementById('res').style.transform = 'translate(-50%, -50%)'
    document.getElementById('res').style.height = '230px'
    document.getElementById('res').style.width = '400px'
    document.getElementById('imagem').style.width = '180px'
    document.getElementById('imagem').style.height = '180px'
    document.getElementById('imagem').style.margin = 'auto'
    document.getElementById('imagem').style.borderRadius = '100%'
    var agora = new Date()
    var anoatual = agora.getFullYear()
    var txtano = document.getElementById('iano')
    var anonasc = Number(txtano.value)
    var idade = anoatual - anonasc
    var txtsex = document.getElementsByName('sex')
    var sex = ''
    if (txtsex[0].checked){
        sex = 'M'
    }
    else{
        sex = 'F'
    }
    
    if (sex == 'M' && idade <= 12){
        document.querySelector('p#idade').innerHTML = `Detectamos uma criança masculina de ${idade} anos`
        document.getElementById('imagem').style.background = 'black url(imagens/criançamasc.jpg) center center no-repeat fixed'
        document.getElementById('imagem').style.backgroundSize = 'cover'
    }
    else if (sex == 'M' && idade <= 17){
        document.querySelector('p#idade').innerHTML = `Detectamos um adolescente masculino de ${idade} anos`
        document.getElementById('imagem').style.background = 'black url(imagens/adolescentemasc.jpg) center center no-repeat fixed'
        document.getElementById('imagem').style.backgroundSize = 'cover'
    }
    else if (sex == 'M' && idade <= 25){
        document.querySelector('p#idade').innerHTML = `Detectamos um jovem masculino de ${idade} anos`
        document.getElementById('imagem').style.background = 'black url(imagens/jovemmasc.jpg) center center no-repeat fixed'
        document.getElementById('imagem').style.backgroundSize = 'cover'
    }
    else if (sex == 'M' && idade < 60){
        document.querySelector('p#idade').innerHTML = `Detectamos um adulto masculino de ${idade} anos`
        document.getElementById('imagem').style.background = 'black url(imagens/adultomasc.jpg) center center no-repeat fixed'
        document.getElementById('imagem').style.backgroundSize = 'cover'
    }
    else if (sex == 'M' && idade > 60){
        document.querySelector('p#idade').innerHTML = `Detectamos um idoso masculino de ${idade} anos`
        document.getElementById('imagem').style.background = 'black url(imagens/idosomasc.jpg) center center no-repeat fixed'
        document.getElementById('imagem').style.backgroundSize = 'cover'
    }

    if (sex == 'F' && idade <= 12){
        document.querySelector('p#idade').innerHTML = `Detectamos uma criança feminina de ${idade} anos`
        document.getElementById('imagem').style.background = ('black url(imagens/criançafem.jpg) center center no-repeat fixed')
        document.getElementById('imagem').style.backgroundSize = 'cover'
    }
    else if (sex == 'F' && idade <= 17){
        document.querySelector('p#idade').innerHTML = `Detectamos um adolescente feminino de ${idade} anos`
        document.getElementById('imagem').style.background = 'black url(imagens/adolescentefem.jpg) center center no-repeat fixed'
        document.getElementById('imagem').style.backgroundSize = 'cover'
    }
    else if (sex == 'F' && idade <= 25){
        document.querySelector('p#idade').innerHTML = `Detectamos um jovem feminino de ${idade} anos`
        document.getElementById('imagem').style.background = 'black url(imagens/jovemfem.jpg) center top no-repeat fixed'
        document.getElementById('imagem').style.backgroundSize = 'cover'
    }
    else if (sex == 'F' && idade < 60){
        document.querySelector('p#idade').innerHTML = `Detectamos um adulto feminino de ${idade} anos`
        document.getElementById('imagem').style.background = 'black url(imagens/adultofem.jpg) center center no-repeat fixed'
        document.getElementById('imagem').style.backgroundSize = 'cover'
    }
    else if (sex == 'F' && idade > 60){
        document.querySelector('p#idade').innerHTML = `Detectamos um idoso feminino de ${idade} anos`
        document.getElementById('imagem').style.background = 'black url(imagens/idosofem.jpg) center center no-repeat fixed'
        document.getElementById('imagem').style.backgroundSize = 'cover'
    }
}