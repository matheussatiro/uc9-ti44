const input = require("../input");

(async () => {
    console.log("Bem vindo, escolha o tamanho do seu lanche \n P 15,00$ \n M 20,00$ \n G 25,00$");
    var tamanho = (await input());
    let tamanho1 = tamanho.toUpperCase();

    switch (true){

        case tamanho1 == "P":
console.log("Combo Pequeno escolhido (R$ 15,00)");
break
        case tamanho1 == "M":
console.log("Combo Médio escolhido (R$ 20,00)");
break
        case tamanho1 == "G":
console.log("Combo Grande escolhido (R$ 25,00)");
break
    }
})();