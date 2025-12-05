const input = require("../input");

//atividade bancaria

(async () => {

    let saldo = 300

    console.log("Bem vindo ao conradito's bank");
    console.log("Digite 1 para depositar ou 2 para sacar");
    let resposta = await input();

    console.log("Digite o valor: ")
    let valor = Number(await input())

    if (resposta == "1"){
        if(valor <= 1)
            console.log("O valor minimo deve ser 1 real")
         else 
            saldo += valor

    } else if (resposta == "2") {
        if (`valor > ${saldo}`)
            console.log("Impossivel sacar mais do que há em sua conta")
        else
        saldo -= valor
    }


    console.log(`Valor atual na conta: R$ ${saldo}`);
})();