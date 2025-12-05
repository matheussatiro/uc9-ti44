const input = require("../input");

(async () => {

    console.log("digite o numero de pontos do clientes baseado na quantidade das compras dele");
    var pontos = (await input());

    switch (true){
        case pontos <= 99:
        console.log("Cliente iniciante, vamos melhorar isso.");
        break

        case pontos >= 100 && pontos <300:
        console.log("Cliente bronze, mas eu sei que você pode mais.");
        break
        
        case pontos >= 300 && pontos <700:
        console.log("Cliente Prata, Você ésta bem, falta pouco.");
        break

        case pontos >= 700:
        console.log("Parabens você é um cliente ouro, super pica das galaxias")
        break
        }
})();