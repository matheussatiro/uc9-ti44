const input = require("../input");

(async () => {
    let agenda = [];
    let continuar
    do{
            console.log("Digite um nome: ")
            let nomeE = await input();

            console.log("Digite um telefone: ")
            let telE = await input();

            agenda.push({
                nome: nomeE,
                telefone: telE
            })

            console.log("Deseja continuar? (sim)")
            continuar = (await input()).toLowerCase()

    }while(continuar.length <=5 && continuar == "sim")
        console.log(agenda)
})()