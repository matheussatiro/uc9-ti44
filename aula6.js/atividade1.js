function dividir (n1, n2){
    return n1 / n2

}

function multiplicar (n1, n2){
    return n1 * n2

}


function somar (n1, n2){
    return n1 + n2

}


function subtrair (n1, n2){
    return n1 - n2

}

const input = require('../input');

(async () => {
    console.log("Qual conta voce deseja realizar: \n 1 - dividir \n 2 - multiplicar \n 3 - somar \n 4 - subtrair");
    let opcao = await input()

    let func

    switch(opcao){
        case '1': func = dividir; break 
        case '2': func = multiplicar; break
        case '3': func = somar; break
        case '4': func = subtrair; break
        default: console.log("Não desenvolvido");       
    
    } 
    
    if(Number(opcao) > 4 ) 
        return

    
console.log("escolha um numero")
let v1 = Number( await input())

console.log("escolha um numero")
let v2 = Number( await input())



console.log("a conta é "+ func(v1, v2))
    
})()