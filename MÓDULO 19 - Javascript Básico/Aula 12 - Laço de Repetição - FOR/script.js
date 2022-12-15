
/*
for (let contador = 0; contador <= 10; contador++) {
    document.write(`Hello World ${contador}`)
    document.write('<br>') // fazer ficam embaixo um do outro
}
*/

let opcoes

for (let contador = 2022; contador >= 1900; contador--) {
    opcoes = opcoes + `<option>${contador}</option>`
}
document.querySelector('#ano').innerHTML = opcoes


let lista = ''

let clientes = ['Emerson', 'Oliveira', 'Silva', 'Junior', 'Anderson']


for (let contador = 0; contador <= clientes.length - 1; contador++){
    lista += `<li>${clientes[contador]} - ${contador}</li>`
}

document.querySelector('#listaClientes').innerHTML = lista
