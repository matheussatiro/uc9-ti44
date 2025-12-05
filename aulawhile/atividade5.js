const input = require("../input");

(async () => {
           for(let sorteio=1, valor, i=0;sorteio != valor && i<10;i++){
                sorteio = Math.floor(Math.random()*10);

                console.log("escolha um numero de 0 a 10 ");
                
                valor = Number(await input());
            }
                
                
    })()