const input = require("../input");

//atividade bancaria

(async () => {

    let saldo = 300

    console.log("Bem vindo ao conradito's bank");
    console.log("Digite 1 para depositar ou 2 para sacar");
    let resposta = await input();

    console.log("Digite o valor: ")
    let valor = Number (await input())

    if(resposta == "1" ){
        saldo += valor
    }else if(resposta == "2"){
        saldo -= valor
    }

    console.log("Operação realizada com sucesso!")
    console.log(`Valor atual na conta: R$ ${saldo}`);
})();