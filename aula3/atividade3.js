const input = require("../input");

(async () => {
    console.log("digite um número")
    let numero = Number(await input());

    if(isNaN(numero)){
        console.log("Digite apenas números")
    }else if(numero == 0){
        console.log("0 é neutro");
    }else if(numero %2 == 0 ){
        console.log("esse número é par");
    }else{
        console.log("esse número é impar");    
    }

})();