const input = require("../input");

(async () => {
    console.log("Digite o valor da compra, para ser aplicado o desconto");
    var valor = Number(await input());

    switch(true){
case valor >= 100:
    console.log(`Sua compra lhe dá direito a um desconto de 20%, valor do desconto será de ${(valor*0.2).toFixed(2)}$, valor final é ${(valor*0.8).toFixed(2)}$` );
    break

case valor >= 50:
    console.log(`Sua compra lhe dá direito a um desconto de 10%, Valor do desconto será de ${(valor*0.2).toFixed(2)}$, valor final é ${(valor*0.9).toFixed(2)}$`);
    break

case valor >= 20:
    console.log(`Sua compra lhe dá direito a um desconto de 5%, Valor do desconto será de ${(valor/100*5).toFixed(2)}$, valor final é ${(valor*0.5).toFixed(2)}$`);
    break

default:
    console.log("Valor muito baixo, compre mais itens para lhe oferecermos mais descontos :)")    
    }
})();