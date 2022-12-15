
let inputNota1 = prompt('Digite a 1ª nota')
let inputNota2 = prompt('Digite a 2ª nota')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let mediaMinima = 7

let media = (nota1 + nota2) / 2



if (media >= mediaMinima) {
    document.write ('Ok, passou de ano')
} else if (media < mediaMinima){
    document.write ('Ops, não passou de ano')
}

document.write('<br>')

if (media >= mediaMinima && media === 10){
    document.write('NOSSA! Você foi excelente, continue assim')
} else if (media >= mediaMinima && media === 8){
    document.write('Você foi bem!Vamos tentar chegar ao 10?')
}
else if (media <= mediaMinima && media === 6){
    document.write('Não se saiu muito bem! Tente mais um pouco.')
}else if (media <= mediaMinima && media === 7){
    document.write('Não foi tão ruim, mas foi por pouco.')
}
