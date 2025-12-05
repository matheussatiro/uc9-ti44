const input = require("../input");

(async () => {
    console.log(" 100 - X-Salada (R$ 12,00) \n 101 - X-Burguer (R$ 10,00) \n 102 - Cachorro-Quente (R$ 8,50) \n 103 - Suco (R$ 6,00) \n 104 - Refrigerante (R$ 5,00)")

    console.log("Escolha o código desejado: ")
    var lanche = Number(await input());

   
    console.log("Escolha a quantidade desejada: ")
    var quantidade = Number(await input());

    switch(true){
    case lanche == 100:
        let valor = 12
        console.log(`Você escolheu ${quantidade} unidades do X-Salada, valor total ${valor*quantidade}$`);
        break
    case lanche == 101:
        let valor1 = 10
        console.log(`Voce escolheu ${quantidade} unidades do X-Burguer, valor total ${valor1*quantidade}$`);
        break
    case lanche == 102:
        let valor2 = 8.50
        console.log(`Voce escolheu ${quantidade} unidades de Cachorro-Quente, valor total ${valor2*quantidade}$`);
        break
    case lanche == 103:
        let valor3 = 6
        console.log(`Voce escolheu ${quantidade} unidades de suco, valor total ${valor3*quantidade}$`);
        break
    case lanche == 104:
        let valor4 = 5
        console.log(`Voce Escolheu ${quantidade} unidades de suco, valor total ${valor4*quantidade}$ `)   
        break
    default:
    console.log("Código invalido")
    break
    }

  
})();