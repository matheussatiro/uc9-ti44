const input = require("../input");

(async () => {
    console.log(` 1 X-Salada \n 2 X-Burguer \n 3 Misto Quente \n 4 Suco Natural \n 5 Refrigerante" \n Digite um numéro para escolher o lanche:`);

    let numero = Number(await input());

    if(numero == 1){
        console.log("Você escolher o X-Salada");
    }else if(numero == 2){
        console.log("Você escolheu X-Burguer");
    }else if(numero == 3){
        console.log("Você escolheu Misto Quente");
    }else if(numero == 4){
        console.log("Voce escolheu Suco Natural");
    }else if(numero == 5){
        console.log("Você escolheu o refrigerante");
    }else if (numero >=6 ){
        console.log("Você não escolheu nenhuma das opções")
    }
})();