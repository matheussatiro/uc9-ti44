const input = require("../input");

(async () => {
let sorteio
let valor
let i=0
        do{
            sorteio = Math.floor(Math.random()*11);
            console.log("escolha um numero de 0 a 10 ")
            valor = Number(await input());
            i++
        }while(sorteio != valor && i < 10)
            if(sorteio == valor) console.log("Parabéns viu seu 💩💩")
            
})()

