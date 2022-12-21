var valores = [7, 2, 9, 5, 3]

/* for padrão
for(pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

// for otimizado para arrays e objects

valores.sort()
console.log(valores)
for (var pos in valores){
    console.log(`Na posição ${pos} tem o valor ${valores[pos]}`)
}

pos = valores.indexOf(9)
if (pos == -1){
    console.log('Valor não encontrado!')
}
else{
    console.log(`Valor na posição ${pos}`)
}

